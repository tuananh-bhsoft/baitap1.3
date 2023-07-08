import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import footerLogo from "../../assets/imgs/logos/FooterLogo.svg";
import facebookLight from "../../assets/icons/socials/FacebookLight.svg";
import twitterLight from "../../assets/icons/socials/TwitterLight.svg";
import linkedinLight from "../../assets/icons/socials/LinkedinLight.svg";
import youtubeLight from "../../assets/icons/socials/YoutubeLight.svg";
import instaLight from "../../assets/icons/socials/InstagramLight.svg";
import bullet from "../../assets/icons/design-elements/Bullet.svg";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      className="footer"
      sx={{
        paddingTop: 8,
        marginTop: 8,

        [theme.breakpoints.down("laptop")]: {
          padding: `200px 40px 0 40px`,
        },
      }}
    >
      <Box
        className="content-wrapper"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "content",
          marginX: "auto",
        }}
      >
        <Box
          className="footer-info"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",

            [theme.breakpoints.down("laptop")]: {
              flexDirection: "column",
              rowGap: 5,
            },
          }}
        >
          <Box
            className="authorship"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              rowGap: 1,
              flex: "1",

              [theme.breakpoints.down("laptop")]: {
                width: "100%",
              },
            }}
          >
            <img src={footerLogo} alt="Footer logo" />
            <Typography
              sx={{
                color: "txt.primary.slight",
                fontSize: "fontSize.m",
                fontWeight: "400",
              }}
            >
              <Typography sx={{ display: "inline", fontWeight: "700" }}>
                Beautice
              </Typography>{" "}
              is a Beauty Clinic WordPress Theme.
            </Typography>
            <Box
              className="info"
              sx={{
                fontStyle: "italic",
                fontSize: "fontSize.sm",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Typography
                sx={{
                  color: "txt.primary.slight",
                  fontSize: "fontSize.m",
                  fontWeight: "400",
                }}
              >
                Baker Steet 101, NY, United States.
              </Typography>
              <Box
                className="contact-info"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  columnGap: 3,
                }}
              >
                <Typography
                  sx={{
                    color: "txt.primary.slight",
                    fontSize: "fontSize.m",
                    fontWeight: "400",
                  }}
                >
                  +521 569 8966.
                </Typography>
                <Typography
                  sx={{
                    color: "txt.primary.slight",
                    fontSize: "fontSize.m",
                    fontWeight: "400",
                  }}
                >
                  mail@company.com.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            className="site-doc"
            sx={{
              flex: "1",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",

              [theme.breakpoints.down("laptop")]: {
                flexDirection: "column",
                rowGap: 5,
                width: "100%",
              },
            }}
          >
            <Box className="sitemap" sx={{ flex: "1" }}>
              <Typography
                className="list-header"
                sx={{
                  color: "txt.white",
                  fontSize: "fontSize.xm",
                  fontWeight: "600",
                }}
              >
                Pages
              </Typography>
              <Box
                component="ul"
                className="list"
                sx={{
                  listStyleImage: `url(${bullet})`,
                  paddingLeft: "12px",
                  paddingTop: "15px",
                  margin: "0",
                }}
              >
                <Box
                  component="li"
                  className="list-item"
                  sx={{
                    color: "txt.primary.slight",
                    fontSize: "fontSize.m",
                    fontWeight: "400",
                    marginTop: 0,
                  }}
                >
                  Home
                </Box>
                <Box
                  component="li"
                  className="list-item"
                  sx={{
                    color: "txt.primary.slight",
                    fontSize: "fontSize.m",
                    fontWeight: "400",
                    marginTop: 0,
                  }}
                >
                  About
                </Box>
                <Box
                  component="li"
                  className="list-item"
                  sx={{
                    color: "txt.primary.slight",
                    fontSize: "fontSize.m",
                    fontWeight: "400",
                    marginTop: 0,
                  }}
                >
                  Services
                </Box>
                <Box
                  component="li"
                  className="list-item"
                  sx={{
                    color: "txt.primary.slight",
                    fontSize: "fontSize.m",
                    fontWeight: "400",
                    marginTop: 0,
                  }}
                >
                  Gallery
                </Box>
                <Box
                  component="li"
                  className="list-item"
                  sx={{
                    color: "txt.primary.slight",
                    fontSize: "fontSize.m",
                    fontWeight: "400",
                    marginTop: 0,
                  }}
                >
                  Team
                </Box>
              </Box>
            </Box>
            <Box className="documents" sx={{ flex: "1" }}>
              <Typography
                className="list-header"
                sx={{
                  color: "txt.white",
                  fontSize: "fontSize.xm",
                  fontWeight: "600",
                }}
              >
                Informations
              </Typography>
              <Box
                component="ul"
                className="list"
                sx={{
                  listStyleImage: `url(${bullet})`,
                  paddingLeft: "12px",
                  paddingTop: "15px",
                  margin: "0",
                }}
              >
                <Box
                  component="li"
                  className="list-item"
                  sx={{
                    color: "txt.primary.slight",
                    fontSize: "fontSize.m",
                    fontWeight: "400",
                    marginTop: 0,
                  }}
                >
                  Terms & Conditions
                </Box>
                <Box
                  component="li"
                  className="list-item"
                  sx={{
                    color: "txt.primary.slight",
                    fontSize: "fontSize.m",
                    fontWeight: "400",
                    marginTop: 0,
                  }}
                >
                  Privacy policy
                </Box>
                <Box
                  component="li"
                  className="list-item"
                  sx={{
                    color: "txt.primary.slight",
                    fontSize: "fontSize.m",
                    fontWeight: "400",
                    marginTop: 0,
                  }}
                >
                  Blog
                </Box>
                <Box
                  component="li"
                  className="list-item"
                  sx={{
                    color: "txt.primary.slight",
                    fontSize: "fontSize.m",
                    fontWeight: "400",
                    marginTop: 0,
                  }}
                >
                  Contact
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          className="footer-socials"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginY: 6,

            [theme.breakpoints.down("laptop")]: {
              columnGap: 3,
            },
            [theme.breakpoints.down("tablet")]: {
              flexDirection: "column",
              rowGap: 3,
              columnGap: 3,
            },
          }}
        >
          <Box
            className="social-links"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              columnGap: 3,
            }}
          >
            <img
              src={facebookLight}
              alt="Facebook"
              width="24px"
              height="24px"
            />
            <img src={twitterLight} alt="Twitter" width="24px" height="24px" />
            <img
              src={linkedinLight}
              alt="Linkedin"
              width="24px"
              height="24px"
            />
            <img src={youtubeLight} alt="Youtube" width="24px" height="24px" />
            <img src={instaLight} alt="Instagram" width="24px" height="24px" />
          </Box>
          <Typography
            className="copyright"
            sx={{
              color: "txt.primary.slight",
              fontSize: "fontSize.m",
              fontWeight: "400",
            }}
          >
            © AltDesain Studio 2021 - All right reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
