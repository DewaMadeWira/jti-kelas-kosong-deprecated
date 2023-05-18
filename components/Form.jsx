import Button from "./Button"
import styles from "../src/styles/Form.module.css"
export default function Form(){
    return(
        <form method='post' action='/api/dayPost' className={styles.form}>
          <label htmlFor="hs-select-label" className="block font-medium mb-2 text-2xl text-black">Hari</label>
          <div className='flex md:flex-grow md:justify-between md:items-center py-3 w-full flex-col sm:flex-row' >
            <select defaultValue="Senin" id="hs-select-label" className={styles.input} name='day'>
              <option value="Senin" >Senin</option>
              <option value="Selasa">Selasa</option>
              <option value="Rabu" >Rabu</option>
              <option value="Kamis">Kamis</option>
              <option value="Jumat" >Jumat</option>
            </select>
            <Button content={"Submit"}></Button>
            {/* <button className='ml-5 w-36 text-black p-2 px-5 rounded-md mt-5 bg-primary text-white'>Submit</button> */}
          </div>
        </form>
    )
}