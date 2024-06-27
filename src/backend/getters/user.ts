import prisma from "@/backend/prisma/client";

const getUserById = async ({ id }: { id: string }) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return { user };
};

export default {
  getUserById,
};
