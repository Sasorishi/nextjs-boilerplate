import { supabase } from "@/lib/utils/supabase/client"

export async function loginUser(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
  
    return { data, error }
}   