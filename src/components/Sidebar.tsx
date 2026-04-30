import Link from "next/link";

export default function Sidebar() {
  return (
    <div style={{ width: 200, padding: 20, background: "#eee" }}>
      <p>Уроки:</p>
      <Link href="/course/1">Урок 1</Link>
      <br />
      <Link href="/course/2">Урок 2</Link>
    </div>
  );
}