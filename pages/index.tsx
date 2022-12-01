import Head from "next/head";
import Link from "next/link";
// import Image from "next/image";
import Header from "../components/Header";
// import styles from "../styles/Home.module.css";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
            <span className="underline decoration-black decoration-4">
              Medium
            </span>{" "}
            is a place to write, read, and connect
          </h1>
          <h2>
            It's easy and free to post your thinking on any topic and connects
            with millions of readers
          </h2>
        </div>

        <img
          src="https://ik.imagekit.io/vinnie/Medium_Website/Mediumm_d2k7zuk7o.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669909244615"
          alt="Medium Logo"
          className="hidden md:inline-flex h-32 lg:h-full"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 md:p-6 p-2">
        {posts.map((post) => (
          <Link key={post._id} href="/">
            {/* <Link key={post._id} href={`/post/${post.slug.current}`}> */}
            <div className="group border rounded-lg cursor-pointer overflow-hidden">
              <img
                src={urlFor(post.mainImage).url()!}
                alt="qqq"
                width={40}
                height={40}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
              />
              <div className="flex justify-between p-5 bg-white">
                <div>
                  <p className='text-lg font-bold'>{post.title}</p>
                  <p className='text-xs'>
                    {post.description} by {post.author.name}
                  </p>
                </div>
                <img
                  src={urlFor(post.author.image).url()!}
                  alt="qqq"
                  className="h-12 w-12 rounded-full"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    slug,
    description,
    title,
    mainImage,
    author -> {
    name,
    image,
  }
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
