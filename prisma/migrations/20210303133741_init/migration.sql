-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "topLevelDomain" TEXT[],
    "alpha2Code" TEXT NOT NULL,
    "alpha3Code" TEXT NOT NULL,
    "callingCodes" TEXT[],
    "capital" TEXT NOT NULL,
    "altSpellings" TEXT[],
    "region" TEXT NOT NULL,
    "subregion" TEXT NOT NULL,
    "population" INTEGER NOT NULL,
    "latlng" INTEGER[],
    "demonym" TEXT NOT NULL,
    "area" INTEGER NOT NULL,
    "gini" DOUBLE PRECISION NOT NULL,
    "timezones" TEXT[],
    "borders" TEXT[],
    "nativeName" TEXT NOT NULL,
    "numericCode" TEXT NOT NULL,
    "flag" TEXT NOT NULL,
    "cioc" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Translation" (
    "translateTo" TEXT NOT NULL,
    "translated" TEXT NOT NULL,
    "countryId" INTEGER NOT NULL,

    PRIMARY KEY ("countryId","translateTo","translated")
);

-- CreateTable
CREATE TABLE "Currency" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" SERIAL NOT NULL,
    "iso639_1" TEXT NOT NULL,
    "iso639_2" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nativeName" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegionalBloc" (
    "id" SERIAL NOT NULL,
    "acronym" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "otherAcronyms" TEXT[],
    "otherNames" TEXT[],

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CountryToCurrency" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CountryToLanguage" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CountryToRegionalBloc" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CountryToCurrency_AB_unique" ON "_CountryToCurrency"("A", "B");

-- CreateIndex
CREATE INDEX "_CountryToCurrency_B_index" ON "_CountryToCurrency"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CountryToLanguage_AB_unique" ON "_CountryToLanguage"("A", "B");

-- CreateIndex
CREATE INDEX "_CountryToLanguage_B_index" ON "_CountryToLanguage"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CountryToRegionalBloc_AB_unique" ON "_CountryToRegionalBloc"("A", "B");

-- CreateIndex
CREATE INDEX "_CountryToRegionalBloc_B_index" ON "_CountryToRegionalBloc"("B");

-- AddForeignKey
ALTER TABLE "Translation" ADD FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CountryToCurrency" ADD FOREIGN KEY ("A") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CountryToCurrency" ADD FOREIGN KEY ("B") REFERENCES "Currency"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CountryToLanguage" ADD FOREIGN KEY ("A") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CountryToLanguage" ADD FOREIGN KEY ("B") REFERENCES "Language"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CountryToRegionalBloc" ADD FOREIGN KEY ("A") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CountryToRegionalBloc" ADD FOREIGN KEY ("B") REFERENCES "RegionalBloc"("id") ON DELETE CASCADE ON UPDATE CASCADE;
