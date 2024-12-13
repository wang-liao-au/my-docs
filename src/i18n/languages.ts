export const allLanguages = {
  en: 'English',
} as const

const twoLanguages = {
  en: 'English',
} as const

export default import.meta.env?.PUBLIC_TWO_LANG ? twoLanguages : allLanguages

export const rtlLanguages = new Set(['ar'])
