const get = async (url) => {
  const response = await fetch(url)
  const status = response.status
  if (status >= 200 && status < 300) {
    return await response.json()
  }
  else {
    throw { status: status, body: await response.json() }
  }
}

const handleError = error => {
  console.log(error);
}

export { get, handleError };