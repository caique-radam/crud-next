import multipart from "@fastify/multipart";
import fastify from "fastify";
import { Suppliers } from "./routes/suppliers";
import { User } from "./routes/users";

const app = fastify();

app.register(multipart)

app.register(User)
app.register(Suppliers)

app.listen({
  port: 3333,
}).then(() => {
  console.log("HTTP Running on http://localhost:3333")
})
