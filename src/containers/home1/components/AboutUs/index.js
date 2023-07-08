import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

import CallToActionButton from "../../../../components/buttons/CallToAction";
import PlayButton from "../../../../components/buttons/Play";
import aboutusImg from "../../../../assets/imgs/about/unsplash_LRXYS0tSyGc.png";

const AboutUs = () => {
  const theme = useTheme();

  return (
    <Box
      className="about-us"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        columnGap: 3,
        marginTop: 8,

        [theme.breakpoints.down("laptop")]: {
          paddingX: 3,
        },
      }}
    >
      <Box
        className="section-info"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          rowGap: 0,
          flex: "1",
          alignItems: "flex-start",

          [theme.breakpoints.down("laptop")]: {
            alignItems: "center",
            textAlign: "center",
          },
        }}
      >
        <Typography
          className="section-header"
          sx={{
            color: "txt.secondary",
            fontSize: "fontSize.m",
            lineHeight: "125%",
            letterSpacing: "normal",
            fontWeight: "600",
          }}
        >
          About Us
        </Typography>
        <Typography
          className="section-title"
          sx={{
            color: "txt.primary.medium",
            fontSize: "fontSize.lg",
            lineHeight: "125%",
            letterSpacing: "normal",
            fontWeight: "600",
          }}
        >
          We are the best beauty clinic
        </Typography>
        <Typography
          className="section-description"
          sx={{
            color: "txt.tertiary.medium",
            fontSize: "fontSize.m",
            fontWeight: "400",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
          suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc,
          ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse
          placerat. Id dui erat sed quam tellus in purus. Pellentesque congue
          fringilla cras tellus enim.
        </Typography>
        <Box
          className="actions"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            columnGap: 3,
            marginTop: 5,

            [theme.breakpoints.down("laptop")]: {
              alignSelf: "center",
            },
          }}
        >
          <Box className="learn-more">
            <CallToActionButton>Learn More</CallToActionButton>
          </Box>
          <Box
            className="watch-video"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              columnGap: 0,

              [theme.breakpoints.down("laptop")]: {
                display: "none",
              },
            }}
          >
            <PlayButton />
            <Typography
              sx={{
                color: "txt.tertiary.medium",
                fontSize: "fontSize.m",
                fontWeight: "600",
              }}
            >
              Watch Video
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        className="section-content"
        sx={{
          flex: "1",
          width: "50%",

          [theme.breakpoints.down("laptop")]: {
            display: "none",
          },
        }}
      >
        <img src={aboutusImg} alt="About us" width="100%" />
      </Box>
    </Box>
  );
};

export default AboutUs;
