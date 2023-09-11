const getDatas = async () => {
  const myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer 1n9Ay5VMwhvweW755dRALdz9ZVfCvQFoL7k0WXAVo7g"
  );

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const data = await fetch(
    "http://localhost:7700/indexes/historydb/documents",
    requestOptions
  );
  return data.json();
};

export { getDatas };
