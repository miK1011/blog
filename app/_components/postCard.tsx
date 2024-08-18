import dayjs from 'dayjs'
import Link from 'next/link'

const PostCard = ({
  post,
}: {
  post: { title: string; date: string; slug: string; category: string }
}) => {
  const diffDays = dayjs().diff(post.date, 'day')

  return (
    <Link href={`/articles/${post.category}/${post.slug}`}>
      <div className="relative mt-6 flex w-[100%] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="p-6">
          <h5 className="text-blue-gray-900 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal">
            {post.title}
          </h5>
          <div className="flex gap-x-4 font-sans text-base font-light leading-relaxed text-inherit">
            <p>{dayjs(post.date).format('YYYY-MM-DD')}</p>
            {diffDays === 0 && <p>今日</p>}
            {diffDays !== 0 && diffDays < 30 && <p>{`${diffDays}日前`}</p>}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
