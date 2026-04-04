// src/components/mascot/CopperCrescent.jsx
import { motion } from 'framer-motion'

export default function CopperCrescent({ size = 40, style = {} }) {
  return (
    <motion.div
      style={{ display: 'inline-block', ...style }}
      animate={{
        rotate: 360,
        y: [0, -8, 0],
      }}
      transition={{
        rotate: { duration: 20, ease: 'linear', repeat: Infinity },
        y: { duration: 4, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' },
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M 20 4 A 16 16 0 1 1 4 20 A 10 10 0 1 0 20 4 Z"
          fill="var(--akagane)"
          opacity="0.85"
        />
      </svg>
    </motion.div>
  )
}
