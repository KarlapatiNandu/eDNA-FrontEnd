import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const Summary = () => {
    return (
        <Box sx={{ p : 1 , borderBottom:'1px solid white'}}>
            <Typography variant="h4" sx={{fontWeight: 'bold', mb: 2}}>
                Summary
            </Typography>
            <Box sx={{display: 'flex', gap:4}}>
                <Box>
                    <Typography variant="h4" sx={{fontWeight:'bold', color:'primary.main'}}>
                        12,453
                    </Typography>
                    <Typography variant="caption1" color="">
                        Diversity Score
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h4" sx={{fontWeight:'bold', color:'secondary.main'}}>
                        43.23421
                    </Typography>
                    <Typography variant="caption1" color="">
                        Shannon Index
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Summary;