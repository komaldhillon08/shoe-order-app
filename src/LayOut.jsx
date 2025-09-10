import { Outlet } from "react-router"
import Header from "./components/Header"
import Footer from "./components/Footer"
export default function LayOut() {
    return (
        <>

            <div className="flex flex-col min-h-screen">
                {/* Navbar always on top */}
                <Header />

                {/* Page content in the middle */}
                <main className="flex-grow">
                    <Outlet />
                </main>

                {/* Footer always at bottom */}
                <Footer />
            </div>
        </>
    )

}