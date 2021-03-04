/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[alpha2Code]` on the table `Country`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[alpha3Code]` on the table `Country`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[code]` on the table `Currency`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[symbol]` on the table `Currency`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[iso639_1]` on the table `Language`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[iso639_2]` on the table `Language`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Country.alpha2Code_unique" ON "Country"("alpha2Code");

-- CreateIndex
CREATE UNIQUE INDEX "Country.alpha3Code_unique" ON "Country"("alpha3Code");

-- CreateIndex
CREATE UNIQUE INDEX "Currency.code_unique" ON "Currency"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Currency.symbol_unique" ON "Currency"("symbol");

-- CreateIndex
CREATE UNIQUE INDEX "Language.iso639_1_unique" ON "Language"("iso639_1");

-- CreateIndex
CREATE UNIQUE INDEX "Language.iso639_2_unique" ON "Language"("iso639_2");
