import prisma from "@/backend/prisma/client";
import { getUnixTimestamp } from "../utils/general";
import { IdPrefix, randomId } from "../utils/ids";

// We use this on the launch page to sync Clerk with our own db.
const launchUser = async ({ id, email }: { id: string; email: string }) => {
  const user = await prisma.user.upsert({
    where: {
      id,
    },

    update: {
      email,
      updatedAt: getUnixTimestamp(),
    },
    create: {
      id,
      email,
      createdAt: getUnixTimestamp(),
      updatedAt: getUnixTimestamp(),
    },
  });

  return { user };
};

const createUser = async ({ email }: { email: string }) => {
  const user = await prisma.user.create({
    data: {
      id: randomId({ prefix: IdPrefix.User }),
      email,
      createdAt: getUnixTimestamp(),
      updatedAt: getUnixTimestamp(),
    },
  });

  return { user };
};

export default {
  createUser,
  launchUser,
};
