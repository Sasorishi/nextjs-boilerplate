import { faker } from "@faker-js/faker";

// Définition du type pour un utilisateur
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

class UserRepository {
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
