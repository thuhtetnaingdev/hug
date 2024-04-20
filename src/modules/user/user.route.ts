import { UserController } from "./user.controller";
import { inject, injectable } from "inversify";
import { HugRouter, HugRouterInterface } from "../../utils/hug-router";

@injectable()
export class UserRouter extends HugRouter implements HugRouterInterface {
  constructor(
    @inject(UserController) private readonly userController: UserController
  ) {
    super();
  }

  routes = () => {
    this.router.get("/user", this.userController.getUser);
  };
}
