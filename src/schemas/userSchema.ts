import { z } from "zod";

// Définition du schéma de validation pour un utilisateur
export const userSchema = z.object({
  id: z.string().uuid(), // id doit être un UUID
  name: z.string().min(3), // nom doit avoir au moins 3 caractères
  email: z.string().email(), // email doit être valide
  avatar: z.string().url(), // avatar doit être une URL valide
});

// Validation des données utilisateur
export const validateUser = (data: unknown) => {
  return userSchema.safeParse(data); // `safeParse` renvoie un résultat avec succès ou erreur
};
