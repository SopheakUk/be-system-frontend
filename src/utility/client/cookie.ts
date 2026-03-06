export const cookie = (key: string): string | undefined => {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${key}=`))
    ?.split("=")[1];
  return cookieValue;
};
