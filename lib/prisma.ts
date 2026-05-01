import 'dotenv/config'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../app/generated/prisma/client'

const normalizeConnectionString = (connectionString: string) => {
  try {
    const parsedUrl = new URL(connectionString)
    const sslMode = parsedUrl.searchParams.get('sslmode')?.toLowerCase()

    if (sslMode === 'prefer' || sslMode === 'require' || sslMode === 'verify-ca') {
      // Keep strong TLS behavior explicitly and avoid pg future-semantics warning.
      parsedUrl.searchParams.set('sslmode', 'verify-full')
      return parsedUrl.toString()
    }

    return connectionString
  } catch {
    return connectionString
  }
}

const prismaClientSingleton = () => {
  const connectionString = process.env.DATABASE_URL

  if (!connectionString) {
    throw new Error('DATABASE_URL is not defined')
  }

  const adapter = new PrismaPg({ connectionString: normalizeConnectionString(connectionString) })

  return new PrismaClient({ adapter })
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
