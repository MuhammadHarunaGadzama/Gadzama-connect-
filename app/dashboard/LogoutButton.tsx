"use client";

import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <button
      onClick={handleLogout}
      style={{
        background: "#dc2626",
        color: "white",
        padding: "12px 20px",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        marginTop: "20px",
        fontWeight: "bold",
      }}
    >
      🚪 Logout
    </button>
  );
}
