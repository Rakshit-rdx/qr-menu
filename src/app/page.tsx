"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase.from("test").select("*");
      if (error) {
        setMessage("✅ Supabase Connected (no table found yet)");
      } else {
        setMessage("✅ Supabase Connected");
      }
    };
    testConnection();
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">{message}</h1>
    </main>
  );
}
