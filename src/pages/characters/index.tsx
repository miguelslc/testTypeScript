import React from "react";
import { Box, CircularProgress, Container, Divider, Grid, Typography } from "@mui/material";
import { useParams } from "react-router"
import { characters } from "../../api/rickAndMorty/characters";
import { TypeCharacter } from "../../interfaces/character";

const CharacterPage: React.FC = () => {
    const {id} = useParams();

    const [loading, setLoading] = React.useState<boolean>(true);
    const [character, setCharacter] = React.useState<TypeCharacter | null>(null);
    React.useEffect(()=>{
        characters
        .getById({id})
        .then((r)=> {
            setCharacter(r.data);
            setTimeout(()=> setLoading(false), 500)
        })
        .catch((err)=> console.log(err))
    },[id])
    return (
        <Box sx={{width: "100%"}}>
            <Container maxWidth="xl">
                {loading ? (
                    <Box sx={{display: "flex", justifyContent: "center", mt: 4}} >
                        <CircularProgress />
                    </Box>
                ):(
                    <Grid sx={{mt:2}} container columnSpacing={2}>
                        <Grid item xs={6}> 
                            <Typography variant="h1">{character!.name}</Typography>
                            <Divider />
                            <Typography variant="h6">{character!.origin.name}</Typography>
                            <Typography variant="h6">{character!.gender}</Typography>
                            <Typography variant="h6">{character!.species}</Typography>
                            <Typography variant="h6">{character!.status}</Typography>
                            <Typography variant="h6">{character!.location.name}</Typography>
                            <Box sx={{mt:1}}></Box>
                        </Grid>
                        <Grid item xs={6}> 
                            <img 
                                src={character!.image} 
                                style={{width:"100%", borderRadius:"0.5em"}} 
                                alt="A Rick and Morti Character"/>
                        </Grid>
                    </Grid>
                )}
            </Container>
        </Box>
    )
}

export default CharacterPage;