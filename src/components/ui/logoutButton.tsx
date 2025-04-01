'use client'
import { logoutUser } from '@/services/auth/logoutService'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button' // adapte ce chemin si nécessaire

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logoutUser();
    router.push("/signin");
  };

  return (
    <Button variant="outline" onClick={handleLogout}>
      Déconnexion
    </Button>
  );
}
