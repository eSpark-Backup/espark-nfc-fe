import { Box, Stack, Button, Typography } from "@mui/material";
import { AppleWallet, GoogleWallet } from "../../../assets/images/pngs";

const WalletButtons = ({ onAppleClick, onGoogleClick }) => {
  return (
    <Stack direction="column" spacing={0.5} justifyContent="center" mt={3}>
      {/* Apple Wallet Button */}
      <Button
        onClick={onAppleClick}
        variant="containedSecondary"
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "6px 10px",
          color: "#fff",
          textTransform: "none",
        }}
      >
        <Box
          component="img"
          src={AppleWallet}
          alt="Apple Wallet"
          sx={{
            width: { xs: 15, md: 22 },
            height: { xs: 15, md: 22 },
            marginRight: 1,
          }}
        />
        <Typography
          variant="body2"
          sx={{ fontSize: { xs: "10px", sm: "12px" }, textWrap: "nowrap" }}
        >
          Add to Apple Wallet
        </Typography>
      </Button>

      {/* Google Wallet Button */}
      <Button
        onClick={onGoogleClick}
        variant="containedSecondary"
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "6px 10px",
          color: "#fff",
          textTransform: "none",
        }}
      >
        <Box
          component="img"
          src={GoogleWallet}
          alt="Google Wallet"
          sx={{
            width: { xs: 15, md: 22 },
            height: { xs: 15, md: 22 },
            marginRight: 1,
          }}
        />
        <Typography
          variant="body2"
          sx={{ fontSize: { xs: "10px", sm: "12px" }, textWrap: "nowrap" }}
        >
          Add to Google Wallet
        </Typography>
      </Button>
    </Stack>
  );
};

export default WalletButtons;
