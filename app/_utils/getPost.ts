import fs from 'fs'
import matter from 'gray-matter'

import { CATEGORIES } from '@/app/_constants/categories'

export function getPostMetadata(category: string) {
  const folder = 'articles/' + category + '/'
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith('.md'))

  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${folder}${filename}`, 'utf8')
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      category: category,
      slug: filename.replace('.md', ''),
    }
  })
  return posts
}

export function getAllPostsMetadata() {
  return Object.entries(CATEGORIES).flatMap(([_, category]) =>
    getPostMetadata(category),
  )
}
