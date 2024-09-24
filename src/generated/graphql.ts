/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  atom?: Maybe<Atom>;
  atomId?: Maybe<Scalars['BigInt']['output']>;
  createdAtoms?: Maybe<AtomPage>;
  createdTriples?: Maybe<TriplePage>;
  deposits?: Maybe<DepositPage>;
  feeTransfers?: Maybe<FeeTransferPage>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  label: Scalars['String']['output'];
  positions?: Maybe<PositionPage>;
  redemptions?: Maybe<RedemptionPage>;
  signals?: Maybe<SignalPage>;
  type: AccountType;
};


export type AccountCreatedAtomsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<AtomFilter>;
};


export type AccountCreatedTriplesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TripleFilter>;
};


export type AccountDepositsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<DepositFilter>;
};


export type AccountFeeTransfersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<FeeTransferFilter>;
};


export type AccountPositionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PositionFilter>;
};


export type AccountRedemptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<RedemptionFilter>;
};


export type AccountSignalsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<SignalFilter>;
};

export type AccountFilter = {
  AND?: InputMaybe<Array<InputMaybe<AccountFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AccountFilter>>>;
  atomId?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  atomId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_not?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_contains?: InputMaybe<Scalars['String']['input']>;
  image_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_not?: InputMaybe<Scalars['String']['input']>;
  image_not_contains?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_starts_with?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_ends_with?: InputMaybe<Scalars['String']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  label_starts_with?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AccountType>;
  type_in?: InputMaybe<Array<InputMaybe<AccountType>>>;
  type_not?: InputMaybe<AccountType>;
  type_not_in?: InputMaybe<Array<InputMaybe<AccountType>>>;
};

export type AccountPage = {
  __typename?: 'AccountPage';
  items: Array<Account>;
  pageInfo: PageInfo;
};

export enum AccountType {
  AtomWallet = 'AtomWallet',
  Default = 'Default',
  ProtocolVault = 'ProtocolVault'
}

export type Atom = {
  __typename?: 'Atom';
  asObject?: Maybe<TriplePage>;
  asPredicate?: Maybe<TriplePage>;
  asSubject?: Maybe<TriplePage>;
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  creator: Account;
  creatorId: Scalars['String']['output'];
  data: Scalars['String']['output'];
  emoji?: Maybe<Scalars['String']['output']>;
  id: Scalars['BigInt']['output'];
  image?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  transactionHash: Scalars['String']['output'];
  type: AtomType;
  value?: Maybe<AtomValue>;
  valueId?: Maybe<Scalars['BigInt']['output']>;
  vault: Vault;
  vaultId: Scalars['BigInt']['output'];
  walletId: Scalars['String']['output'];
};


export type AtomAsObjectArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TripleFilter>;
};


export type AtomAsPredicateArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TripleFilter>;
};


export type AtomAsSubjectArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TripleFilter>;
};

