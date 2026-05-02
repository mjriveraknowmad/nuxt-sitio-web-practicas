# Mi sitio web con Nuxt

## Dev

1- Clona el repositorio
2- Instala las dependencias con `pnpm install` o `npm i`
3- Clonar el archivo `.env.example` a `.env` y configura las variables de entorno necesarias.
4- Ejecutar `npx prisma migrate dev` para aplicar las migraciones de la base de datos.
5- Ejecutar el seed con `pnpm seed` o `npm run seed` 
6- Inicia el servidor de desarrollo con `pnpm dev` o `npm run dev` 

## Ejemplos

Tras modificar el el schema.prisma recordar hacer algo similar al script dejado de ejemplo en el package.json : `npx prisma migrate dev --name site-review-profile-image` donde site-review-profile-image es solo un nombre aleatorio para darle a esa migración en la bbdd.

## Créditos

Código basado en el curso de Fernando Herrera  https://knowmadmood.udemy.com/course/nuxt-web-progresivo
