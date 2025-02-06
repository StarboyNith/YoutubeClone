import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <Stack spacing={1} direction="row">
      <Navbar />
      <SearchBar />
      <Sidebar />
    </Stack>
  );
};

export default Home;
