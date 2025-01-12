import Hero from './components/Hero';
import Navbar from './components/Navbar';
export default function Index(){
    return(
        <main className="min-h-[100vh] min-w-[100vw]">
        <Navbar/>
        <Hero/>
        </main>
    )
}