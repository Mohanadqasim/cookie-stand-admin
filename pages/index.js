import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <body>
        <Header />
        <main>
          <Form />
          <p className='text-black-50 m-20 text-center'>Report Table Coming Soon...</p>
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

function Form() {
  return (
    <>
      <form className='rounded-lg flex flex-col w-2/3 p-10 mx-auto my-20 bg-green-300'>
        <h1 className='font-medium text-2xl flex items-center justify-center w-full'>Create Cookie Stand</h1>

        <div class="md:flex md:items-center my-7">
          <div className='mr-5'>
            <label class="text-2xl block mb-1">Location</label>
          </div>
          <div class="md:w-2/3 md:flex-grow">
            <input class="w-full h-10 px-3 text-base " type="text" />
          </div>
        </div>


        <div class="flex">

          <div class=" w-full px-2 md:w-1/3">
            <label class="text-2xl block mb-1 text-center" >Minimum Customers per Hour</label>
            <input class="h-10 px-3 " />
          </div>

          <div class="w-full px-2 md:w-1/3">
            <label class=" text-2xl block mb-1 text-center" >Maximum Customers per Hour</label>
            <input class="h-10 px-3" />
          </div>

          <div class="w-full px-2 md:w-1/3">
            <label class="text-2xl block mb-1 text-center" >Average Cookies per Sale</label>
            <input class=" h-10 px-3" />
          </div>

          <div class="w-full px-2 md:w-1/3">
            <button class="bg-green-500 py-10 px-20" >Create</button>
          </div>

        </div>
        {/* <label for="minimum"> Minimum Customers per Hour</label>
        <input name="question" className="flex-auto pl-1" />

        <label for="maximum"> Maximum Customers per Hour</label>
        <input name="question" className="flex-auto pl-1" />

        <label for="average"> Average Cookies per Sale</label>
        <input name="question" className="flex-auto pl-1" />

        <button className=' bg-green-500 p-10' >Create</button> */}
      </form >
    </>
  )
}

function Footer() {
  return (
    <>
      <footer>
        <div className='text-3xl flex items-center justify-between p-10 mt-40  bg-green-500 text-black-50'>
          &copy; 2023
        </div>
      </footer>
    </>
  )
}