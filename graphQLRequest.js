const BASE_URL = 'http://furndeco.ddev.site/api';

export const graphQLRequest = async (query, variables = {}) => {
    const result = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    }).then((res) => res.json());
    if (!result.data) {
        console.log(result);
        throw new Error(result.errors[0].message);
    }
    return result;
};

export async function getProducts() {
    const result = await graphQLRequest(`
    query getProducts {
        productsEntries {
          ... on products_default_Entry {
            id
            title
            brand {
                id
                title
            }
            price
            productImage {
                id
                url
            }
          }
        }
      }
    `);
    return result.data.productsEntries;
};