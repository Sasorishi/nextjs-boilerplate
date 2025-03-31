import { userRepository } from "@/repositories/userRepository";

class UserService {
  constructor(repository) {
    this.repository = repository;
  }

  getUsers(count) {
    const users = this.repository.getUsers(count);
    return users.map((user) => ({
      ...user,
      initials: user.name
        .split(" ")
        .map((n) => n[0])
        .join(""), // Ajoute des initiales (ex: John Doe → JD)
    }));
  }
}

export const userService = new UserService(userRepository);
