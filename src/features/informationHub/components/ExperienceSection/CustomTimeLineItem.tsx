import { IExperience } from "@/src/interfaces";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Typography } from "@mui/material";
import { FC } from "react";

export const CustomTimeLineItem: FC<IExperience> = ({
  icon,
  date,
  title,
  body,
  jobPosition,
}) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{
          flex: "0 1 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          minWidth: "175px",
        }}
        align="right"
        variant="body2"
        color="text.secondary"
        className="hidden md:flex lg:hidden xl:flex"
      >
        {date}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: "primary.main" }} />
        <TimelineDot color="primary">{icon}</TimelineDot>
        <TimelineConnector sx={{ bgcolor: "primary.main" }} />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography variant="h5" component="span">
          {title}
        </Typography>
        <Typography variant="body1">{jobPosition}</Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="md:hidden lg:flex xl:hidden"
        >
          {date}
        </Typography>
        <Typography variant="body2">{body}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
};
