import { ContainerModule } from "inversify";
import { connectDatabase } from "./mongoose.connection";

export const databaseModule = new ContainerModule(connectDatabase);
