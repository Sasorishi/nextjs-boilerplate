import { faker } from "@faker-js/faker";
import { User } from "@/types/user";

// Interface UserRepository pour définir la signature des méthodes
export interface IUserRepository {
  getUsers(count: number): User[]; // Typage de la méthode getUsers
}

class UserRepository implements IUserRepository {
  // Typage de la méthode getUsers pour renvoyer un tableau d'utilisateurs
  getUsers(count: number): User[] {
    return Array.from({ length: count }, () => ({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    }));
  }
}

export const userRepository = new UserRepository();
