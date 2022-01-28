import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const Item = (customColor) =>
{
    
    const item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(1),
      backgroundColor: customColor
        ? customColor
        : theme.palette.mode === "dark"
        ? "#121212"
        : "#fbf659",
      height: "100%",
      textAlign: "center",
      borderRadius: "0",
      color: theme.palette.text.secondary,
      boxShadow: `5px 5px 10px 0px ${
        theme.palette.mode === "dark" ? "#000" : "#797979"
      }`,
    }));

  return (item)
}

  // const x = add(5,2)(4,2)(3,5)(4,5)