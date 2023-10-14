import { Container, Grid, Typography } from '@mui/material'
import '../App.css'
import TourCard from '../components/TourCard'
import cities from '../data.json'
import { Fragment } from 'react'

function Home() {
    return (<div className='app'>
        <Container sx={{
            marginY: 5,
        }}>
            {cities.map(city => (
                <Fragment key={city.id}>
                    <Typography variant='h4' component='h3' marginTop={5} marginBottom={3}>
                        Top {city.name}
                    </Typography>
                    <Grid container spacing={5}>
                        {city.tours.map(tour => <TourCard tour={tour} key={tour.id} />)}
                    </Grid>
                </Fragment>
            ))}
        </Container>
    </div>)
}

export default Home
