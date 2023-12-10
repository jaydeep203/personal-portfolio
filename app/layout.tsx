import './globals.css';
import "@/styles/login.css";
import Header from './header';
import Footer from '@/components/Footer';
import ToasterContext from '@/components/context/ToasterContext';
import NextAuthProvider from './providers/NextAuthProvider';
import ProjectModal from '@/components/modal/ProjectModal';
import FlareCursor from '@/components/Layout/FlareCursor';

export const metadata = {
  title: 'Portfolio App',
  description: 'Best responsive and attractive My Personal Portfolio App which shows my ability to create and develope the web application as well as various skills that I have.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='BackgroundPage w-full'>
        <ToasterContext />
        <NextAuthProvider>
          <ProjectModal />
          <FlareCursor />
          <Header />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}
