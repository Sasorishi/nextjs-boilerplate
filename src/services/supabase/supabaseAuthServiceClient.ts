import { supabase } from "@/lib/utils/supabase/client";
import { ILoginService } from "@/services/auth/authService";

export class SupabaseAuthServiceClient implements ILoginService {
  async login(
    email: string,
    password: string,
  ): Promise<{ data: any; error: any }> {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    return { data, error };
  }
}
