import React from "react";
import { Container, Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useNotificationContext } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validateForms";
import { useFormik } from "formik";

type LoginType = {
    username: string;
    password: string;
}

const LoginPage: React.FC<{}> =() => {
    const { getSuccess } = useNotificationContext();
    const formik = useFormik<LoginType>({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: LoginValidate,
        onSubmit: (values) => {
            getSuccess(JSON.stringify(values));
        },
    });

    return (
        <Container maxWidth="xs">
            <Grid 
                container 
                direction="column" 
                alignItems="center" 
                justifyContent="center"
                sx={{minHeight: "100vh"}}
            >
                <Grid item>
                    <Paper 
                        sx={{padding: "1.2em", 
                        borderRadius: "0.5em"}}
                    >
                        <Typography variant="h4" sx={{mt:1, mb: 1}}>Iniciar Sesión</Typography>
                        <Box component="form" onSubmit={formik.handleSubmit}>
                            <TextField 
                                margin="normal"
                                fullWidth 
                                label="Email" 
                                type="text"
                                name="username"
                                sx={{mt:2, mb: 1.5}}  
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                error={formik.touched.username && Boolean(formik.errors.username)}
                                helperText={formik.touched.username && formik.errors.username}
                                />
                            <TextField 
                                margin="normal"
                                fullWidth 
                                label="Password" 
                                type="password"
                                name="password"
                                sx={{mt:1.5, mb: 1.5}} 
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                />
                            <Button 
                                fullWidth
                                variant="contained"
                                type="submit" 
                                sx={{mt:1.5, mb: 1.5}} 
                            >
                                Iniciar Sesion
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
};

export default LoginPage;