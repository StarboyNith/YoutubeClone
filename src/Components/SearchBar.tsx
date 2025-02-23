import {
  SearchOutlined,
  MicOutlined,
  MoreVertOutlined,
  AccountCircleOutlined,
  MenuRounded,
} from "@mui/icons-material";
import { TextField, IconButton, Typography, Stack } from "@mui/material";
import "./Home.css";
import { useDispatch } from "react-redux";
import { tooggleSidebar } from "../Features/todo/homeSlice";

function SearchBar() {
  const dispatch = useDispatch();

  return (
    <Stack direction="row" spacing={30} paddingRight="10px">
      {/* Left section: Menu icon and Logo */}
      <Stack direction="row" alignItems="center" justifyContent="flex-start">
        <IconButton
          sx={{ width: "85px" }}
          onClick={() => dispatch(tooggleSidebar())}
        >
          <MenuRounded sx={{ fontSize: "28px", fontWeight: "100" }} />
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
      <Stack direction="row" spacing={20}>
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
              // position: "relative",
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
