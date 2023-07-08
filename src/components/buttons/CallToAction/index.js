import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CallToActionButton = styled(Button)(({ theme }) => ({
  background: theme.palette.bg.primary,
  color: theme.palette.txt.white,
  fontSize: theme.typography.fontSize.m,
  padding: "12px 40px",
  border: "none",
  borderRadius: "50px",
  boxShadow: `0px 17px 22px ${theme.palette.bg.tertiary}`,
  transition: "0.25s ease-in-out",
  textTransform: "none",
  letterSpacing: "0.1rem",
  fontWeight: "600",

  "&:hover": {
    cursor: "pointer",
    background: theme.palette.bg.secondary.medium,
    boxShadow: `0px 25px 50px 25px ${theme.palette.shadow.secondary}`,
  },
}));

export default CallToActionButton;
