import "reflect-metadata";
import "dotenv/config";
import { bootstrap } from "./utils";
import { userModule } from "./modules/user/user.module";
import { messageModule } from "./modules/message/message.module";
import { databaseModule } from "./infrastructure/database/mongoose.module";

const bootstrapFunction = bootstrap({
  modules: [userModule, messageModule],
  functionalInfras: [databaseModule],
  options: {
    errorHandler: true,
  },
});

export const hug = bootstrapFunction(app => {
  return {
    onBefore: () => {
      app.use(async (ctx, next) => {
        console.log("Before middleware");
        await next();
      });
    },
    onAfter: () => {
      app.use(async (ctx, next) => {
        console.log("After middleware");
        await next();
      });
    },
  };
})(3000);
