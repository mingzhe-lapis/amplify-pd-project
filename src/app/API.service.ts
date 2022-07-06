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
  onCreateMentee: OnCreateMenteeSubscription;
  onUpdateMentee: OnUpdateMenteeSubscription;
  onDeleteMentee: OnDeleteMenteeSubscription;
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

export type CreateMenteeInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  city?: string | null;
};

export type ModelMenteeConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  and?: Array<ModelMenteeConditionInput | null> | null;
  or?: Array<ModelMenteeConditionInput | null> | null;
  not?: ModelMenteeConditionInput | null;
};

export type Mentee = {
  __typename: "Mentee";
  id: string;
  name: string;
  description?: string | null;
  city?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateMenteeInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  city?: string | null;
};

export type DeleteMenteeInput = {
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

export type ModelMenteeFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  and?: Array<ModelMenteeFilterInput | null> | null;
  or?: Array<ModelMenteeFilterInput | null> | null;
  not?: ModelMenteeFilterInput | null;
};

export type ModelMenteeConnection = {
  __typename: "ModelMenteeConnection";
  items: Array<Mentee | null>;
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

export type CreateMenteeMutation = {
  __typename: "Mentee";
  id: string;
  name: string;
  description?: string | null;
  city?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateMenteeMutation = {
  __typename: "Mentee";
  id: string;
  name: string;
  description?: string | null;
  city?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteMenteeMutation = {
  __typename: "Mentee";
  id: string;
  name: string;
  description?: string | null;
  city?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
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

export type GetMenteeQuery = {
  __typename: "Mentee";
  id: string;
  name: string;
  description?: string | null;
  city?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListMenteesQuery = {
  __typename: "ModelMenteeConnection";
  items: Array<{
    __typename: "Mentee";
    id: string;
    name: string;
    description?: string | null;
    city?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
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

export type OnCreateMenteeSubscription = {
  __typename: "Mentee";
  id: string;
  name: string;
  description?: string | null;
  city?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateMenteeSubscription = {
  __typename: "Mentee";
  id: string;
  name: string;
  description?: string | null;
  city?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteMenteeSubscription = {
  __typename: "Mentee";
  id: string;
  name: string;
  description?: string | null;
  city?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
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
  async CreateMentee(
    input: CreateMenteeInput,
    condition?: ModelMenteeConditionInput
  ): Promise<CreateMenteeMutation> {
    const statement = `mutation CreateMentee($input: CreateMenteeInput!, $condition: ModelMenteeConditionInput) {
        createMentee(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
          owner
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
    return <CreateMenteeMutation>response.data.createMentee;
  }
  async UpdateMentee(
    input: UpdateMenteeInput,
    condition?: ModelMenteeConditionInput
  ): Promise<UpdateMenteeMutation> {
    const statement = `mutation UpdateMentee($input: UpdateMenteeInput!, $condition: ModelMenteeConditionInput) {
        updateMentee(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
          owner
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
    return <UpdateMenteeMutation>response.data.updateMentee;
  }
  async DeleteMentee(
    input: DeleteMenteeInput,
    condition?: ModelMenteeConditionInput
  ): Promise<DeleteMenteeMutation> {
    const statement = `mutation DeleteMentee($input: DeleteMenteeInput!, $condition: ModelMenteeConditionInput) {
        deleteMentee(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
          owner
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
    return <DeleteMenteeMutation>response.data.deleteMentee;
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
  async GetMentee(id: string): Promise<GetMenteeQuery> {
    const statement = `query GetMentee($id: ID!) {
        getMentee(id: $id) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMenteeQuery>response.data.getMentee;
  }
  async ListMentees(
    filter?: ModelMenteeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMenteesQuery> {
    const statement = `query ListMentees($filter: ModelMenteeFilterInput, $limit: Int, $nextToken: String) {
        listMentees(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            city
            createdAt
            updatedAt
            owner
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
    return <ListMenteesQuery>response.data.listMentees;
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

  OnCreateMenteeListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMentee">>
  > {
    const statement = `subscription OnCreateMentee($owner: String) {
        onCreateMentee(owner: $owner) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMentee">>
    >;
  }

  OnUpdateMenteeListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMentee">>
  > {
    const statement = `subscription OnUpdateMentee($owner: String) {
        onUpdateMentee(owner: $owner) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMentee">>
    >;
  }

  OnDeleteMenteeListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMentee">>
  > {
    const statement = `subscription OnDeleteMentee($owner: String) {
        onDeleteMentee(owner: $owner) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMentee">>
    >;
  }
}
