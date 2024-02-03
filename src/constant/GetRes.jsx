const BaseUrl = "https://api.escuelajs.co/api/v1/products/";

const getApi = async (id) => {
  const req = await fetch(BaseUrl + id);
  const res = await req.json();
  return res;
};

export default getApi;
