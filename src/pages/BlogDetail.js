import {useParams} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
export default function BlogDetail() {
    const parasms = useParams();
    const [article,setArticle] = useState({});
    const [loading,setLoading] = useState(true);
    const [notFound,setNotFound] = useState(false)

    useEffect(function () {

        async function getArticle() {
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${parasms.id}`);

            if(!request.ok){
                setLoading(false)
                return setNotFound(true);
            }
            const response = await request.json();
            setArticle(response);
            setLoading(false);
        }

        getArticle();

        
    }, [parasms]);

    useEffect(function () {
        document.title = article.title;
    }, [article]);

    if(notFound){
        return (
            <section className="container mx-auto md:w-10/12 w-11/12 pt-9">
                <div>
                    <h1 className="w-full text-green-600 md:font-bold md:text-3xl font-semibold text-2xl">Not Found</h1>
                </div>
            </section>
        )
    }
  return (

    <section className="container mx-auto md:w-10/12 w-11/12 pt-9">
        {!loading && (<div>
        <h1 className="w-full text-green-600 md:font-bold md:text-3xl font-semibold text-2xl">{article.title}</h1>
        
        <p className='text-slate-600 text-base'>{new Date(article.publishedAt).toLocaleDateString()}</p>
        <img src={article.imageUrl} className='mt-4 bg-transparent rounded-md' />
        <p className='max-w-2xl mt-8'>{article.summary}</p>

        <span className='text-slate-500 text-base'>Source : <a href={article.url}>{article.newsSite}</a></span>
    </div>)}
    
    </section>
  );
}