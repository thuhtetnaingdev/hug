import { injectable, inject } from "inversify";
import { UserUseCase } from "./user.use-case";
import { Context } from "koa";

@injectable()
export class UserController {
  constructor(@inject(UserUseCase) private readonly userUseCase: UserUseCase) {}

  public getUser = async (ctx: Context) => {
    const user = await this.userUseCase.getUser();
    ctx.body = { user };
    ctx.toJSON();
  };
}
