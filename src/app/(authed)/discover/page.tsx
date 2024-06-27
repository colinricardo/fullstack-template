import Counter from "@/frontend/components/Counter";
import { currentUser } from "@clerk/nextjs/server";

export default async () => {
  const user = await currentUser();
  const { emailAddresses } = user!;
  const { emailAddress: email } = emailAddresses[0];

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Discover</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h3 className="text-2xl font-bold tracking-tight">Hello discover!</h3>

          <p className="text-sm text-muted-foreground">
            You are signed in as: {email}
          </p>

          <Counter />
        </div>
      </div>
    </>
  );
};
