import Header from '@/app/_components/header'
import PostCard from '@/app/_components/postCard'
import { getAllPostsMetadata } from '@/app/_utils/getPost'
import dayjs from 'dayjs'

export default async function TopPage() {
  const postMetadata = getAllPostsMetadata()

  const sortedPosts = postMetadata.sort((a, b) => {
    const dateA = dayjs(a.date).valueOf()
    const dateB = dayjs(b.date).valueOf()
    return dateB - dateA
  })

  return (
    <>
      <Header />
      <main className="mx-auto">
        {sortedPosts.flatMap((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </main>
    </>
  )
}
