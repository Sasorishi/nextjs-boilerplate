import { userRepository } from "@/repositories/userRepository";
import { validateUser } from "@/schemas/userSchema";

class UserService {
  constructor(repository) {
    this.repository = repository;
  }

  getUsers(count) {
    const users = this.repository.getUsers(count);

    // Validation des utilisateurs avec Zod
    return users
      .map((user) => {
        const result = validateUser(user);
        if (!result.success) {
          // Si la validation échoue, on peut loguer ou traiter l'erreur
          console.error("Validation failed", result.error.errors);
          return null; // On peut aussi gérer les erreurs autrement, selon les besoins
        }
        return user;
      })
      .filter(Boolean); // On retire les utilisateurs invalides
  }
}

export const userService = new UserService(userRepository);
