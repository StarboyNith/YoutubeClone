import { Box, Grid2 as Grid, Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const History = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid size={4}>
          <Item>History</Item>
        </Grid>
        <Grid size={4}>
          <Item>History=6</Item>
        </Grid>
        <Grid size={4}>
          <Item>History=grow</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default History;
