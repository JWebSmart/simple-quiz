const fetchApi = async (path, parameters = {}) => {
  const response = await fetch(path, {
    ...parameters,
  });

  if (!response.ok) {
    throw await response.json();
  }

  return response;
}

const request = async (path, parameters = {}) => {
  const response = await fetchApi(path, parameters);

  if (response.headers.has("content-type")) {
    const contentType = response.headers.get("content-type");
    if (contentType.includes("application/json") && response.status !== 204) {
      return response.json();
    }
  }

  return response.text();
}

export default request
