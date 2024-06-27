"use client";

import { useEffect } from "react";

export default async () => {
  useEffect(() => {
    throw Error("An intentional error!");
  }, []);

  return null;
};
