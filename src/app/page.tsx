import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js";
import { redirect } from "next/navigation";

export default async function HomePage({}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const message = "Benvenuto nella pagina principale!";
  return (
    <div>
      <h1>Pagina Principale</h1>
      <p>{message}</p>
    </div>
  );
}
