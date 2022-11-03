import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import { sanityClient, urlFor } from '../sanity';
import { Post } from '../typings';

interface Props {
  posts: Post[];
}
const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Head>
        <title>Medium Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <div className='flex justify-between items-center bg-indigo-400 border-y py-10 lg:py-0'>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif'>Stay curious.</h1>
          <h2>
            Discover stories, thinking, and expertise from writers on any topic.
          </h2>
        </div>
        <img
          src='https://seeklogo.com/images/M/medium-logo-93CDCF6451-seeklogo.com.png'
          className='hidden md:inline-flex h-32 lg:h-full'
        />
      </div>
      {/* posts */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className='group rounded-lg cursor-pointer overflow-hidden'>
              <img
                className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out'
                src={urlFor(post.mainImage).url()!}
                alt={`${post.title}`}
              />
              <div className='flex justify-between p-5 bg-white '>
                <p className='text-lg font-bold'>{post.title}</p>
                <p className='text-xs'>
                  {post.description} by {post.author.name}
                </p>
              </div>

              <img
                className='h-12 w-12 rounded-full'
                src={urlFor(post.author.image).url()}
                alt={`${post.title}`}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export const getServerSideProps = async () => {
  const query = `*[_type=='post']{
 _id,
  title,
  description,
  author -> {
    name,
    image},
  description,
  mainImage,
  slug
}`;

  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  };
};
export default Home;
