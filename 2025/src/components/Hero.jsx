import { motion } from 'framer-motion'; 
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-hero-pattern bg-cover bg-[url('assets/herobg.png')]">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mr-5">
          <div className="flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-start">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className="text-[#915eff]">Ida

          </span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop <br 
            className="sm:block hidden"/> insanity 
          </p>
        </div>
      </div>
        <ComputersCanvas /> 
    
    </section>
  );
};

export default Hero;
