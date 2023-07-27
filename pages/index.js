import Head from 'next/head';
import Link from 'next/link'
import Footer from '@/components/Footer';
import Form from '@/components/Form';
import Header from '@/components/Header';
import { useAuth } from '@/contexts/auth';
import Login from '@/components/Login';

export default function Home() {
  const { user } = useAuth()
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      {user ? <div className="flex flex-col flex-1 min-h-screen">

        <body>
          <Header />
          <main className="flex flex-col items-center">
            <Form />
          </main>
        </body>

        <footer>
          <Footer />
        </footer>
      </div> : <Login />}
    </>
  )
}




