import { BackgroundParticles } from "@/src/features/particles";
import { PORTFOLIO_IMAGES } from "@/src/utils/constants";
import { ImageContentHH, TextContentHH } from ".";

export const HeroHome = () => {
  return (
    <section
      className={` min-h-[70vh] bg-ui-black w-full relative overflow-hidden`}
    >
      <BackgroundParticles />
      <div
        className="container mx-auto flex flex-col lg:flex-row gap-4 items-center justify-between
       text-white pt-4 px-4 lg:px-6 min-h-[70vh] relative z-10"
      >
        <TextContentHH />

        <ImageContentHH urlImage={PORTFOLIO_IMAGES.hero.portraitPhotography} />
      </div>
    </section>
  );
};
