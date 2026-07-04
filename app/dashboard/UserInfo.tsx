"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function UserInfo() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setEmail(user.email || "");
      }
    }

    loadUser();
  }, []);

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "20px",
      }}
    >
      <h2>👋 Welcome!</h2>
      <p>
        Logged in as: <strong>{email}</strong>
      </p>
    </div>
  );
}
