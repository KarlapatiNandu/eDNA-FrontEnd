import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
    return (
        // This is main box/div for enclosing the header section
        <Box
            sx = {{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between', // The two boxes should be at extremes
                p:2, // padding of 16px
                borderBottom: '1px solid #e0e0e0',
            }}
        >
            {/* Top left -> Logo and Title */}
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
                <img src='#' alt = "eDNA Logo" style={{height:32, marginRight: 12}} />
                <Typography variant="h6" component="h1" sx ={{fontWeight: 'bold'}}>
                    eDNA Dashboard
                </Typography>
            </Box>
            {/*Top Right -> Search and User Icons*/}
            <Box sx={{display:'flex', alignItems:'center'}}>
                <IconButton sx={{ mx : 1}}>
                    <SearchIcon/>
                </IconButton>
                <IconButton sx={{ mx:1}}>
                    <NotificationsIcon/>
                </IconButton>
                <IconButton sx = {{mx:1}}>
                    <PersonIcon/>
                </IconButton>
            </Box>
        </Box>
    );
};

export default Header;