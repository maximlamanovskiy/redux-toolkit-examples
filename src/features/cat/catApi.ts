import { getImage } from "../../fetcher/fetcher";

function checkStatus(response: Response) {
  if (response.status < 200 || response.status >= 300) {
    throw new Error(response.statusText);
  }
}

export async function getCat(url: string) {
  const response = await fetch(url, {
    method: "GET",
    cache: "no-store",
  });
  checkStatus(response);
  const blob = await response.blob();
  return URL.createObjectURL(blob);
}

export async function getCatWithFetcher(url: string) {
  return getImage(url);
}
