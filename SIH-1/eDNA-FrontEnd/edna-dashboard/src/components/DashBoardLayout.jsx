import React from "react";
import Box from "@mui/material/Box";
import MapPanel from "./MapPanel";
import DataPanel from "./DataPanel";

const DashboardLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "calc(100vh - 64px)", // full viewport minus header
        width: "100%",
        p: 2,
        gap: 2,
      }}
    >
      {/* Left Map Panel */}
      <Box sx={{ flex: 1.5, borderRadius: 2, overflow: "hidden", display: "flex", border:'1px solid white' }}>
        {/*Try to add MapPanel later, that isn't mounting up damn it */}
      </Box>

      {/* Right Data Panel */}
      <Box sx={{ flex: 1, borderRadius: 2, overflow: "hidden", border: "1px solid #e0e0e0" }}>
        {/* Data content goes here */}
        <DataPanel/>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
