import { checkError, client } from './client';

export async function fetchBlogs() {
  const resp = await client.from('blogs').select('*, authors(name)');
  return checkError(resp);
}

// export async function fetchBlogs() {
//   return await client
//     .from('blogs')
//     .select('*')
//     .order('created_at', { foreignTable: 'authors', ascending: false })
//     .single();
// }
