import React from 'react';
import Box from '@mui/material/Box';

const DashboardLayout = () => {
    return (
        <Box sx={{
        display:'flex',
        flexDirection: 'row',
        minHeight:'calc(100vh - 64px)',
        width:"100%",
        p:2,
        gap:2,
    }}>
        {/*Left box i.e the map part: */}
        <Box sx={{flex:1, border:'1px solid white', borderRadius:2}}>
            {/*Map panel spot */}
            <img src='#' alt='map part'/>
        </Box>

        {/*Right box i.e the data panel part */}
        <Box sx={{flex:1.5,border:'1px solid white',borderRadius:2}}>
            {/*Data panel stuff here */}
            <div>Summary</div>
            <Box sx={{display: 'flex', flexDirection:'row', justifyContent:'space-between',p:2}}>
                <Box>Diversity Scores:</Box>
                <Box>Shannon Index</Box>
            </Box>
        

        </Box>
    </Box>
    );
};

export default DashboardLayout;