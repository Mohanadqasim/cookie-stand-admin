import Head from 'next/head';
import Link from 'next/link'
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Table from '@/components/Table';
import Form from '@/components/Form';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <body>
        <Header />
        <main className="flex flex-col items-center">
          <Form />
        </main>
      </body>
      
      <footer>
        <Footer />
      </footer>
    </>
  )
}

