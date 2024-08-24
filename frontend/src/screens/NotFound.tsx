import React, { FC } from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";


const NotFound: FC = () => {

    return (
        <Grid container sx={{ justifyContent: "center", alignItems: "center", height: "fit-content" }}>
            <Grid item>
                <Typography variant="h1" mt="50px" color="error">404</Typography>
            </Grid>
        </Grid>
    );
};

export default NotFound;