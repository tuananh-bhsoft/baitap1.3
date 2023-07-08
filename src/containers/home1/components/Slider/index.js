import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

import CallToActionButton from "../../../../components/buttons/CallToAction";
import frame1 from "../../../../assets/imgs/slide/Frame1.svg";

const Slider = () => {
  const theme = useTheme();

  return (
    <Box
      className="slider"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",

        [theme.breakpoints.down("laptop")]: {
          paddingX: 3,
        },
      }}
    >
      <Box
        className="slide-container"
        sx={{
          paddingY: 6,
          marginTop: 7,
        }}
      >
        <Box
          className="slide"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            columnGap: 3,
          }}
        >
          <Box
            className="slide-info"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flex: "1",

              [theme.breakpoints.down("laptop")]: {
                alignItems: "center",
                textAlign: "center",
              },
            }}
          >
            <Typography
              className="title"
              sx={{
                color: "txt.primary.medium",
                fontSize: "fontSize.xl",
                fontWeight: "600",
                lineHeight: "125%",
                letterSpacing: "normal",
              }}
            >
              Clinic & beauty consultant
            </Typography>
            <Typography
              className="description"
              sx={{
                color: "txt.primary.medium",
                fontSize: "fontSize.m",
                fontWeight: "normal",
                marginTop: 1,
              }}
            >
              It is a long established fact that a reader will be by the
              readable content of a page.
            </Typography>
            <Box className="more-details" sx={{ marginTop: 3 }}>
              <CallToActionButton>More Details</CallToActionButton>
            </Box>
          </Box>
          <Box
            className="slide-img"
            sx={{
              flex: "1",

              [theme.breakpoints.down("laptop")]: {
                display: "none",
              },
            }}
          >
            <img src={frame1} alt="Slide" width={"100%"} />
          </Box>
        </Box>
      </Box>

      <Box
        className="slide-marker"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          columnGap: 0,
        }}
      >
        <Box
          className="marker"
          sx={{
            backgroundColor: "bg.tertiary",
            height: "3px",
            width: "15px",
            borderRadius: "50px",
          }}
        ></Box>
        <Box
          className="marker active"
          sx={{
            backgroundColor: "bg.secondary.light",
            height: "8px",
            width: "25px",
            borderRadius: "50px",
          }}
        ></Box>
        <Box
          className="marker"
          sx={{
            backgroundColor: "bg.tertiary",
            height: "3px",
            width: "15px",
            borderRadius: "50px",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Slider;
