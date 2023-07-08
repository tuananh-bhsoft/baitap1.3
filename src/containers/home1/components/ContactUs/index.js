import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

import CallToActionButton from "../../../../components/buttons/CallToAction";
import CssTextField from "../../../../components/CssTextField";
import contactAnimation from "../../../../assets/imgs/contact/ContactAnimations.svg";

const ContactUs = () => {
  const theme = useTheme();

  return (
    <Box
      className="contact-us"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        columnGap: 3,
        marginTop: 8,

        [theme.breakpoints.down("laptop")]: {
          flexDirection: "column",
          rowGap: 6,
          paddingX: 3,
        },
      }}
    >
      <Box
        className="section-content"
        sx={{
          flex: "1",
        }}
      >
        <img src={contactAnimation} alt="Contact us" maxWidth="100%" />
      </Box>
      <Box
        className="section-info"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          rowGap: 0,
          alignItems: "flex-start",
          flex: "1",

          [theme.breakpoints.down("laptop")]: {
            width: "100%",
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
          Contact Us
        </Typography>
        <Typography
          className="section-title"
          sx={{
            color: "txt.primary.medium",
            fontSize: "fontSize.lg",
            lineHeight: "125%",
            letterSpacing: "normal",
            fontWeight: "600",
            width: "80%",
          }}
        >
          Send your inquiry to our expert team
        </Typography>
        <Typography
          className="section-description"
          sx={{
            color: "txt.tertiary.medium",
            fontSize: "fontSize.m",
            fontWeight: 400,
          }}
        >
          Lorem ipsum dolor sit amet nulla turapis tellus.
        </Typography>
        <form action="/" method="POST" id="form">
          <Box
            className="name"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              columnGap: 3,

              [theme.breakpoints.down("mobile")]: {
                flexDirection: "column",
              },
            }}
          >
            <CssTextField
              id="outlined-basic"
              label="First name"
              variant="outlined"
              sx={{
                marginTop: 3,
              }}
            />
            <CssTextField
              id="outlined-basic"
              label="Last name"
              variant="outlined"
              sx={{
                marginTop: 3,
              }}
            />
          </Box>
          <CssTextField
            id="outlined-basic"
            label="Email address"
            variant="outlined"
            type="email"
            fullWidth
            sx={{
              marginTop: 3,
            }}
          />
          <CssTextField
            id="outlined-basic"
            label="Subject message"
            variant="outlined"
            fullWidth
            sx={{
              marginTop: 3,
            }}
          />
          <CssTextField
            id="outlined-basic"
            label="Your inquiry here"
            variant="outlined"
            fullWidth
            multiline
            cols={30}
            rows={10}
            sx={{
              marginY: 3,
            }}
          />
          <CallToActionButton>Send Message</CallToActionButton>
        </form>
      </Box>
    </Box>
  );
};

export default ContactUs;
