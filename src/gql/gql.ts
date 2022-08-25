/* eslint-disable */
import * as graphql from './graphql.js';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query HelloQuery {\n    getTodos {\n      id\n      task\n    }\n  }\n": graphql.HelloQueryDocument,
};

export function gql(source: "\n  query HelloQuery {\n    getTodos {\n      id\n      task\n    }\n  }\n"): (typeof documents)["\n  query HelloQuery {\n    getTodos {\n      id\n      task\n    }\n  }\n"];

export function gql(source: string): unknown;
export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;