export type AtomFilter = {
  AND?: InputMaybe<Array<InputMaybe<AtomFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AtomFilter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  creatorId?: InputMaybe<Scalars['String']['input']>;
  creatorId_gt?: InputMaybe<Scalars['String']['input']>;
  creatorId_gte?: InputMaybe<Scalars['String']['input']>;
  creatorId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  creatorId_lt?: InputMaybe<Scalars['String']['input']>;
  creatorId_lte?: InputMaybe<Scalars['String']['input']>;
  creatorId_not?: InputMaybe<Scalars['String']['input']>;
  creatorId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  data?: InputMaybe<Scalars['String']['input']>;
  data_contains?: InputMaybe<Scalars['String']['input']>;
  data_ends_with?: InputMaybe<Scalars['String']['input']>;
  data_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  data_not?: InputMaybe<Scalars['String']['input']>;
  data_not_contains?: InputMaybe<Scalars['String']['input']>;
  data_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  data_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  data_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  data_starts_with?: InputMaybe<Scalars['String']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  emoji_contains?: InputMaybe<Scalars['String']['input']>;
  emoji_ends_with?: InputMaybe<Scalars['String']['input']>;
  emoji_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  emoji_not?: InputMaybe<Scalars['String']['input']>;
  emoji_not_contains?: InputMaybe<Scalars['String']['input']>;
  emoji_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  emoji_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  emoji_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  emoji_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  id_not?: InputMaybe<Scalars['BigInt']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_contains?: InputMaybe<Scalars['String']['input']>;
  image_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_not?: InputMaybe<Scalars['String']['input']>;
  image_not_contains?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_starts_with?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_ends_with?: InputMaybe<Scalars['String']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  label_starts_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash?: InputMaybe<Scalars['String']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['String']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['String']['input']>;
  transactionHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionHash_lt?: InputMaybe<Scalars['String']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<AtomType>;
  type_in?: InputMaybe<Array<InputMaybe<AtomType>>>;
  type_not?: InputMaybe<AtomType>;
  type_not_in?: InputMaybe<Array<InputMaybe<AtomType>>>;
  valueId?: InputMaybe<Scalars['BigInt']['input']>;
  valueId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  valueId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  valueId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  valueId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  valueId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  valueId_not?: InputMaybe<Scalars['BigInt']['input']>;
  valueId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  vaultId?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  vaultId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_not?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  walletId?: InputMaybe<Scalars['String']['input']>;
  walletId_gt?: InputMaybe<Scalars['String']['input']>;
  walletId_gte?: InputMaybe<Scalars['String']['input']>;
  walletId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  walletId_lt?: InputMaybe<Scalars['String']['input']>;
  walletId_lte?: InputMaybe<Scalars['String']['input']>;
  walletId_not?: InputMaybe<Scalars['String']['input']>;
  walletId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AtomPage = {
  __typename?: 'AtomPage';
  items: Array<Atom>;
  pageInfo: PageInfo;
};

export enum AtomType {
  Account = 'Account',
  Book = 'Book',
  FollowAction = 'FollowAction',
  Keywords = 'Keywords',
  LikeAction = 'LikeAction',
  Organization = 'Organization',
  OrganizationPredicate = 'OrganizationPredicate',
  Person = 'Person',
  PersonPredicate = 'PersonPredicate',
  Thing = 'Thing',
  ThingPredicate = 'ThingPredicate',
  Unknown = 'Unknown'
}

export type AtomValue = {
  __typename?: 'AtomValue';
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['String']['output']>;
  atomId: Scalars['BigInt']['output'];
  book?: Maybe<Book>;
  bookId?: Maybe<Scalars['BigInt']['output']>;
  id: Scalars['BigInt']['output'];
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['BigInt']['output']>;
  person?: Maybe<Person>;
  personId?: Maybe<Scalars['BigInt']['output']>;
  thing?: Maybe<Thing>;
  thingId?: Maybe<Scalars['BigInt']['output']>;
};

export type AtomValueFilter = {
  AND?: InputMaybe<Array<InputMaybe<AtomValueFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AtomValueFilter>>>;
  accountId?: InputMaybe<Scalars['String']['input']>;
  accountId_gt?: InputMaybe<Scalars['String']['input']>;
  accountId_gte?: InputMaybe<Scalars['String']['input']>;
  accountId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  accountId_lt?: InputMaybe<Scalars['String']['input']>;
  accountId_lte?: InputMaybe<Scalars['String']['input']>;
  accountId_not?: InputMaybe<Scalars['String']['input']>;
  accountId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  atomId?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  atomId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_not?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  bookId?: InputMaybe<Scalars['BigInt']['input']>;
  bookId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  bookId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  bookId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  bookId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  bookId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  bookId_not?: InputMaybe<Scalars['BigInt']['input']>;
  bookId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  id_not?: InputMaybe<Scalars['BigInt']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  organizationId?: InputMaybe<Scalars['BigInt']['input']>;
  organizationId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  organizationId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  organizationId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  organizationId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  organizationId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  organizationId_not?: InputMaybe<Scalars['BigInt']['input']>;
  organizationId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  personId?: InputMaybe<Scalars['BigInt']['input']>;
  personId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  personId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  personId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  personId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  personId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  personId_not?: InputMaybe<Scalars['BigInt']['input']>;
  personId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  thingId?: InputMaybe<Scalars['BigInt']['input']>;
  thingId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  thingId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  thingId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  thingId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  thingId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  thingId_not?: InputMaybe<Scalars['BigInt']['input']>;
  thingId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type AtomValuePage = {
  __typename?: 'AtomValuePage';
  items: Array<AtomValue>;
  pageInfo: PageInfo;
};

export type Block = {
  __typename?: 'Block';
  baseFeePerGas?: Maybe<Scalars['BigInt']['output']>;
  difficulty?: Maybe<Scalars['BigInt']['output']>;
  extraData: Scalars['String']['output'];
  gasLimit: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  hash: Scalars['String']['output'];
  id: Scalars['String']['output'];
  logsBloom: Scalars['String']['output'];
  miner: Scalars['String']['output'];
  mixHash?: Maybe<Scalars['String']['output']>;
  nonce?: Maybe<Scalars['String']['output']>;
  number: Scalars['BigInt']['output'];
  parentHash: Scalars['String']['output'];
  receiptsRoot: Scalars['String']['output'];
  sha3Uncles?: Maybe<Scalars['String']['output']>;
  size: Scalars['BigInt']['output'];
  stateRoot: Scalars['String']['output'];
  timestamp: Scalars['BigInt']['output'];
  totalDifficulty?: Maybe<Scalars['BigInt']['output']>;
  transactionsRoot: Scalars['String']['output'];
};

export type BlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlockFilter>>>;
  baseFeePerGas?: InputMaybe<Scalars['BigInt']['input']>;
  baseFeePerGas_gt?: InputMaybe<Scalars['BigInt']['input']>;
  baseFeePerGas_gte?: InputMaybe<Scalars['BigInt']['input']>;
  baseFeePerGas_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  baseFeePerGas_lt?: InputMaybe<Scalars['BigInt']['input']>;
  baseFeePerGas_lte?: InputMaybe<Scalars['BigInt']['input']>;
  baseFeePerGas_not?: InputMaybe<Scalars['BigInt']['input']>;
  baseFeePerGas_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  difficulty?: InputMaybe<Scalars['BigInt']['input']>;
  difficulty_gt?: InputMaybe<Scalars['BigInt']['input']>;
  difficulty_gte?: InputMaybe<Scalars['BigInt']['input']>;
  difficulty_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  difficulty_lt?: InputMaybe<Scalars['BigInt']['input']>;
  difficulty_lte?: InputMaybe<Scalars['BigInt']['input']>;
  difficulty_not?: InputMaybe<Scalars['BigInt']['input']>;
  difficulty_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  extraData?: InputMaybe<Scalars['String']['input']>;
  extraData_gt?: InputMaybe<Scalars['String']['input']>;
  extraData_gte?: InputMaybe<Scalars['String']['input']>;
  extraData_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extraData_lt?: InputMaybe<Scalars['String']['input']>;
  extraData_lte?: InputMaybe<Scalars['String']['input']>;
  extraData_not?: InputMaybe<Scalars['String']['input']>;
  extraData_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gasLimit?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  hash?: InputMaybe<Scalars['String']['input']>;
  hash_gt?: InputMaybe<Scalars['String']['input']>;
  hash_gte?: InputMaybe<Scalars['String']['input']>;
  hash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hash_lt?: InputMaybe<Scalars['String']['input']>;
  hash_lte?: InputMaybe<Scalars['String']['input']>;
  hash_not?: InputMaybe<Scalars['String']['input']>;
  hash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logsBloom?: InputMaybe<Scalars['String']['input']>;
  logsBloom_gt?: InputMaybe<Scalars['String']['input']>;
  logsBloom_gte?: InputMaybe<Scalars['String']['input']>;
  logsBloom_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logsBloom_lt?: InputMaybe<Scalars['String']['input']>;
  logsBloom_lte?: InputMaybe<Scalars['String']['input']>;
  logsBloom_not?: InputMaybe<Scalars['String']['input']>;
  logsBloom_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  miner?: InputMaybe<Scalars['String']['input']>;
  miner_gt?: InputMaybe<Scalars['String']['input']>;
  miner_gte?: InputMaybe<Scalars['String']['input']>;
  miner_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  miner_lt?: InputMaybe<Scalars['String']['input']>;
  miner_lte?: InputMaybe<Scalars['String']['input']>;
  miner_not?: InputMaybe<Scalars['String']['input']>;
  miner_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mixHash?: InputMaybe<Scalars['String']['input']>;
  mixHash_gt?: InputMaybe<Scalars['String']['input']>;
  mixHash_gte?: InputMaybe<Scalars['String']['input']>;
  mixHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mixHash_lt?: InputMaybe<Scalars['String']['input']>;
  mixHash_lte?: InputMaybe<Scalars['String']['input']>;
  mixHash_not?: InputMaybe<Scalars['String']['input']>;
  mixHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nonce?: InputMaybe<Scalars['String']['input']>;
  nonce_gt?: InputMaybe<Scalars['String']['input']>;
  nonce_gte?: InputMaybe<Scalars['String']['input']>;
  nonce_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nonce_lt?: InputMaybe<Scalars['String']['input']>;
  nonce_lte?: InputMaybe<Scalars['String']['input']>;
  nonce_not?: InputMaybe<Scalars['String']['input']>;
  nonce_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  number?: InputMaybe<Scalars['BigInt']['input']>;
  number_gt?: InputMaybe<Scalars['BigInt']['input']>;
  number_gte?: InputMaybe<Scalars['BigInt']['input']>;
  number_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  number_lt?: InputMaybe<Scalars['BigInt']['input']>;
  number_lte?: InputMaybe<Scalars['BigInt']['input']>;
  number_not?: InputMaybe<Scalars['BigInt']['input']>;
  number_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  parentHash?: InputMaybe<Scalars['String']['input']>;
  parentHash_gt?: InputMaybe<Scalars['String']['input']>;
  parentHash_gte?: InputMaybe<Scalars['String']['input']>;
  parentHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  parentHash_lt?: InputMaybe<Scalars['String']['input']>;
  parentHash_lte?: InputMaybe<Scalars['String']['input']>;
  parentHash_not?: InputMaybe<Scalars['String']['input']>;
  parentHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  receiptsRoot?: InputMaybe<Scalars['String']['input']>;
  receiptsRoot_gt?: InputMaybe<Scalars['String']['input']>;
  receiptsRoot_gte?: InputMaybe<Scalars['String']['input']>;
  receiptsRoot_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  receiptsRoot_lt?: InputMaybe<Scalars['String']['input']>;
  receiptsRoot_lte?: InputMaybe<Scalars['String']['input']>;
  receiptsRoot_not?: InputMaybe<Scalars['String']['input']>;
  receiptsRoot_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sha3Uncles?: InputMaybe<Scalars['String']['input']>;
  sha3Uncles_gt?: InputMaybe<Scalars['String']['input']>;
  sha3Uncles_gte?: InputMaybe<Scalars['String']['input']>;
  sha3Uncles_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sha3Uncles_lt?: InputMaybe<Scalars['String']['input']>;
  sha3Uncles_lte?: InputMaybe<Scalars['String']['input']>;
  sha3Uncles_not?: InputMaybe<Scalars['String']['input']>;
  sha3Uncles_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  size?: InputMaybe<Scalars['BigInt']['input']>;
  size_gt?: InputMaybe<Scalars['BigInt']['input']>;
  size_gte?: InputMaybe<Scalars['BigInt']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  size_lt?: InputMaybe<Scalars['BigInt']['input']>;
  size_lte?: InputMaybe<Scalars['BigInt']['input']>;
  size_not?: InputMaybe<Scalars['BigInt']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  stateRoot?: InputMaybe<Scalars['String']['input']>;
  stateRoot_gt?: InputMaybe<Scalars['String']['input']>;
  stateRoot_gte?: InputMaybe<Scalars['String']['input']>;
  stateRoot_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  stateRoot_lt?: InputMaybe<Scalars['String']['input']>;
  stateRoot_lte?: InputMaybe<Scalars['String']['input']>;
  stateRoot_not?: InputMaybe<Scalars['String']['input']>;
  stateRoot_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalDifficulty?: InputMaybe<Scalars['BigInt']['input']>;
  totalDifficulty_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDifficulty_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDifficulty_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalDifficulty_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDifficulty_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDifficulty_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDifficulty_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  transactionsRoot?: InputMaybe<Scalars['String']['input']>;
  transactionsRoot_gt?: InputMaybe<Scalars['String']['input']>;
  transactionsRoot_gte?: InputMaybe<Scalars['String']['input']>;
  transactionsRoot_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionsRoot_lt?: InputMaybe<Scalars['String']['input']>;
  transactionsRoot_lte?: InputMaybe<Scalars['String']['input']>;
  transactionsRoot_not?: InputMaybe<Scalars['String']['input']>;
  transactionsRoot_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlockPage = {
  __typename?: 'BlockPage';
  items: Array<Block>;
  pageInfo: PageInfo;
};

export type Book = {
  __typename?: 'Book';
  atom: Atom;
  atomId: Scalars['BigInt']['output'];
  description?: Maybe<Scalars['String']['output']>;
  genre?: Maybe<Scalars['String']['output']>;
  id: Scalars['BigInt']['output'];
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type BookFilter = {
  AND?: InputMaybe<Array<InputMaybe<BookFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BookFilter>>>;
  atomId?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  atomId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_not?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  genre_contains?: InputMaybe<Scalars['String']['input']>;
  genre_ends_with?: InputMaybe<Scalars['String']['input']>;
  genre_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  genre_not?: InputMaybe<Scalars['String']['input']>;
  genre_not_contains?: InputMaybe<Scalars['String']['input']>;
  genre_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  genre_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  genre_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  genre_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  id_not?: InputMaybe<Scalars['BigInt']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type BookPage = {
  __typename?: 'BookPage';
  items: Array<Book>;
  pageInfo: PageInfo;
};

export type ChainlinkPrice = {
  __typename?: 'ChainlinkPrice';
  id: Scalars['BigInt']['output'];
  usd: Scalars['Float']['output'];
};

export type ChainlinkPriceFilter = {
  AND?: InputMaybe<Array<InputMaybe<ChainlinkPriceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ChainlinkPriceFilter>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  id_not?: InputMaybe<Scalars['BigInt']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  usd?: InputMaybe<Scalars['Float']['input']>;
  usd_gt?: InputMaybe<Scalars['Float']['input']>;
  usd_gte?: InputMaybe<Scalars['Float']['input']>;
  usd_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  usd_lt?: InputMaybe<Scalars['Float']['input']>;
  usd_lte?: InputMaybe<Scalars['Float']['input']>;
  usd_not?: InputMaybe<Scalars['Float']['input']>;
  usd_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type ChainlinkPricePage = {
  __typename?: 'ChainlinkPricePage';
  items: Array<ChainlinkPrice>;
  pageInfo: PageInfo;
};

export type Deposit = {
  __typename?: 'Deposit';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  entryFee: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  isAtomWallet: Scalars['Boolean']['output'];
  isTriple: Scalars['Boolean']['output'];
  receiver: Account;
  receiverId: Scalars['String']['output'];
  receiverTotalSharesInVault: Scalars['BigInt']['output'];
  sender: Account;
  senderAssetsAfterTotalFees: Scalars['BigInt']['output'];
  senderId: Scalars['String']['output'];
  sharesForReceiver: Scalars['BigInt']['output'];
  transactionHash: Scalars['String']['output'];
  vault: Vault;
  vaultId: Scalars['BigInt']['output'];
};

export type DepositFilter = {
  AND?: InputMaybe<Array<InputMaybe<DepositFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DepositFilter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  entryFee?: InputMaybe<Scalars['BigInt']['input']>;
  entryFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  entryFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  entryFee_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  entryFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  entryFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  entryFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  entryFee_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  isAtomWallet?: InputMaybe<Scalars['Boolean']['input']>;
  isAtomWallet_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  isAtomWallet_not?: InputMaybe<Scalars['Boolean']['input']>;
  isAtomWallet_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  isTriple?: InputMaybe<Scalars['Boolean']['input']>;
  isTriple_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  isTriple_not?: InputMaybe<Scalars['Boolean']['input']>;
  isTriple_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  receiverId?: InputMaybe<Scalars['String']['input']>;
  receiverId_gt?: InputMaybe<Scalars['String']['input']>;
  receiverId_gte?: InputMaybe<Scalars['String']['input']>;
  receiverId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  receiverId_lt?: InputMaybe<Scalars['String']['input']>;
  receiverId_lte?: InputMaybe<Scalars['String']['input']>;
  receiverId_not?: InputMaybe<Scalars['String']['input']>;
  receiverId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  receiverTotalSharesInVault?: InputMaybe<Scalars['BigInt']['input']>;
  receiverTotalSharesInVault_gt?: InputMaybe<Scalars['BigInt']['input']>;
  receiverTotalSharesInVault_gte?: InputMaybe<Scalars['BigInt']['input']>;
  receiverTotalSharesInVault_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  receiverTotalSharesInVault_lt?: InputMaybe<Scalars['BigInt']['input']>;
  receiverTotalSharesInVault_lte?: InputMaybe<Scalars['BigInt']['input']>;
  receiverTotalSharesInVault_not?: InputMaybe<Scalars['BigInt']['input']>;
  receiverTotalSharesInVault_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  senderAssetsAfterTotalFees?: InputMaybe<Scalars['BigInt']['input']>;
  senderAssetsAfterTotalFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  senderAssetsAfterTotalFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  senderAssetsAfterTotalFees_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  senderAssetsAfterTotalFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  senderAssetsAfterTotalFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  senderAssetsAfterTotalFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  senderAssetsAfterTotalFees_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  senderId?: InputMaybe<Scalars['String']['input']>;
  senderId_gt?: InputMaybe<Scalars['String']['input']>;
  senderId_gte?: InputMaybe<Scalars['String']['input']>;
  senderId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  senderId_lt?: InputMaybe<Scalars['String']['input']>;
  senderId_lte?: InputMaybe<Scalars['String']['input']>;
  senderId_not?: InputMaybe<Scalars['String']['input']>;
  senderId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sharesForReceiver?: InputMaybe<Scalars['BigInt']['input']>;
  sharesForReceiver_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sharesForReceiver_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sharesForReceiver_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  sharesForReceiver_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sharesForReceiver_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sharesForReceiver_not?: InputMaybe<Scalars['BigInt']['input']>;
  sharesForReceiver_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  transactionHash?: InputMaybe<Scalars['String']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['String']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['String']['input']>;
  transactionHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionHash_lt?: InputMaybe<Scalars['String']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  vaultId?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  vaultId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_not?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type DepositPage = {
  __typename?: 'DepositPage';
  items: Array<Deposit>;
  pageInfo: PageInfo;
};

export type Event = {
  __typename?: 'Event';
  atom?: Maybe<Atom>;
  atomId?: Maybe<Scalars['BigInt']['output']>;
  blockHash: Scalars['String']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  deposit?: Maybe<Deposit>;
  depositId?: Maybe<Scalars['String']['output']>;
  feeTransfer?: Maybe<FeeTransfer>;
  feeTransferId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  redemption?: Maybe<Redemption>;
  redemptionId?: Maybe<Scalars['String']['output']>;
  transactionHash: Scalars['String']['output'];
  triple?: Maybe<Triple>;
  tripleId?: Maybe<Scalars['BigInt']['output']>;
  type: EventType;
};

export type EventFilter = {
  AND?: InputMaybe<Array<InputMaybe<EventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EventFilter>>>;
  atomId?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  atomId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_not?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockHash?: InputMaybe<Scalars['String']['input']>;
  blockHash_gt?: InputMaybe<Scalars['String']['input']>;
  blockHash_gte?: InputMaybe<Scalars['String']['input']>;
  blockHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  blockHash_lt?: InputMaybe<Scalars['String']['input']>;
  blockHash_lte?: InputMaybe<Scalars['String']['input']>;
  blockHash_not?: InputMaybe<Scalars['String']['input']>;
  blockHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  depositId?: InputMaybe<Scalars['String']['input']>;
  depositId_contains?: InputMaybe<Scalars['String']['input']>;
  depositId_ends_with?: InputMaybe<Scalars['String']['input']>;
  depositId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  depositId_not?: InputMaybe<Scalars['String']['input']>;
  depositId_not_contains?: InputMaybe<Scalars['String']['input']>;
  depositId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  depositId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  depositId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  depositId_starts_with?: InputMaybe<Scalars['String']['input']>;
  feeTransferId?: InputMaybe<Scalars['String']['input']>;
  feeTransferId_contains?: InputMaybe<Scalars['String']['input']>;
  feeTransferId_ends_with?: InputMaybe<Scalars['String']['input']>;
  feeTransferId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  feeTransferId_not?: InputMaybe<Scalars['String']['input']>;
  feeTransferId_not_contains?: InputMaybe<Scalars['String']['input']>;
  feeTransferId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  feeTransferId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  feeTransferId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  feeTransferId_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  redemptionId?: InputMaybe<Scalars['String']['input']>;
  redemptionId_contains?: InputMaybe<Scalars['String']['input']>;
  redemptionId_ends_with?: InputMaybe<Scalars['String']['input']>;
  redemptionId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  redemptionId_not?: InputMaybe<Scalars['String']['input']>;
  redemptionId_not_contains?: InputMaybe<Scalars['String']['input']>;
  redemptionId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  redemptionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  redemptionId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  redemptionId_starts_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash?: InputMaybe<Scalars['String']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['String']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['String']['input']>;
  transactionHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionHash_lt?: InputMaybe<Scalars['String']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tripleId?: InputMaybe<Scalars['BigInt']['input']>;
  tripleId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tripleId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tripleId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  tripleId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tripleId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tripleId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tripleId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  type?: InputMaybe<EventType>;
  type_in?: InputMaybe<Array<InputMaybe<EventType>>>;
  type_not?: InputMaybe<EventType>;
  type_not_in?: InputMaybe<Array<InputMaybe<EventType>>>;
};

export type EventPage = {
  __typename?: 'EventPage';
  items: Array<Event>;
  pageInfo: PageInfo;
};

export enum EventType {
  AtomCreated = 'AtomCreated',
  Deposited = 'Deposited',
  FeesTransfered = 'FeesTransfered',
  Redeemed = 'Redeemed',
  TripleCreated = 'TripleCreated'
}

export type FeeTransfer = {
  __typename?: 'FeeTransfer';
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  receiver: Account;
  receiverId: Scalars['String']['output'];
  sender: Account;
  senderId: Scalars['String']['output'];
  transactionHash: Scalars['String']['output'];
};

export type FeeTransferFilter = {
  AND?: InputMaybe<Array<InputMaybe<FeeTransferFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FeeTransferFilter>>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  receiverId?: InputMaybe<Scalars['String']['input']>;
  receiverId_gt?: InputMaybe<Scalars['String']['input']>;
  receiverId_gte?: InputMaybe<Scalars['String']['input']>;
  receiverId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  receiverId_lt?: InputMaybe<Scalars['String']['input']>;
  receiverId_lte?: InputMaybe<Scalars['String']['input']>;
  receiverId_not?: InputMaybe<Scalars['String']['input']>;
  receiverId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  senderId?: InputMaybe<Scalars['String']['input']>;
  senderId_gt?: InputMaybe<Scalars['String']['input']>;
  senderId_gte?: InputMaybe<Scalars['String']['input']>;
  senderId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  senderId_lt?: InputMaybe<Scalars['String']['input']>;
  senderId_lte?: InputMaybe<Scalars['String']['input']>;
  senderId_not?: InputMaybe<Scalars['String']['input']>;
  senderId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionHash?: InputMaybe<Scalars['String']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['String']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['String']['input']>;
  transactionHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionHash_lt?: InputMaybe<Scalars['String']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeeTransferPage = {
  __typename?: 'FeeTransferPage';
  items: Array<FeeTransfer>;
  pageInfo: PageInfo;
};

export type Log = {
  __typename?: 'Log';
  address: Scalars['String']['output'];
  blockHash: Scalars['String']['output'];
  blockNumber: Scalars['BigInt']['output'];
  data: Scalars['String']['output'];
  id: Scalars['String']['output'];
  logIndex: Scalars['Int']['output'];
  removed: Scalars['Boolean']['output'];
  timestamp: Scalars['BigInt']['output'];
  topics: Array<Scalars['String']['output']>;
  transactionHash: Scalars['String']['output'];
  transactionIndex: Scalars['Int']['output'];
};

export type LogFilter = {
  AND?: InputMaybe<Array<InputMaybe<LogFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LogFilter>>>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_gt?: InputMaybe<Scalars['String']['input']>;
  address_gte?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  address_lt?: InputMaybe<Scalars['String']['input']>;
  address_lte?: InputMaybe<Scalars['String']['input']>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  blockHash?: InputMaybe<Scalars['String']['input']>;
  blockHash_gt?: InputMaybe<Scalars['String']['input']>;
  blockHash_gte?: InputMaybe<Scalars['String']['input']>;
  blockHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  blockHash_lt?: InputMaybe<Scalars['String']['input']>;
  blockHash_lte?: InputMaybe<Scalars['String']['input']>;
  blockHash_not?: InputMaybe<Scalars['String']['input']>;
  blockHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  data?: InputMaybe<Scalars['String']['input']>;
  data_gt?: InputMaybe<Scalars['String']['input']>;
  data_gte?: InputMaybe<Scalars['String']['input']>;
  data_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  data_lt?: InputMaybe<Scalars['String']['input']>;
  data_lte?: InputMaybe<Scalars['String']['input']>;
  data_not?: InputMaybe<Scalars['String']['input']>;
  data_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  removed?: InputMaybe<Scalars['Boolean']['input']>;
  removed_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  removed_not?: InputMaybe<Scalars['Boolean']['input']>;
  removed_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  topics?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topics_has?: InputMaybe<Scalars['String']['input']>;
  topics_not?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topics_not_has?: InputMaybe<Scalars['String']['input']>;
  transactionHash?: InputMaybe<Scalars['String']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['String']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['String']['input']>;
  transactionHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionHash_lt?: InputMaybe<Scalars['String']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionIndex?: InputMaybe<Scalars['Int']['input']>;
  transactionIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  transactionIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  transactionIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  transactionIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  transactionIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  transactionIndex_not?: InputMaybe<Scalars['Int']['input']>;
  transactionIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type LogPage = {
  __typename?: 'LogPage';
  items: Array<Log>;
  pageInfo: PageInfo;
};

export type Organization = {
  __typename?: 'Organization';
  atom: Atom;
  atomId: Scalars['BigInt']['output'];
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['BigInt']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type OrganizationFilter = {
  AND?: InputMaybe<Array<InputMaybe<OrganizationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<OrganizationFilter>>>;
  atomId?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  atomId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_not?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  id_not?: InputMaybe<Scalars['BigInt']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_contains?: InputMaybe<Scalars['String']['input']>;
  image_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_not?: InputMaybe<Scalars['String']['input']>;
  image_not_contains?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_starts_with?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationPage = {
  __typename?: 'OrganizationPage';
  items: Array<Organization>;
  pageInfo: PageInfo;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Person = {
  __typename?: 'Person';
  atom: Atom;
  atomId: Scalars['BigInt']['output'];
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['BigInt']['output'];
  identifier?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type PersonFilter = {
  AND?: InputMaybe<Array<InputMaybe<PersonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PersonFilter>>>;
  atomId?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  atomId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_not?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  id_not?: InputMaybe<Scalars['BigInt']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  identifier_contains?: InputMaybe<Scalars['String']['input']>;
  identifier_ends_with?: InputMaybe<Scalars['String']['input']>;
  identifier_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  identifier_not?: InputMaybe<Scalars['String']['input']>;
  identifier_not_contains?: InputMaybe<Scalars['String']['input']>;
  identifier_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  identifier_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  identifier_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  identifier_starts_with?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_contains?: InputMaybe<Scalars['String']['input']>;
  image_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_not?: InputMaybe<Scalars['String']['input']>;
  image_not_contains?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_starts_with?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type PersonPage = {
  __typename?: 'PersonPage';
  items: Array<Person>;
  pageInfo: PageInfo;
};

export type Position = {
  __typename?: 'Position';
  account: Account;
  accountId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  shares: Scalars['BigInt']['output'];
  vault: Vault;
  vaultId: Scalars['BigInt']['output'];
};

export type PositionFilter = {
  AND?: InputMaybe<Array<InputMaybe<PositionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PositionFilter>>>;
  accountId?: InputMaybe<Scalars['String']['input']>;
  accountId_gt?: InputMaybe<Scalars['String']['input']>;
  accountId_gte?: InputMaybe<Scalars['String']['input']>;
  accountId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  accountId_lt?: InputMaybe<Scalars['String']['input']>;
  accountId_lte?: InputMaybe<Scalars['String']['input']>;
  accountId_not?: InputMaybe<Scalars['String']['input']>;
  accountId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Scalars['BigInt']['input']>;
  shares_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shares_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shares_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  shares_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shares_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shares_not?: InputMaybe<Scalars['BigInt']['input']>;
  shares_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  vaultId?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  vaultId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_not?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type PositionPage = {
  __typename?: 'PositionPage';
  items: Array<Position>;
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  _meta?: Maybe<_Meta>;
  account?: Maybe<Account>;
  accounts: AccountPage;
  atom?: Maybe<Atom>;
  atomValue?: Maybe<AtomValue>;
  atomValues: AtomValuePage;
  atoms: AtomPage;
  block?: Maybe<Block>;
  blocks: BlockPage;
  book?: Maybe<Book>;
  books: BookPage;
  chainlinkPrice?: Maybe<ChainlinkPrice>;
  chainlinkPrices: ChainlinkPricePage;
  deposit?: Maybe<Deposit>;
  deposits: DepositPage;
  event?: Maybe<Event>;
  events: EventPage;
  feeTransfer?: Maybe<FeeTransfer>;
  feeTransfers: FeeTransferPage;
  log?: Maybe<Log>;
  logs: LogPage;
  organization?: Maybe<Organization>;
  organizations: OrganizationPage;
  person?: Maybe<Person>;
  persons: PersonPage;
  position?: Maybe<Position>;
  positions: PositionPage;
  redemption?: Maybe<Redemption>;
  redemptions: RedemptionPage;
  signal?: Maybe<Signal>;
  signals: SignalPage;
  stats?: Maybe<Stats>;
  statsHour?: Maybe<StatsHour>;
  statsHours: StatsHourPage;
  statss: StatsPage;
  thing?: Maybe<Thing>;
  things: ThingPage;
  transaction?: Maybe<Transaction>;
  transactions: TransactionPage;
  triple?: Maybe<Triple>;
  triples: TriplePage;
  vault?: Maybe<Vault>;
  vaults: VaultPage;
};


export type QueryAccountArgs = {
  id: Scalars['String']['input'];
};


export type QueryAccountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<AccountFilter>;
};


export type QueryAtomArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryAtomValueArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryAtomValuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<AtomValueFilter>;
};


export type QueryAtomsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<AtomFilter>;
};


export type QueryBlockArgs = {
  id: Scalars['String']['input'];
};


export type QueryBlocksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<BlockFilter>;
};


export type QueryBookArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryBooksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<BookFilter>;
};


export type QueryChainlinkPriceArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryChainlinkPricesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ChainlinkPriceFilter>;
};


export type QueryDepositArgs = {
  id: Scalars['String']['input'];
};


export type QueryDepositsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<DepositFilter>;
};


export type QueryEventArgs = {
  id: Scalars['String']['input'];
};


export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<EventFilter>;
};


export type QueryFeeTransferArgs = {
  id: Scalars['String']['input'];
};


export type QueryFeeTransfersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<FeeTransferFilter>;
};


export type QueryLogArgs = {
  id: Scalars['String']['input'];
};


export type QueryLogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<LogFilter>;
};


export type QueryOrganizationArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryOrganizationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<OrganizationFilter>;
};


export type QueryPersonArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryPersonsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PersonFilter>;
};


export type QueryPositionArgs = {
  id: Scalars['String']['input'];
};


export type QueryPositionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PositionFilter>;
};


export type QueryRedemptionArgs = {
  id: Scalars['String']['input'];
};


export type QueryRedemptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<RedemptionFilter>;
};


