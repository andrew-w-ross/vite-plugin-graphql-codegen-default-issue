import { gql } from "graphql-tag";

export const schema = gql`
type Todo {
    id: ID!
    task: String!
    completed: Boolean!
}

  type Query {
    getTodo(id: ID!): Todo
    getTodos: [Todo!]!
  }
`;
