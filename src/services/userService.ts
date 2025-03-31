import { userRepository } from "@/repositories/userRepository";
import { validateUser } from "@/schemas/userSchema";

interface UserRepository {
  getUsers(count: number): User[]; // Typage de la méthode getUsers du repository
}

class UserService {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  getUsers(count: number): User[] {
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
      .filter(Boolean) as User[]; // On retire les utilisateurs invalides et on type le retour
  }
}

export const userService = new UserService(userRepository);
