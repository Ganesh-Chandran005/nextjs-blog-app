import { MOCK_RECORDS } from "./mockData";

export async function fetchAllPosts() {
  try {
    const res = await fetch("https://6687ab240bc7155dc018a38a.mockapi.io/api/v1/posts", { 
      cache: "no-store",
      signal: AbortSignal.timeout(2000) 
    });
    if (!res.ok) return MOCK_RECORDS;
    return await res.json();
  } catch {
    return MOCK_RECORDS;
  }
}

export async function fetchPostById(id) {
  try {
    const res = await fetch(`https://6687ab240bc7155dc018a38a.mockapi.io/api/v1/posts/${id}`, { 
      cache: "no-store",
      signal: AbortSignal.timeout(2000)
    });
    if (!res.ok) {
      return MOCK_RECORDS.find((p) => p.id === Number(id)) || MOCK_RECORDS[0];
    }
    return await res.json();
  } catch {
    return MOCK_RECORDS.find((p) => p.id === Number(id)) || MOCK_RECORDS[0];
  }
}