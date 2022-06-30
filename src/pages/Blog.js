import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Blog() {
    const [articles,setArticles] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(function () {
        document.title = 'Blog';
        async function getArticles() {
            
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles');

            const response = await request.json();
            setArticles(response);
            setLoading(false);
        }

        getArticles();
    }, []);

  return (
    <section className="container mx-auto md:w-10/12 w-11/12 pt-9">
        <div>
            <h1 className="w-full text-green-600 md:font-bold md:text-3xl font-semibold text-2xl">Blog</h1>
            <div>
                <h1>list berita</h1>
                {loading && (
                    <div className='w-full flex flex-wrap justify-center xl:w-10/12 gap-9 mt-10 '>
                                <div className="px-4 pt-4 pb-3 md:w-[45%] bg-slate-600 rounded-md shadow-lg w-full ">        
                                <div className="animate-pulse flex space-x-4">
                                    <div className="flex-1 space-y-6 py-1">
                                        <div className="h-2 bg-slate-700 rounded"></div>
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                             </div>
                                            <div className="h-2 bg-slate-700 rounded"></div>
                                         </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 pt-4 pb-3 md:w-[45%] bg-slate-600 rounded-md shadow-lg w-full ">        
                                <div className="animate-pulse flex space-x-4">
                                    <div className="flex-1 space-y-6 py-1">
                                        <div className="h-2 bg-slate-700 rounded"></div>
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-4 ">
                                                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                             </div>
                                            <div className="h-2 bg-slate-700 rounded"></div>
                                         </div>
                                    </div>
                                </div>
                            </div>
                    </div>)}

                        
                    
        
                {!loading && (
                    <div className='w-full flex justify-center flex-wrap xl:w-10/12 gap-9 mt-10 '>
                        {articles.map(function(article){
                            return (
                                <div key={article.id} className="px-4 pt-4 pb-3 md:w-[45%] bg-slate-600 rounded-md shadow-lg ">
                                    <h1 className='font-semibold text-2xl text-emerald-600'>{article.title}</h1>
                                    <p className='pt-4'>{article.summary}</p>
                                    <Link to={`/blog/${article.id}`} className='text-emerald-600'>Read More</Link>
                                </div>
                            )
                         })
                        }
                    </div>
                )}
            </div>
        </div>
    </section>
  );
}