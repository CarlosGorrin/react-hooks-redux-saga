import React from 'react';
import { Card, Grid, Typography, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import style from './style';

const MovieResult = ({ title, description, id, image, history }) => {
    const classes = style();

    const handleSeeMovieClick = () => {
        history.push(`/movie/${id}`);
    };

    console.log(history);

    return(
        <Card className={classes.cardContainer}>
            <Grid container>
                <Grid item>
                <img src={image} alt={title} className={classes.poster}/>
                </Grid>
                <Grid item className={classes.titlesContainer}>
                    <Typography>{title}</Typography>
                    <Typography>{description}</Typography>
                    <Typography>{id}</Typography>
                    <Button variant="contained" color="primary" size="large" onClick={handleSeeMovieClick}>Ver mas</Button> 
                </Grid>
            </Grid>
        </Card>
    );

}

export default withRouter(MovieResult);