const requestInfo = (verb: string) => {
  const header = new Headers();
  header.append(
    "Authorization",
    "Bearer 1n9Ay5VMwhvweW755dRALdz9ZVfCvQFoL7k0WXAVo7g"
  );

  const requestOptions = {
    method: verb,
    headers: header,
  };

  return requestOptions;
};

export { requestInfo };
