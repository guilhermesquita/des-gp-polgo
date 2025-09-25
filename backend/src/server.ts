import "dotenv/config";
import app from "./app";
import { connectDB } from "./db";
// import { runSeeds } from "./seeds/runSeeds";

const PORT = process.env.PORT || 3000;

async function start() {
  await connectDB();
  // runSeeds();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

start().catch((err) => {
  console.error("Startup error:", err);
  process.exit(1);
});
