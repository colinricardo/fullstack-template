export const getUnixTimestamp = () => {
  return Math.floor(Date.now() / 1000);
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const prefixHttpIfMissing = (url: string) => {
  let urlToUse = url;

  if (!url.startsWith("http")) {
    urlToUse = `https://${url}`;
  }

  return urlToUse;
};

export const createSlugFromString = (str: string) => {
  return str
    .toLowerCase()
    .replace(/ /g, "_")
    .replace(/-/g, "_")
    .replace(/[^\w-]+/g, "");
};
