/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLitter = /* GraphQL */ `
  mutation CreateLitter(
    $input: CreateLitterInput!
    $condition: ModelLitterConditionInput
  ) {
    createLitter(input: $input, condition: $condition) {
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
export const updateLitter = /* GraphQL */ `
  mutation UpdateLitter(
    $input: UpdateLitterInput!
    $condition: ModelLitterConditionInput
  ) {
    updateLitter(input: $input, condition: $condition) {
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
export const deleteLitter = /* GraphQL */ `
  mutation DeleteLitter(
    $input: DeleteLitterInput!
    $condition: ModelLitterConditionInput
  ) {
    deleteLitter(input: $input, condition: $condition) {
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
export const createPuppy = /* GraphQL */ `
  mutation CreatePuppy(
    $input: CreatePuppyInput!
    $condition: ModelPuppyConditionInput
  ) {
    createPuppy(input: $input, condition: $condition) {
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
export const updatePuppy = /* GraphQL */ `
  mutation UpdatePuppy(
    $input: UpdatePuppyInput!
    $condition: ModelPuppyConditionInput
  ) {
    updatePuppy(input: $input, condition: $condition) {
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
export const deletePuppy = /* GraphQL */ `
  mutation DeletePuppy(
    $input: DeletePuppyInput!
    $condition: ModelPuppyConditionInput
  ) {
    deletePuppy(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
