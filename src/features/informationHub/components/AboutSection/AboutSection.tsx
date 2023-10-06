import { ImageAbout, InformationAbout } from ".";

export const AboutSection = () => {
  return (
    <section className="min-h-[70vh] w-full bg-ui-gray-200 pt-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-4 items-center">
        <ImageAbout />
        <InformationAbout />
      </div>
    </section>
  );
};
