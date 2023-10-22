import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import {
  ButtonShareFacebook,
  ButtonShareLinkedin,
  ButtonShareWhatsapp,
} from "../ButtonsShareNetwork";

const actions = [
  {
    icon: <ButtonShareFacebook />,
    name: "Facebook",
  },
  { icon: <ButtonShareLinkedin />, name: "Linkedin" },
  { icon: <ButtonShareWhatsapp />, name: "Whatsapp" },
];

export const SpeedDialNetworks = () => {
  return (
    <Box>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        color="primary"
        icon={<ReplyAllIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            sx={{ backgroundColor: "transparent", boxShadow: "none" }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};
