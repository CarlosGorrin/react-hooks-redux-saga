import	React , { useState }from 'react';
import { Container, Typography, Grid, Card, TextField, Button } from '@material-ui/core';

import { MovieIcon } from '../../icons';
import styles from './style';

export default ({ history }) => {
    const [searchText, setSearchText] = useState('')
    const classes = styles();

    const handleSearchTextChange = event => {
        setSearchText(event.target.value);
    };

    const handleCleanTextClick = event => {
        setSearchText('');
    }
    const handleSearchTextClick = event => {
        history.push(`/results?movieName=${searchText}`);
    }

    return(
        <Container className={classes.container}>
            <Card  className={classes.cardContainer}>
                <Grid container  className={classes.titleGridContainer}>
                    <Grid>
                        <Typography  className={classes.title} variant="h3">Bienvenido</Typography>
                    </Grid>
                    <Grid>
                        <MovieIcon className={classes.movieIcon} />
                    </Grid>
                </Grid>
                <TextField
                value={searchText}
                placeholder="Buscar..."
                className={classes.TextFieldSearch}
                onChange={handleSearchTextChange}/>
                <Grid  className={classes.buttonsContainer}>
                    <Button variant="contained" onClick={handleCleanTextClick}>Limpiar</Button>
                    <Button variant="contained"  className={classes.searchButton} color="primary" sie="large" onClick={handleSearchTextClick}>Buscar</Button>   
                </Grid>
            </Card>
        </Container>
    )
}