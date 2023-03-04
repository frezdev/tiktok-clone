import { supabase } from './supabase'

export const getVideos = async () => {
  const { data: videos, error } = await supabase
    .from('videos')
    .select(`
      *,
      user:user_id (
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
