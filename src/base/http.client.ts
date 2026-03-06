export function bindUrl(apiUrl: string): URL {
  const url = new URL(apiUrl, process.env.NEXT_PUBLIC_API_URL);
  return url;
}
