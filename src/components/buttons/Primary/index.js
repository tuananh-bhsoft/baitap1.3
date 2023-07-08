import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const PrimaryButton = styled(Button)(({ theme }) => ({
  background: theme.palette.bg.primary,
  color: theme.palette.txt.white,
  fontSize: theme.typography.fontSize.m,
  padding: "12px 40px",
  border: "none",
  borderRadius: "50px",
  textTransform: "none",
  letterSpacing: "0.1rem",
  fontWeight: "600",

  "&:hover": {
    cursor: "pointer",
    background: theme.palette.bg.secondary.medium,
  },
}));

export default PrimaryButton;
