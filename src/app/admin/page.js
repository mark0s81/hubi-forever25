import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // NextAuth config
import { redirect } from "next/navigation";
import UserForm from "@/components/UserForm";

export default async function ProtectedPage() {
  // Validate session on the server side
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login?callbackUrl=/admin"); // Redirect to login with callback
  }

  // Session is valid
  return (
    <div className="max-w-xs sm:max-w-sm mx-auto">
      <h1>Welcome, {session.user.name}!</h1>
      <p className="mb-2">Fill in this form.</p>
      <UserForm />
    </div>
  );
}
