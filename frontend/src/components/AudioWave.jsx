import { motion } from "framer-motion";

export default function AudioWave({ active }) {
  return (
    <div className="flex items-end justify-center gap-[3px] h-16">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            height: active ? [8, 28 + (i % 5) * 6, 10] : 6,
          }}
          transition={{
            duration: 0.6,
            repeat: active ? Infinity : 0,
            delay: i * 0.03,
          }}
          className="w-1 rounded bg-gradient-to-t from-purple-500 to-pink-500"
        />
      ))}
    </div>
  );
}