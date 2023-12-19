import '../styles/globals.css'
import {Nunito} from 'next/font/google'
import Navbar from "./component/navbar"
import MountedClient from './component/MountedClient'

const newFont = Nunito({
    subsets: ['latin']
})

const RootLayout = ({children} : {children: React.ReactNode}) => {
    return(
        <html lang="en">
            <body className={newFont.className}>
                <MountedClient>
                    <Navbar />
                </MountedClient>
                {children}
            </body>
        </html>
    )
}

export default RootLayout