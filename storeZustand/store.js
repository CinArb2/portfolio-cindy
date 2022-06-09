import create from 'zustand'

export const useStore = create((set) => ({
  isLight: false,
  isBig: false,
  growCircle: () => set(() => ({ isBig: true})),
  decreaseCircle: () => set(() => ({ isBig: false })),
  circleLight: () => set(() => ({ isLight: true})),
  circleDark: () => set(() => ({ isLight: false})),
}))

