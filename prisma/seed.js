const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  await db.lesson.deleteMany();

  await db.lesson.createMany({
    data: [
      {
        title: "Что такое Студия комплектации",
        description: "Введение в компанию",
        content: "Студия комплектации помогает клиентам комплектовать объекты под ключ.",
        image: "/images/lesson1.jpg"
      },
      {
        title: "Первый звонок клиенту",
        description: "Как начать диалог",
        content: "На первом звонке важно понять задачу клиента и договориться о следующем шаге.",
        image: "/images/lesson2.jpg"
      }
    ]
  });

  console.log("SEED DONE");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });