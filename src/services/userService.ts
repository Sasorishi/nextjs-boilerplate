import { userRepository } from "@/repositories/userRepository";
import UserModel from "@/models/user";
import { IUserRepository } from "@/repositories/userRepository";

class UserService {
  private repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  getUsers(count: number): UserModel[] {
    // Utilisation de la classe UserModel
    const users = this.repository.getUsers(count);

    return users
      .map((user) => UserModel.fromData(user)) // Création des instances avec la méthode fromData
      .filter(Boolean) as UserModel[]; // Filtrage des utilisateurs invalides
  }
}

export const userService = new UserService(userRepository);
