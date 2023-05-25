import React from "react";
import { Box, Button, CircularProgress, Container, Grid, Pagination } from "@mui/material";
import { HeaderComponent, CardComponent } from "../../components";
import { characters } from "../../api/rickAndMorty/characters";
import { TypeCharacter } from "../../interfaces/character";

export const HomePage: React.FC<{}> =() => {

    const [allCharacters, setAllCharacters] = React.useState<TypeCharacter[] | null >(null);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [page, setPage] = React.useState(1);
    const [count, setCount] = React.useState(1);

    React.useEffect(() => {
        setLoading(true);
        characters.getAll({page})
        .then((r)=> {
            setCount(r.data.info.pages);
            setAllCharacters(r.data.results);
            setTimeout(()=> setLoading(false), 1000)
        }).catch((error) => {
            console.log(error)
        });
    },[page])

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <Container  maxWidth="xl">
            <HeaderComponent 
                title="Hola" 
                description="Bienvenidos a la grieta del invocador"
                element={<Button fullWidth variant="contained">Ingresar</Button>}
            />
            {
                loading ? (
                    <Box sx={{display: "flex", justifyContent: "center", mt: 4}} >
                        <CircularProgress />
                    </Box>
                ) : (
                    <>
                    <div>
                    {  
                        allCharacters!.length !== 0 ? (
                            <Grid container spacing={2} direction="row" sx={{my: 2}}>
                                {allCharacters!.map((character)=> (
                                    <Grid  key={character.id} item xs={3}>
                                    <CardComponent 
                                        
                                        image={character.image} 
                                        name={character.name}
                                        status={character.status}
                                        species={character.species}
                                        id={character.id}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        ) : (
                            "No Data"
                        )}
                    </div>
                    <Box sx={{width: "100%", display: "flex", justifyContent: "center", mb: 4}}>
                        <Pagination 
                            count={count} 
                            variant="outlined"
                            color="primary" 
                            page={page} 
                            onChange={handleChange}
                            size="large"
                            defaultPage={1}
                        />
                    </Box>
                    </>
                )
            }
        </Container>
    )
}