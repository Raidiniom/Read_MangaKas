import { Elysia } from "elysia";

const app = new Elysia()
    .get("/", () => "Read_Mangakas API is running")
    .get("/api/health", () => ({ status: "ok" }))
    .listen(3000);

console.log(
    `Elysia running at ${app.server?.hostname}:${app.server?.port}`
);