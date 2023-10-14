import { AccessTime } from "@mui/icons-material";
import { Button, Card, CardContent, CardMedia, CardActionArea, CardActions, Grid, Rating, ThemeProvider, Typography, createTheme } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2",
                    },
                    style: {
                        fontSize: 11,
                    }
                },
                {
                    props: {
                        variant: "body3",
                    },
                    style: {
                        fontSize: 9,
                    }
                },
            ]
        }
    }
});

export default function TourCard({ tour }) {
    return (
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
                <Card>
                    <CardActionArea component={Link} to={`/${tour.id}`}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={tour.image}
                            alt={tour.name}
                        />
                        <CardContent>
                            <Typography variant="subtitle1" component="h2">
                                {tour.name}
                            </Typography>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <AccessTime sx={{ width: 12.5 }} />
                                <Typography variant="body2" component="p" marginLeft={0.5}>
                                    {tour.duration} hours
                                </Typography>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                                marginTop={2}
                            >
                                <Rating name="read-only" value={tour.rating} readOnly precision={0.5} size="small" />
                                <Typography variant="body2" component={"p"} marginLeft={0.5}>{tour.rating}</Typography>
                                <Typography variant="body2" component={"p"} marginLeft={1.5}>({tour.numberOfReviews} reviews)</Typography>
                            </Box>
                            <Typography variant="h6" component={"h3"} marginTop={0.5}>From C ${tour.price}</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>
            </ThemeProvider>
        </Grid>
    );
}
