import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function HomePage({}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>
        Click <Link href="/admin">here</Link> to go to the admin page!
      </p>
    </div>
  );
}
