import { Analytics } from "@vercel/analytics/react"
export default function Footer(){
    return(
            <footer className="text-xs py-2 px-2">
                <h1 className="text-center text-gray-500 text-sm">&copy; 2025 James Anthony Guevarra</h1>
                <h1 className="text-center text-gray-500 text-sm">Made with React and Vite. Deployed with Vercel.</h1>
                <Analytics/>
            </footer>
    )
}