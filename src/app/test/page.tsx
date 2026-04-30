import { db } from "@/lib/db";

export default async function Test() {
  const lessons = await db.lesson.findMany();

  return (
    <pre>{JSON.stringify(lessons, null, 2)}</pre>
  );
}