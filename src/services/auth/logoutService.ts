import { supabase } from "@/lib/utils/supabase/client";

export async function logoutUser() {
  await supabase.auth.signOut();
}
