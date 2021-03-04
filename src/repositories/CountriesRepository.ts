import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class CountriesRepository {
  public async findAll() {
    try {
      const countries = await prisma.country.findMany({
        include: {
          translations: true,
          currencies: true,
          languages: true,
          regionalBlocs: true,
        },
      })

      return countries
    } catch (error) {
      throw error
    } finally {
      await prisma.$disconnect()
    }
  }
}

export default CountriesRepository
