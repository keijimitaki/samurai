import { PrismaClient } from '@prisma/client';

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();

  const body = await readBody(event);
  const newTask = await prisma.task.create({
    data: {
      task: body.task,
      completed: false,
    },
  });
  return newTask;
});