import '../styles/globals.css'
import Navbar from "./component/navbar"

const RootLayout = ({children} : {children: React.ReactNode}) => {
    return(
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    )
}

export default RootLayout