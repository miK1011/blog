import Header from '@/app/_components/header'
import { getPostMetadata } from '@/app/_utils/getPost'
import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'

interface PostPageProps {
  params: {
    category: string
    slug: string
  }
}

function getPostContent(category: string, slug: string) {
  const folder = `articles/${category}/`
  const file = folder + `${slug}.md`
  const content = fs.readFileSync(file, 'utf8')

  const matterResult = matter(content)
  return matterResult
}

export async function generateStaticParams({
  params,
}: {
  params: { [key: number]: string }
}) {
  const posts = getPostMetadata(params[1])
  return posts.map((post) => ({
    category: params[1],
    slug: post.slug,
  }))
}

export default function PostPage(props: PostPageProps) {
  const { category, slug } = props.params
  const post = getPostContent(category, slug)
  return (
    <>
      <Header />
      <main className="pt-10">
        <article className="prose lg:prose-xl text-start">
          <Markdown>{post.content}</Markdown>
        </article>
      </main>
    </>
  )
}
