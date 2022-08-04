export const extractFragment = (key: string, data: any[]) =>
  data?.filter((fragment) => fragment)[0]?.[key] || undefined
