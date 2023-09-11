import { Button as MUIButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Footer = styled("footer")`
  background-color: #1976d2;
  color: white;
  padding: 1rem;
  margin-top: 2rem;
`;

/**
 * Button styled component for the nav links
 *
 * shouldForwardProp is here to not pass the current props to the Mui Button
 *
 * @returns React.Component
 */
export const Button = styled(MUIButton, {
  shouldForwardProp: (prop) => prop !== "current",
})(({ theme, current }) => ({
  margin: `${theme.spacing(2)} 0`,
  color: "white",
  borderBottom: current ? "3px solid white" : null,
}));
