import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

import professor1 from "../../../../assets/imgs/professional/unsplash_pTrhfmj2jDA.png";
import professor2 from "../../../../assets/imgs/professional/unsplash_FVh_yqLR9eA.png";
import professor3 from "../../../../assets/imgs/professional/unsplash_mEZ3PoFGs_k.png";
import twitter from "../../../../assets/icons/socials/Twitter.svg";
import facebook from "../../../../assets/icons/socials/Facebook.svg";
import insta from "../../../../assets/icons/socials/Instagram.svg";

const ProfessionalTeams = () => {
  const theme = useTheme();

  return (
    <Box
      className="professional-teams"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
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
          alignItems: "center",
          textAlign: "center",
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
          Professional Teams
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
          The Professional Expert
        </Typography>
        <Typography
          className="section-description"
          sx={{
            color: "txt.tertiary.medium",
            fontSize: "fontSize.m",
            fontWeight: "400",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </Typography>
      </Box>
      <Box
        className="section-content"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginTop: 6,

          [theme.breakpoints.down("laptop")]: {
            flexDirection: "column",
          },
        }}
      >
        <Box
          className="expert-card"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "bg.white",
            padding: "50px",
            borderRadius: "40px",
            boxShadow: "0 25px 50px 25px #f6f7ff",

            "&:first-child": {
              backgroundColor: "transparent",
              position: "relative",
              right: "-30px",
              boxShadow: "none",

              [theme.breakpoints.down("laptop")]: {
                position: "static",
              },
            },
            "&:last-child": {
              backgroundColor: "transparent",
              position: "relative",
              right: "30px",
              boxShadow: "none",

              [theme.breakpoints.down("laptop")]: {
                position: "static",
              },
            },
          }}
        >
          <img
            src={professor1}
            alt="Card"
            style={{
              maxWidth: "146px",
              maxHeight: "146px",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          />
          <Box
            className="card-info"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              className="card-header"
              sx={{
                color: "txt.secondary",
                fontSize: "fontSize.m",
                lineHeight: "125%",
                letterSpacing: "normal",
                fontWeight: "600",
              }}
            >
              Surgeon
            </Typography>
            <Typography
              className="card-title"
              sx={{
                color: "txt.primary.medium",
                fontSize: "fontSize.xm",
                lineHeight: "125%",
                letterSpacing: "normal",
                marginTop: 1,
                fontWeight: "600",
              }}
            >
              Briyan Nevalli
            </Typography>
            <Typography
              className="card-description"
              sx={{
                color: "txt.tertiary.medium",
                fontSize: "fontSize.sm",
                fontWeight: "400",
                marginTop: 1,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </Typography>
            <Box
              className="social-links"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                columnGap: 3,
                marginY: 3,
              }}
            >
              <Box
                className="social-icon"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "bg.white",
                  padding: "12px",
                  borderRadius: "50px",
                  boxShadow: "-2px 6px 16px -1px #e6e9fd",
                  transition: "0.25s ease-in-out",

                  "&:hover": {
                    cursor: "pointer",
                    boxShadow: "0px 25px 50px 25px #e6e9fd",
                  },
                }}
              >
                <img
                  src={twitter}
                  alt="Twitter"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
              <Box
                className="social-icon"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "bg.white",
                  padding: "12px",
                  borderRadius: "50px",
                  boxShadow: "-2px 6px 16px -1px #e6e9fd",
                  transition: "0.25s ease-in-out",

                  "&:hover": {
                    cursor: "pointer",
                    boxShadow: "0px 25px 50px 25px #e6e9fd",
                  },
                }}
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
              <Box
                className="social-icon"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "bg.white",
                  padding: "12px",
                  borderRadius: "50px",
                  boxShadow: "-2px 6px 16px -1px #e6e9fd",
                  transition: "0.25s ease-in-out",

                  "&:hover": {
                    cursor: "pointer",
                    boxShadow: "0px 25px 50px 25px #e6e9fd",
                  },
                }}
              >
                <img
                  src={insta}
                  alt="Instagram"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          className="expert-card"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "bg.white",
            padding: "50px",
            borderRadius: "40px",
            boxShadow: "0 25px 50px 25px #f6f7ff",

            "&:first-child": {
              backgroundColor: "transparent",
              position: "relative",
              right: "-30px",
              boxShadow: "none",

              [theme.breakpoints.down("laptop")]: {
                position: "static",
              },
            },
            "&:last-child": {
              backgroundColor: "transparent",
              position: "relative",
              right: "30px",
              boxShadow: "none",

              [theme.breakpoints.down("laptop")]: {
                position: "static",
              },
            },
          }}
        >
          <img
            src={professor2}
            alt="Card"
            style={{
              maxWidth: "146px",
              maxHeight: "146px",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          />
          <Box
            className="card-info"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              className="card-header"
              sx={{
                color: "txt.secondary",
                fontSize: "fontSize.m",
                lineHeight: "125%",
                letterSpacing: "normal",
                fontWeight: "600",
              }}
            >
              Dermatologist
            </Typography>
            <Typography
              className="card-title"
              sx={{
                color: "txt.primary.medium",
                fontSize: "fontSize.xm",
                lineHeight: "125%",
                letterSpacing: "normal",
                marginTop: 1,
                fontWeight: "600",
              }}
            >
              Bella Sebastian
            </Typography>
            <Typography
              className="card-description"
              sx={{
                color: "txt.tertiary.medium",
                fontSize: "fontSize.sm",
                fontWeight: "400",
                marginTop: 1,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </Typography>
            <Box
              className="social-links"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                columnGap: 3,
                marginY: 3,
              }}
            >
              <Box
                className="social-icon"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "bg.white",
                  padding: "12px",
                  borderRadius: "50px",
                  boxShadow: "-2px 6px 16px -1px #e6e9fd",
                  transition: "0.25s ease-in-out",

                  "&:hover": {
                    cursor: "pointer",
                    boxShadow: "0px 25px 50px 25px #e6e9fd",
                  },
                }}
              >
                <img
                  src={twitter}
                  alt="Twitter"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
              <Box
                className="social-icon"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "bg.white",
                  padding: "12px",
                  borderRadius: "50px",
                  boxShadow: "-2px 6px 16px -1px #e6e9fd",
                  transition: "0.25s ease-in-out",

                  "&:hover": {
                    cursor: "pointer",
                    boxShadow: "0px 25px 50px 25px #e6e9fd",
                  },
                }}
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
              <Box
                className="social-icon"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "bg.white",
                  padding: "12px",
                  borderRadius: "50px",
                  boxShadow: "-2px 6px 16px -1px #e6e9fd",
                  transition: "0.25s ease-in-out",

                  "&:hover": {
                    cursor: "pointer",
                    boxShadow: "0px 25px 50px 25px #e6e9fd",
                  },
                }}
              >
                <img
                  src={insta}
                  alt="Instagram"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          className="expert-card"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "bg.white",
            padding: "50px",
            borderRadius: "40px",
            boxShadow: "0 25px 50px 25px #f6f7ff",

            "&:first-child": {
              backgroundColor: "transparent",
              position: "relative",
              right: "-30px",
              boxShadow: "none",

              [theme.breakpoints.down("laptop")]: {
                position: "static",
              },
            },
            "&:last-child": {
              backgroundColor: "transparent",
              position: "relative",
              right: "30px",
              boxShadow: "none",

              [theme.breakpoints.down("laptop")]: {
                position: "static",
              },
            },
          }}
        >
          <img
            src={professor3}
            alt="Card"
            style={{
              maxWidth: "146px",
              maxHeight: "146px",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          />
          <Box
            className="card-info"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              className="card-header"
              sx={{
                color: "txt.secondary",
                fontSize: "fontSize.m",
                lineHeight: "125%",
                letterSpacing: "normal",
                fontWeight: "600",
              }}
            >
              Stylist expert
            </Typography>
            <Typography
              className="card-title"
              sx={{
                color: "txt.primary.medium",
                fontSize: "fontSize.xm",
                lineHeight: "125%",
                letterSpacing: "normal",
                marginTop: 1,
                fontWeight: "600",
              }}
            >
              Lilly Adams
            </Typography>
            <Typography
              className="card-description"
              sx={{
                color: "txt.tertiary.medium",
                fontSize: "fontSize.sm",
                fontWeight: "400",
                marginTop: 1,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </Typography>
            <Box
              className="social-links"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                columnGap: 3,
                marginY: 3,
              }}
            >
              <Box
                className="social-icon"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "bg.white",
                  padding: "12px",
                  borderRadius: "50px",
                  boxShadow: "-2px 6px 16px -1px #e6e9fd",
                  transition: "0.25s ease-in-out",

                  "&:hover": {
                    cursor: "pointer",
                    boxShadow: "0px 25px 50px 25px #e6e9fd",
                  },
                }}
              >
                <img
                  src={twitter}
                  alt="Twitter"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
              <Box
                className="social-icon"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "bg.white",
                  padding: "12px",
                  borderRadius: "50px",
                  boxShadow: "-2px 6px 16px -1px #e6e9fd",
                  transition: "0.25s ease-in-out",

                  "&:hover": {
                    cursor: "pointer",
                    boxShadow: "0px 25px 50px 25px #e6e9fd",
                  },
                }}
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
              <Box
                className="social-icon"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "bg.white",
                  padding: "12px",
                  borderRadius: "50px",
                  boxShadow: "-2px 6px 16px -1px #e6e9fd",
                  transition: "0.25s ease-in-out",

                  "&:hover": {
                    cursor: "pointer",
                    boxShadow: "0px 25px 50px 25px #e6e9fd",
                  },
                }}
              >
                <img
                  src={insta}
                  alt="Instagram"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfessionalTeams;
