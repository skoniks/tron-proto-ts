interface Any {
  type_url?:
    | string
    | undefined;
  value?: Uint8Array | undefined;
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
  name?: Uint8Array | undefined;
  address?: Uint8Array | undefined;
}
interface Vote {
  vote_address?:
    | Uint8Array
    | undefined;
  vote_count?: number | undefined;
}
interface Proposal {
  proposal_id?: number | undefined;
  proposer_address?: Uint8Array | undefined;
  parameters?: { [key: number]: number } | undefined;
  expiration_time?: number | undefined;
  create_time?: number | undefined;
  approvals?: Uint8Array[] | undefined;
  state?: Proposal_State | undefined;
}
declare enum Proposal_State {
  PENDING = 0,
  DISAPPROVED = 1,
  APPROVED = 2,
  CANCELED = 3,
}
interface Exchange {
  exchange_id?: number | undefined;
  creator_address?: Uint8Array | undefined;
  create_time?: number | undefined;
  first_token_id?: Uint8Array | undefined;
  first_token_balance?: number | undefined;
  second_token_id?: Uint8Array | undefined;
  second_token_balance?: number | undefined;
}
interface Account {
  account_name?: Uint8Array | undefined;
  type?:
    | AccountType
    | undefined;
  address?:
    | Uint8Array
    | undefined;
  balance?:
    | number
    | undefined;
  votes?:
    | Vote[]
    | undefined;
  asset?:
    | { [key: string]: number }
    | undefined;
  assetV2?:
    | { [key: string]: number }
    | undefined;
  frozen?:
    | Account_Frozen[]
    | undefined;
  net_usage?:
    | number
    | undefined;
  acquired_delegated_frozen_balance_for_bandwidth?:
    | number
    | undefined;
  delegated_frozen_balance_for_bandwidth?: number | undefined;
  old_tron_power?: number | undefined;
  tron_power?: Account_Frozen | undefined;
  asset_optimized?:
    | boolean
    | undefined;
  create_time?:
    | number
    | undefined;
  latest_opration_time?:
    | number
    | undefined;
  allowance?:
    | number
    | undefined;
  latest_withdraw_time?:
    | number
    | undefined;
  code?: Uint8Array | undefined;
  is_witness?: boolean | undefined;
  is_committee?:
    | boolean
    | undefined;
  frozen_supply?:
    | Account_Frozen[]
    | undefined;
  asset_issued_name?: Uint8Array | undefined;
  asset_issued_ID?: Uint8Array | undefined;
  latest_asset_operation_time?: { [key: string]: number } | undefined;
  latest_asset_operation_timeV2?: { [key: string]: number } | undefined;
  free_net_usage?: number | undefined;
  free_asset_net_usage?: { [key: string]: number } | undefined;
  free_asset_net_usageV2?: { [key: string]: number } | undefined;
  latest_consume_time?: number | undefined;
  latest_consume_free_time?:
    | number
    | undefined;
  account_id?: Uint8Array | undefined;
  net_window_size?: number | undefined;
  net_window_optimized?: boolean | undefined;
  account_resource?: Account_AccountResource | undefined;
  codeHash?: Uint8Array | undefined;
  owner_permission?: Permission | undefined;
  witness_permission?: Permission | undefined;
  active_permission?: Permission[] | undefined;
  frozenV2?: Account_FreezeV2[] | undefined;
  unfrozenV2?: Account_UnFreezeV2[] | undefined;
  delegated_frozenV2_balance_for_bandwidth?: number | undefined;
  acquired_delegated_frozenV2_balance_for_bandwidth?: number | undefined;
}
interface Account_Frozen {
  frozen_balance?:
    | number
    | undefined;
  expire_time?: number | undefined;
}
interface Account_AccountResource {
  energy_usage?:
    | number
    | undefined;
  frozen_balance_for_energy?: Account_Frozen | undefined;
  latest_consume_time_for_energy?:
    | number
    | undefined;
  acquired_delegated_frozen_balance_for_energy?:
    | number
    | undefined;
  delegated_frozen_balance_for_energy?:
    | number
    | undefined;
  storage_limit?: number | undefined;
  storage_usage?: number | undefined;
  latest_exchange_storage_time?: number | undefined;
  energy_window_size?: number | undefined;
  delegated_frozenV2_balance_for_energy?: number | undefined;
  acquired_delegated_frozenV2_balance_for_energy?: number | undefined;
  energy_window_optimized?: boolean | undefined;
}
interface Account_FreezeV2 {
  type?: ResourceCode | undefined;
  amount?: number | undefined;
}
interface Account_UnFreezeV2 {
  type?: ResourceCode | undefined;
  unfreeze_amount?: number | undefined;
  unfreeze_expire_time?: number | undefined;
}
interface Key {
  address?: Uint8Array | undefined;
  weight?: number | undefined;
}
interface DelegatedResource {
  from?: Uint8Array | undefined;
  to?: Uint8Array | undefined;
  frozen_balance_for_bandwidth?: number | undefined;
  frozen_balance_for_energy?: number | undefined;
  expire_time_for_bandwidth?: number | undefined;
  expire_time_for_energy?: number | undefined;
}
interface authority {
  account?: AccountId | undefined;
  permission_name?: Uint8Array | undefined;
}
interface Permission {
  type?:
    | Permission_PermissionType
    | undefined;
  id?: number | undefined;
  permission_name?: string | undefined;
  threshold?: number | undefined;
  parent_id?:
    | number
    | undefined;
  operations?: Uint8Array | undefined;
  keys?: Key[] | undefined;
}
declare enum Permission_PermissionType {
  Owner = 0,
  Witness = 1,
  Active = 2,
}
interface Witness {
  address?: Uint8Array | undefined;
  voteCount?: number | undefined;
  pubKey?: Uint8Array | undefined;
  url?: string | undefined;
  totalProduced?: number | undefined;
  totalMissed?: number | undefined;
  latestBlockNum?: number | undefined;
  latestSlotNum?: number | undefined;
  isJobs?: boolean | undefined;
}
interface ResourceReceipt {
  energy_usage?: number | undefined;
  energy_fee?: number | undefined;
  origin_energy_usage?: number | undefined;
  energy_usage_total?: number | undefined;
  net_usage?: number | undefined;
  net_fee?: number | undefined;
  result?: Transaction_Result_contractResult | undefined;
  energy_penalty_total?: number | undefined;
}
interface MarketOrderDetail {
  makerOrderId?: Uint8Array | undefined;
  takerOrderId?: Uint8Array | undefined;
  fillSellQuantity?: number | undefined;
  fillBuyQuantity?: number | undefined;
}
interface Transaction {
  raw_data?:
    | Transaction_raw
    | undefined;
  signature?: Uint8Array[] | undefined;
  ret?: Transaction_Result[] | undefined;
}
interface Transaction_Contract {
  type?: Transaction_Contract_ContractType | undefined;
  parameter?: Any | undefined;
  provider?: Uint8Array | undefined;
  ContractName?: Uint8Array | undefined;
  Permission_id?: number | undefined;
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
  fee?: number | undefined;
  ret?: Transaction_Result_code | undefined;
  contractRet?: Transaction_Result_contractResult | undefined;
  assetIssueID?: string | undefined;
  withdraw_amount?: number | undefined;
  unfreeze_amount?: number | undefined;
  exchange_received_amount?: number | undefined;
  exchange_inject_another_amount?: number | undefined;
  exchange_withdraw_another_amount?: number | undefined;
  exchange_id?: number | undefined;
  shielded_transaction_fee?: number | undefined;
  orderId?: Uint8Array | undefined;
  orderDetails?: MarketOrderDetail[] | undefined;
  withdraw_expire_amount?: number | undefined;
  cancel_unfreezeV2_amount?: { [key: string]: number } | undefined;
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
  ref_block_bytes?: Uint8Array | undefined;
  ref_block_num?: number | undefined;
  ref_block_hash?: Uint8Array | undefined;
  expiration?: number | undefined;
  auths?:
    | authority[]
    | undefined;
  data?:
    | Uint8Array
    | undefined;
  contract?:
    | Transaction_Contract[]
    | undefined;
  scripts?: Uint8Array | undefined;
  timestamp?: number | undefined;
  fee_limit?: number | undefined;
}
interface TransactionInfo {
  id?: Uint8Array | undefined;
  fee?: number | undefined;
  blockNumber?: number | undefined;
  blockTimeStamp?: number | undefined;
  contractResult?: Uint8Array[] | undefined;
  contract_address?: Uint8Array | undefined;
  receipt?: ResourceReceipt | undefined;
  log?: TransactionInfo_Log[] | undefined;
  result?: TransactionInfo_code | undefined;
  resMessage?: Uint8Array | undefined;
  assetIssueID?: string | undefined;
  withdraw_amount?: number | undefined;
  unfreeze_amount?: number | undefined;
  internal_transactions?: InternalTransaction[] | undefined;
  exchange_received_amount?: number | undefined;
  exchange_inject_another_amount?: number | undefined;
  exchange_withdraw_another_amount?: number | undefined;
  exchange_id?: number | undefined;
  shielded_transaction_fee?: number | undefined;
  orderId?: Uint8Array | undefined;
  orderDetails?: MarketOrderDetail[] | undefined;
  packingFee?: number | undefined;
  withdraw_expire_amount?: number | undefined;
  cancel_unfreezeV2_amount?: { [key: string]: number } | undefined;
}
declare enum TransactionInfo_code {
  SUCESS = 0,
  FAILED = 1,
}
interface TransactionInfo_Log {
  address?: Uint8Array | undefined;
  topics?: Uint8Array[] | undefined;
  data?: Uint8Array | undefined;
}
interface BlockHeader {
  raw_data?: BlockHeader_raw | undefined;
  witness_signature?: Uint8Array | undefined;
}
interface BlockHeader_raw {
  timestamp?: number | undefined;
  txTrieRoot?: Uint8Array | undefined;
  parentHash?:
    | Uint8Array
    | undefined;
  number?: number | undefined;
  witness_id?: number | undefined;
  witness_address?: Uint8Array | undefined;
  version?: number | undefined;
  accountStateRoot?: Uint8Array | undefined;
}
interface Block {
  transactions?: Transaction[] | undefined;
  block_header?: BlockHeader | undefined;
}
interface InternalTransaction {
  hash?:
    | Uint8Array
    | undefined;
  caller_address?:
    | Uint8Array
    | undefined;
  transferTo_address?: Uint8Array | undefined;
  callValueInfo?: InternalTransaction_CallValueInfo[] | undefined;
  note?: Uint8Array | undefined;
  rejected?: boolean | undefined;
  extra?: string | undefined;
}
interface InternalTransaction_CallValueInfo {
  callValue?:
    | number
    | undefined;
  tokenId?: string | undefined;
}

export type { Account, Block, BlockHeader, DelegatedResource, Exchange, InternalTransaction, Permission, Proposal, Transaction, TransactionInfo, TransactionInfo_Log, Witness };
