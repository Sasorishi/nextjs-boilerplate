import { logoutUser } from "@/services/auth/logoutService";

jest.mock("@/lib/utils/supabase/client", () => ({
  supabase: {
    auth: {
      signOut: jest.fn(),
    },
  },
}));

const { supabase } = require("@/lib/utils/supabase/client");

describe("logoutUser", () => {
  it("should call supabase.auth.signOut", async () => {
    await logoutUser();
    expect(supabase.auth.signOut).toHaveBeenCalled();
  });
});