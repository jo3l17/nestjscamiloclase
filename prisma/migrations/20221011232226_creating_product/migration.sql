-- CreateTable
CREATE TABLE "CreditBoxPrice" (
    "uuid" UUID NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "discount" DECIMAL(65,30) NOT NULL,
    "productUuid" UUID
);

-- CreateTable
CREATE TABLE "Product" (
    "uuid" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "CreditBoxPrice_uuid_key" ON "CreditBoxPrice"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Product_uuid_key" ON "Product"("uuid");

-- AddForeignKey
ALTER TABLE "CreditBoxPrice" ADD CONSTRAINT "CreditBoxPrice_productUuid_fkey" FOREIGN KEY ("productUuid") REFERENCES "Product"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;
