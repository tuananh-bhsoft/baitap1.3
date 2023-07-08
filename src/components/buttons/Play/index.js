import Box from "@mui/material/Box";

import playIcon from "../../../assets/icons/design-elements/PolygonPlay.svg";

const PlayButton = () => {
  return (
    <Box
      className="play-button"
      sx={{
        background: "#091156",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 1,
        borderRadius: "50px",
        transition: "0.25s ease-in-out",

        "&:hover": {
          cursor: "pointer",
          background: "bg.secondary.light",
          boxShadow: "0px 25px 50px 25px #e6e9fd",
        },
      }}
    >
      <img src={playIcon} alt="Play button" />
    </Box>
  );
};

export default PlayButton;
