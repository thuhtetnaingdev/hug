import { inject, injectable } from "inversify";
import { UserRepository } from "./user.repository";

@injectable()
export class UserService {
  private readonly userRepository: UserRepository;

  constructor(@inject(UserRepository) userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async createUser(user: any) {
    // return this.userRepository.createUser(user);
  }

  public getUser() {
    return {
      message: "Hello World: User Service",
      name: "John Doe",
    };
  }
}
