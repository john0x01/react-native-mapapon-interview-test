import axios from 'axios'
import { create } from 'zustand'

type PostType = {
  id: number
  userId: number
  title: string
  body: string
}

type InsertPostType = {
  userId: number
  title: string
  body: string
}

interface PostData {
  posts: PostType[] | null

  insertPost: ({ ...args }: InsertPostType) => void
  fetchPosts: () => Promise<void>
}

export const usePost = create<PostData>((set, get) => {
  return {
    posts: null,

    fetchPosts: async () => {
      console.log('fetch')
      try {
        const data: PostType[] = await axios
          .get('https://jsonplaceholder.typicode.com/posts')
          .then((res) => res.data)
        set({
          posts: data,
        })
      } catch (err) {
        console.log(err)
      }
    },
    insertPost: ({ body, title, userId }) => {
      const posts = get().posts || []

      const newPost: PostType = {
        id: new Date().getTime(),
        body,
        title,
        userId,
      }
      console.log('Post inserted successfully')
      set({
        posts: [newPost, ...posts],
      })
    },
  }
})
