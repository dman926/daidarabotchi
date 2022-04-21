/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLitter = /* GraphQL */ `
  query GetLitter($id: ID!) {
    getLitter(id: $id) {
      mother
      litterNumber
      puppies {
        items {
          color
          price
          born
          id
          createdAt
          updatedAt
          litterPuppiesId
          puppyOrderId
        }
        nextToken
      }
      description
      posts {
        items {
          id
          images
          content
          createdAt
          updatedAt
          litterPostsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listLitters = /* GraphQL */ `
  query ListLitters(
    $filter: ModelLitterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLitters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        mother
        litterNumber
        puppies {
          nextToken
        }
        description
        posts {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPuppy = /* GraphQL */ `
  query GetPuppy($id: ID!) {
    getPuppy(id: $id) {
      litter {
        mother
        litterNumber
        puppies {
          nextToken
        }
        description
        posts {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      color
      price
      born
      order {
        id
        puppy {
          color
          price
          born
          id
          createdAt
          updatedAt
          litterPuppiesId
          puppyOrderId
        }
        email
        name
        puppyID
        paymentIDs
        createdAt
        updatedAt
        orderPuppyId
        owner
      }
      id
      createdAt
      updatedAt
      litterPuppiesId
      puppyOrderId
    }
  }
`;
export const listPuppies = /* GraphQL */ `
  query ListPuppies(
    $filter: ModelPuppyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPuppies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        litter {
          mother
          litterNumber
          description
          id
          createdAt
          updatedAt
        }
        color
        price
        born
        order {
          id
          email
          name
          puppyID
          paymentIDs
          createdAt
          updatedAt
          orderPuppyId
          owner
        }
        id
        createdAt
        updatedAt
        litterPuppiesId
        puppyOrderId
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: String!) {
    getPost(id: $id) {
      id
      litter {
        mother
        litterNumber
        puppies {
          nextToken
        }
        description
        posts {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      images
      content
      createdAt
      updatedAt
      litterPostsId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $id: String
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPosts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        litter {
          mother
          litterNumber
          description
          id
          createdAt
          updatedAt
        }
        images
        content
        createdAt
        updatedAt
        litterPostsId
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: String!) {
    getOrder(id: $id) {
      id
      puppy {
        litter {
          mother
          litterNumber
          description
          id
          createdAt
          updatedAt
        }
        color
        price
        born
        order {
          id
          email
          name
          puppyID
          paymentIDs
          createdAt
          updatedAt
          orderPuppyId
          owner
        }
        id
        createdAt
        updatedAt
        litterPuppiesId
        puppyOrderId
      }
      email
      name
      puppyID
      paymentIDs
      createdAt
      updatedAt
      orderPuppyId
      owner
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $id: String
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrders(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        puppy {
          color
          price
          born
          id
          createdAt
          updatedAt
          litterPuppiesId
          puppyOrderId
        }
        email
        name
        puppyID
        paymentIDs
        createdAt
        updatedAt
        orderPuppyId
        owner
      }
      nextToken
    }
  }
`;
