import { faker } from "@faker-js/faker";

class UserRepository {
  getUsers(count) {
    return Array.from({ length: count }, () => ({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    }));
  }
}

export const userRepository = new UserRepository();
