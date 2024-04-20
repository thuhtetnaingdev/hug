import { injectable } from "inversify";

@injectable()
export class MessageService {
  public async createMessage(message: any) {
    return message;
  }
}
