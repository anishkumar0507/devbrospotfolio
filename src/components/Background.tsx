import { motion } from "framer-motion";
import logo from "../assets/devbros-logo.svg";

export default function Background() {
  return (
    <>
      {/* Base Dark Background */}
      <div className="fixed inset-0 bg-slate-950 z-[-100]" />

      {/* Gradient Layer */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-[-90]" />

      {/* CENTER-TOP WATERMARK */}
      <div className="fixed inset-0 flex items-start justify-center pt-24 pointer-events-none z-[-80]">

        <motion.img
          src={logo}
          animate={{
            scale: [1, 1.06, 1],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            w-[1400px]
            md:w-[1800px]
            lg:w-[2000px]
            max-w-none
            opacity-[0.14]
            blur-[0.3px]
            select-none
          "
        />

      </div>

      {/* Glow Orb Top Left */}
      <div className="fixed top-[-200px] left-[-200px] w-[600px] h-[600px] bg-indigo-600/30 blur-3xl rounded-full z-[-70]" />

      {/* Glow Orb Bottom Right */}
      <div className="fixed bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-600/30 blur-3xl rounded-full z-[-70]" />

    </>
  );
}