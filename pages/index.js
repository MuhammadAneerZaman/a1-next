import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import Footer from './Components/Footer/Footer'

import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      
        <Navbar /> 
        <Header />
        <Main />
        <Footer />  
      
    </div>
  );
}
