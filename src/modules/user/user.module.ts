import { UserController } from "./user.controller";
import { UserUseCase } from "./user.use-case";
import { UserService } from "./user.service";
import { UserRepository } from "./user.repository";
import { UserRouter } from "./user.route";
import { HugModule } from "../../utils/module-container";

export const userModule = HugModule({
  controllers: [UserController],
  services: [UserService],
  repositories: [UserRepository],
  useCases: [UserUseCase],
  route: UserRouter,
});
