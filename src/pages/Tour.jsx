import { Paper, Box, Container, Typography, BottomNavigation, Skeleton } from "@mui/material";
import QuiltedImageList from "../components/QuiltedImageList";
import CustomizedAccordions from "../components/CustomizedAccordions";
import BasicModal from "../components/BasicModal";
import { useEffect, useState } from "react";

const IMAGE_URL = "https://picsum.photos/id/237/500/300";

export default function Tour() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadImage = new Image();
        loadImage.src = IMAGE_URL;
        loadImage.onload = () => {
            setIsLoading(false);
        };
    }, []);

    return <Container sx={{
        width: 900,
    }}>
        <Typography variant="h3" component="h1" marginTop={3}>
            All Around the World
        </Typography>
        <Box marginTop={3} sx={{ display: "flex" }}>
            <Box style={{ display: isLoading ? 'none' : 'block' }}>
                <img src={IMAGE_URL} alt="" />
            </Box>
            {isLoading && (
                <Skeleton variant="rect" width={500} height={300} />
            )}
            <QuiltedImageList />
        </Box>
        <Box>
            <Typography variant="h6" component="h4" marginTop={3}>
                About the ticket
            </Typography>
            <Typography variant="paragraph" component="p" marginTop={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita esse non neque ratione quas commodi unde qui perspiciatis blanditiis ipsa harum quis adipisci, quam enim fugit itaque magnam, architecto molestias maxime perferendis, vitae sit iusto nesciunt cumque? Dicta debitis deserunt ut sunt voluptatem! Inventore nemo porro quasi magnam quis reprehenderit vitae incidunt tempore velit aut mollitia in et tempora sint nulla veniam harum accusantium asperiores non quaerat sapiente hic cupiditate, illo soluta. Nihil autem magni inventore deleniti recusandae aliquid voluptatibus odit ipsum, ratione fuga adipisci. Voluptates officiis earum commodi, nulla eligendi maxime delectus ut fugiat possimus obcaecati omnis blanditiis sint!
            </Typography>
        </Box>
        <Box sx={{
            marginBottom: 10,
        }}>
            <Typography variant="h6" component="h4" marginTop={3} marginBottom={3}>
                Frequently Asked Questions
            </Typography>
            <CustomizedAccordions />
        </Box>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation showLabels>
                <BasicModal />
            </BottomNavigation>
        </Paper>
    </Container >
}
