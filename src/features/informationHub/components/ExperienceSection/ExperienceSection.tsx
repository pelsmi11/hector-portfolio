import { CardTechnology, CarrouselTechnologies } from "@/src/components";
import { LEARNED_TECHNOLOGIES } from "@/src/utils/constants";
import { CardExperience } from ".";
import { IExperience } from "@/src/interfaces";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

export const ExperienceSection = () => {
  const Studies: IExperience[] = [
    {
      body: "Ingenieria en sistemas",
      date: "Feb 2016 - Nov 2020",
      icon: <SchoolIcon />,
      title: "Universidad Mariano Galvez",
      jobPosition: "Graduado",
    },
    {
      body: "Bachillerato en ciencias y letras con orientacion en computación",
      date: "Ene 2014 - Oct 2015",
      icon: <SchoolIcon />,
      title: "Liceo jutiapa",
    },
  ];

  const experiences: IExperience[] = [
    {
      body: "Encargado de la creasion de sistemas web",
      date: "Mar 2022 - Actual",
      icon: <BusinessCenterIcon />,
      title: "Funación genesis empresarial",
      jobPosition: "Analista programador",
    },
    {
      body: "Participación del proyecto de creación de Data warehouse",
      date: "Ago 2021 - Mar 2022",
      icon: <BusinessCenterIcon />,
      title: "Ministerio Público de astrea",
      jobPosition: "Ingeniero de Base de datos",
    },
  ];
  return (
    <section className="bg-ui-gray-400 w-full py-8 px-6 ">
      <div className="container mx-auto">
        <p className="text-4xl font-bold">Mis skills</p>
        <CarrouselTechnologies>
          {LEARNED_TECHNOLOGIES.map((technology) => (
            <CardTechnology technology={technology} key={technology.name} />
          ))}
        </CarrouselTechnologies>
        <div className="py-6 flex flex-wrap gap-6">
          <CardExperience
            title="Experiencia Laboral"
            experiences={experiences}
          />
          <CardExperience title="Estudios" experiences={Studies} />
        </div>
      </div>
    </section>
  );
};
