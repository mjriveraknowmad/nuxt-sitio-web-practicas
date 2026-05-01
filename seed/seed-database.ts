import prisma from "../lib/prisma.ts";
import { siteReviews } from "./site-reviews.seed.ts";

async function seedDatabase() {
  // Purgar la tabla siteReview de la base de datos
  await prisma.siteReview.deleteMany();

  // Insertar los datos de siteReviews en la base de datos
  await prisma.siteReview.createMany({
    data: siteReviews,
  });
  console.log("Base de datos sembrada con éxito.");
}

seedDatabase();
