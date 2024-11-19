import { GET } from "../app/api/users/route";
import { sampleUsers } from "SAMPLE_DATA";
import connectDB from "@/lib/mongoose";
import { Manufacturer } from "@/types";
import { Manufacturer as ManufacturerModel } from "@/models/manufacturer.model";

/*type CreateMan = {
  name: string;
  industry: string;
  contactPerson: {
    name: string;
    email: string;
    phone: string;
  };
};*/

export class ManufacturerService {
  constructor() {}

  async createManufacturer(input: Manufacturer) {
    // toDo: validate input

    await connectDB();
    const manufacturer = await ManufacturerModel.create({
      name: input.name,
      industry: input.industry,
      //location: Address;
      contactPerson: {
        name: input.contactPerson.name,
        email: input.contactPerson.email,
        phone: input.contactPerson.phone,
      },
    });

    return manufacturer;
  }

  async addUsersToManufacturer() {
    // toDo: add user
  }
}

const manufacturerService = new ManufacturerService();
export { manufacturerService };
