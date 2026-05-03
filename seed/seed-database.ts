import prisma from "../lib/prisma.ts";
import { siteReviews } from "./site-reviews.seed.ts";
import { products } from "./products.seed.ts";
import { users } from "./users.seed.ts";

import bcryptjs from "bcryptjs";

async function seedDatabase() {
  // Purgar tablas, a rellenar posteriormente, de la base de datos
  await prisma.siteReview.deleteMany();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();

  // Encriptar las contraseñas de los usuarios antes de insertarlos en la base de datos
  const usersWithHashedPassword = users.map((user) => ({
    ...user,
    password: bcryptjs.hashSync(user.password, bcryptjs.genSaltSync(10)),
  }));

  // Insertar los datos de las tablas en la base de datos
  await prisma.siteReview.createMany({
    data: siteReviews,
  });
  await prisma.product.createMany({
    data: products,
  });
  await prisma.user.createMany({
    data: usersWithHashedPassword,
  });
  console.log("Base de datos sembrada con éxito.");
}

seedDatabase();
