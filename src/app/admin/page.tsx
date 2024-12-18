import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // NextAuth config
import { redirect } from "next/navigation";
import UserForm from "@/components/UserForm";

export default async function ProtectedPage() {
  // Validate session on the server side
  const session = await getServerSession(authOptions);

  console.log(session);

  if (!session) {
    redirect("/login?callbackUrl=/admin"); // Redirect to login with callback
  }

  const user = session.user;

  // Session is valid
  return (
    <div className="container">
      <h1>Welcome, {user?.name}!</h1>
      <p className="mb-2">Fill in this form.</p>
      <UserForm />
    </div>
  );
}
