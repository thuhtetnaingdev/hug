import "reflect-metadata";
import { bootstrap } from "./utils";
import { userModule } from "./modules/user/user.module";
import { messageModule } from "./modules/message/message.module";
import { databaseModule } from "./infrastructure/database/mongoose.module";

const bootstrapFunction = bootstrap({
  modules: [userModule, messageModule],
  functionalInfras: [databaseModule],
});

bootstrapFunction(app => {})(3000);
