import React from "react";
import { motion } from "framer-motion";
import FirstGamingImg from "../../assets/game-img-1.jpg";
import SecondGamingImg from "../../assets/game-img-2.jpg";
import ThirdGamingImg from "../../assets/game-img-3.jpg";
import FourthGamingImg from "../../assets/game-img-4.jpg";
import { FaFireFlameCurved } from "react-icons/fa6";

const TrendingGames = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const gameCardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const games = [
    { img: FirstGamingImg, title: "Game 1" },
    { img: SecondGamingImg, title: "Game 2" },
    { img: ThirdGamingImg, title: "Game 3" },
    { img: FourthGamingImg, title: "Game 4" },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-[500px] flex flex-col justify-start gap-8 md:gap-20 items-center w-full max-w-[1280px] mx-auto px-4 py-4 md:py-8 text-white"
    >
      {/* Header Section */}
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="font-bold text-lg md:text-xl lg:text-2xl text-center sm:text-left">
          <h3>Currently trending games</h3>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button className="text-[#ffffff] border border-none bg-[#FA9021] py-2 px-4 rounded-[7px] w-[130px] hover:bg-[#e88419] hover:text-white transition-colors duration-300">
            See all
          </button>
        </motion.div>
      </motion.div>

      {/* Games Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full"
        variants={containerVariants}
      >
        {games.map((game, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-center items-center gap-4"
            variants={gameCardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              whileHover={{
                boxShadow: "0px 0px 20px rgba(250, 144, 33, 0.5)",
                transition: { duration: 0.3 },
              }}
              className="overflow-hidden rounded-[15px] w-full"
            >
              <motion.img
                src={game.img}
                alt={game.title}
                className="w-full aspect-[11/10] object-cover rounded-[15px]"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              />
            </motion.div>
            <motion.div
              className="flex flex-row justify-center items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * (index + 1) }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaFireFlameCurved className="text-[#FA9021]" />
              </motion.div>
              <div>50 players</div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TrendingGames;
