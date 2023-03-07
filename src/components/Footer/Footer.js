import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const footers = [
    {
        title: 'Compañía',
        description: ['Equipo', 'Historia', 'Contactanos']
    },
    {
        title: 'Sobre nosotros',
        description: ['Equipo', 'Nuestros desarrolladores', 'Otros']
    },
    {
        title: 'Recursos',
        description: ['Documentación', 'APIs', 'Plataformas']
    },
    {
        title: 'Legales',
        description: ['Políticas de privacidad', 'Términos de uso']
    },
];

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          Joaquin J. Cejas
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const Footer = () => {
    return (
        <div className='custom-footer'>
            <Container
                maxWidth="lg"
                component="footer"
                sx={{
                    mt: 8,
                    py: [3, 6],
                }}
            >
                <Grid container spacing={4} justifyContent="space-evenly">
                    {footers.map((footer) => (
                    <Grid item xs={6} sm={3} key={footer.title}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                        {footer.title}
                        </Typography>
                        <ul>
                        {footer.description.map((item) => (
                            <li key={item}>
                            <Link href="#" variant="subtitle1" color="text.secondary">
                                {item}
                            </Link>
                            </li>
                        ))}
                        </ul>
                    </Grid>
                    ))}
                </Grid>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </div>
    );
}

export {Footer}