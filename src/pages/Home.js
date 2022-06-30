import { useEffect } from 'react';


export default function Home() {
  
  useEffect(function() {
      document.title = 'Home';
  }, []);
  return (
    <section className="container mx-auto md:w-10/12 w-11/12 pt-20 bg-t">
        <div className="flex flex-col" >
             <h1 className="w-full text-green-600 md:font-bold md:text-4xl font-semibold text-3xl">Selamat Datang Di website aing</h1>
            <p className="mt-2 text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    </section>
  );
}