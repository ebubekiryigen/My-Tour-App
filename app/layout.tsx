import '../styles/globals.css'
import {Nunito} from 'next/font/google'
import Navbar from "./component/navbar"

const newFont = Nunito({
    subsets: ['latin']
})

const RootLayout = ({children} : {children: React.ReactNode}) => {
    return(
        <html lang="en">
            <body className={newFont.className}>
                <Navbar />
                {children}
            </body>
        </html>
    )
}

export default RootLayout