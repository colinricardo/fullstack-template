import Navbar from "@/frontend/components/layout/Navbar";
import { ROUTE_SIGN_IN } from "@/frontend/navigation/routes";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  if (!userId) {
    return redirect(ROUTE_SIGN_IN);
  }

  return <Navbar>{children}</Navbar>;
};
