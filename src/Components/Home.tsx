import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import { Box, Stack } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <SearchBar />
      {/* <Sidebar /> */}
      <Navbar />
    </Box>
  );
};

export default Home;
