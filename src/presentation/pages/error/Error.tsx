import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Typography variant='h1' color='error'>404 Error</Typography>
            <Link to='/users'>
                <Button variant='contained' color='error'>Go back to users</Button>
            </Link>
        </Box>
    )
}