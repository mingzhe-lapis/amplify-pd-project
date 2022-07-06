/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateMentor: OnCreateMentorSubscription;
  onUpdateMentor: OnUpdateMentorSubscription;
  onDeleteMentor: OnDeleteMentorSubscription;
};

export type CreateMentorInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  city?: string | null;
};

export type ModelMentorConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  and?: Array<ModelMentorConditionInput | null> | null;
  or?: Array<ModelMentorConditionInput | null> | null;
  not?: ModelMentorConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
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
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Mentor = {
  __typename: "Mentor";
  id: string;
  name: string;
  description?: string | null;
  city?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateMentorInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  city?: string | null;
};

export type DeleteMentorInput = {
  id: string;
};

export type ModelMentorFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  and?: Array<ModelMentorFilterInput | null> | null;
  or?: Array<ModelMentorFilterInput | null> | null;
  not?: ModelMentorFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelMentorConnection = {
  __typename: "ModelMentorConnection";
  items: Array<Mentor | null>;
  nextToken?: string | null;
};

export type CreateMentorMutation = {
  __typename: "Mentor";
  id: string;
  name: string;
  description?: string | null;
  city?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateMentorMutation = {
  __typename: "Mentor";
  id: string;
  name: string;
  description?: string | null;
  city?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteMentorMutation = {
  __typename: "Mentor";
  id: string;
  name: string;
  description?: string | null;
  city?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetMentorQuery = {
  __typename: "Mentor";
  id: string;
  name: string;
  description?: string | null;
  city?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListMentorsQuery = {
  __typename: "ModelMentorConnection";
  items: Array<{
    __typename: "Mentor";
    id: string;
    name: string;
    description?: string | null;
    city?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateMentorSubscription = {
  __typename: "Mentor";
  id: string;
  name: string;
  description?: string | null;
  city?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateMentorSubscription = {
  __typename: "Mentor";
  id: string;
  name: string;
  description?: string | null;
  city?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteMentorSubscription = {
  __typename: "Mentor";
  id: string;
  name: string;
  description?: string | null;
  city?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateMentor(
    input: CreateMentorInput,
    condition?: ModelMentorConditionInput
  ): Promise<CreateMentorMutation> {
    const statement = `mutation CreateMentor($input: CreateMentorInput!, $condition: ModelMentorConditionInput) {
        createMentor(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMentorMutation>response.data.createMentor;
  }
  async UpdateMentor(
    input: UpdateMentorInput,
    condition?: ModelMentorConditionInput
  ): Promise<UpdateMentorMutation> {
    const statement = `mutation UpdateMentor($input: UpdateMentorInput!, $condition: ModelMentorConditionInput) {
        updateMentor(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMentorMutation>response.data.updateMentor;
  }
  async DeleteMentor(
    input: DeleteMentorInput,
    condition?: ModelMentorConditionInput
  ): Promise<DeleteMentorMutation> {
    const statement = `mutation DeleteMentor($input: DeleteMentorInput!, $condition: ModelMentorConditionInput) {
        deleteMentor(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMentorMutation>response.data.deleteMentor;
  }
  async GetMentor(id: string): Promise<GetMentorQuery> {
    const statement = `query GetMentor($id: ID!) {
        getMentor(id: $id) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMentorQuery>response.data.getMentor;
  }
  async ListMentors(
    filter?: ModelMentorFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMentorsQuery> {
    const statement = `query ListMentors($filter: ModelMentorFilterInput, $limit: Int, $nextToken: String) {
        listMentors(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            city
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListMentorsQuery>response.data.listMentors;
  }
  OnCreateMentorListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMentor">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMentor {
        onCreateMentor {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMentor">>
  >;

  OnUpdateMentorListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMentor">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateMentor {
        onUpdateMentor {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMentor">>
  >;

  OnDeleteMentorListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMentor">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteMentor {
        onDeleteMentor {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMentor">>
  >;
}
