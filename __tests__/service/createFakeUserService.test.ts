import { createFakeUser } from "@/services/createFakeUserService";
import { registerUser } from "@/services/auth/registerService";

// On mock le module qui contient `registerUser`
jest.mock("@/services/auth/registerService", () => ({
  registerUser: jest.fn(),
}));

describe("createFakeUser", () => {
  beforeEach(() => {
    // Mock des logs pour ne pas polluer le terminal
    jest.spyOn(console, "log").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  it("should return user info when registerUser succeeds", async () => {
    const mockEmail = "test@example.com";
    const mockPassword = "fakepass123";
    const mockUser = { id: "user123", email: mockEmail };

    // On force `faker` à donner des valeurs fixes
    jest
      .spyOn(require("@faker-js/faker").faker.internet, "email")
      .mockReturnValue(mockEmail);
    jest
      .spyOn(require("@faker-js/faker").faker.internet, "password")
      .mockReturnValue(mockPassword);

    (registerUser as jest.Mock).mockResolvedValueOnce({
      data: { user: mockUser },
      error: null,
    });

    const result = await createFakeUser();

    expect(result).toEqual({
      email: mockEmail,
      password: mockPassword,
      user: mockUser,
    });

    expect(registerUser).toHaveBeenCalledWith(mockEmail, mockPassword);
  });

  it("should return null when registerUser fails", async () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    (registerUser as jest.Mock).mockResolvedValueOnce({
      data: null,
      error: { message: "Something went wrong" },
    });

    const result = await createFakeUser();

    expect(result).toBeNull();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Erreur lors de la création de l’utilisateur :",
      "Something went wrong",
    );
  });
});
