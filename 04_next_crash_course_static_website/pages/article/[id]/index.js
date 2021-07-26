import React from 'react';
import Link from "next/link";
import { useRouter} from "next/router";

const article = ({ article}) => {
    //method 1 : for id
    //-----------------
    // const router = useRouter();
    // const { id } = router.query;
    return (
        <>
            {/* This is an article {id} */}
            <h1>{article.title} </h1>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go back</Link>
        </>
    )
}

/*method 2 : for fetch individual article using  --> "getServerSideProps()"
--------------------------------------------------------------------------*/

// export const getServerSideProps = async (context) => {
//     const res = await  fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json();

//     return {
//         props: { article }
//     }
// }



/*method 3 : for fetch individual article using;  [--> Much faster !]
    "getStaticProps()"  &  "getStaticPaths()"
----------------------------------------------------------*/

export const getStaticProps = async (context) => {
    const res = await  fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const article = await res.json();

    return {
        props: { article }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=7/`);
    const articles = await res.json();

    const  ids = articles.map ( article => article.id)
    const paths = ids.map( id =>(
        { params: {id: id.toString()}}))

    return {
        paths,
        fallback: false,
    }

}

export default article;
