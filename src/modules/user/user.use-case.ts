import { inject, injectable } from "inversify";
import { UserService } from "./user.service";
import { MessageService } from "../message/message.service";

@injectable()
export class UserUseCase {
  constructor(
    @inject(UserService) private readonly userService: UserService,
    @inject(MessageService) private readonly messageService: MessageService
  ) {}

  public async createUser(user: any) {
    return this.userService.createUser(user);
  }

  public async getUser() {
    const message = await this.messageService.createMessage(
      "Hello World: User Use Case"
    );
    return message;
  }
}
