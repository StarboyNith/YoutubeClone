import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { tooggleActiveTab, tooggleSidebar } from "../Features/todo/homeSlice";
import {
  AccountCircleOutlined,
  HistoryOutlined,
  PlayArrow,
  Subscriptions,
  History,
  AccountCircle,
  HomeOutlined,
  Home,
  MenuRounded,
  PlayArrowOutlined,
  SubscriptionsOutlined,
} from "@mui/icons-material";

const Sidebar = () => {
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

  const DrawerList = (
    <Box sx={{ width: 250 }} justifyContent="center" role="presentation">
      <Stack
        direction="row"
        justifyContent="flex-end"
        spacing={3}
      >
        <IconButton
          onClick={() => dispatch(tooggleSidebar())}
        >
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
      <List>
        {iconData.map((iconData) => (
          <ListItem key={iconData.label}>
            <ListItemButton
              onClick={() => {
                dispatch(tooggleSidebar());
                dispatch(tooggleActiveTab(iconData.label));
              }}
            >
              <ListItemIcon>{iconData.icon}</ListItemIcon>
              <ListItemText primary={iconData.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Stack>
      <Drawer
        open={sidebarState.sidebar}
        onClose={() => dispatch(tooggleSidebar())}
      >
        {DrawerList}
      </Drawer>
    </Stack>
  );
};

export default Sidebar;
