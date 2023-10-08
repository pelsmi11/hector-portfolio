import Timeline from "@mui/lab/Timeline";
import { CustomTimeLineItem } from ".";
import { FC } from "react";
import { IExperience } from "@/src/interfaces";

interface Props {
  title: string;
  experiences: IExperience[];
}

export const CardExperience: FC<Props> = ({ title, experiences }) => {
  return (
    <div className="w-full lg:w-[48%] xl:w-[49%] bg-ui-gray-200 shadow rounded py-6">
      <h3 className="text-center text-4xl font-bold ">{title}</h3>
      <div className="flex justify-start w-fit">
        <Timeline position="right">
          {experiences.map((experience) => (
            <CustomTimeLineItem
              body={experience.body}
              date={experience.date}
              icon={experience.icon}
              title={experience.title}
              key={experience.title}
              jobPosition={experience.jobPosition}
            />
          ))}
        </Timeline>
      </div>
    </div>
  );
};
