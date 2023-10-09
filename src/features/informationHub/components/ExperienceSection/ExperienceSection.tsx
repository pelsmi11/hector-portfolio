import { CardTechnology, CarrouselTechnologies } from "@/src/components";
import { LEARNED_TECHNOLOGIES } from "@/src/utils/constants";
import { CardExperience } from ".";
import { IExperience } from "@/src/interfaces";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useTranslation } from "next-i18next";

export const ExperienceSection = () => {
  const { t } = useTranslation();
  const Studies: IExperience[] = [
    {
      body: t("EXPERIENCE.UNIVERSITY.BODY"),
      date: t("EXPERIENCE.UNIVERSITY.DATE"),
      icon: <SchoolIcon />,
      title: t("EXPERIENCE.UNIVERSITY.TITLE"),
      jobPosition: t("EXPERIENCE.UNIVERSITY.JOB_POSITION"),
    },
    {
      body: t("EXPERIENCE.HIGH_SCHOOL.BODY"),
      date: t("EXPERIENCE.HIGH_SCHOOL.DATE"),
      icon: <SchoolIcon />,
      title: t("EXPERIENCE.HIGH_SCHOOL.TITLE"),
    },
  ];

  const experiences: IExperience[] = [
    {
      body: t("EXPERIENCE.GENESIS.BODY"),
      date: t("EXPERIENCE.GENESIS.DATE"),
      icon: <BusinessCenterIcon />,
      title: t("EXPERIENCE.GENESIS.TITLE"),
      jobPosition: t("EXPERIENCE.GENESIS.JOB_POSITION"),
    },
    {
      body: t("EXPERIENCE.JES.BODY"),
      date: t("EXPERIENCE.JES.DATE"),
      icon: <BusinessCenterIcon />,
      title: t("EXPERIENCE.JES.TITLE"),
      jobPosition: t("EXPERIENCE.JES.JOB_POSITION"),
    },
  ];
  return (
    <section className="bg-ui-gray-400 w-full py-8 px-6 min-h-[70vh]">
      <div className="container mx-auto">
        <div className="my-4">
          <h2 className="text-4xl font-bold">{t("EXPERIENCE.TITLE")}</h2>
          <p className="text-2xl mt-4">{t("EXPERIENCE.SUBTITLE")}</p>
        </div>
        <CarrouselTechnologies>
          {LEARNED_TECHNOLOGIES.map((technology) => (
            <CardTechnology technology={technology} key={technology.name} />
          ))}
        </CarrouselTechnologies>
        <div className="py-6 flex flex-wrap gap-6">
          <CardExperience
            title={t("EXPERIENCE.WORK_EXPERIENCE")}
            experiences={experiences}
          />
          <CardExperience
            title={t("EXPERIENCE.EDUCATION")}
            experiences={Studies}
          />
        </div>
      </div>
    </section>
  );
};
