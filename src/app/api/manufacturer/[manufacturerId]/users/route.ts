/*

POST /api/manufacturer/{manufacturerId}/users 
(to add users to a manufacturer)

*/

import { NextRequest, NextResponse } from "next/server";
import { manufacturerService } from "../../[manufacturerId]/../../../../services/ManufacturerService";

export async function POST(req: NextRequest) {
  // toDo: with query parameters for filtering

  manufacturerService.addUsersToManufacturer();

  return NextResponse.json(
    {
      message: "User added",
    },
    { status: 200 }
  );
}
