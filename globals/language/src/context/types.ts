export type Language = 'RU' | 'EN'

export type ContextValue = [language: Language, setLanguage: (newState: Language) => void]
