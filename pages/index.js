import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { fetchEntries } from '@util/contentfulPosts'
import Post from '@components/Post'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome to mampu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Mampu!" />
        <div className="posts">
          {posts.map((p) => {
            return <Post key={p.date} date={p.date} image={p.image.fields} title={p.title} />
          })}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts,
    },
  }
}

