import { FastifyInstance } from "fastify";
import z from "zod";
import { prisma } from "../lib/prisma";

export async function User(app: FastifyInstance) {
  
  app.get('/users', (req, res) => {
    const users = prisma.user.findMany()

    return users
  })

  app.get('/users/:id', (req, res) => {
    const users = prisma.user.findMany({
      where: {
        id: req.id
      }
    })

    return users
  })

  app.post('/user', async (request) => {
    const bodySchema = z.object({
      name: z.string(),
      login: z.string(),
      password: z.string(),
      email: z.string(),
    })

    const { name, login, password, email } = bodySchema.parse(request.body)

    const user = await prisma.user.create({
      data: {
        name,
        login,
        password,
        email,
      },
    })

    return user
  })

}