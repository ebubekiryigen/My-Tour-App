import '../styles/globals.css'
import {Nunito} from 'next/font/google'
import Navbar from "./component/navbar"
import MountedClient from './component/MountedClient'
import ReduxProvider from './provider'
import RegisterModal from './component/modals/RegisterModal'
import LoginModal from './component/modals/LoginModal'

const newFont = Nunito({
    subsets: ['latin']
})

const RootLayout = ({children} : {children: React.ReactNode}) => {
    return(
        <html lang="en">
            <body className={newFont.className}>
                <ReduxProvider>
                    <MountedClient>
                        <RegisterModal />
                        <LoginModal />
                        <Navbar />
                    </MountedClient>
                </ReduxProvider>
                {children}
            </body>
        </html>
    )
}

export default RootLayout