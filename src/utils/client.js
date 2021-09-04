function client(endpoint, customConfig = {}) {
  const config = {
    method: "GET",
    ...customConfig,
  };

  return window
    .fetch(
      `${process.env.REACT_APP_IP_GEOLOCATION_URL}/${endpoint}${process.env.REACT_APP_IP_GEOLOCATION_API_KEY}`,
      config
    )
    .then(async (response) => {
      const data = response.json();
      if (response.ok) return data;
      else return Promise.reject(data);
    })
    .catch((err) => console.log(err));
}

export { client };
