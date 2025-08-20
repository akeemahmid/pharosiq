
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col mt-5">
      <h1 className=" text-4xl font-extrabold text-black mb-3">Pharos Iq Quiz</h1>
    
       
        <p className="mb-3 text-center">This quiz is basically just to test your Iq on Pharos network</p> 
 
      <Link href='/quiz' className="py-3 px-5 rounded-2xl bg-white shadow-2xl text-[#5067e7] font-semibold hover:bg-[#1d4ed8] hover:text-white">Start quiz</Link>
    </div>
  );
}
