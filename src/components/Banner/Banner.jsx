import { motion } from "framer-motion"; // Corrected import
import happyTeam from "../../assets/bannerTeam/team1.jpg";
import programmingTeam from "../../assets/bannerTeam/team2.jpg";

const Banner = () => {
  return (
    <div className="pt-12 pb-20">
      <div className="hero py-14">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-full lg:w-1/2">
            <motion.img
              animate={{
                y: [0, 50, 0],
                scale: [1, 1.05, 1],
                opacity: [1, 0.8, 1],
                transition: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              src={happyTeam}
              className="max-w-sm rounded-t-[30px] rounded-br-[30px] border-l-8 border-b-8 border-l-indigo-600 border-b-indigo-600"
            />

            <motion.img
              animate={{
                x: [200, 250, 200],
                opacity: [1, 0.8, 1],
                scale: [1, 1.05, 1],
                transition: {
                  duration: 7,
                  repeat: Infinity,
                  delay: 5,
                  ease: "easeInOut",
                },
              }}
              src={programmingTeam}
              className="max-w-sm rounded-t-[30px] rounded-br-[30px] border-l-8 border-b-8 border-l-indigo-600 border-b-indigo-600"
            />
          </div>
          <motion.div
            animate={{
              y: [0, 50, 0],
              opacity: [1, 0.8, 1],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-5xl font-bold">
              The <span className="text-indigo-600">Easiest Way</span> to Get
              Your New Job
            </h1>
            <p className="py-6">
              Each month, more than 3 million job seekers turn to this website
              in their search for work, making over 140,000 applications every
              single day.
            </p>
            <button className="btn bg-indigo-600 hover:bg-indigo-600 text-white">
              Get Started
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
