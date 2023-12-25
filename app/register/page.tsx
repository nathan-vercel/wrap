import Link from 'next/link'
import Header from "../../components/Header"

export default function Home() {
    return (
      <main className="relative flex min-h-screen flex-col justify-start m-4">
        <Header />
        <div className='flex flex-col justify-center items-center w-full'>
          <h1 className='text-5xl font-bold mb-8 mt-8'>Registration Details</h1>
          <p className='text-sm text-slate-300 max-w-prose'>
            Enter your preferences regarding collaborations. A vercel representative will contact you soon.
            Please resubmit the form if you want to change any preferences.
          </p>
          <span className="flex mt-4 justify-start items-center md:w-1/3 w-full">
            <label>Name</label>
            <input className="ml-4 rounded-xl text-slate-900 w-full" type="text"/>
          </span>
          <span className="flex mt-4 justify-start items-center md:w-1/3 w-full">
            <label>What kind of products would you like to promote?</label>
            <input className="ml-4 rounded-xl text-slate-900 w-full" type="text"/>
          </span>
          <span className="flex mt-4 justify-start items-center md:w-1/3 w-full">
            <label>Will you be willing to travel to an on-site location for a shoot?</label>
            <select className='p-2 rounded-xl ml-4 text-slate-900 w-full'>
              <option>Yes (International)</option>
              <option>Yes (Resident Country Only)</option>
              <option>No</option>
            </select>          </span>
          <span className="flex justify-start mt-4 items-center md:w-1/3 w-full">
            <label>Cost per post</label>
            <select className='p-2 rounded-xl ml-4 text-slate-900 w-full'>
              <option>Negotiable</option>
              <option>5000 USD (100k+ followers)</option>
              <option>3000 USD (50k+ followers)</option>
              <option>1500 USD (10k+ followers)</option>
            </select>
          </span>
          <span className="flex justify-start mt-4 items-center md:w-1/3 w-full">
            <label>Preferred Payment Method</label>
            <select className='p-2 rounded-xl ml-4 text-slate-900 w-full'>
              <option>Bank Transfer</option>
              <option>UPI(India Only)</option>
              <option>PayPal</option>
            </select>
          </span>
          
        </div>
      </main>
    )
  }
  
