// New service for generating a fake user
import { supabase } from "@/lib/utils/supabase/client";
import { faker } from "@faker-js/faker";

export async function createFakeUser() {
  const email = faker.internet.email();
  const password = faker.internet.password();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error(
      "Erreur lors de la création de l’utilisateur :",
      error.message,
    );
    return null;
  }

  console.log("Utilisateur créé :", email, password);
  return { email, password, user: data.user };
}
