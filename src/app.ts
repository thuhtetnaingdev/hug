import "reflect-metadata";
import "dotenv/config";
import { bootstrap } from "./utils";
import { userModule } from "./modules/user/user.module";
import { messageModule } from "./modules/message/message.module";
import { databaseModule } from "./infrastructure/database/mongoose.module";

const bootstrapFunction = bootstrap({
  modules: [userModule, messageModule],
  functionalInfras: [databaseModule],
});

export const hug = bootstrapFunction(app => {})(3000);
