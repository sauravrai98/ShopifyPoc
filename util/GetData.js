 import axios from 'axios';


async function getData() {
  const url = `https://testapi-1791.myshopify.com/admin/api/2023-01/products.json`;
  const config = {
    headers:{
      'X-Shopify-Access-Token': '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',
      'Content-Type': 'application/json'
    }
  };
    const response = await axios.get(url,config);

    const products = [];
    const productsJson = [];
    console.log(response.data);

    for(const key in response.data['products']) {
      const productObj = {
      id: response.data['products'][key].id,
      title: response.data['products'][key].title,
      image: response.data['products'][key].image['src'] === null ? '':response.data['products'][key].image['src']
      }
      products.push(productObj);
    }
    // console.log(response.status);
    // console.log(response.data);
  
  return products;
  
}

export function getProducts() {
  return getData();
}
