"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Message = {
  role: "user" | "ai";
  text: string;
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Привет! Я AI-наставник продаж. Задай вопрос по урокам, клиентам или возражениям."
    }
  ]);

  async function send() {
    if (!text.trim() || loading) return;

    const userText = text;
    setText("");
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userText })
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: data.reply || "Не удалось получить ответ."
        }
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Ошибка подключения к AI-чату."
        }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {open && (
        <div
          className="card"
          style={{
            position: "fixed",
            right: 24,
            bottom: 92,
            width: 380,
            height: 520,
            padding: 18,
            display: "flex",
            flexDirection: "column",
            zIndex: 50
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <b>AI-наставник продаж</b>
              <div style={{ fontSize: 12, color: "#78716c" }}>
                Помогает по курсу и продажам
              </div>
            </div>

            <button className="btn btn-light" onClick={() => setOpen(false)}>
              <X size={16} />
            </button>
          </div>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              marginTop: 16,
              display: "flex",
              flexDirection: "column",
              gap: 10
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                  background: msg.role === "user" ? "#1c1917" : "#f5f5f4",
                  color: msg.role === "user" ? "white" : "#1c1917",
                  padding: 13,
                  borderRadius: 18,
                  maxWidth: "86%",
                  fontSize: 14,
                  lineHeight: 1.45
                }}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div style={{ fontSize: 13, color: "#78716c" }}>
                AI печатает...
              </div>
            )}
          </div>

          <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
            <input
              className="input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Например: как ответить на дорого?"
            />
            <button className="btn" onClick={send}>
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      <button
        className="btn"
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          right: 24,
          bottom: 24,
          borderRadius: 999,
          width: 60,
          height: 60,
          boxShadow: "0 18px 45px rgba(28,25,23,.18)"
        }}
      >
        <MessageCircle />
      </button>
    </>
  );
}