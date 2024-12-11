import { motion } from "motion/react";
import happyTeam from "../../assets/bannerTeam/team1.jpg";
import programmingTeam from "../../assets/bannerTeam/team2.jpg";
const Banner = () => {
  return (
    <div>
      <div className="hero py-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-full lg:w-1/2">
            <motion.img
              animate={{
                y: [0, 50, 0],
                transition: { duration: 7, repeat: Infinity },
              }}
              src={happyTeam}
              className="max-w-sm rounded-t-[30px] rounded-br-[30px] border-l-8  border-b-8 border-l-indigo-600 border-b-indigo-600 "
            />
            <motion.img
              animate={{
                x: [200, 250, 200],
                transition: { duration: 7, repeat: Infinity, delay: 5 },
              }}
              src={programmingTeam}
              className="max-w-sm rounded-t-[30px] rounded-br-[30px] border-l-8  border-b-8 border-l-indigo-600 border-b-indigo-600 "
            />
          </div>
          <motion.div
            animate={{
              y: [0, 50, 0],
              transition: { duration: 3, repeat: Infinity },
            }}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-5xl font-bold">
              The <span className="text-indigo-600">Easiest Way</span> to Get
              Your New Job
            </h1>
            <p className="py-6">
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day
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
