import prisma from "~~/lib/prisma";

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");
  const session = await getUserSession(event);
  const userId = session?.user?.id;

  const productReviews = await prisma.productReview.findMany({
    where: {
      product: {
        slug: slug,
      },
    },
    take: 10,
    orderBy: {
      createdAt: "desc",
    }
  });

  // Se usará en frontal para mostrar el botón de "Añadir reseña" solo si el usuario no ha escrito una reseña para este producto
  const userHasReview = await prisma.productReview.findFirst({
    where: {
      product: {
        slug: slug,
      },
      userId: Number(userId),
    },
  });
  console.log("userHasReview", userHasReview);

  return {
    productReviews,
    hasUserPostedReview: !!userHasReview,
  };
});
