"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  function login() {
    document.cookie = "demo_auth=true; path=/";
    window.location.href = "/";
  }

  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}>
      <div className="card" style={{ padding: 32, width: "100%", maxWidth: 420 }}>
        <h1>Вход</h1>
        <p style={{ color: "#78716c" }}>Демо-авторизация для сотрудников.</p>

        <label>Email</label>
        <input
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="manager@company.com"
          style={{ marginTop: 8, marginBottom: 16 }}
        />

        <label>Пароль</label>
        <input className="input" type="password" placeholder="demo" style={{ marginTop: 8, marginBottom: 20 }} />

        <button className="btn" onClick={login} style={{ width: "100%" }}>
          Войти
        </button>

        <p style={{ fontSize: 13, color: "#a8a29e" }}>
          Для MVP пароль не проверяется.
        </p>
      </div>
    </main>
  );
}