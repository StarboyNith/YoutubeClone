import {
  MenuRounded,
  SearchOutlined,
  MicOutlined,
  MoreVertOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import { TextField, IconButton, Typography, Stack } from "@mui/material";
import "./Home.css";
import { useState } from "react";

function SearchBar() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [toogleSideBar, setToogleSideBar] = useState<boolean>(false);
  return (
    <Stack
      direction="row"
      position="fixed"
      width="100vw"
      alignItems="center"
      spacing={25}
    >
      {/* Left section: Menu icon and Logo */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        spacing={1}
      >
        <IconButton>
          <MenuRounded fontSize="large" />
        </IconButton>
        <IconButton>
          <img
            src={"/YouTube_Logo.svg"}
            alt="Youtube"
            width="80%"
            height={30}
          />
        </IconButton>
      </Stack>

      {/* Middle section: Search bar and Mic icon */}
      <Stack
        direction="row"
        spacing={20}
      >
        <Stack
          direction="row"
          width="40vw"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            id="outlined-suffix-shrink"
            placeholder="Search"
            variant="outlined"
            fullWidth
            sx={{
              width: "100%",
              position: "relative",
              "& .MuiOutlinedInput-root": {
                height: "40px",
                borderRadius: "20px 0 0 20px",
                boxShadow: "inset 1px 1px 1px rgba(0, 0, 0, 0.5)",
              },
            }}
          />
          <IconButton
            sx={{
              height: "40px",
              border: "solid lightgrey 1px",
              borderRadius: "0 20px 20px 0",
              width: "60px",
            }}
          >
            <SearchOutlined />
          </IconButton>
          <Stack>
            <IconButton sx={{ background: "#F2EFE7", marginLeft: "10px" }}>
              <MicOutlined sx={{ color: "black" }} />
            </IconButton>
          </Stack>
        </Stack>

        {/* Right section: MoreVert icon and Sign In */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          spacing={2}
        >
          <IconButton>
            <MoreVertOutlined />
          </IconButton>
          <IconButton sx={{ border: "solid grey 0.5px", borderRadius: "50px" }}>
            <AccountCircleOutlined sx={{ color: "blue" }} />
            <Typography
              variant="inherit"
              sx={{ color: "blue", marginLeft: "6px" }}
              fontSize="15px"
            >
              Sign In
            </Typography>
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SearchBar;
