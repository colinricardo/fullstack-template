import { ROUTE_HOME } from "@/frontend/navigation/routes";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(ROUTE_HOME);
}
