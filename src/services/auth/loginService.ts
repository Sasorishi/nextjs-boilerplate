import { SupabaseAuthServiceClient } from "@/services/supabase/supabaseAuthServiceClient";
import { ILoginService } from "./authService";

const authService = new SupabaseAuthServiceClient();

export class LoginService implements ILoginService {
  async login(email: string, password: string) {
    return await authService.login(email, password);
  }
}
