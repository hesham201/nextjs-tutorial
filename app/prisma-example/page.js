import prisma from "@/utils/db";
const prismahandlers = async () => {
  await prisma.task.create({
    data: {
      content: "wake up",
    },
  });
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createAt: "desc",
    },
  });
  return allTasks;
};

const PrismaExamplePage = async () => {
  const tasks = await prismahandlers();
  return (
    <div>
      <h1 className="text-7xl">PrismaExamplePage</h1>
      {tasks.map((item) => (
        <div key={item.id}>
          <h1>{item.content}</h1>
        </div>
      ))}
    </div>
  );
};

export default PrismaExamplePage;
