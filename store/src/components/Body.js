import React from 'react';
import ImgMediaCard from "./ImgMediaCard"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: '80%',
        margin: '0 auto'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'cenrter',
        color: theme.palette.text.secondary,
    },
}));

export default function Body() {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Grid container spacing={0}>
                {/* <Grid item xs={12} sm={3}>
                    <ImgMediaCard titulo="mattel" descricao="Pixar Matterl" image="/statics/imagens/mattel.jpg" />
                </Grid> */}
                <Grid item xs={12} sm={9} container>
                    <Grid item xs={12} sm={6}>
                        <ImgMediaCard titulo="Mattel" descricao="Pixar" image="/statics/imagens/mattel.jpg" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ImgMediaCard titulo="Mcqueen" descricao="Pixar" image="/statics/imagens/mcqueen.png" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ImgMediaCard titulo="Ramone" descricao="Pixar" image="/statics/imagens/Ramone.png" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ImgMediaCard titulo="Sally" descricao="Pixar" image="/statics/imagens/Sally.png" />
                    </Grid>
                    {/* <ImgMediaCard titulo="julieta" descricao="romeu e julieta" image="/statics/imagens/logo192.png" /> */}
                </Grid>
                {/* <Grid item xs={12} sm={3}>
                <ImgMediaCard titulo="julieta" descricao="romeu e julieta" image="/statics/imagens/logo192.png" />
            </Grid>
            <Grid item xs={12} sm={3}>
                <ImgMediaCard titulo="julieta" descricao="romeu e julieta" image="/statics/imagens/logo192.png" />
            </Grid> */}
            </Grid>
        </div>

    );
}
