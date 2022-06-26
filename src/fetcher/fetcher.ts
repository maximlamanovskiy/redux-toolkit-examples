function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  throw new Error(response.statusText);
}

export async function getJson(url: string) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    const checkedResponse = checkStatus(response);
    return await checkedResponse.json();
  } catch (error) {
    return error;
  }
}

export async function getImage(url: string) {
  const response = await fetch(url, {
    method: "GET",
    cache: "no-store",
  });
  const checkedResponse = checkStatus(response);
  const blob = await checkedResponse.blob();
  return URL.createObjectURL(blob);
}
