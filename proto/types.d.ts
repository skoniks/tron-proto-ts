interface Any {
  type_url: string;
  value: Uint8Array;
}

declare enum ResourceCode {
  BANDWIDTH = 0,
  ENERGY = 1,
  TRON_POWER = 2,
}

declare enum AccountType {
  Normal = 0,
  AssetIssue = 1,
  Contract = 2,
}
interface AccountId {
  name: Uint8Array;
  address: Uint8Array;
}
interface Vote {
  vote_address: Uint8Array;
  vote_count: number;
}
interface Proposal {
  proposal_id: number;
  proposer_address: Uint8Array;
  parameters: { [key: number]: number };
  expiration_time: number;
  create_time: number;
  approvals: Uint8Array[];
  state: Proposal_State;
}
declare enum Proposal_State {
  PENDING = 0,
  DISAPPROVED = 1,
  APPROVED = 2,
  CANCELED = 3,
}
interface Exchange {
  exchange_id: number;
  creator_address: Uint8Array;
  create_time: number;
  first_token_id: Uint8Array;
  first_token_balance: number;
  second_token_id: Uint8Array;
  second_token_balance: number;
}
interface Account {
  account_name: Uint8Array;
  type: AccountType;
  address: Uint8Array;
  balance: number;
  votes: Vote[];
  asset: { [key: string]: number };
  assetV2: { [key: string]: number };
  frozen: Account_Frozen[];
  net_usage: number;
  acquired_delegated_frozen_balance_for_bandwidth: number;
  delegated_frozen_balance_for_bandwidth: number;
  old_tron_power: number;
  tron_power: Account_Frozen | undefined;
  asset_optimized: boolean;
  create_time: number;
  latest_opration_time: number;
  allowance: number;
  latest_withdraw_time: number;
  code: Uint8Array;
  is_witness: boolean;
  is_committee: boolean;
  frozen_supply: Account_Frozen[];
  asset_issued_name: Uint8Array;
  asset_issued_ID: Uint8Array;
  latest_asset_operation_time: { [key: string]: number };
  latest_asset_operation_timeV2: { [key: string]: number };
  free_net_usage: number;
  free_asset_net_usage: { [key: string]: number };
  free_asset_net_usageV2: { [key: string]: number };
  latest_consume_time: number;
  latest_consume_free_time: number;
  account_id: Uint8Array;
  net_window_size: number;
  net_window_optimized: boolean;
  account_resource: Account_AccountResource | undefined;
  codeHash: Uint8Array;
  owner_permission: Permission | undefined;
  witness_permission: Permission | undefined;
  active_permission: Permission[];
  frozenV2: Account_FreezeV2[];
  unfrozenV2: Account_UnFreezeV2[];
  delegated_frozenV2_balance_for_bandwidth: number;
  acquired_delegated_frozenV2_balance_for_bandwidth: number;
}
interface Account_Frozen {
  frozen_balance: number;
  expire_time: number;
}
interface Account_AccountResource {
  energy_usage: number;
  frozen_balance_for_energy: Account_Frozen | undefined;
  latest_consume_time_for_energy: number;
  acquired_delegated_frozen_balance_for_energy: number;
  delegated_frozen_balance_for_energy: number;
  storage_limit: number;
  storage_usage: number;
  latest_exchange_storage_time: number;
  energy_window_size: number;
  delegated_frozenV2_balance_for_energy: number;
  acquired_delegated_frozenV2_balance_for_energy: number;
  energy_window_optimized: boolean;
}
interface Account_FreezeV2 {
  type: ResourceCode;
  amount: number;
}
interface Account_UnFreezeV2 {
  type: ResourceCode;
  unfreeze_amount: number;
  unfreeze_expire_time: number;
}
interface Key {
  address: Uint8Array;
  weight: number;
}
interface DelegatedResource {
  from: Uint8Array;
  to: Uint8Array;
  frozen_balance_for_bandwidth: number;
  frozen_balance_for_energy: number;
  expire_time_for_bandwidth: number;
  expire_time_for_energy: number;
}
interface authority {
  account: AccountId | undefined;
  permission_name: Uint8Array;
}
interface Permission {
  type: Permission_PermissionType;
  id: number;
  permission_name: string;
  threshold: number;
  parent_id: number;
  operations: Uint8Array;
  keys: Key[];
}
declare enum Permission_PermissionType {
  Owner = 0,
  Witness = 1,
  Active = 2,
}
interface Witness {
  address: Uint8Array;
  voteCount: number;
  pubKey: Uint8Array;
  url: string;
  totalProduced: number;
  totalMissed: number;
  latestBlockNum: number;
  latestSlotNum: number;
  isJobs: boolean;
}
interface ResourceReceipt {
  energy_usage: number;
  energy_fee: number;
  origin_energy_usage: number;
  energy_usage_total: number;
  net_usage: number;
  net_fee: number;
  result: Transaction_Result_contractResult;
  energy_penalty_total: number;
}
interface MarketOrderDetail {
  makerOrderId: Uint8Array;
  takerOrderId: Uint8Array;
  fillSellQuantity: number;
  fillBuyQuantity: number;
}
interface Transaction {
  raw_data:
    | Transaction_raw
    | undefined;
  signature: Uint8Array[];
  ret: Transaction_Result[];
}
interface Transaction_Contract {
  type: Transaction_Contract_ContractType;
  parameter: Any | undefined;
  provider: Uint8Array;
  ContractName: Uint8Array;
  Permission_id: number;
}
declare enum Transaction_Contract_ContractType {
  AccountCreateContract = 0,
  TransferContract = 1,
  TransferAssetContract = 2,
  VoteAssetContract = 3,
  VoteWitnessContract = 4,
  WitnessCreateContract = 5,
  AssetIssueContract = 6,
  WitnessUpdateContract = 8,
  ParticipateAssetIssueContract = 9,
  AccountUpdateContract = 10,
  FreezeBalanceContract = 11,
  UnfreezeBalanceContract = 12,
  WithdrawBalanceContract = 13,
  UnfreezeAssetContract = 14,
  UpdateAssetContract = 15,
  ProposalCreateContract = 16,
  ProposalApproveContract = 17,
  ProposalDeleteContract = 18,
  SetAccountIdContract = 19,
  CustomContract = 20,
  CreateSmartContract = 30,
  TriggerSmartContract = 31,
  GetContract = 32,
  UpdateSettingContract = 33,
  ExchangeCreateContract = 41,
  ExchangeInjectContract = 42,
  ExchangeWithdrawContract = 43,
  ExchangeTransactionContract = 44,
  UpdateEnergyLimitContract = 45,
  AccountPermissionUpdateContract = 46,
  ClearABIContract = 48,
  UpdateBrokerageContract = 49,
  ShieldedTransferContract = 51,
  MarketSellAssetContract = 52,
  MarketCancelOrderContract = 53,
  FreezeBalanceV2Contract = 54,
  UnfreezeBalanceV2Contract = 55,
  WithdrawExpireUnfreezeContract = 56,
  DelegateResourceContract = 57,
  UnDelegateResourceContract = 58,
  CancelAllUnfreezeV2Contract = 59,
}
interface Transaction_Result {
  fee: number;
  ret: Transaction_Result_code;
  contractRet: Transaction_Result_contractResult;
  assetIssueID: string;
  withdraw_amount: number;
  unfreeze_amount: number;
  exchange_received_amount: number;
  exchange_inject_another_amount: number;
  exchange_withdraw_another_amount: number;
  exchange_id: number;
  shielded_transaction_fee: number;
  orderId: Uint8Array;
  orderDetails: MarketOrderDetail[];
  withdraw_expire_amount: number;
  cancel_unfreezeV2_amount: { [key: string]: number };
}
declare enum Transaction_Result_code {
  SUCESS = 0,
  FAILED = 1,
}
declare enum Transaction_Result_contractResult {
  DEFAULT = 0,
  SUCCESS = 1,
  REVERT = 2,
  BAD_JUMP_DESTINATION = 3,
  OUT_OF_MEMORY = 4,
  PRECOMPILED_CONTRACT = 5,
  STACK_TOO_SMALL = 6,
  STACK_TOO_LARGE = 7,
  ILLEGAL_OPERATION = 8,
  STACK_OVERFLOW = 9,
  OUT_OF_ENERGY = 10,
  OUT_OF_TIME = 11,
  JVM_STACK_OVER_FLOW = 12,
  UNKNOWN = 13,
  TRANSFER_FAILED = 14,
  INVALID_CODE = 15,
}
interface Transaction_raw {
  ref_block_bytes: Uint8Array;
  ref_block_num: number;
  ref_block_hash: Uint8Array;
  expiration: number;
  auths: authority[];
  data: Uint8Array;
  contract: Transaction_Contract[];
  scripts: Uint8Array;
  timestamp: number;
  fee_limit: number;
}
interface TransactionInfo {
  id: Uint8Array;
  fee: number;
  blockNumber: number;
  blockTimeStamp: number;
  contractResult: Uint8Array[];
  contract_address: Uint8Array;
  receipt: ResourceReceipt | undefined;
  log: TransactionInfo_Log[];
  result: TransactionInfo_code;
  resMessage: Uint8Array;
  assetIssueID: string;
  withdraw_amount: number;
  unfreeze_amount: number;
  internal_transactions: InternalTransaction[];
  exchange_received_amount: number;
  exchange_inject_another_amount: number;
  exchange_withdraw_another_amount: number;
  exchange_id: number;
  shielded_transaction_fee: number;
  orderId: Uint8Array;
  orderDetails: MarketOrderDetail[];
  packingFee: number;
  withdraw_expire_amount: number;
  cancel_unfreezeV2_amount: { [key: string]: number };
}
declare enum TransactionInfo_code {
  SUCESS = 0,
  FAILED = 1,
}
interface TransactionInfo_Log {
  address: Uint8Array;
  topics: Uint8Array[];
  data: Uint8Array;
}
interface BlockHeader {
  raw_data: BlockHeader_raw | undefined;
  witness_signature: Uint8Array;
}
interface BlockHeader_raw {
  timestamp: number;
  txTrieRoot: Uint8Array;
  parentHash: Uint8Array;
  number: number;
  witness_id: number;
  witness_address: Uint8Array;
  version: number;
  accountStateRoot: Uint8Array;
}
interface Block {
  transactions: Transaction[];
  block_header: BlockHeader | undefined;
}
interface InternalTransaction {
  hash: Uint8Array;
  caller_address: Uint8Array;
  transferTo_address: Uint8Array;
  callValueInfo: InternalTransaction_CallValueInfo[];
  note: Uint8Array;
  rejected: boolean;
  extra: string;
}
interface InternalTransaction_CallValueInfo {
  callValue: number;
  tokenId: string;
}

export type { Account, Block, BlockHeader, DelegatedResource, Exchange, InternalTransaction, Permission, Proposal, Transaction, TransactionInfo, TransactionInfo_Log, Witness };
