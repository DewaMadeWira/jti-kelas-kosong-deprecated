

export  const Card = ({namaKelas,jamMulai,jamSelesai})=>{
    return (
      
      <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-7 sm:flex-row flex-col w-64">
        <div className="flex-grow">
          <h2 className="text-black text-lg title-font font-bold mb-3">{namaKelas}</h2>
          <p className="leading-relaxed text-base">Jam Mulai : {jamMulai}</p>
          <p className="leading-relaxed text-base">Jam Selesai : {jamSelesai}</p>
        </div>
      </div>
    )
}

