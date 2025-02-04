import {
  HomeOutlined,
  SubscriptionsOutlined,
  AccountCircleOutlined,
  HistoryOutlined,
  PlayArrowOutlined,
} from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import { IconButton } from "@mui/material";
import "./Home.css";

const iconData = [
  { icon: <HomeOutlined fontSize="large" />, label: "Home" },
  { icon: <PlayArrowOutlined fontSize="large" />, label: "Play" },
  { icon: <SubscriptionsOutlined fontSize="large" />, label: "Subscriptions" },
  { icon: <AccountCircleOutlined fontSize="large" />, label: "Account" },
  { icon: <HistoryOutlined fontSize="large" />, label: "History" },
];

export default function Navbar() {
  return (
    <>
      <Stack spacing={3} position="absolute" zIndex="1" marginTop="60px">
        {iconData.map((item, index) => (
          <IconButton
            key={index}
            sx={{ width: "51px" }}
            aria-label={item.label}
          >
            {item.icon}
          </IconButton>
        ))}
      </Stack>
    </>
  );
}
