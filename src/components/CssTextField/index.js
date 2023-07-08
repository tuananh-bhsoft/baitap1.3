import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const CssTextField = styled(TextField)(({ theme }) => ({
  width: "100%",

  "& label": {
    color: "#c5c5c5",
    fontSize: "1rem",
    fontWeight: "400",
    paddingLeft: "5px",
  },

  "& .MuiInputBase-root.MuiOutlinedInput-root": {
    borderRadius: "15px",

    "& fieldset": {
      borderColor: "#d9ddfe",
      backgroundColor: "white",
    },
  },
}));

export default CssTextField;
