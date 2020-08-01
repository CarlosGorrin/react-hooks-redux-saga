import React, { useEffect } from 'react';
import { Container, CircularProgress, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { movieResult as movieResultSelector } from '../../redux/selectors';
import { searchMovieById } from '../../redux/actions/search';
import MovieResult from '../../components/MovieResult';

export default ({ match }) => {
    const dispatch = useDispatch();
    const movieResult = useSelector(state => movieResultSelector(state));
    console.log('dispatch', dispatch);
    console.log('movieResult', movieResult);

    useEffect(() => {
        const movieId = match.params.id;
        console.log(movieId);
        
        if(!movieResult || MovieResult && MovieResult.id !== movieId) {  
            dispatch(searchMovieById({movieId}))
        }
    });

    if(!movieResult) {
        return <CircularProgress size={100} color="primary"/>
    }

    return(
        <Container>
            <Typography variant="h3">Title</Typography>
            <img src="" alt=""/>
            <Typography>Actores:</Typography>
            <Typography>Director:</Typography>
            <Typography>Descripcion:</Typography>
        </Container>
    )
}