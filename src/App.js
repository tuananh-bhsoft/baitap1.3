import Box from "@mui/material/Box";

import Home1 from "./containers/home1";

const App = () => {
  return (
    <Box
      className="App"
      sx={{
        fontWeight: "600",
        letterSpacing: "0.1em",
      }}
    >
      <Home1 />
    </Box>
  );
};

export default App;
