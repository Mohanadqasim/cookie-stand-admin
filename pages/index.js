import Head from 'next/head';
import Link from 'next/link'
import { useState,useEffect } from 'react';

export default function Home() {
  const [showTable, setShowTable] = useState(false);
  
  function cookiesTable(event) {
    event.preventDefault();
    setShowTable(true);
  }
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <body>
        <Header />
        <main className="flex flex-col items-center">
          <Form handler={cookiesTable} />
          {showTable ? <Table /> : <h2>No Cookie Stands Available</h2>}
        </main>
        <Footer />
      </body>
    </>
  )
}

function Header() {
  return (
    <>
      <header className='flex items-center justify-between p-4 bg-green-500 text-black-50'>
        <h1 className='text-4xl'>Cookie Stand Admin</h1>
      </header>
    </>)
}

function Form(props) {
  return (
    <>
      <form className='flex flex-col w-2/3 p-10 mx-auto my-20 bg-green-300 rounded-lg' onSubmit={props.handler}>
        <h1 className='flex items-center justify-center w-full text-2xl font-medium'>Create Cookie Stand</h1>

        <div class="md:flex md:items-center my-7">
          <div className='mr-5'>
            <label class="text-2xl block mb-1">Location</label>
          </div>
          <div class="md:w-2/3 md:flex-grow">
            <input class="w-full h-10 px-3 text-base " type="text" />
          </div>
        </div>


        <div class="flex">

          <div class=" rounded-lg bg-[#a8f4d0] w-full px-2 md:w-1/3">
            <label class="text-2xl block mb-1 text-center" >Minimum Customers per Hour</label>
            <input class="h-10 px-3 " />
          </div>

          <div class="rounded-lg bg-[#a8f4d0] w-full px-2 md:w-1/3">
            <label class=" text-2xl block mb-1 text-center" >Maximum Customers per Hour</label>
            <input class="h-10 px-3" />
          </div>

          <div class="rounded-lg bg-[#a8f4d0] w-full px-2 md:w-1/3">
            <label class="text-2xl block mb-1 text-center" >Average Cookies per Sale</label>
            <input class=" h-10 px-3" />
          </div>

          <div class="w-full px-2 md:w-1/3">
            <button class="bg-green-500 py-10 px-20" >Create</button>
          </div>

        </div>
      </form >
    </>
  )
}

function Table() {
  return (
    <>
     <div className="mt-10">
      <table class='table-fixed'>
        <thead class="p-2 bg-green-500 border content-center">
          <tr >
            <th class="w-1/2 px-4 py-2">Location</th>
            <th class="w-1/2 px-4 py-2">6am</th>
            <th class="w-1/2 px-4 py-2">7am</th>
            <th class="w-1/2 px-4 py-2">8am</th>
            <th class="w-1/2 px-4 py-2">9am</th>
            <th class="w-1/2 px-4 py-2">10am</th>
            <th class="w-1/2 px-4 py-2">11am</th>
            <th class="w-1/2 px-4 py-2">12pm</th>
            <th class="w-1/2 px-4 py-2">1pm</th>
            <th class="w-1/2 px-4 py-2">2pm</th>
            <th class="w-1/2 px-4 py-2">3pm</th>
            <th class="w-1/2 px-4 py-2">4pm</th>
            <th class="w-1/2 px-4 py-2">5pm</th>
            <th class="w-1/2 px-4 py-2">6pm</th>
            <th class="w-1/2 px-4 py-2">7pm</th>
            <th class="w-1/2 px-4 py-2">Totals</th>
          </tr>
        </thead>
        <tbody class=" ">
          <tr class="p-2 bg-green-400 border border-slate-600">
            <td class="w-1/2 px-4 py-2">Amman</td>
            <td class="w-1/2 px-4 py-2">48</td>
            <td class="w-1/2 px-4 py-2">42</td>
            <td class="w-1/2 px-4 py-2">30</td>
            <td class="w-1/2 px-4 py-2">24</td>
            <td class="w-1/2 px-4 py-2">42</td>
            <td class="w-1/2 px-4 py-2">24</td>
            <td class="w-1/2 px-4 py-2">36</td>
            <td class="w-1/2 px-4 py-2">42</td>
            <td class="w-1/2 px-4 py-2">42</td>
            <td class="w-1/2 px-4 py-2">48</td>
            <td class="w-1/2 px-4 py-2">36</td>
            <td class="w-1/2 px-4 py-2">42</td>
            <td class="w-1/2 px-4 py-2">24</td>
            <td class="w-1/2 px-4 py-2">36</td>
            <td class="w-1/2 px-4 py-2">700</td>
          </tr>
          <tr class="p-2 bg-green-300 border border-slate-600">
            <td class="w-1/2 px-4 py-2">Amman</td>
            <td class="w-1/2 px-4 py-2">48</td>
            <td class="w-1/2 px-4 py-2">42</td>
            <td class="w-1/2 px-4 py-2">30</td>
            <td class="w-1/2 px-4 py-2">24</td>
            <td class="w-1/2 px-4 py-2">42</td>
            <td class="w-1/2 px-4 py-2">24</td>
            <td class="w-1/2 px-4 py-2">36</td>
            <td class="w-1/2 px-4 py-2">42</td>
            <td class="w-1/2 px-4 py-2">42</td>
            <td class="w-1/2 px-4 py-2">48</td>
            <td class="w-1/2 px-4 py-2">36</td>
            <td class="w-1/2 px-4 py-2">42</td>
            <td class="w-1/2 px-4 py-2">24</td>
            <td class="w-1/2 px-4 py-2">36</td>
            <td class="w-1/2 px-4 py-2">7000</td>
          </tr>
        </tbody>
        <tfoot class="p-2 bg-green-500 border border-slate-600">
          <tr>
            <th scope="row">Totals</th>
            <td class="w-1/2 px-4 py-2">48</td>
            <td class="w-1/2 px-4 py-2">42</td>
            <td class="w-1/2 px-4 py-2">30</td>
            <td class="w-1/2 px-4 py-2">24</td>
            <td class="w-1/2 px-4 py-2">42</td>
            <td class="w-1/2 px-4 py-2">24</td>
            <td class="w-1/2 px-4 py-2">36</td>
            <td class="w-1/2 px-4 py-2">42</td>
            <td class="w-1/2 px-4 py-2">42</td>
            <td class="w-1/2 px-4 py-2">48</td>
            <td class="w-1/2 px-4 py-2">36</td>
            <td class="w-1/2 px-4 py-2">42</td>
            <td class="w-1/2 px-4 py-2">24</td>
            <td class="w-1/2 px-4 py-2">36</td>
            <td class="w-1/2 px-4 py-2">700</td>
          </tr>
        </tfoot>
      </table>
      </div>
    </>
  )
}

function Footer() {
  return (
    <>
      <footer>
        <div className='flex items-center justify-between p-10 mt-40 text-3xl bg-green-500 text-black-50'>
          &copy; 2023
        </div>
      </footer>
    </>
  )
}