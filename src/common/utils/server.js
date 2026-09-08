import prisma from "../../DB/connections.db.js";

const PORT = process.env.PORT ?? 3000;

export default async function bootstrapDB(app) {
  try {
    await prisma.$connect();
    console.log('✅ Database connected');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ Failed to connect to database', err);
    process.exit(1);
  }
}

