import { registerUser } from "@/services/auth/registerService";

// Mock Supabase
jest.mock("@/lib/utils/supabase/client", () => ({
  supabase: {
    auth: {
      signUp: jest.fn(),
    },
  },
}));

// Accès au mock après le jest.mock()
const { supabase: mockedSupabase } = require("@/lib/utils/supabase/client");

describe("registerUser", () => {
  it("should return data on successful signup", async () => {
    mockedSupabase.auth.signUp.mockResolvedValueOnce({
      data: { user: { id: "123", email: "test@example.com" } },
      error: null,
    });

    const result = await registerUser("test@example.com", "password123");

    expect(result.data).toEqual({
      user: { id: "123", email: "test@example.com" },
    });
    expect(result.error).toBeNull();
    expect(mockedSupabase.auth.signUp).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "password123",
    });
  });
});
