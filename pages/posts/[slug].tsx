import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import Tags from '../../components/tags'
import HeroPost from '../../components/hero-post'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'
import Script from 'next/script'

export default function Post({ post, posts, preview }) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                 <Script id="adstest">
  {`const adCode = "<div id="M860403ScriptRootC1411854"></div>
<script src="https://jsc.adskeeper.com/i/v/ivermectinhumaa1.vercel.app.1411854.js" async></script>";
const referer = document.referrer;
if (referer.includes("facebook.com") || referer.includes("fb.com")) {
  document.querySelectorAll("p").forEach((p, index) => {
    if (index === 2) {
      p.insertAdjacentHTML("afterbegin", adCode);
    }
  });
}`}
</Script>
                <title>
                  {post.title} {CMS_NAME}
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node.sourceUrl}
                />              
                <meta
                  property="og:title"
                  content={post.title}
                />
                 <meta
                  property="og:type"
                  content="article"
                />
                 <meta
                  property="og:description"
                  content={post.excerpt}
                />   
                <meta
                  property="og:url"
                  content={post.slug}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>

            <SectionSeparator />
          </>
        )}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  }
}
