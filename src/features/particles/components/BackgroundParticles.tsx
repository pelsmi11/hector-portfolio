import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { PARTICLE_NETWORK_CONFIG } from "../utils/constants";

export const BackgroundParticles = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={PARTICLE_NETWORK_CONFIG as any}
      />
    </>
  );
};
