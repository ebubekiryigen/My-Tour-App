import '../styles/globals.css'
import {Nunito} from 'next/font/google'
import Navbar from "./component/navbar"
import MountedClient from './component/MountedClient'
import ReduxProvider from './provider'

const newFont = Nunito({
    subsets: ['latin']
})

const RootLayout = ({children} : {children: React.ReactNode}) => {
    return(
        <html lang="en">
            <body className={newFont.className}>
                <ReduxProvider>
                    <MountedClient>
                        <Navbar />
                    </MountedClient>
                </ReduxProvider>
                {children}
            </body>
        </html>
    )
}

export default RootLayout