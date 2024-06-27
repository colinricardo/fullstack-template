import { customAlphabet } from "nanoid";
import { v4 as uuidv4 } from "uuid";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const SIZE = 16;
const SIZE_BIG = 48;

const nanoid = customAlphabet(ALPHABET, SIZE);
const _nanoid = customAlphabet(ALPHABET, SIZE_BIG);

export enum IdPrefix {
  User = "user_", // This is set by Clerk anyway.
  Organization = "org_",

  ApiKeyIdProduction = "skid_live_",
  ApiKeyIdDevelopment = "skid_test_",

  ApiKeyProduction = "sk_live_",
  ApiKeyDevelopment = "sk_test_",

  Session = "ses_",
  Correlation = "cor_",
}

export const randomId = ({ prefix }: { prefix?: IdPrefix }) => {
  if (!prefix) {
    return randomUuid();
  }

  if (
    prefix === IdPrefix.ApiKeyProduction ||
    prefix === IdPrefix.ApiKeyDevelopment
  ) {
    return `${prefix}${_nanoid()}`;
  }

  return `${prefix}${nanoid()}`;
};

export const randomUuid = () => {
  return uuidv4();
};
