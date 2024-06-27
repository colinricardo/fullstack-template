export const isProduction =
  process.env.ENV_TYPE === "production" ? true : false;

export const BACKEND_API =
  process.env.BACKEND_API || "http://127.0.0.1:5000/v1";
