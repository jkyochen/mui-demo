import { Box, Container, Typography } from "@mui/material";
import QuiltedImageList from "../components/QuiltedImageList";

export default function Tour() {
    return <Container sx={{
        width: 900,
    }}>
        <Typography variant="h3" component="h1" marginTop={3}>
            All Around the World
        </Typography>
        <Box marginTop={3} sx={{ display: "flex" }}>
            <img src="https://picsum.photos/id/237/600/300" alt="" />
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
        <Box>
            <Typography variant="h6" component="h4" marginTop={3}>
                Frequently Asked Questions
            </Typography>
        </Box>
    </Container >
}
