import Button from '../../components/Button'
import { Card } from '../../components/Card'
import Form from '../../components/Form'



export default function Home() {

  return (
  <>
   <main className="bg-backround-white flex justify-center">
    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 h-screen " style={{width:"70%"}}>
 
      <div className="max-w-2xl mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-black">Cari kelas kosong mu !</h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Isikan opsi dibawah untuk mencari kelas kosong.</p>
      </div>
   
      <div className="p-5 flex items-center justify-between rounded-md min-h-1/4" style={{backgroundColor:"#E7EFF8"}}>
        <Form></Form>
      </div>
      {/* <Card></Card> */}
    </div>
   </main>

  </>
  )
}
