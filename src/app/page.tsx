"use client";

import Link from "next/link";
import { lessons } from "@/data/mockData";
import { BookOpen, Sparkles, CheckCircle } from "lucide-react";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main>
      <header style={{ padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
  <b>Studio LMS</b>
  <div style={{ display: "flex", gap: 12 }}>
    <Link className="btn btn-light" href="/admin">Админка</Link>
    <Link className="btn btn-light" href="/login">Войти</Link>
  </div>
</header>

      <section style={{ padding: "40px", maxWidth: 1180, margin: "0 auto" }}>
        <div
  className="card"
  style={{
    padding: 48,
    display: "grid",
    gridTemplateColumns: "1.2fr .8fr",
    gap: 32,
    background:
      "linear-gradient(135deg, rgba(255,255,255,.9), rgba(245,239,229,.85))"
  }}
>
  <div>
    <div
      style={{
        display: "inline-flex",
        gap: 8,
        alignItems: "center",
        background: "#1c1917",
        color: "white",
        padding: "9px 14px",
        borderRadius: 999,
        fontSize: 14
      }}
    >
      AI LMS · Продажи · Адаптация
    </div>

    <h1
      style={{
        fontSize: 56,
        lineHeight: 1,
        margin: "26px 0 18px",
        letterSpacing: "-2px"
      }}
    >
      Обучение менеджеров продажам без хаоса
    </h1>

    <p style={{ fontSize: 19, color: "#78716c", maxWidth: 680, lineHeight: 1.55 }}>
      Видеоуроки, материалы, сценарии общения и AI-наставник, который помогает сотруднику прямо во время обучения.
    </p>

    <div style={{ marginTop: 30, display: "flex", gap: 12 }}>
      <Link className="btn" href="/course/1">Начать обучение</Link>
      <Link className="btn btn-light" href="/login">Войти как сотрудник</Link>
    </div>
  </div>

  <div
    style={{
      display: "grid",
      gap: 14
    }}
  >
    {[
      ["4", "урока в MVP"],
      ["AI", "наставник в чате"],
      ["24/7", "ответы по материалам"]
    ].map(([big, small]) => (
      <div key={big} className="card" style={{ padding: 22 }}>
        <div style={{ fontSize: 34, fontWeight: 800 }}>{big}</div>
        <div style={{ color: "#78716c" }}>{small}</div>
      </div>
    ))}
  </div>
</div>

        <h2 style={{ marginTop: 40 }}>Список уроков</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {lessons.map((lesson) => (
            <Link key={lesson.id} href={`/course/${lesson.id}`} className="card" style={{ padding: 22 }}>
              <CheckCircle size={20} />
              <h3>{lesson.title}</h3>
              <p style={{ color: "#78716c" }}>{lesson.description}</p>
              <small>{lesson.duration}</small>
            </Link>
          ))}
        </div>
      </section>

      <ChatWidget />
    </main>
  );
}