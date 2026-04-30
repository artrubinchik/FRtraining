import { db } from "@/lib/db";
import { notFound } from "next/navigation";

export default async function LessonPage({ params }: { params: { lessonId: string } }) {
  const lessonId = Number(params.lessonId);

  const lesson = await db.lesson.findUnique({
    where: { id: lessonId }
  });

  if (!lesson) return notFound();

  return (
    <main style={{ padding: 40 }}>
      <h1>{lesson.title}</h1>

      <p style={{ color: "green" }}>
        Путь к картинке: {lesson.image}
      </p>

      {lesson.image && (
        <img
          src={lesson.image}
          alt={lesson.title}
          style={{
            width: "100%",
            height: 320,
            objectFit: "cover",
            borderRadius: 24,
            display: "block",
            margin: "20px 0"
          }}
        />
      )}

      <p>{lesson.description}</p>
      <p>{lesson.content}</p>
    </main>
  );
}