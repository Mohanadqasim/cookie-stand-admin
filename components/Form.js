import { useState, useEffect } from 'react';
import Table from './Table';
import Footer from './Footer';


export default function Form(props) {
    const [formData, setFormData] = useState([]);
    
    function handleSubmit(event) {
        event.preventDefault();
        let formInput = {
            loc : event.target.location.value,
            min : event.target.minimum.value,
            max : event.target.maximum.value,
            avg : event.target.average.value,    
        }
        setFormData([...formData,formInput]);
        // console.log(formData)
    }

    return (
        <>
            <form className='flex flex-col w-2/3 p-10 mx-auto my-20 bg-green-300 rounded-lg' onSubmit={handleSubmit}>
                <h1 className='flex items-center justify-center w-full text-2xl font-medium'>Create Cookie Stand</h1>

                <div class="md:flex md:items-center my-7">
                    <div className='mr-5'>
                        <label class="text-2xl block mb-1">Location</label>
                    </div>
                    <div class="md:w-2/3 md:flex-grow">
                        <input class="w-full h-10 px-3 text-base " type="text" name='location' />
                    </div>
                </div>


                <div class="flex">

                    <div class=" rounded-lg bg-[#a8f4d0] w-full px-2 md:w-1/3">
                        <label class="text-2xl block mb-1 text-center" >Minimum Customers per Hour</label>
                        <input class="h-10 px-3 " name='minimum' />
                    </div>

                    <div class="rounded-lg bg-[#a8f4d0] w-full px-2 md:w-1/3">
                        <label class=" text-2xl block mb-1 text-center" >Maximum Customers per Hour</label>
                        <input class="h-10 px-3" name='maximum' />
                    </div>

                    <div class="rounded-lg bg-[#a8f4d0] w-full px-2 md:w-1/3">
                        <label class="text-2xl block mb-1 text-center" >Average Cookies per Sale</label>
                        <input class=" h-10 px-3" name='average' />
                    </div>

                    <div class="w-full px-2 md:w-1/3">
                        <button class="bg-green-500 py-10 px-20" >Create</button>
                    </div>

                </div>
            </form >
            <Table formData={formData} setFormData={setFormData} /> 
        </>
    )

}