import { NextRequest, NextResponse } from "next/server";
import { manufacturerService } from "../../../services/ManufacturerService";
import { Manufacturer } from "@/types";

export async function POST(req: NextRequest) {
  const input: Manufacturer = await req.json();
  manufacturerService.createManufacturer({
    _id: undefined,
    userIds: [],
    name: input.name,
    industry: input.industry,
    contactPerson: input.contactPerson,
  });

  return NextResponse.json(
    {
      // man: man,
      message: "Man created",
    },
    { status: 201 }
  );

  /*const man = await manufacturerService.createManufacturer();

  return NextResponse.json(
    {
      man: man,
      message: "User added",
    },
    { status: 200 }
  );*/
}
