"use client";

import { useState } from "react";
import { createFakeUser } from "@/services/createFakeUserService";

export default function FakerPage() {
  const [status, setStatus] = useState("");

  const handleCreateFakeUser = async () => {
    setStatus("Création en cours...");
    const user = await createFakeUser();

    if (user) {
      setStatus(`✅ Utilisateur créé : ${user.email} / ${user.password}`);
    } else {
      setStatus("❌ Échec de la création");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
      <h1 className="text-xl font-bold mb-4">Créer un utilisateur fictif</h1>

      <button
        onClick={handleCreateFakeUser}
        className="bg-purple-600 text-white w-full py-2 rounded mb-4"
      >
        Générer un compte
      </button>

      {status && <p className="text-sm text-gray-700">{status}</p>}
    </div>
  );
}
