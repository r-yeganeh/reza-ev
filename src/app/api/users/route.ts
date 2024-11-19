import { NextRequest, NextResponse } from "next/server";
import { userService } from "../../../services/UserService";

export async function GET(req: NextRequest) {
  // toDo: with query parameters for filtering

  const users = userService.getUsers();

  return NextResponse.json(
    {
      users: users,
      message: "this is a get request",
    },
    { status: 200 }
  );
}
