import {
  HomeOutlined,
  SubscriptionsOutlined,
  AccountCircleOutlined,
  HistoryOutlined,
  PlayArrowOutlined,
  AccountCircle,
  Home,
  PlayArrow,
  Subscriptions,
  History,
  MenuRounded,
} from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import { IconButton } from "@mui/material";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { tooggleActiveTab, tooggleSidebar } from "../Features/todo/homeSlice";

export default function Navbar() {
  const sidebarState = useSelector((state) => state.sidebarReducer);
  const dispatch = useDispatch();
  const iconData = [
    {
      icon:
        sidebarState.activeTab === "Home" ? (
          <Home sx={{ color: "black" }} fontSize="large" />
        ) : (
          <HomeOutlined sx={{ color: "black" }} fontSize="large" />
        ),
      label: "Home",
    },
    {
      icon:
        sidebarState.activeTab === "Shorts" ? (
          <PlayArrow sx={{ color: "black" }} fontSize="large" />
        ) : (
          <PlayArrowOutlined sx={{ color: "black" }} fontSize="large" />
        ),
      label: "Shorts",
    },
    {
      icon:
        sidebarState.activeTab === "Subscriptions" ? (
          <Subscriptions sx={{ color: "black" }} fontSize="large" />
        ) : (
          <SubscriptionsOutlined sx={{ color: "black" }} fontSize="large" />
        ),
      label: "Subscriptions",
    },
    {
      icon:
        sidebarState.activeTab === "Account" ? (
          <AccountCircle sx={{ color: "black" }} fontSize="large" />
        ) : (
          <AccountCircleOutlined sx={{ color: "black" }} fontSize="large" />
        ),
      label: "Account",
    },
    {
      icon:
        sidebarState.activeTab === "History" ? (
          <History sx={{ color: "black" }} fontSize="large" />
        ) : (
          <HistoryOutlined sx={{ color: "black" }} fontSize="large" />
        ),
      label: "History",
    },
  ];

  return (
    <>
      <Stack spacing={3} marginTop="60px">
      <IconButton onClick={() => dispatch(tooggleSidebar())}>
            <MenuRounded fontSize="large" />
          </IconButton>
        {iconData.map((item, index) => (
          <IconButton
            key={index}
            sx={{ width: "51px" }}
            aria-label={item.label}
            onClick={() => {
              dispatch(tooggleActiveTab(item.label));
            }}
          >
            {item.icon}
          </IconButton>
        ))}
      </Stack>
    </>
  );
}
