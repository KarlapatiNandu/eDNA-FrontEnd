import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Summary from "./Summary";

const DataPanel = () => {
    return (
        <Box sx={{ p : 1}}>
            <Summary />
            <Typography variant="body1" sx={{ mt: 2 }}>
                This panel will display all the data for a selected location.
            </Typography>
        </Box>
    );
};

export default DataPanel;