/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLitter = /* GraphQL */ `
  subscription OnCreateLitter {
    onCreateLitter {
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
export const onUpdateLitter = /* GraphQL */ `
  subscription OnUpdateLitter {
    onUpdateLitter {
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
export const onDeleteLitter = /* GraphQL */ `
  subscription OnDeleteLitter {
    onDeleteLitter {
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
export const onCreatePuppy = /* GraphQL */ `
  subscription OnCreatePuppy {
    onCreatePuppy {
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
export const onUpdatePuppy = /* GraphQL */ `
  subscription OnUpdatePuppy {
    onUpdatePuppy {
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
export const onDeletePuppy = /* GraphQL */ `
  subscription OnDeletePuppy {
    onDeletePuppy {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($owner: String) {
    onCreateOrder(owner: $owner) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($owner: String) {
    onUpdateOrder(owner: $owner) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($owner: String) {
    onDeleteOrder(owner: $owner) {
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
