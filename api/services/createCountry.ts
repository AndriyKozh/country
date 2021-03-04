import { PrismaClient } from '@prisma/client'

export async function createCountry(prisma: PrismaClient, newCountry: any) {
  const reducerCurrencies = (accumulator: any[], currentValue: any) => {
    const newCurrency = {
      code: currentValue.code,
      name: currentValue.name,
      symbol: currentValue.symbol,
    }
    accumulator.push(newCurrency)
    return accumulator
  }

  const reducerLanguages = (accumulator: any[], currentValue: any) => {
    const newLanguage = {
      iso639_1: currentValue.iso639_1,
      iso639_2: currentValue.iso639_2,
      name: currentValue.name,
      nativeName: currentValue.nativeName,
    }
    accumulator.push(newLanguage)
    return accumulator
  }

  const reducerRegionalBlocs = (accumulator: any[], currentValue: any) => {
    const newRegionalBloc = {
      acronym: currentValue.acronym,
      name: currentValue.name,
      otherAcronyms: currentValue.otherAcronyms,
      otherNames: currentValue.otherNames,
    }
    accumulator.push(newRegionalBloc)
    return accumulator
  }

  const newCurrencies = newCountry.currencies.reduce(reducerCurrencies, [])

  const newLanguages = newCountry.languages.reduce(reducerLanguages, [])

  const newTranslations = []
  for (const prop in newCountry.translations) {
    const newLanguage = {
      translateTo: prop,
      translated: newCountry.translations[prop],
    }
    newTranslations.push(newLanguage)
  }

  const newRegionalBlocs = newCountry.regionalBlocs.reduce(
    reducerRegionalBlocs,
    [],
  )

  const country = await prisma.country.create({
    data: {
      name: newCountry.name,
      topLevelDomain: newCountry.topLevelDomain,
      alpha2Code: newCountry.alpha2Code,
      alpha3Code: newCountry.alpha3Code,
      callingCodes: newCountry.callingCodes,
      capital: newCountry.capital,
      altSpellings: newCountry.altSpellings,
      region: newCountry.region,
      subregion: newCountry.subregion,
      population: newCountry.population,
      latlng: newCountry.latlng,
      demonym: newCountry.demonym,
      area: newCountry.area,
      gini: newCountry.gini,
      timezones: newCountry.timezones,
      borders: newCountry.borders,
      nativeName: newCountry.nativeName,
      numericCode: newCountry.numericCode,
      flag: newCountry.flag,
      cioc: newCountry.cioc,
      translations: {
        create: newTranslations,
      },
    },
  })

  // for (const translation of newTranslations) {
  //   await prisma.translation.create({
  //     data: {
  //       countryId: country.id,
  //       translateTo: translation.translateTo,
  //       translated: translation.translated,
  //     },
  //   })
  // }

  const countries_id = {
    id: country.id,
  }

  for (const currency of newCurrencies) {
    await prisma.currency.create({
      data: {
        code: currency.code,
        name: currency.name,
        symbol: currency.symbol,
        countries: {
          connect: countries_id,
        },
      },
    })
  }

  for (const language of newLanguages) {
    await prisma.language.create({
      data: {
        iso639_1: language.iso639_1,
        iso639_2: language.iso639_2,
        name: language.name,
        nativeName: language.nativeName,
        countries: {
          connect: countries_id,
        },
      },
    })
  }

  for (const reginalBloc of newRegionalBlocs) {
    await prisma.regionalBloc.create({
      data: {
        acronym: reginalBloc.acronym,
        name: reginalBloc.name,
        otherAcronyms: reginalBloc.otherAcronyms,
        otherNames: reginalBloc.otherNames,
        countries: {
          connect: countries_id,
        },
      },
    })
  }

  return country
}
