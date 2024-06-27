import userGetters from "@/backend/getters/user";
import userSetters from "@/backend/setters/user";

export const getters = {
  user: userGetters,
};

export const setters = {
  user: userSetters,
};

export const db = {
  getters,
  setters,
};
