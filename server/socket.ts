// eslint-disable-next-line @typescript-eslint/no-require-imports
const { Server } = require("socket.io");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { createServer } = require("http");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();
const httpServer = createServer();

const io = new Server(httpServer, {
  cors: { origin: "*" }, // Cross-Origin Allow করা হচ্ছে
});

io.on("connection", (socket: any) => {
  console.log("New client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

// MongoDB change listener (Prisma event listener)
async function watchDatabase() {
  db.$on("update", async (event: any) => {
    if (event.model === "Session") {
      console.log("Session updated:", event);
      // Realtime UI Update
      io.emit("sessionUpdated", event);
    }
  });
}

watchDatabase();

// Server Run
httpServer.listen(4000, () => {
  console.log("Socket.io server running on http://localhost:4000");
});
