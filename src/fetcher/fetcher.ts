function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  throw new Error(response.statusText);
}

export function getJson(url: string) {
  return fetch(url, {
    method: "GET",
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
    }),
  })
    .then((response: Response) => checkStatus(response))
    .then((response: Response) => response.json())
    .catch((error) => error);
}

export function getImage(url: string) {
  return fetch(url, {
    method: "GET",
  })
    .then((response: Response) => checkStatus(response))
    .then((response: Response) => {
      console.log(response.blob);
      console.log(response.body);
      return response.body;
    })
    .catch((error) => error);
}
