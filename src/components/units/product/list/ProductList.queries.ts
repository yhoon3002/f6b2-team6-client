import { gql } from '@apollo/client';


export const FETCH_PRODUCTS = gql`
query fetchProducts($page: Float) {
    fetchProducts(page: $page) {
        id
        title
        description
        price
        like
        createdAt
        productTags {
            id
            tag
        }
    }
}
`;