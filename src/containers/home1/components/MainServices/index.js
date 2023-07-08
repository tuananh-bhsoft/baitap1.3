import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

import animation1 from "../../../../assets/imgs/service/Animation1.svg";
import animation2 from "../../../../assets/imgs/service/Animation2.svg";
import animation3 from "../../../../assets/imgs/service/Animation3.svg";

const MainServices = () => {
  const theme = useTheme();

  return (
    <Box
      className="main-services"
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

          [theme.breakpoints.down("laptop")]: {
            width: "60%",
          },
          [theme.breakpoints.down("mobile")]: {
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
          Main Services
        </Typography>
        <Typography
          className="section-title"
          sx={{
            color: "txt.primary.medium",
            fontSize: "fontSize.lg",
            lineHeight: "125%",
            letterSpacing: "normal",
            fontWeight: "600",
            width: "40%",

            [theme.breakpoints.down("laptop")]: {
              width: "90%",
            },
          }}
        >
          Learn services to focus on your beauty
        </Typography>
        <Typography
          className="section-description"
          sx={{
            color: "txt.tertiary.medium",
            fontSize: "fontSize.m",
            fontWeight: 400,
            width: "80%",

            [theme.breakpoints.down("laptop")]: {
              width: "150%",
            },
            [theme.breakpoints.down("mobile")]: {
              width: "150%",
            },
          }}
        >
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.
        </Typography>
      </Box>
      <Box
        className="section-content"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, auto)",
          columnGap: 5,
          marginTop: 6,

          [theme.breakpoints.down("laptop")]: {
            gridTemplateColumns: "repeat(2, auto)",
            rowGap: 5,
          },
          [theme.breakpoints.down("tablet")]: {
            gridTemplateColumns: "auto",
          },
        }}
      >
        <Box
          className="service-card"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "bg.white",
            padding: 4,
            borderRadius: "40px",
            boxShadow: "0 25px 50px 25px #f6f7ff",
            transition: "0.25s ease-in-out",
            maxWidth: "100%",

            "&:hover": {
              boxShadow: "0px 25px 50px 25px #e6e9fd",
            },
          }}
        >
          <img src={animation1} alt="Card" maxWidth="166px" maxHeight="166px" />
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
              className="card-title"
              sx={{
                color: "txt.primary.medium",
                fontWeight: "600",
                fontSize: "fontSize.xm",
                lineHeight: "125%",
                letterSpacing: "normal",
                marginTop: 1,
              }}
            >
              Beauty consultation
            </Typography>
            <Typography
              className="card-description"
              sx={{
                color: "txt.tertiary.medium",
                fontSize: "fontSize.sm",
                fontWeight: "400",
                marginTop: 1,
                width: "110%",
              }}
            >
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </Typography>
          </Box>
        </Box>
        <Box
          className="service-card"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "bg.white",
            padding: 4,
            borderRadius: "40px",
            boxShadow: "0 25px 50px 25px #f6f7ff",
            transition: "0.25s ease-in-out",
            maxWidth: "100%",

            "&:hover": {
              boxShadow: "0px 25px 50px 25px #e6e9fd",
            },
          }}
        >
          <img src={animation2} alt="Card" maxWidth="166px" maxHeight="166px" />
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
              className="card-title"
              sx={{
                color: "txt.primary.medium",
                fontWeight: "600",
                fontSize: "fontSize.xm",
                lineHeight: "125%",
                letterSpacing: "normal",
                marginTop: 1,
              }}
            >
              Skin treatments
            </Typography>
            <Typography
              className="card-description"
              sx={{
                color: "txt.tertiary.medium",
                fontSize: "fontSize.sm",
                fontWeight: "400",
                marginTop: 1,
                width: "110%",
              }}
            >
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </Typography>
          </Box>
        </Box>
        <Box
          className="service-card"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "bg.white",
            padding: 4,
            borderRadius: "40px",
            boxShadow: "0 25px 50px 25px #f6f7ff",
            transition: "0.25s ease-in-out",
            maxWidth: "100%",

            "&:hover": {
              boxShadow: "0px 25px 50px 25px #e6e9fd",
            },
          }}
        >
          <img src={animation3} alt="Card" maxWidth="166px" maxHeight="166px" />
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
              className="card-title"
              sx={{
                color: "txt.primary.medium",
                fontWeight: "600",
                fontSize: "fontSize.xm",
                lineHeight: "125%",
                letterSpacing: "normal",
                marginTop: 1,
              }}
            >
              Beauty product
            </Typography>
            <Typography
              className="card-description"
              sx={{
                color: "txt.tertiary.medium",
                fontSize: "fontSize.sm",
                fontWeight: "400",
                marginTop: 1,
                width: "110%",
              }}
            >
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainServices;
