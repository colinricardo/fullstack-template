import { customAlphabet } from "nanoid";
import { v4 as uuidv4 } from "uuid";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const SIZE = 16;

const nanoid = customAlphabet(ALPHABET, SIZE);

export enum IdPrefix {
  Message = "msg_",
}

export const randomId = ({ prefix }: { prefix?: IdPrefix }) => {
  if (!prefix) {
    return randomUuid();
  }

  return `${prefix}${nanoid()}`;
};

export const randomUuid = () => {
  return uuidv4();
};
