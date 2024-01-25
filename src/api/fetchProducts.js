const BASE_URL = "https://api.mercadolibre.com/sites/MLB/search?q=";

const fetchProducts = async (query) => {
  const response = await fetch(`${BASE_URL}${query}`);
  const data = await response.json();

  return data.results;
};

export default fetchProducts;
