-- CreateTable
CREATE TABLE "Kelaslt7" (
    "id" SERIAL NOT NULL,
    "nama_kelas" TEXT NOT NULL,
    "jam_mulai" INTEGER NOT NULL,
    "jam_selesai" INTEGER NOT NULL,
    "hari" TEXT NOT NULL,

    CONSTRAINT "Kelaslt7_pkey" PRIMARY KEY ("id")
);
