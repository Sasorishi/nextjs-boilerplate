import { loginUser } from "@/services/auth/loginService";

jest.mock("@/lib/utils/supabase/client", () => ({
  supabase: {
    auth: {
      signInWithPassword: jest.fn(),
    },
  },
}));

const { supabase } = require("@/lib/utils/supabase/client");

describe("loginUser", () => {
  it("should return data on successful login", async () => {
    const mockData = { user: { id: "abc123", email: "test@example.com" } };

    supabase.auth.signInWithPassword.mockResolvedValueOnce({
      data: mockData,
      error: null,
    });

    const result = await loginUser("test@example.com", "password123");

    expect(result.data).toEqual(mockData);
    expect(result.error).toBeNull();
    expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "password123",
    });
  });

  it("should return error on failed login", async () => {
    const mockError = { message: "Invalid credentials" };

    supabase.auth.signInWithPassword.mockResolvedValueOnce({
      data: null,
      error: mockError,
    });

    const result = await loginUser("wrong@example.com", "wrongpass");

    expect(result.data).toBeNull();
    expect(result.error).toEqual(mockError);
  });
});
