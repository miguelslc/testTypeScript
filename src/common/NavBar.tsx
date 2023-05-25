import React from "react";
import { AppBar, Toolbar, Grid, Button, Typography, IconButton, Badge } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from "react-router";
import { useAppSelector } from "../redux/hooks";
import { CartComponent } from './Cart'

export const  NavBar = () => {
    const navigate = useNavigate();
    const items = useAppSelector((state) => state.cartReducer);
    const [open, setOpen] = React.useState<boolean>(false);

    const handleStateViewDrawer = () => {
        setOpen((state) => !state);
    };
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="sticky">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                            <Grid item>
                                <Typography>Enanin</Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={2}>
                                    <IconButton
                                        color="primary"
                                        onClick={() => handleStateViewDrawer()}
                                    >
                                        <Badge color="error" badgeContent={items.length}>
                                            <ShoppingCartOutlinedIcon />
                                        </Badge>
                                    </IconButton>
                                    <Button variant="contained" onClick={()=> navigate("login")}>Login</Button>
                                    <Button variant="outlined" onClick={()=> navigate("register")}>Register</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
            <CartComponent
                open={open}
                handleStateViewDrawer={handleStateViewDrawer}
            />
        </Box>
    )
}