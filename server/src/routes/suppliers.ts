import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function Suppliers(app: FastifyInstance) {

  app.get('/suppliers', (req, res) => {
    const suppliers = prisma.supplier.findMany()

    return suppliers
  })

  app.get('/suppliers/:id', (req, res) => {
    const suppliers = prisma.supplier.findMany({
      where: {
        id: req.id
      }
    })

    return suppliers
  })
}