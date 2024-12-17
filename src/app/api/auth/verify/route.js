import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    // Hardcoded credentials for example
    const hardcodedUser = {
      id: 1,
      name: "test",
      email: "email@test.it",
      password: "1234",
    };
    const {id, name, email} = hardcodedUser;

    if (username === name && password === hardcodedUser.password) {
      return NextResponse.json(
        {
          id,
          name,
          email
        },
        { status: 200 }
      );
    }

    // Invalid credentials
    return NextResponse.json(
      { error: "Invalid username or password" },
      { status: 401 }
    );

  } catch (error) {
    return NextResponse.json(
      { error },
      { status: 500 }
    );
  }
}