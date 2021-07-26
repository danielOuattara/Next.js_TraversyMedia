
import { server } from "./../config/index.js";
import Head from 'next/head';
import ArticleList from './../components/ArticleList';

export default function Home({articles}) {
  // console.log(articles)
  return (
    <div>
      <Head>
        <title>Web dev news</title>
        <meta name="keywords" content="web dev. with Next.js" />
      </Head>
      <ArticleList /* key={articles.id} */ articles={articles}/>

    </div>
  )
}

// export const getStaticProps = async () => { // on built time
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=7");
//   const articles = await res.json();

//   console.log(articles)

//   return {
//     props: { articles }
//   }
// }

export const getStaticProps = async () => { // on built time
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  console.log(articles)

  return {
    props: { articles }
  }
}


/**
 
getStaticProps() => fetch on built time

getServerProps()=> fetch data on every request (slower)

getStaticPaths() => dynamically generate paths

 */