import { supabase } from './supabase'

const prefix = import.meta.env.VITE_SUPABASE_STORAGE_URL

export const uploadVideo = async ({ videoFile }) => {
  const hash = window.crypto.randomUUID()
  const { data, error } = await supabase
    .storage
    .from('videos')
    .upload(`uploads/${hash}.mp4`, videoFile)

  const fileUrl = data?.path ? `https://${prefix}/${data.path}` : ''

  return [error, fileUrl]
}

export const publishVideo = async ({ videoSrc, description }) => {
  const defaultCover = 'https://lh3.googleusercontent.com/--TBXPdLZBZw/AAAAAAAAAAI/AAAAAAAAAAA/APmPUbHL1g2_FEI35AG1D8bBTmPNIjrRTw/photo.jpg?sz=46'
  const { data, error } = await supabase
    .from('videos')
    .insert([
      {
        user_id: '80e6dc30-79fe-411a-b153-9cd4849046ab',
        albumCover: defaultCover,
        songTitle: 'sonido original - carlosandf',
        description,
        src: videoSrc
      }
    ])

  return [error, data]
}

export const getVideos = async () => {
  const { data: videos, error } = await supabase
    .from('videos')
    .select(`
      *,
      users:user_id (
        username,
        avatar,
        id
      )
    `)
    .order(
      'created_at',
      { ascending: false }
    )

  return [videos, error]
}

export const singUpUser = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })

  return { error, data }
}

export const registerUser = async ({ username, avatar = '' }) => {
  const { error } = await supabase
    .from('users')
    .insert({
      username,
      avatar
    })

  return { error }
}
