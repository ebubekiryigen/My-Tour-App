import '../styles/globals.css'
import {Nunito} from 'next/font/google'
import Navbar from "./component/navbar"
import MountedClient from './component/MountedClient'
import ReduxProvider from './provider'
import RegisterModal from './component/modals/RegisterModal'
import LoginModal from './component/modals/LoginModal'
import ToastProvider from './provider/ToastProvider'
import getCurrentUser from './actions/getCurrentUser'

const newFont = Nunito({
    subsets: ['latin']
})

export default async function RootLayout({children} : {children: React.ReactNode}) {
    const user = await getCurrentUser();

    return(
        <html lang="en">
            <body className={newFont.className}>
                <ReduxProvider>
                    <MountedClient>
                        <ToastProvider />
                        <RegisterModal />
                        <LoginModal />
                        <Navbar user={user} />
                    </MountedClient>
                    {children}
                </ReduxProvider>
            </body>
        </html>
    )
}