import './globals.css';
import "@/styles/login.css";
import Header from './header';
import Footer from '@/components/Footer';
import ToasterContext from '@/components/context/ToasterContext';
import NextAuthProvider from './providers/NextAuthProvider';
import ProjectModal from '@/components/modal/ProjectModal';
import FlareCursor from '@/components/Layout/FlareCursor';
import {Analytics} from "@vercel/analytics/react";

export const metadata = {
  title: 'Portfolio App',
  description: 'Best responsive and attractive My Personal Portfolio App which shows my ability to create and develope the web application as well as various skills that I have. Portfolio website of jaydeep deshpande.',
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
          <Header />
          {children}
          {/* <Analytics /> */}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}
