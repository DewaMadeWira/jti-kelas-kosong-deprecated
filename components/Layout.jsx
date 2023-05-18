import Head from "next/head"
import Navbar from "./Navbar"
export default function Layout({ children }) {
    return( 
    <>
    <Navbar></Navbar>
    <div>
    {children}
    </div>
   
  </>
    )
}