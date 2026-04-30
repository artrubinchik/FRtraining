import Link from "next/link";
import { lessons } from "@/data/mockData";

export default function AdminPage() {
  return (
    <main style={{ padding: 32 }}>
      <Link href="/">← На главную</Link>

      <section className="card" style={{ marginTop: 24, padding: 32 }}>
        <h1 style={{ fontSize: 38, margin: 0 }}>Админка курса</h1>
        <p style={{ color: "#78716c" }}>
          Управление уроками, материалами и структурой обучения.
        </p>
      </section>

      <section style={{ marginTop: 24, display: "grid", gap: 16 }}>
        {lessons.map((lesson) => (
          <div key={lesson.id} className="card" style={{ padding: 24 }}>
            <small>Урок {lesson.id} · {lesson.duration}</small>
            <h2>{lesson.title}</h2>
            <p style={{ color: "#78716c" }}>{lesson.description}</p>

            <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
              <button className="btn">Редактировать</button>
              <button className="btn btn-light">Материалы</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}