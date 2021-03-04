class GetAllCountriesService: {
  public async execute() {
    const countries = await prisma.country.findMany({
      include: {
        translations: true,
        currencies: true,
        languages: true,
        regionalBlocs: true,
      },
    })

    return countries
  }
}

export default GetAllCountriesService