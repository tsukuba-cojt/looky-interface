import { createAnimations } from "@tamagui/animations-moti";

export const animations = createAnimations({
  "75ms": {
    type: "timing",
    duration: 75,
  },
  "100ms": {
    type: "timing",
    duration: 100,
  },
  "200ms": {
    type: "timing",
    duration: 200,
  },
  bouncy: {
    type: "spring",
    damping: 9,
    mass: 0.9,
    stiffness: 150,
  },
  lazy: {
    type: "spring",
    damping: 18,
    stiffness: 50,
  },
  slow: {
    type: "spring",
    damping: 15,
    stiffness: 40,
  },
  quick: {
    type: "spring",
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
  medium: {
    damping: 15,
    stiffness: 120,
    mass: 1,
  },
  pulse: {
    type: "timing",
    duration: 1000,
    loop: true,
    repeatReverse: true,
  },
});
