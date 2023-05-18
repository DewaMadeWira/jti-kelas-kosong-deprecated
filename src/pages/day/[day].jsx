import { useRouter } from 'next/router'
import { prisma } from '../../../server/db/client'
import { Card } from '../../../components/Card'
import Link from 'next/link';
import Form from '../../../components/Form'
import Button from '../../../components/Button'




export default function Day ({kelas}){
    const router = useRouter()
    const { day } = router.query
    return (
      <main className=' flex justify-center items-center' style={{minHeight:"80vh"}}>
      <div className="" style={{width:"70%"}}>
          <h1 className='text-3xl' >Kelas Kosong Hari {day}</h1>
          <div className='flex justify-center'>
            <div className=" flex gap-7 flex-wrap justify-start mt-5 mb-5" >
              {kelas.map((item) => (
                <Card namaKelas={item.nama_kelas} jamMulai={item.jam_mulai} jamSelesai={item.jam_selesai}></Card>
              ))}
              <div className="flex items-end mt-10">
                <Link href="/">
            <Button content={"Back to Home"}></Button>
            </Link>
            </div>
            </div>
       
          </div>
          
      </div>
      
       </main>
    )
       
}

export async function getServerSideProps(context) {
    const {params}=context
    const {day}=params
    console.log(day)
    const kelas = await prisma.kelaslt7.findMany({
        where: {
          hari: day,
        },
      })
      if (!kelas) {
        return {
          notFound: true,
        }
      }
      return{
        props: {
          kelas
        }
      }
  }