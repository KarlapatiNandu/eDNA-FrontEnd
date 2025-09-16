import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const DataPanel = () => {
    return (
        <Box sx={{ p : 3}}>
            <Typography variant="h5" sx={{mb:2, fontWeight: 'bold'}}>
                Sample Data
            </Typography>
            <Typography variant="body1">
                Data display for selected location
            </Typography>
        </Box>
    );
};

export default DataPanel;