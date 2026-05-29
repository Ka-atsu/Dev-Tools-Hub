export const encodeBase64 = (str: string): string => {
  try {
    return btoa(unescape(encodeURIComponent(str)));
  } catch (e) {
    return "Error encoding";
  }
};

export const decodeBase64 = (str: string): string => {
  try {
    return decodeURIComponent(escape(atob(str)));
  } catch (e) {
    return "Invalid Base64 string";
  }
};
