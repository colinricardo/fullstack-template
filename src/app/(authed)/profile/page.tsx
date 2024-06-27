import Counter from "@/frontend/components/Counter";
import { api } from "@/trpc/server";
import { auth } from "@clerk/nextjs/server";

export default async () => {
  const { userId } = auth();

  const { user } = await api.user.byId({ id: userId! });

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Profile</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h3 className="text-2xl font-bold tracking-tight">Hello profile!</h3>

          <p className="text-sm text-muted-foreground">
            You are signed in as: {user?.email}
          </p>

          <Counter />
        </div>
      </div>
    </>
  );
};
