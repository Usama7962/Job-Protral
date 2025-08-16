"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [checked, setChecked] = useState(false); 

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.replace("/login");
      } else {
        setChecked(true);
      }
    };

    // Add a slight delay to ensure token is set
    const timeout = setTimeout(checkToken, 100);

    return () => clearTimeout(timeout);
  }, [router]);

  // jab tak check complete nahi hota kuch bhi render na karo
  if (!checked) {
    return null; // ya <div>Loading...</div> dikhado
  }

  return children;
}
