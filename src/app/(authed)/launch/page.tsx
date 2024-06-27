import { ROUTE_HOME, ROUTE_SIGN_IN } from "@/frontend/navigation/routes";
import { api } from "@/trpc/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect(ROUTE_SIGN_IN);
  }

  const user = await currentUser();

  const { id, emailAddresses } = user!;
  const { emailAddress: email } = emailAddresses[0];

  await api.user
    .launchUser({
      id,
      email: email!,
    })
    .catch(() => {
      return redirect(ROUTE_SIGN_IN);
    });

  redirect(ROUTE_HOME);
};
