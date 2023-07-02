import { PrismaClient } from '@prisma/client';

export default defineEventHandler(async (event) => {
  console.log(event.node.req.method); 
  const prisma = new PrismaClient();

  if (event.node.req.method === 'GET') {
    const tasks = await prisma.task.findMany();

    return tasks;
  }

  if (event.node.req.method === 'POST') {
    const body = await readBody(event);
    const newTask = await prisma.task.create({
      data: {
        task: body.task,
        completed: false,
      },
    });
    console.log(newTask);
    return newTask;

  }

});
