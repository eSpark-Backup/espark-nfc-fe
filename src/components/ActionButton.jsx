import { Button, useTheme } from "@mui/material";

const ActionButton = ({ icon, onClick, text }) => {
  const theme = useTheme();

  return (
    <Button
      variant="outlined"
      endIcon={<img src={icon} alt={text} />}
      onClick={onClick}
      disableRipple
      sx={{
        background: theme.palette.secondary.light,
        borderColor: "divider",
        padding: "7.5px 20px",
        lineHeight: "20px",
        fontSize: "14px",
        letterSpacing: "-0.015em",
        fontWeight: 400,
        color: theme.palette.action.selected,
      }}
    >
      {text}
    </Button>
  );
};

export default ActionButton;
