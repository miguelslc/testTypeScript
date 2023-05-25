import React, { useState } from 'react';
import {
    Button, 
    Card, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Divider, 
    Typography
} from '@mui/material'
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addToCart } from '../../redux/slices/cart.slice';
import { setItem } from '../../utils/localStorage';

type CardProps = {
    image: string,
    name: string,
    species: string,
    status: string,
    id: number,
}

export const CardComponent: React.FC<CardProps> = ({image, name, species, status, id}) => {
    const [disableButton, setDisableButton] = useState<boolean>(false);
    let  navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isExistItem = useAppSelector((state) => state.cartReducer);

    React.useEffect(()=> {         
        setDisableButton(isExistItem.some(item => item.id  === id));
        setItem('cart', isExistItem);
    },[isExistItem, id]);

    const handleAddToCart = () => {
        dispatch(addToCart({
            id,
            name,
            image,
            info: status
        }))
        console.log(dispatch(addToCart({
            id,
            name,
            image,
            info: status
        })));
    };

    return (
        <Card sx={{maxWidth: 380}}>
            <CardMedia 
                component="img"
                height="194"
                image= {image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="h4" sx={{mb:1.5}}>{name}</Typography>
                <Divider />
                <Typography sx={{mt:1.5}}>Especie: {species}</Typography>
                <Typography sx={{mt:1.5}}>Estado: {status}</Typography>
            </CardContent>
            <CardActions>
                <Button 
                    fullWidth
                    variant="contained" 
                    size="small"
                    onClick={()=> navigate(`/character/${id}`)}
                >View More</Button>
                <Button 
                    fullWidth
                    variant="outlined" 
                    size="small"
                    onClick={handleAddToCart}
                    disabled = {disableButton}
                >Add to Cart</Button>
            </CardActions>
        </Card>
    )
}