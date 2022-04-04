export const convertObjectToArray = (object: any, ignoredKeys: any[]) => {
  return Object.entries(object).filter(([key]) => !ignoredKeys.includes(key)).map(([_, value]) => value);
}
