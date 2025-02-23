import {
  HomeOutlined,
  SubscriptionsOutlined,
  AccountCircleOutlined,
  HistoryOutlined,
  PlayArrowOutlined,
  AccountCircle,
  Home,
  PlayArrow,
  Subscriptions as SubscriptionIcon,
  History as HistoryIcon,
} from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import { Chip, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { tooggleActiveTab } from "../Features/todo/homeSlice";
import Feeds from "./NavbarComponents/Feeds";
import History from "./NavbarComponents/History";
import Shorts from "./NavbarComponents/Shorts";
import User from "./NavbarComponents/User";
import Subscriptions from "./NavbarComponents/Subscriptions";


export default function Navbar() {
  const sidebarState = useSelector((state) => state.sidebarReducer);
  const dispatch = useDispatch();
  const isExpanded = sidebarState.sidebar; // Store in a variable

  const iconData = [
    {
      icon:
        sidebarState.activeTab === "Home" ? (
          <Home sx={{ color: "black", fontSize: "28px" }} />
        ) : (
          <HomeOutlined sx={{ color: "black", fontSize: "28px" }} />
        ),
      label: "Home",
    },
    {
      icon:
        sidebarState.activeTab === "Shorts" ? (
          <PlayArrow sx={{ color: "black", fontSize: "28px" }} />
        ) : (
          <PlayArrowOutlined sx={{ color: "black", fontSize: "28px" }} />
        ),
      label: "Shorts",
    },
    {
      icon:
        sidebarState.activeTab === "Subscriptions" ? (
          <SubscriptionIcon sx={{ color: "black", fontSize: "28px" }} />
        ) : (
          <SubscriptionsOutlined sx={{ color: "black", fontSize: "28px" }} />
        ),
      label: "Subscriptions",
    },
    {
      icon:
        sidebarState.activeTab === "User" ||
        sidebarState.activeTab === "You" ? (
          <AccountCircle sx={{ color: "black", fontSize: "28px" }} />
        ) : (
          <AccountCircleOutlined sx={{ color: "black", fontSize: "28px" }} />
        ),
      label: "You",
    },
    {
      icon:
        sidebarState.activeTab === "History" ? (
          <HistoryIcon sx={{ color: "black", fontSize: "28px" }} />
        ) : (
          <HistoryOutlined sx={{ color: "black", fontSize: "28px" }} />
        ),
      label: "History",
    },
  ];

  return (
    <Stack direction="row" sx={{ display: "flex" }}>
      {/* Expanded Sidebar */}
      {isExpanded && (
        <Stack
          height="100vh"
          maxWidth="200px"
          paddingLeft="29px"
          marginTop="10px"
          alignItems="center"
        >
          {iconData.map(
            (item, index) =>
              item.label !== "You" &&
              item.label !== "History" && (
                <IconButton
                  key={index}
                  sx={{
                    display: "flex",
                    padding: "10px 0",
                    width: "200px",
                    alignItems: "flex-start",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    gap: 2,
                  }}
                  aria-label={item.label}
                  onClick={() => dispatch(tooggleActiveTab(item.label))}
                >
                  {item.icon}
                  <Typography
                    fontSize="1rem"
                    color="initial"
                    sx={{
                      whiteSpace: "nowrap",
                      marginLeft: "10px",
                    }}
                  >
                    {item.label}
                  </Typography>
                </IconButton>
              )
          )}
        </Stack>
      )}

      {/* Collapsed Sidebar */}
      {!isExpanded && (
        <Stack
          height="100vh"
          maxWidth="85px"
          paddingLeft="0"
          marginTop="10px"
          alignItems="center"
        >
          {iconData.map((item, index) => (
            <IconButton
              key={index}
              sx={{
                display: "flex",
                padding: "10px 0",
                width: "85px",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                gap: 0,
              }}
              aria-label={item.label}
              onClick={() => dispatch(tooggleActiveTab(item.label))}
            >
              {item.icon}
              <Typography
                fontSize="0.7rem"
                color="initial"
                sx={{
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
              >
                {item.label}
              </Typography>
            </IconButton>
          ))}
        </Stack>
      )}

      <Stack marginTop="10px" width="100%" spacing={2}>
        <Stack direction="row" spacing={1}>
          <Chip label="Java"/>
          <Chip label="Java"/>
          <Chip label="Python"/>
          <Chip label="Java"/>
          <Chip label="JS"/>
          <Chip label="JS Mastery"/>
          <Chip label="Java"/>
          <Chip label="Java"/>
          <Chip label="Python"/>
          <Chip label="Java"/>
          <Chip label="JS"/>
          <Chip label="JS Mastery"/>
          <Chip label="Java"/>
          <Chip label="Java"/>
          <Chip label="Java"/>
          <Chip label="Python"/>
          <Chip label="Java"/>
          <Chip label="JS"/>
          <Chip label="JS Mastery"/>
          <Chip label="Java"/>
          <Chip label="Java"/>
          <Chip label="Java"/>
          <Chip label="Java"/>
          <Chip label="Java"/>
          <Chip label="Java"/>
          <Chip label="Java"/>
          <Chip label="Java"/>
          <Chip label="Java"/>
          <Chip label="Java"/>
          <Chip label="Java"/>
          <Chip label="Java"/>
          <Chip label="Java"/>
          <Chip label="Python"/>
          <Chip label="Java"/>
          <Chip label="JS"/>
          <Chip label="JS Mastery"/>
        </Stack>
        <Stack>
          {sidebarState.activeTab === "Home" && <Feeds />}
          {sidebarState.activeTab === "Shorts" && <Shorts />}
          {sidebarState.activeTab === "Subscriptions" && <Subscriptions />}
          {sidebarState.activeTab === "User" ||
            (sidebarState.activeTab === "You" && <User />)}
          {sidebarState.activeTab === "History" && <History />}
        </Stack>
      </Stack>
    </Stack>
  );
}