export type QuerySignalArgs = {
  id: Scalars['String']['input'];
};


export type QuerySignalsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<SignalFilter>;
};


export type QueryStatsArgs = {
  id: Scalars['Int']['input'];
};


export type QueryStatsHourArgs = {
  id: Scalars['Int']['input'];
};


export type QueryStatsHoursArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<StatsHourFilter>;
};


export type QueryStatssArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<StatsFilter>;
};


export type QueryThingArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryThingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ThingFilter>;
};


export type QueryTransactionArgs = {
  id: Scalars['String']['input'];
};


export type QueryTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TransactionFilter>;
};


export type QueryTripleArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryTriplesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TripleFilter>;
};


export type QueryVaultArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryVaultsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<VaultFilter>;
};

export type Redemption = {
  __typename?: 'Redemption';
  assetsForReceiver: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  exitFee: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  receiver: Account;
  receiverId: Scalars['String']['output'];
  sender: Account;
  senderId: Scalars['String']['output'];
  senderTotalSharesInVault: Scalars['BigInt']['output'];
  sharesRedeemedBySender: Scalars['BigInt']['output'];
  transactionHash: Scalars['String']['output'];
  vault: Vault;
  vaultId: Scalars['BigInt']['output'];
};

export type RedemptionFilter = {
  AND?: InputMaybe<Array<InputMaybe<RedemptionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RedemptionFilter>>>;
  assetsForReceiver?: InputMaybe<Scalars['BigInt']['input']>;
  assetsForReceiver_gt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsForReceiver_gte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsForReceiver_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  assetsForReceiver_lt?: InputMaybe<Scalars['BigInt']['input']>;
  assetsForReceiver_lte?: InputMaybe<Scalars['BigInt']['input']>;
  assetsForReceiver_not?: InputMaybe<Scalars['BigInt']['input']>;
  assetsForReceiver_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  exitFee?: InputMaybe<Scalars['BigInt']['input']>;
  exitFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  exitFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  exitFee_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  exitFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  exitFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  exitFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  exitFee_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  receiverId?: InputMaybe<Scalars['String']['input']>;
  receiverId_gt?: InputMaybe<Scalars['String']['input']>;
  receiverId_gte?: InputMaybe<Scalars['String']['input']>;
  receiverId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  receiverId_lt?: InputMaybe<Scalars['String']['input']>;
  receiverId_lte?: InputMaybe<Scalars['String']['input']>;
  receiverId_not?: InputMaybe<Scalars['String']['input']>;
  receiverId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  senderId?: InputMaybe<Scalars['String']['input']>;
  senderId_gt?: InputMaybe<Scalars['String']['input']>;
  senderId_gte?: InputMaybe<Scalars['String']['input']>;
  senderId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  senderId_lt?: InputMaybe<Scalars['String']['input']>;
  senderId_lte?: InputMaybe<Scalars['String']['input']>;
  senderId_not?: InputMaybe<Scalars['String']['input']>;
  senderId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  senderTotalSharesInVault?: InputMaybe<Scalars['BigInt']['input']>;
  senderTotalSharesInVault_gt?: InputMaybe<Scalars['BigInt']['input']>;
  senderTotalSharesInVault_gte?: InputMaybe<Scalars['BigInt']['input']>;
  senderTotalSharesInVault_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  senderTotalSharesInVault_lt?: InputMaybe<Scalars['BigInt']['input']>;
  senderTotalSharesInVault_lte?: InputMaybe<Scalars['BigInt']['input']>;
  senderTotalSharesInVault_not?: InputMaybe<Scalars['BigInt']['input']>;
  senderTotalSharesInVault_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  sharesRedeemedBySender?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRedeemedBySender_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRedeemedBySender_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRedeemedBySender_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  sharesRedeemedBySender_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRedeemedBySender_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRedeemedBySender_not?: InputMaybe<Scalars['BigInt']['input']>;
  sharesRedeemedBySender_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  transactionHash?: InputMaybe<Scalars['String']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['String']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['String']['input']>;
  transactionHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionHash_lt?: InputMaybe<Scalars['String']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  vaultId?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  vaultId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_not?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type RedemptionPage = {
  __typename?: 'RedemptionPage';
  items: Array<Redemption>;
  pageInfo: PageInfo;
};

export type Signal = {
  __typename?: 'Signal';
  account: Account;
  accountId: Scalars['String']['output'];
  atom?: Maybe<Atom>;
  atomId?: Maybe<Scalars['BigInt']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  delta: Scalars['BigInt']['output'];
  deposit?: Maybe<Deposit>;
  depositId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  redemption?: Maybe<Redemption>;
  redemptionId?: Maybe<Scalars['String']['output']>;
  relativeStrength: Scalars['BigInt']['output'];
  transactionHash: Scalars['String']['output'];
  triple?: Maybe<Triple>;
  tripleId?: Maybe<Scalars['BigInt']['output']>;
};

export type SignalFilter = {
  AND?: InputMaybe<Array<InputMaybe<SignalFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SignalFilter>>>;
  accountId?: InputMaybe<Scalars['String']['input']>;
  accountId_gt?: InputMaybe<Scalars['String']['input']>;
  accountId_gte?: InputMaybe<Scalars['String']['input']>;
  accountId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  accountId_lt?: InputMaybe<Scalars['String']['input']>;
  accountId_lte?: InputMaybe<Scalars['String']['input']>;
  accountId_not?: InputMaybe<Scalars['String']['input']>;
  accountId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  atomId?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  atomId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_not?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  delta?: InputMaybe<Scalars['BigInt']['input']>;
  delta_gt?: InputMaybe<Scalars['BigInt']['input']>;
  delta_gte?: InputMaybe<Scalars['BigInt']['input']>;
  delta_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  delta_lt?: InputMaybe<Scalars['BigInt']['input']>;
  delta_lte?: InputMaybe<Scalars['BigInt']['input']>;
  delta_not?: InputMaybe<Scalars['BigInt']['input']>;
  delta_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  depositId?: InputMaybe<Scalars['String']['input']>;
  depositId_contains?: InputMaybe<Scalars['String']['input']>;
  depositId_ends_with?: InputMaybe<Scalars['String']['input']>;
  depositId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  depositId_not?: InputMaybe<Scalars['String']['input']>;
  depositId_not_contains?: InputMaybe<Scalars['String']['input']>;
  depositId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  depositId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  depositId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  depositId_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  redemptionId?: InputMaybe<Scalars['String']['input']>;
  redemptionId_contains?: InputMaybe<Scalars['String']['input']>;
  redemptionId_ends_with?: InputMaybe<Scalars['String']['input']>;
  redemptionId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  redemptionId_not?: InputMaybe<Scalars['String']['input']>;
  redemptionId_not_contains?: InputMaybe<Scalars['String']['input']>;
  redemptionId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  redemptionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  redemptionId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  redemptionId_starts_with?: InputMaybe<Scalars['String']['input']>;
  relativeStrength?: InputMaybe<Scalars['BigInt']['input']>;
  relativeStrength_gt?: InputMaybe<Scalars['BigInt']['input']>;
  relativeStrength_gte?: InputMaybe<Scalars['BigInt']['input']>;
  relativeStrength_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  relativeStrength_lt?: InputMaybe<Scalars['BigInt']['input']>;
  relativeStrength_lte?: InputMaybe<Scalars['BigInt']['input']>;
  relativeStrength_not?: InputMaybe<Scalars['BigInt']['input']>;
  relativeStrength_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  transactionHash?: InputMaybe<Scalars['String']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['String']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['String']['input']>;
  transactionHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionHash_lt?: InputMaybe<Scalars['String']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tripleId?: InputMaybe<Scalars['BigInt']['input']>;
  tripleId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tripleId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tripleId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  tripleId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tripleId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tripleId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tripleId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type SignalPage = {
  __typename?: 'SignalPage';
  items: Array<Signal>;
  pageInfo: PageInfo;
};

export type Stats = {
  __typename?: 'Stats';
  contractBalance: Scalars['BigInt']['output'];
  id: Scalars['Int']['output'];
  totalAccounts: Scalars['Int']['output'];
  totalAtoms: Scalars['Int']['output'];
  totalFees: Scalars['BigInt']['output'];
  totalPositions: Scalars['Int']['output'];
  totalSignals: Scalars['Int']['output'];
  totalTriples: Scalars['Int']['output'];
};

export type StatsFilter = {
  AND?: InputMaybe<Array<InputMaybe<StatsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StatsFilter>>>;
  contractBalance?: InputMaybe<Scalars['BigInt']['input']>;
  contractBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  contractBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  contractBalance_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  contractBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  contractBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  contractBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
  contractBalance_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_gt?: InputMaybe<Scalars['Int']['input']>;
  id_gte?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_lt?: InputMaybe<Scalars['Int']['input']>;
  id_lte?: InputMaybe<Scalars['Int']['input']>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalAccounts?: InputMaybe<Scalars['Int']['input']>;
  totalAccounts_gt?: InputMaybe<Scalars['Int']['input']>;
  totalAccounts_gte?: InputMaybe<Scalars['Int']['input']>;
  totalAccounts_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalAccounts_lt?: InputMaybe<Scalars['Int']['input']>;
  totalAccounts_lte?: InputMaybe<Scalars['Int']['input']>;
  totalAccounts_not?: InputMaybe<Scalars['Int']['input']>;
  totalAccounts_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalAtoms?: InputMaybe<Scalars['Int']['input']>;
  totalAtoms_gt?: InputMaybe<Scalars['Int']['input']>;
  totalAtoms_gte?: InputMaybe<Scalars['Int']['input']>;
  totalAtoms_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalAtoms_lt?: InputMaybe<Scalars['Int']['input']>;
  totalAtoms_lte?: InputMaybe<Scalars['Int']['input']>;
  totalAtoms_not?: InputMaybe<Scalars['Int']['input']>;
  totalAtoms_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalFees?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalPositions?: InputMaybe<Scalars['Int']['input']>;
  totalPositions_gt?: InputMaybe<Scalars['Int']['input']>;
  totalPositions_gte?: InputMaybe<Scalars['Int']['input']>;
  totalPositions_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalPositions_lt?: InputMaybe<Scalars['Int']['input']>;
  totalPositions_lte?: InputMaybe<Scalars['Int']['input']>;
  totalPositions_not?: InputMaybe<Scalars['Int']['input']>;
  totalPositions_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalSignals?: InputMaybe<Scalars['Int']['input']>;
  totalSignals_gt?: InputMaybe<Scalars['Int']['input']>;
  totalSignals_gte?: InputMaybe<Scalars['Int']['input']>;
  totalSignals_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalSignals_lt?: InputMaybe<Scalars['Int']['input']>;
  totalSignals_lte?: InputMaybe<Scalars['Int']['input']>;
  totalSignals_not?: InputMaybe<Scalars['Int']['input']>;
  totalSignals_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalTriples?: InputMaybe<Scalars['Int']['input']>;
  totalTriples_gt?: InputMaybe<Scalars['Int']['input']>;
  totalTriples_gte?: InputMaybe<Scalars['Int']['input']>;
  totalTriples_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalTriples_lt?: InputMaybe<Scalars['Int']['input']>;
  totalTriples_lte?: InputMaybe<Scalars['Int']['input']>;
  totalTriples_not?: InputMaybe<Scalars['Int']['input']>;
  totalTriples_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type StatsHour = {
  __typename?: 'StatsHour';
  contractBalance: Scalars['BigInt']['output'];
  id: Scalars['Int']['output'];
  totalAccounts: Scalars['Int']['output'];
  totalAtoms: Scalars['Int']['output'];
  totalFees: Scalars['BigInt']['output'];
  totalPositions: Scalars['Int']['output'];
  totalSignals: Scalars['Int']['output'];
  totalTriples: Scalars['Int']['output'];
};

export type StatsHourFilter = {
  AND?: InputMaybe<Array<InputMaybe<StatsHourFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StatsHourFilter>>>;
  contractBalance?: InputMaybe<Scalars['BigInt']['input']>;
  contractBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  contractBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  contractBalance_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  contractBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  contractBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  contractBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
  contractBalance_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_gt?: InputMaybe<Scalars['Int']['input']>;
  id_gte?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_lt?: InputMaybe<Scalars['Int']['input']>;
  id_lte?: InputMaybe<Scalars['Int']['input']>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalAccounts?: InputMaybe<Scalars['Int']['input']>;
  totalAccounts_gt?: InputMaybe<Scalars['Int']['input']>;
  totalAccounts_gte?: InputMaybe<Scalars['Int']['input']>;
  totalAccounts_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalAccounts_lt?: InputMaybe<Scalars['Int']['input']>;
  totalAccounts_lte?: InputMaybe<Scalars['Int']['input']>;
  totalAccounts_not?: InputMaybe<Scalars['Int']['input']>;
  totalAccounts_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalAtoms?: InputMaybe<Scalars['Int']['input']>;
  totalAtoms_gt?: InputMaybe<Scalars['Int']['input']>;
  totalAtoms_gte?: InputMaybe<Scalars['Int']['input']>;
  totalAtoms_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalAtoms_lt?: InputMaybe<Scalars['Int']['input']>;
  totalAtoms_lte?: InputMaybe<Scalars['Int']['input']>;
  totalAtoms_not?: InputMaybe<Scalars['Int']['input']>;
  totalAtoms_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalFees?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalPositions?: InputMaybe<Scalars['Int']['input']>;
  totalPositions_gt?: InputMaybe<Scalars['Int']['input']>;
  totalPositions_gte?: InputMaybe<Scalars['Int']['input']>;
  totalPositions_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalPositions_lt?: InputMaybe<Scalars['Int']['input']>;
  totalPositions_lte?: InputMaybe<Scalars['Int']['input']>;
  totalPositions_not?: InputMaybe<Scalars['Int']['input']>;
  totalPositions_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalSignals?: InputMaybe<Scalars['Int']['input']>;
  totalSignals_gt?: InputMaybe<Scalars['Int']['input']>;
  totalSignals_gte?: InputMaybe<Scalars['Int']['input']>;
  totalSignals_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalSignals_lt?: InputMaybe<Scalars['Int']['input']>;
  totalSignals_lte?: InputMaybe<Scalars['Int']['input']>;
  totalSignals_not?: InputMaybe<Scalars['Int']['input']>;
  totalSignals_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalTriples?: InputMaybe<Scalars['Int']['input']>;
  totalTriples_gt?: InputMaybe<Scalars['Int']['input']>;
  totalTriples_gte?: InputMaybe<Scalars['Int']['input']>;
  totalTriples_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalTriples_lt?: InputMaybe<Scalars['Int']['input']>;
  totalTriples_lte?: InputMaybe<Scalars['Int']['input']>;
  totalTriples_not?: InputMaybe<Scalars['Int']['input']>;
  totalTriples_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type StatsHourPage = {
  __typename?: 'StatsHourPage';
  items: Array<StatsHour>;
  pageInfo: PageInfo;
};

export type StatsPage = {
  __typename?: 'StatsPage';
  items: Array<Stats>;
  pageInfo: PageInfo;
};

export type Thing = {
  __typename?: 'Thing';
  atom: Atom;
  atomId: Scalars['BigInt']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['BigInt']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ThingFilter = {
  AND?: InputMaybe<Array<InputMaybe<ThingFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ThingFilter>>>;
  atomId?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  atomId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_not?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  id_not?: InputMaybe<Scalars['BigInt']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_contains?: InputMaybe<Scalars['String']['input']>;
  image_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_not?: InputMaybe<Scalars['String']['input']>;
  image_not_contains?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_starts_with?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type ThingPage = {
  __typename?: 'ThingPage';
  items: Array<Thing>;
  pageInfo: PageInfo;
};

export type Transaction = {
  __typename?: 'Transaction';
  blockHash: Scalars['String']['output'];
  blockNumber: Scalars['BigInt']['output'];
  from: Scalars['String']['output'];
  gas?: Maybe<Scalars['BigInt']['output']>;
  gasPrice?: Maybe<Scalars['BigInt']['output']>;
  hash: Scalars['String']['output'];
  id: Scalars['String']['output'];
  input: Scalars['String']['output'];
  maxFeePerGas?: Maybe<Scalars['BigInt']['output']>;
  maxPriorityFeePerGas?: Maybe<Scalars['BigInt']['output']>;
  nonce: Scalars['Int']['output'];
  r?: Maybe<Scalars['String']['output']>;
  s?: Maybe<Scalars['String']['output']>;
  timestamp: Scalars['BigInt']['output'];
  to?: Maybe<Scalars['String']['output']>;
  transactionIndex: Scalars['Int']['output'];
  type: Scalars['String']['output'];
  v?: Maybe<Scalars['BigInt']['output']>;
  value: Scalars['BigInt']['output'];
};

export type TransactionFilter = {
  AND?: InputMaybe<Array<InputMaybe<TransactionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TransactionFilter>>>;
  blockHash?: InputMaybe<Scalars['String']['input']>;
  blockHash_gt?: InputMaybe<Scalars['String']['input']>;
  blockHash_gte?: InputMaybe<Scalars['String']['input']>;
  blockHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  blockHash_lt?: InputMaybe<Scalars['String']['input']>;
  blockHash_lte?: InputMaybe<Scalars['String']['input']>;
  blockHash_not?: InputMaybe<Scalars['String']['input']>;
  blockHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_gt?: InputMaybe<Scalars['String']['input']>;
  from_gte?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_lt?: InputMaybe<Scalars['String']['input']>;
  from_lte?: InputMaybe<Scalars['String']['input']>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gas?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  gas_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gas_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gas_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  gas_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gas_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gas_not?: InputMaybe<Scalars['BigInt']['input']>;
  gas_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  hash?: InputMaybe<Scalars['String']['input']>;
  hash_gt?: InputMaybe<Scalars['String']['input']>;
  hash_gte?: InputMaybe<Scalars['String']['input']>;
  hash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hash_lt?: InputMaybe<Scalars['String']['input']>;
  hash_lte?: InputMaybe<Scalars['String']['input']>;
  hash_not?: InputMaybe<Scalars['String']['input']>;
  hash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  input?: InputMaybe<Scalars['String']['input']>;
  input_gt?: InputMaybe<Scalars['String']['input']>;
  input_gte?: InputMaybe<Scalars['String']['input']>;
  input_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  input_lt?: InputMaybe<Scalars['String']['input']>;
  input_lte?: InputMaybe<Scalars['String']['input']>;
  input_not?: InputMaybe<Scalars['String']['input']>;
  input_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  maxFeePerGas?: InputMaybe<Scalars['BigInt']['input']>;
  maxFeePerGas_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxFeePerGas_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxFeePerGas_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  maxFeePerGas_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxFeePerGas_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxFeePerGas_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxFeePerGas_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  maxPriorityFeePerGas?: InputMaybe<Scalars['BigInt']['input']>;
  maxPriorityFeePerGas_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxPriorityFeePerGas_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxPriorityFeePerGas_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  maxPriorityFeePerGas_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxPriorityFeePerGas_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxPriorityFeePerGas_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxPriorityFeePerGas_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  nonce?: InputMaybe<Scalars['Int']['input']>;
  nonce_gt?: InputMaybe<Scalars['Int']['input']>;
  nonce_gte?: InputMaybe<Scalars['Int']['input']>;
  nonce_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nonce_lt?: InputMaybe<Scalars['Int']['input']>;
  nonce_lte?: InputMaybe<Scalars['Int']['input']>;
  nonce_not?: InputMaybe<Scalars['Int']['input']>;
  nonce_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  r?: InputMaybe<Scalars['String']['input']>;
  r_gt?: InputMaybe<Scalars['String']['input']>;
  r_gte?: InputMaybe<Scalars['String']['input']>;
  r_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  r_lt?: InputMaybe<Scalars['String']['input']>;
  r_lte?: InputMaybe<Scalars['String']['input']>;
  r_not?: InputMaybe<Scalars['String']['input']>;
  r_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  s?: InputMaybe<Scalars['String']['input']>;
  s_gt?: InputMaybe<Scalars['String']['input']>;
  s_gte?: InputMaybe<Scalars['String']['input']>;
  s_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  s_lt?: InputMaybe<Scalars['String']['input']>;
  s_lte?: InputMaybe<Scalars['String']['input']>;
  s_not?: InputMaybe<Scalars['String']['input']>;
  s_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  to?: InputMaybe<Scalars['String']['input']>;
  to_gt?: InputMaybe<Scalars['String']['input']>;
  to_gte?: InputMaybe<Scalars['String']['input']>;
  to_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  to_lt?: InputMaybe<Scalars['String']['input']>;
  to_lte?: InputMaybe<Scalars['String']['input']>;
  to_not?: InputMaybe<Scalars['String']['input']>;
  to_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionIndex?: InputMaybe<Scalars['Int']['input']>;
  transactionIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  transactionIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  transactionIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  transactionIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  transactionIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  transactionIndex_not?: InputMaybe<Scalars['Int']['input']>;
  transactionIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_ends_with?: InputMaybe<Scalars['String']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  type_starts_with?: InputMaybe<Scalars['String']['input']>;
  v?: InputMaybe<Scalars['BigInt']['input']>;
  v_gt?: InputMaybe<Scalars['BigInt']['input']>;
  v_gte?: InputMaybe<Scalars['BigInt']['input']>;
  v_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  v_lt?: InputMaybe<Scalars['BigInt']['input']>;
  v_lte?: InputMaybe<Scalars['BigInt']['input']>;
  v_not?: InputMaybe<Scalars['BigInt']['input']>;
  v_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  value?: InputMaybe<Scalars['BigInt']['input']>;
  value_gt?: InputMaybe<Scalars['BigInt']['input']>;
  value_gte?: InputMaybe<Scalars['BigInt']['input']>;
  value_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  value_lt?: InputMaybe<Scalars['BigInt']['input']>;
  value_lte?: InputMaybe<Scalars['BigInt']['input']>;
  value_not?: InputMaybe<Scalars['BigInt']['input']>;
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type TransactionPage = {
  __typename?: 'TransactionPage';
  items: Array<Transaction>;
  pageInfo: PageInfo;
};

export type Triple = {
  __typename?: 'Triple';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  counterVault: Vault;
  counterVaultId: Scalars['BigInt']['output'];
  creator: Account;
  creatorId: Scalars['String']['output'];
  id: Scalars['BigInt']['output'];
  label?: Maybe<Scalars['String']['output']>;
  object: Atom;
  objectId: Scalars['BigInt']['output'];
  predicate: Atom;
  predicateId: Scalars['BigInt']['output'];
  subject: Atom;
  subjectId: Scalars['BigInt']['output'];
  transactionHash: Scalars['String']['output'];
  vault: Vault;
  vaultId: Scalars['BigInt']['output'];
};

export type TripleFilter = {
  AND?: InputMaybe<Array<InputMaybe<TripleFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TripleFilter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  counterVaultId?: InputMaybe<Scalars['BigInt']['input']>;
  counterVaultId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  counterVaultId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  counterVaultId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  counterVaultId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  counterVaultId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  counterVaultId_not?: InputMaybe<Scalars['BigInt']['input']>;
  counterVaultId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  creatorId?: InputMaybe<Scalars['String']['input']>;
  creatorId_gt?: InputMaybe<Scalars['String']['input']>;
  creatorId_gte?: InputMaybe<Scalars['String']['input']>;
  creatorId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  creatorId_lt?: InputMaybe<Scalars['String']['input']>;
  creatorId_lte?: InputMaybe<Scalars['String']['input']>;
  creatorId_not?: InputMaybe<Scalars['String']['input']>;
  creatorId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  id_not?: InputMaybe<Scalars['BigInt']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_ends_with?: InputMaybe<Scalars['String']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  label_starts_with?: InputMaybe<Scalars['String']['input']>;
  objectId?: InputMaybe<Scalars['BigInt']['input']>;
  objectId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  objectId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  objectId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  objectId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  objectId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  objectId_not?: InputMaybe<Scalars['BigInt']['input']>;
  objectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  predicateId?: InputMaybe<Scalars['BigInt']['input']>;
  predicateId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  predicateId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  predicateId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  predicateId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  predicateId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  predicateId_not?: InputMaybe<Scalars['BigInt']['input']>;
  predicateId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  subjectId?: InputMaybe<Scalars['BigInt']['input']>;
  subjectId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  subjectId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  subjectId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  subjectId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  subjectId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  subjectId_not?: InputMaybe<Scalars['BigInt']['input']>;
  subjectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  transactionHash?: InputMaybe<Scalars['String']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['String']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['String']['input']>;
  transactionHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionHash_lt?: InputMaybe<Scalars['String']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  vaultId?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  vaultId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_not?: InputMaybe<Scalars['BigInt']['input']>;
  vaultId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type TriplePage = {
  __typename?: 'TriplePage';
  items: Array<Triple>;
  pageInfo: PageInfo;
};

export type Vault = {
  __typename?: 'Vault';
  atom?: Maybe<Atom>;
  atomId?: Maybe<Scalars['BigInt']['output']>;
  currentSharePrice: Scalars['BigInt']['output'];
  deposits?: Maybe<DepositPage>;
  id: Scalars['BigInt']['output'];
  positionCount: Scalars['Int']['output'];
  positions?: Maybe<PositionPage>;
  redemptions?: Maybe<RedemptionPage>;
  totalShares: Scalars['BigInt']['output'];
  triple?: Maybe<Triple>;
  tripleId?: Maybe<Scalars['BigInt']['output']>;
};


export type VaultDepositsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<DepositFilter>;
};


export type VaultPositionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PositionFilter>;
};


export type VaultRedemptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<RedemptionFilter>;
};

export type VaultFilter = {
  AND?: InputMaybe<Array<InputMaybe<VaultFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VaultFilter>>>;
  atomId?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  atomId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_not?: InputMaybe<Scalars['BigInt']['input']>;
  atomId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  currentSharePrice?: InputMaybe<Scalars['BigInt']['input']>;
  currentSharePrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentSharePrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentSharePrice_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  currentSharePrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentSharePrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentSharePrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentSharePrice_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  id_not?: InputMaybe<Scalars['BigInt']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  positionCount?: InputMaybe<Scalars['Int']['input']>;
  positionCount_gt?: InputMaybe<Scalars['Int']['input']>;
  positionCount_gte?: InputMaybe<Scalars['Int']['input']>;
  positionCount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  positionCount_lt?: InputMaybe<Scalars['Int']['input']>;
  positionCount_lte?: InputMaybe<Scalars['Int']['input']>;
  positionCount_not?: InputMaybe<Scalars['Int']['input']>;
  positionCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalShares?: InputMaybe<Scalars['BigInt']['input']>;
  totalShares_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalShares_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalShares_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalShares_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalShares_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalShares_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalShares_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  tripleId?: InputMaybe<Scalars['BigInt']['input']>;
  tripleId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tripleId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tripleId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  tripleId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tripleId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tripleId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tripleId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type VaultPage = {
  __typename?: 'VaultPage';
  items: Array<Vault>;
  pageInfo: PageInfo;
};

export type _Meta = {
  __typename?: '_meta';
  status?: Maybe<Scalars['JSON']['output']>;
};

export type GetMyPositionQueryVariables = Exact<{
  id: Scalars['BigInt']['input'];
  address?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetMyPositionQuery = { __typename?: 'Query', positions: { __typename?: 'PositionPage', items: Array<{ __typename?: 'Position', shares: any }> } };

export type GetThingsQueryVariables = Exact<{
  url?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetThingsQuery = { __typename?: 'Query', things: { __typename?: 'ThingPage', items: Array<{ __typename?: 'Thing', atomId: any, url?: string | null, name?: string | null, image?: string | null, atom: { __typename?: 'Atom', value?: { __typename?: 'AtomValue', thing?: { __typename?: 'Thing', description?: string | null } | null } | null, vault: { __typename?: 'Vault', positionCount: number, totalShares: any, currentSharePrice: any, myPosition?: { __typename?: 'PositionPage', items: Array<{ __typename?: 'Position', shares: any, accountId: string }> } | null, positions?: { __typename?: 'PositionPage', items: Array<{ __typename?: 'Position', shares: any, account: { __typename?: 'Account', id: string, type: AccountType, image?: string | null, label: string } }> } | null }, asSubject?: { __typename?: 'TriplePage', items: Array<{ __typename?: 'Triple', id: any, object: { __typename?: 'Atom', id: any, label?: string | null, emoji?: string | null, image?: string | null }, predicate: { __typename?: 'Atom', emoji?: string | null, label?: string | null, image?: string | null, id: any }, counterVault: { __typename?: 'Vault', id: any, positionCount: number, totalShares: any, currentSharePrice: any, myPosition?: { __typename?: 'PositionPage', items: Array<{ __typename?: 'Position', shares: any, accountId: string }> } | null, positions?: { __typename?: 'PositionPage', items: Array<{ __typename?: 'Position', shares: any, accountId: string }> } | null }, vault: { __typename?: 'Vault', id: any, positionCount: number, totalShares: any, currentSharePrice: any, myPosition?: { __typename?: 'PositionPage', items: Array<{ __typename?: 'Position', shares: any, accountId: string }> } | null, positions?: { __typename?: 'PositionPage', items: Array<{ __typename?: 'Position', shares: any, accountId: string }> } | null } }> } | null } }> }, chainlinkPrices: { __typename?: 'ChainlinkPricePage', items: Array<{ __typename?: 'ChainlinkPrice', usd: number }> } };

export type GetThingsExtendedQueryVariables = Exact<{
  url?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetThingsExtendedQuery = { __typename?: 'Query', things: { __typename?: 'ThingPage', items: Array<{ __typename?: 'Thing', atomId: any, url?: string | null, name?: string | null, image?: string | null, atom: { __typename?: 'Atom', value?: { __typename?: 'AtomValue', thing?: { __typename?: 'Thing', description?: string | null } | null } | null, vault: { __typename?: 'Vault', positionCount: number, totalShares: any, currentSharePrice: any, positions?: { __typename?: 'PositionPage', items: Array<{ __typename?: 'Position', shares: any, account: { __typename?: 'Account', id: string, type: AccountType, image?: string | null, label: string } }> } | null }, asSubject?: { __typename?: 'TriplePage', items: Array<{ __typename?: 'Triple', id: any, label?: string | null, object: { __typename?: 'Atom', id: any, label?: string | null, emoji?: string | null, image?: string | null }, predicate: { __typename?: 'Atom', emoji?: string | null, label?: string | null, image?: string | null, id: any }, counterVault: { __typename?: 'Vault', id: any, positionCount: number, totalShares: any, currentSharePrice: any, positions?: { __typename?: 'PositionPage', items: Array<{ __typename?: 'Position', shares: any, account: { __typename?: 'Account', id: string, label: string } }> } | null }, vault: { __typename?: 'Vault', id: any, positionCount: number, totalShares: any, currentSharePrice: any, positions?: { __typename?: 'PositionPage', items: Array<{ __typename?: 'Position', shares: any, account: { __typename?: 'Account', id: string, label: string } }> } | null } }> } | null } }> }, chainlinkPrices: { __typename?: 'ChainlinkPricePage', items: Array<{ __typename?: 'ChainlinkPrice', usd: number }> } };

export type GetMyPositionsQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetMyPositionsQuery = { __typename?: 'Query', positions: { __typename?: 'PositionPage', items: Array<{ __typename?: 'Position', id: string, shares: any, vault: { __typename?: 'Vault', positionCount: number, totalShares: any, currentSharePrice: any, atom?: { __typename?: 'Atom', id: any, label?: string | null, image?: string | null } | null, triple?: { __typename?: 'Triple', id: any, label?: string | null, subject: { __typename?: 'Atom', id: any, image?: string | null, label?: string | null, value?: { __typename?: 'AtomValue', thing?: { __typename?: 'Thing', url?: string | null } | null } | null }, predicate: { __typename?: 'Atom', id: any, image?: string | null, label?: string | null }, object: { __typename?: 'Atom', id: any, image?: string | null, label?: string | null } } | null } }> } };

export type SearchAtomsQueryVariables = Exact<{
  label: Scalars['String']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchAtomsQuery = { __typename?: 'Query', atoms: { __typename?: 'AtomPage', items: Array<{ __typename?: 'Atom', id: any, image?: string | null, label?: string | null }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, startCursor?: string | null } } };

export type GetAccountProfileQueryVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type GetAccountProfileQuery = { __typename?: 'Query', account?: { __typename?: 'Account', image?: string | null, label: string, id: string } | null };


export const GetMyPositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyPosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"positions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"accountId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"vaultId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shares"}}]}}]}}]}}]} as unknown as DocumentNode<GetMyPositionQuery, GetMyPositionQueryVariables>;
export const GetThingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetThings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"things"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url_starts_with"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"atomId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"atom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"vault"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"positionCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalShares"}},{"kind":"Field","name":{"kind":"Name","value":"currentSharePrice"}},{"kind":"Field","alias":{"kind":"Name","value":"myPosition"},"name":{"kind":"Name","value":"positions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"accountId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shares"}},{"kind":"Field","name":{"kind":"Name","value":"accountId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"StringValue","value":"shares","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"StringValue","value":"desc","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shares"}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"asSubject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"predicate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"counterVault"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"positionCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalShares"}},{"kind":"Field","name":{"kind":"Name","value":"currentSharePrice"}},{"kind":"Field","alias":{"kind":"Name","value":"myPosition"},"name":{"kind":"Name","value":"positions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"accountId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shares"}},{"kind":"Field","name":{"kind":"Name","value":"accountId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shares"}},{"kind":"Field","name":{"kind":"Name","value":"accountId"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"vault"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"positionCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalShares"}},{"kind":"Field","name":{"kind":"Name","value":"currentSharePrice"}},{"kind":"Field","alias":{"kind":"Name","value":"myPosition"},"name":{"kind":"Name","value":"positions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"accountId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shares"}},{"kind":"Field","name":{"kind":"Name","value":"accountId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shares"}},{"kind":"Field","name":{"kind":"Name","value":"accountId"}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"chainlinkPrices"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"StringValue","value":"id","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"StringValue","value":"desc","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usd"}}]}}]}}]}}]} as unknown as DocumentNode<GetThingsQuery, GetThingsQueryVariables>;
export const GetThingsExtendedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetThingsExtended"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"things"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url_starts_with"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"atomId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"atom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"vault"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"positionCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalShares"}},{"kind":"Field","name":{"kind":"Name","value":"currentSharePrice"}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shares"}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"asSubject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"predicate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"counterVault"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"positionCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalShares"}},{"kind":"Field","name":{"kind":"Name","value":"currentSharePrice"}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shares"}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"vault"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"positionCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalShares"}},{"kind":"Field","name":{"kind":"Name","value":"currentSharePrice"}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shares"}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"chainlinkPrices"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"StringValue","value":"id","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"StringValue","value":"desc","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usd"}}]}}]}}]}}]} as unknown as DocumentNode<GetThingsExtendedQuery, GetThingsExtendedQueryVariables>;
export const GetMyPositionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyPositions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"positions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"accountId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"shares"}},{"kind":"Field","name":{"kind":"Name","value":"vault"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"positionCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalShares"}},{"kind":"Field","name":{"kind":"Name","value":"currentSharePrice"}},{"kind":"Field","name":{"kind":"Name","value":"atom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"triple"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"subject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"predicate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMyPositionsQuery, GetMyPositionsQueryVariables>;
export const SearchAtomsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchAtoms"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"label"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"atoms"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"StringValue","value":"blockTimestamp","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"StringValue","value":"desc","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"30"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type_in"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"Thing"},{"kind":"EnumValue","value":"Person"},{"kind":"EnumValue","value":"Organization"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"label_contains"},"value":{"kind":"Variable","name":{"kind":"Name","value":"label"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}}]}}]}}]} as unknown as DocumentNode<SearchAtomsQuery, SearchAtomsQueryVariables>;
export const GetAccountProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAccountProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetAccountProfileQuery, GetAccountProfileQueryVariables>;