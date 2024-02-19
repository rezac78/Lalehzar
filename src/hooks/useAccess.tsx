import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { jwtDecode } from "jwt-decode";
const useAccess = () => {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/').then(() => setLoading(false));
      return;
    }
    try {
      const decodedUser: string = jwtDecode(token);
      setUser(decodedUser);
      setLoading(false);
    } catch (error) {
      console.error('Token decoding error:', error);
      localStorage.removeItem('token');
      router.push('/').then(() => setLoading(false));
    }
  }, [router]);

  return { user, loading };
};

export default useAccess;
