import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <Stack border="solid" spacing={1} direction="row">
      <Navbar />
      <SearchBar />
      <Sidebar />
    </Stack>
  );
};

export default Home;
