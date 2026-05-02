import prisma from "../lib/prisma.ts";
import { siteReviews } from "./site-reviews.seed.ts";
import { products } from "./products.seed.ts";

async function seedDatabase() {
  // Purgar tablas, a rellenar posteriormente, de la base de datos
  await prisma.siteReview.deleteMany();
  await prisma.product.deleteMany();

  // Insertar los datos de las tablas en la base de datos
  await prisma.siteReview.createMany({
    data: siteReviews,
  });
  await prisma.product.createMany({
    data: products,
  });
  console.log("Base de datos sembrada con éxito.");
}

seedDatabase();
