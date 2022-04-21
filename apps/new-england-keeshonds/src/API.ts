/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLitterInput = {
  mother: string,
  litterNumber: number,
  description?: string | null,
  id?: string | null,
};

export type ModelLitterConditionInput = {
  mother?: ModelStringInput | null,
  litterNumber?: ModelIntInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelLitterConditionInput | null > | null,
  or?: Array< ModelLitterConditionInput | null > | null,
  not?: ModelLitterConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Litter = {
  __typename: "Litter",
  mother: string,
  litterNumber: number,
  puppies?: ModelPuppyConnection | null,
  description?: string | null,
  posts?: ModelPostConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelPuppyConnection = {
  __typename: "ModelPuppyConnection",
  items:  Array<Puppy | null >,
  nextToken?: string | null,
};

export type Puppy = {
  __typename: "Puppy",
  litter?: Litter | null,
  color: string,
  price?: number | null,
  born: string,
  order?: Order | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  litterPuppiesId?: string | null,
  puppyOrderId?: string | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  puppy?: Puppy | null,
  email: string,
  name: Array< string | null >,
  puppyID: string,
  paymentIDs?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  orderPuppyId?: string | null,
  owner?: string | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  litter?: Litter | null,
  images: Array< string >,
  content: string,
  createdAt: string,
  updatedAt: string,
  litterPostsId?: string | null,
};

export type UpdateLitterInput = {
  mother?: string | null,
  litterNumber?: number | null,
  description?: string | null,
  id: string,
};

export type DeleteLitterInput = {
  id: string,
};

export type CreatePuppyInput = {
  color: string,
  price?: number | null,
  born: string,
  id?: string | null,
  litterPuppiesId?: string | null,
  puppyOrderId?: string | null,
};

export type ModelPuppyConditionInput = {
  color?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  born?: ModelStringInput | null,
  and?: Array< ModelPuppyConditionInput | null > | null,
  or?: Array< ModelPuppyConditionInput | null > | null,
  not?: ModelPuppyConditionInput | null,
  litterPuppiesId?: ModelIDInput | null,
  puppyOrderId?: ModelIDInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePuppyInput = {
  color?: string | null,
  price?: number | null,
  born?: string | null,
  id: string,
  litterPuppiesId?: string | null,
  puppyOrderId?: string | null,
};

export type DeletePuppyInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  images: Array< string >,
  content: string,
  litterPostsId?: string | null,
};

export type ModelPostConditionInput = {
  images?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  litterPostsId?: ModelIDInput | null,
};

export type UpdatePostInput = {
  id: string,
  images?: Array< string > | null,
  content?: string | null,
  litterPostsId?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateOrderInput = {
  id?: string | null,
  email: string,
  name: Array< string | null >,
  puppyID: string,
  paymentIDs?: Array< string | null > | null,
  orderPuppyId?: string | null,
};

export type ModelOrderConditionInput = {
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  puppyID?: ModelIDInput | null,
  paymentIDs?: ModelStringInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
  orderPuppyId?: ModelIDInput | null,
};

export type UpdateOrderInput = {
  id: string,
  email?: string | null,
  name?: Array< string | null > | null,
  puppyID?: string | null,
  paymentIDs?: Array< string | null > | null,
  orderPuppyId?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type ModelLitterFilterInput = {
  mother?: ModelStringInput | null,
  litterNumber?: ModelIntInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelLitterFilterInput | null > | null,
  or?: Array< ModelLitterFilterInput | null > | null,
  not?: ModelLitterFilterInput | null,
};

export type ModelLitterConnection = {
  __typename: "ModelLitterConnection",
  items:  Array<Litter | null >,
  nextToken?: string | null,
};

export type ModelPuppyFilterInput = {
  color?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  born?: ModelStringInput | null,
  and?: Array< ModelPuppyFilterInput | null > | null,
  or?: Array< ModelPuppyFilterInput | null > | null,
  not?: ModelPuppyFilterInput | null,
  litterPuppiesId?: ModelIDInput | null,
  puppyOrderId?: ModelIDInput | null,
};

export type ModelPostFilterInput = {
  id?: ModelStringInput | null,
  images?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  litterPostsId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelOrderFilterInput = {
  id?: ModelStringInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  puppyID?: ModelIDInput | null,
  paymentIDs?: ModelStringInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
  orderPuppyId?: ModelIDInput | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type CreateLitterMutationVariables = {
  input: CreateLitterInput,
  condition?: ModelLitterConditionInput | null,
};

export type CreateLitterMutation = {
  createLitter?:  {
    __typename: "Litter",
    mother: string,
    litterNumber: number,
    puppies?:  {
      __typename: "ModelPuppyConnection",
      items:  Array< {
        __typename: "Puppy",
        color: string,
        price?: number | null,
        born: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        litterPuppiesId?: string | null,
        puppyOrderId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    description?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        images: Array< string >,
        content: string,
        createdAt: string,
        updatedAt: string,
        litterPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLitterMutationVariables = {
  input: UpdateLitterInput,
  condition?: ModelLitterConditionInput | null,
};

export type UpdateLitterMutation = {
  updateLitter?:  {
    __typename: "Litter",
    mother: string,
    litterNumber: number,
    puppies?:  {
      __typename: "ModelPuppyConnection",
      items:  Array< {
        __typename: "Puppy",
        color: string,
        price?: number | null,
        born: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        litterPuppiesId?: string | null,
        puppyOrderId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    description?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        images: Array< string >,
        content: string,
        createdAt: string,
        updatedAt: string,
        litterPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLitterMutationVariables = {
  input: DeleteLitterInput,
  condition?: ModelLitterConditionInput | null,
};

export type DeleteLitterMutation = {
  deleteLitter?:  {
    __typename: "Litter",
    mother: string,
    litterNumber: number,
    puppies?:  {
      __typename: "ModelPuppyConnection",
      items:  Array< {
        __typename: "Puppy",
        color: string,
        price?: number | null,
        born: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        litterPuppiesId?: string | null,
        puppyOrderId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    description?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        images: Array< string >,
        content: string,
        createdAt: string,
        updatedAt: string,
        litterPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePuppyMutationVariables = {
  input: CreatePuppyInput,
  condition?: ModelPuppyConditionInput | null,
};

export type CreatePuppyMutation = {
  createPuppy?:  {
    __typename: "Puppy",
    litter?:  {
      __typename: "Litter",
      mother: string,
      litterNumber: number,
      puppies?:  {
        __typename: "ModelPuppyConnection",
        nextToken?: string | null,
      } | null,
      description?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    color: string,
    price?: number | null,
    born: string,
    order?:  {
      __typename: "Order",
      id: string,
      puppy?:  {
        __typename: "Puppy",
        color: string,
        price?: number | null,
        born: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        litterPuppiesId?: string | null,
        puppyOrderId?: string | null,
      } | null,
      email: string,
      name: Array< string | null >,
      puppyID: string,
      paymentIDs?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      orderPuppyId?: string | null,
      owner?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    litterPuppiesId?: string | null,
    puppyOrderId?: string | null,
  } | null,
};

export type UpdatePuppyMutationVariables = {
  input: UpdatePuppyInput,
  condition?: ModelPuppyConditionInput | null,
};

export type UpdatePuppyMutation = {
  updatePuppy?:  {
    __typename: "Puppy",
    litter?:  {
      __typename: "Litter",
      mother: string,
      litterNumber: number,
      puppies?:  {
        __typename: "ModelPuppyConnection",
        nextToken?: string | null,
      } | null,
      description?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    color: string,
    price?: number | null,
    born: string,
    order?:  {
      __typename: "Order",
      id: string,
      puppy?:  {
        __typename: "Puppy",
        color: string,
        price?: number | null,
        born: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        litterPuppiesId?: string | null,
        puppyOrderId?: string | null,
      } | null,
      email: string,
      name: Array< string | null >,
      puppyID: string,
      paymentIDs?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      orderPuppyId?: string | null,
      owner?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    litterPuppiesId?: string | null,
    puppyOrderId?: string | null,
  } | null,
};

export type DeletePuppyMutationVariables = {
  input: DeletePuppyInput,
  condition?: ModelPuppyConditionInput | null,
};

export type DeletePuppyMutation = {
  deletePuppy?:  {
    __typename: "Puppy",
    litter?:  {
      __typename: "Litter",
      mother: string,
      litterNumber: number,
      puppies?:  {
        __typename: "ModelPuppyConnection",
        nextToken?: string | null,
      } | null,
      description?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    color: string,
    price?: number | null,
    born: string,
    order?:  {
      __typename: "Order",
      id: string,
      puppy?:  {
        __typename: "Puppy",
        color: string,
        price?: number | null,
        born: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        litterPuppiesId?: string | null,
        puppyOrderId?: string | null,
      } | null,
      email: string,
      name: Array< string | null >,
      puppyID: string,
      paymentIDs?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      orderPuppyId?: string | null,
      owner?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    litterPuppiesId?: string | null,
    puppyOrderId?: string | null,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    litter?:  {
      __typename: "Litter",
      mother: string,
      litterNumber: number,
      puppies?:  {
        __typename: "ModelPuppyConnection",
        nextToken?: string | null,
      } | null,
      description?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    images: Array< string >,
    content: string,
    createdAt: string,
    updatedAt: string,
    litterPostsId?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    litter?:  {
      __typename: "Litter",
      mother: string,
      litterNumber: number,
      puppies?:  {
        __typename: "ModelPuppyConnection",
        nextToken?: string | null,
      } | null,
      description?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    images: Array< string >,
    content: string,
    createdAt: string,
    updatedAt: string,
    litterPostsId?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    litter?:  {
      __typename: "Litter",
      mother: string,
      litterNumber: number,
      puppies?:  {
        __typename: "ModelPuppyConnection",
        nextToken?: string | null,
      } | null,
      description?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    images: Array< string >,
    content: string,
    createdAt: string,
    updatedAt: string,
    litterPostsId?: string | null,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    puppy?:  {
      __typename: "Puppy",
      litter?:  {
        __typename: "Litter",
        mother: string,
        litterNumber: number,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      color: string,
      price?: number | null,
      born: string,
      order?:  {
        __typename: "Order",
        id: string,
        email: string,
        name: Array< string | null >,
        puppyID: string,
        paymentIDs?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        orderPuppyId?: string | null,
        owner?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      litterPuppiesId?: string | null,
      puppyOrderId?: string | null,
    } | null,
    email: string,
    name: Array< string | null >,
    puppyID: string,
    paymentIDs?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    orderPuppyId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    puppy?:  {
      __typename: "Puppy",
      litter?:  {
        __typename: "Litter",
        mother: string,
        litterNumber: number,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      color: string,
      price?: number | null,
      born: string,
      order?:  {
        __typename: "Order",
        id: string,
        email: string,
        name: Array< string | null >,
        puppyID: string,
        paymentIDs?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        orderPuppyId?: string | null,
        owner?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      litterPuppiesId?: string | null,
      puppyOrderId?: string | null,
    } | null,
    email: string,
    name: Array< string | null >,
    puppyID: string,
    paymentIDs?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    orderPuppyId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    puppy?:  {
      __typename: "Puppy",
      litter?:  {
        __typename: "Litter",
        mother: string,
        litterNumber: number,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      color: string,
      price?: number | null,
      born: string,
      order?:  {
        __typename: "Order",
        id: string,
        email: string,
        name: Array< string | null >,
        puppyID: string,
        paymentIDs?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        orderPuppyId?: string | null,
        owner?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      litterPuppiesId?: string | null,
      puppyOrderId?: string | null,
    } | null,
    email: string,
    name: Array< string | null >,
    puppyID: string,
    paymentIDs?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    orderPuppyId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetLitterQueryVariables = {
  id: string,
};

export type GetLitterQuery = {
  getLitter?:  {
    __typename: "Litter",
    mother: string,
    litterNumber: number,
    puppies?:  {
      __typename: "ModelPuppyConnection",
      items:  Array< {
        __typename: "Puppy",
        color: string,
        price?: number | null,
        born: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        litterPuppiesId?: string | null,
        puppyOrderId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    description?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        images: Array< string >,
        content: string,
        createdAt: string,
        updatedAt: string,
        litterPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLittersQueryVariables = {
  filter?: ModelLitterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLittersQuery = {
  listLitters?:  {
    __typename: "ModelLitterConnection",
    items:  Array< {
      __typename: "Litter",
      mother: string,
      litterNumber: number,
      puppies?:  {
        __typename: "ModelPuppyConnection",
        nextToken?: string | null,
      } | null,
      description?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPuppyQueryVariables = {
  id: string,
};

export type GetPuppyQuery = {
  getPuppy?:  {
    __typename: "Puppy",
    litter?:  {
      __typename: "Litter",
      mother: string,
      litterNumber: number,
      puppies?:  {
        __typename: "ModelPuppyConnection",
        nextToken?: string | null,
      } | null,
      description?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    color: string,
    price?: number | null,
    born: string,
    order?:  {
      __typename: "Order",
      id: string,
      puppy?:  {
        __typename: "Puppy",
        color: string,
        price?: number | null,
        born: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        litterPuppiesId?: string | null,
        puppyOrderId?: string | null,
      } | null,
      email: string,
      name: Array< string | null >,
      puppyID: string,
      paymentIDs?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      orderPuppyId?: string | null,
      owner?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    litterPuppiesId?: string | null,
    puppyOrderId?: string | null,
  } | null,
};

export type ListPuppiesQueryVariables = {
  filter?: ModelPuppyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPuppiesQuery = {
  listPuppies?:  {
    __typename: "ModelPuppyConnection",
    items:  Array< {
      __typename: "Puppy",
      litter?:  {
        __typename: "Litter",
        mother: string,
        litterNumber: number,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      color: string,
      price?: number | null,
      born: string,
      order?:  {
        __typename: "Order",
        id: string,
        email: string,
        name: Array< string | null >,
        puppyID: string,
        paymentIDs?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        orderPuppyId?: string | null,
        owner?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      litterPuppiesId?: string | null,
      puppyOrderId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    litter?:  {
      __typename: "Litter",
      mother: string,
      litterNumber: number,
      puppies?:  {
        __typename: "ModelPuppyConnection",
        nextToken?: string | null,
      } | null,
      description?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    images: Array< string >,
    content: string,
    createdAt: string,
    updatedAt: string,
    litterPostsId?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  id?: string | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      litter?:  {
        __typename: "Litter",
        mother: string,
        litterNumber: number,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      images: Array< string >,
      content: string,
      createdAt: string,
      updatedAt: string,
      litterPostsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    puppy?:  {
      __typename: "Puppy",
      litter?:  {
        __typename: "Litter",
        mother: string,
        litterNumber: number,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      color: string,
      price?: number | null,
      born: string,
      order?:  {
        __typename: "Order",
        id: string,
        email: string,
        name: Array< string | null >,
        puppyID: string,
        paymentIDs?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        orderPuppyId?: string | null,
        owner?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      litterPuppiesId?: string | null,
      puppyOrderId?: string | null,
    } | null,
    email: string,
    name: Array< string | null >,
    puppyID: string,
    paymentIDs?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    orderPuppyId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  id?: string | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      puppy?:  {
        __typename: "Puppy",
        color: string,
        price?: number | null,
        born: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        litterPuppiesId?: string | null,
        puppyOrderId?: string | null,
      } | null,
      email: string,
      name: Array< string | null >,
      puppyID: string,
      paymentIDs?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      orderPuppyId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateLitterSubscription = {
  onCreateLitter?:  {
    __typename: "Litter",
    mother: string,
    litterNumber: number,
    puppies?:  {
      __typename: "ModelPuppyConnection",
      items:  Array< {
        __typename: "Puppy",
        color: string,
        price?: number | null,
        born: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        litterPuppiesId?: string | null,
        puppyOrderId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    description?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        images: Array< string >,
        content: string,
        createdAt: string,
        updatedAt: string,
        litterPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLitterSubscription = {
  onUpdateLitter?:  {
    __typename: "Litter",
    mother: string,
    litterNumber: number,
    puppies?:  {
      __typename: "ModelPuppyConnection",
      items:  Array< {
        __typename: "Puppy",
        color: string,
        price?: number | null,
        born: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        litterPuppiesId?: string | null,
        puppyOrderId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    description?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        images: Array< string >,
        content: string,
        createdAt: string,
        updatedAt: string,
        litterPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLitterSubscription = {
  onDeleteLitter?:  {
    __typename: "Litter",
    mother: string,
    litterNumber: number,
    puppies?:  {
      __typename: "ModelPuppyConnection",
      items:  Array< {
        __typename: "Puppy",
        color: string,
        price?: number | null,
        born: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        litterPuppiesId?: string | null,
        puppyOrderId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    description?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        images: Array< string >,
        content: string,
        createdAt: string,
        updatedAt: string,
        litterPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePuppySubscription = {
  onCreatePuppy?:  {
    __typename: "Puppy",
    litter?:  {
      __typename: "Litter",
      mother: string,
      litterNumber: number,
      puppies?:  {
        __typename: "ModelPuppyConnection",
        nextToken?: string | null,
      } | null,
      description?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    color: string,
    price?: number | null,
    born: string,
    order?:  {
      __typename: "Order",
      id: string,
      puppy?:  {
        __typename: "Puppy",
        color: string,
        price?: number | null,
        born: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        litterPuppiesId?: string | null,
        puppyOrderId?: string | null,
      } | null,
      email: string,
      name: Array< string | null >,
      puppyID: string,
      paymentIDs?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      orderPuppyId?: string | null,
      owner?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    litterPuppiesId?: string | null,
    puppyOrderId?: string | null,
  } | null,
};

export type OnUpdatePuppySubscription = {
  onUpdatePuppy?:  {
    __typename: "Puppy",
    litter?:  {
      __typename: "Litter",
      mother: string,
      litterNumber: number,
      puppies?:  {
        __typename: "ModelPuppyConnection",
        nextToken?: string | null,
      } | null,
      description?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    color: string,
    price?: number | null,
    born: string,
    order?:  {
      __typename: "Order",
      id: string,
      puppy?:  {
        __typename: "Puppy",
        color: string,
        price?: number | null,
        born: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        litterPuppiesId?: string | null,
        puppyOrderId?: string | null,
      } | null,
      email: string,
      name: Array< string | null >,
      puppyID: string,
      paymentIDs?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      orderPuppyId?: string | null,
      owner?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    litterPuppiesId?: string | null,
    puppyOrderId?: string | null,
  } | null,
};

export type OnDeletePuppySubscription = {
  onDeletePuppy?:  {
    __typename: "Puppy",
    litter?:  {
      __typename: "Litter",
      mother: string,
      litterNumber: number,
      puppies?:  {
        __typename: "ModelPuppyConnection",
        nextToken?: string | null,
      } | null,
      description?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    color: string,
    price?: number | null,
    born: string,
    order?:  {
      __typename: "Order",
      id: string,
      puppy?:  {
        __typename: "Puppy",
        color: string,
        price?: number | null,
        born: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        litterPuppiesId?: string | null,
        puppyOrderId?: string | null,
      } | null,
      email: string,
      name: Array< string | null >,
      puppyID: string,
      paymentIDs?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      orderPuppyId?: string | null,
      owner?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    litterPuppiesId?: string | null,
    puppyOrderId?: string | null,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    litter?:  {
      __typename: "Litter",
      mother: string,
      litterNumber: number,
      puppies?:  {
        __typename: "ModelPuppyConnection",
        nextToken?: string | null,
      } | null,
      description?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    images: Array< string >,
    content: string,
    createdAt: string,
    updatedAt: string,
    litterPostsId?: string | null,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    litter?:  {
      __typename: "Litter",
      mother: string,
      litterNumber: number,
      puppies?:  {
        __typename: "ModelPuppyConnection",
        nextToken?: string | null,
      } | null,
      description?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    images: Array< string >,
    content: string,
    createdAt: string,
    updatedAt: string,
    litterPostsId?: string | null,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    litter?:  {
      __typename: "Litter",
      mother: string,
      litterNumber: number,
      puppies?:  {
        __typename: "ModelPuppyConnection",
        nextToken?: string | null,
      } | null,
      description?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    images: Array< string >,
    content: string,
    createdAt: string,
    updatedAt: string,
    litterPostsId?: string | null,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    puppy?:  {
      __typename: "Puppy",
      litter?:  {
        __typename: "Litter",
        mother: string,
        litterNumber: number,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      color: string,
      price?: number | null,
      born: string,
      order?:  {
        __typename: "Order",
        id: string,
        email: string,
        name: Array< string | null >,
        puppyID: string,
        paymentIDs?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        orderPuppyId?: string | null,
        owner?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      litterPuppiesId?: string | null,
      puppyOrderId?: string | null,
    } | null,
    email: string,
    name: Array< string | null >,
    puppyID: string,
    paymentIDs?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    orderPuppyId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    puppy?:  {
      __typename: "Puppy",
      litter?:  {
        __typename: "Litter",
        mother: string,
        litterNumber: number,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      color: string,
      price?: number | null,
      born: string,
      order?:  {
        __typename: "Order",
        id: string,
        email: string,
        name: Array< string | null >,
        puppyID: string,
        paymentIDs?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        orderPuppyId?: string | null,
        owner?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      litterPuppiesId?: string | null,
      puppyOrderId?: string | null,
    } | null,
    email: string,
    name: Array< string | null >,
    puppyID: string,
    paymentIDs?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    orderPuppyId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    puppy?:  {
      __typename: "Puppy",
      litter?:  {
        __typename: "Litter",
        mother: string,
        litterNumber: number,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      color: string,
      price?: number | null,
      born: string,
      order?:  {
        __typename: "Order",
        id: string,
        email: string,
        name: Array< string | null >,
        puppyID: string,
        paymentIDs?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        orderPuppyId?: string | null,
        owner?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      litterPuppiesId?: string | null,
      puppyOrderId?: string | null,
    } | null,
    email: string,
    name: Array< string | null >,
    puppyID: string,
    paymentIDs?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    orderPuppyId?: string | null,
    owner?: string | null,
  } | null,
};
