// src/components/mascot/PanKun.jsx
import { motion, useReducedMotion } from 'framer-motion'

const floatVariants = {
  idle: {
    y: [0, -5, 0],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
  still: { y: 0 },
}

const bounceIn = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 12,
      delay: 0.7,
    },
  },
}

export default function PanKun({
  size = 80,
  color = 'currentColor',
  variant = 'default',
  animate = true,
  className = '',
}) {
  const height = Math.round(size * (70 / 80))
  const prefersReduced = useReducedMotion()
  const effectiveAnimate = animate && !prefersReduced

  const shouldFloat = effectiveAnimate && (variant === 'default' || variant === 'sitting')

  const svgContent = (
    <svg
      width={size}
      height={height}
      viewBox="0 0 80 70"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Pan-kun, the PAN 製パン所 mascot"
      role="img"
      className={className}
    >
      {variant !== 'peeking' && (
        <ellipse cx="40" cy="44" rx="32" ry="24" />
      )}
      {variant === 'peeking' && (
        <path d="M 8 44 A 32 24 0 0 1 72 44" />
      )}
      <path d="M 14 37 Q 27 12 40 20" />
      <path d="M 66 37 Q 53 12 40 20" />
      <line x1="28" y1="38" x2="32" y2="43" />
      <line x1="48" y1="38" x2="52" y2="43" />
      {variant !== 'peeking' && (
        <path d="M 34 50 Q 40 55 46 50" />
      )}
    </svg>
  )

  if (!effectiveAnimate) return svgContent

  return (
    <motion.div
      variants={bounceIn}
      initial="hidden"
      animate="visible"
      style={{ display: 'inline-block' }}
    >
      <motion.div
        variants={floatVariants}
        animate={shouldFloat ? 'idle' : 'still'}
        style={{ display: 'inline-block' }}
      >
        {svgContent}
      </motion.div>
    </motion.div>
  )
}
