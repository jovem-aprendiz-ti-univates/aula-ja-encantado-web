CREATE TABLE "bebidas" (
  "id" serial PRIMARY KEY,
  "cor" varchar(255) NOT NULL,
  "temperatura" varchar(255) NOT NULL,
  "quantidade" decimal(10,2) NOT NULL,
  "teor_alcool" decimal(10,2) NOT NULL,
  "nome" varchar(255) NOT NULL
);

CREATE TABLE "pessoas" (
  "id" serial PRIMARY KEY,
  "nome" varchar(255) NOT NULL,
  "dataNascimento" varchar(255) NOT NULL,
  "altura" decimal(10,2) NOT NULL,
  "peso" decimal(10,2) NOT NULL
);
