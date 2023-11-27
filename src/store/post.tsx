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
  currentPost: PostType | null

  setCurrentPost: (id: number) => void
  insertPost: ({ ...args }: InsertPostType) => Promise<void>
  fetchPosts: () => Promise<void>
}

export const usePost = create<PostData>((set, get) => {
  return {
    posts: null,
    currentPost: null,

    setCurrentPost: (id) => {
      const posts = get().posts
      if (!posts) return

      const current = posts.find((post) => post.id === id)
      if (!current) return

      set({
        currentPost: current,
      })
    },

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
    insertPost: async ({ body, title, userId }) => {
      try {
        const posts = get().posts || []

        const newPost: PostType = {
          id: new Date().getTime(),
          body,
          title,
          userId,
        }

        await axios.post('https://jsonplaceholder.typicode.com/posts', {
          newPost,
        })
        set({
          posts: [newPost, ...posts],
        })
      } catch (err) {
        console.log(err)
      }
    },
  }
})
