interface Any {
  type_url: string;
  value: string;
}

declare const enum ResourceCode {
  BANDWIDTH = 0,
  ENERGY = 1,
  TRON_POWER = 2,
}

declare const enum AccountType {
  Normal = 0,
  AssetIssue = 1,
  Contract = 2,
}
interface AccountId {
  name: string;
  address: string;
}
interface Vote {
  vote_address: string;
  vote_count: number;
}
interface Account {
  account_name: string;
  type: AccountType;
  address: string;
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
  code: string;
  is_witness: boolean;
  is_committee: boolean;
  frozen_supply: Account_Frozen[];
  asset_issued_name: string;
  asset_issued_ID: string;
  latest_asset_operation_time: { [key: string]: number };
  latest_asset_operation_timeV2: { [key: string]: number };
  free_net_usage: number;
  free_asset_net_usage: { [key: string]: number };
  free_asset_net_usageV2: { [key: string]: number };
  latest_consume_time: number;
  latest_consume_free_time: number;
  account_id: string;
  net_window_size: number;
  net_window_optimized: boolean;
  account_resource: Account_AccountResource | undefined;
  codeHash: string;
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
  address: string;
  weight: number;
}
interface authority {
  account: AccountId | undefined;
  permission_name: string;
}
interface Permission {
  type: Permission_PermissionType;
  id: number;
  permission_name: string;
  threshold: number;
  parent_id: number;
  operations: string;
  keys: Key[];
}
declare const enum Permission_PermissionType {
  Owner = 0,
  Witness = 1,
  Active = 2,
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
  makerOrderId: string;
  takerOrderId: string;
  fillSellQuantity: number;
  fillBuyQuantity: number;
}
interface Transaction {
  raw_data:
    | Transaction_raw
    | undefined;
  signature: string[];
  ret: Transaction_Result[];
}
interface Transaction_Contract {
  type: Transaction_Contract_ContractType;
  parameter: Any | undefined;
  provider: string;
  ContractName: string;
  Permission_id: number;
}
declare const enum Transaction_Contract_ContractType {
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
  orderId: string;
  orderDetails: MarketOrderDetail[];
  withdraw_expire_amount: number;
  cancel_unfreezeV2_amount: { [key: string]: number };
}
declare const enum Transaction_Result_code {
  SUCESS = 0,
  FAILED = 1,
}
declare const enum Transaction_Result_contractResult {
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
  ref_block_bytes: string;
  ref_block_num: number;
  ref_block_hash: string;
  expiration: number;
  auths: authority[];
  data: string;
  contract: Transaction_Contract[];
  scripts: string;
  timestamp: number;
  fee_limit: number;
}
interface TransactionInfo {
  id: string;
  fee: number;
  blockNumber: number;
  blockTimeStamp: number;
  contractResult: string[];
  contract_address: string;
  receipt: ResourceReceipt | undefined;
  log: TransactionInfo_Log[];
  result: TransactionInfo_code;
  resMessage: string;
  assetIssueID: string;
  withdraw_amount: number;
  unfreeze_amount: number;
  internal_transactions: InternalTransaction[];
  exchange_received_amount: number;
  exchange_inject_another_amount: number;
  exchange_withdraw_another_amount: number;
  exchange_id: number;
  shielded_transaction_fee: number;
  orderId: string;
  orderDetails: MarketOrderDetail[];
  packingFee: number;
  withdraw_expire_amount: number;
  cancel_unfreezeV2_amount: { [key: string]: number };
}
declare const enum TransactionInfo_code {
  SUCESS = 0,
  FAILED = 1,
}
interface TransactionInfo_Log {
  address: string;
  topics: string[];
  data: string;
}
interface BlockHeader {
  raw_data: BlockHeader_raw | undefined;
  witness_signature: string;
}
interface BlockHeader_raw {
  timestamp: number;
  txTrieRoot: string;
  parentHash: string;
  number: number;
  witness_id: number;
  witness_address: string;
  version: number;
  accountStateRoot: string;
}
interface Block {
  transactions: Transaction[];
  block_header: BlockHeader | undefined;
}
interface InternalTransaction {
  hash: string;
  caller_address: string;
  transferTo_address: string;
  callValueInfo: InternalTransaction_CallValueInfo[];
  note: string;
  rejected: boolean;
  extra: string;
}
interface InternalTransaction_CallValueInfo {
  callValue: number;
  tokenId: string;
}

interface Return {
  result: boolean;
  code: Return_response_code;
  message: string;
}
declare const enum Return_response_code {
  SUCCESS = 0,
  SIGERROR = 1,
  CONTRACT_VALIDATE_ERROR = 2,
  CONTRACT_EXE_ERROR = 3,
  BANDWITH_ERROR = 4,
  DUP_TRANSACTION_ERROR = 5,
  TAPOS_ERROR = 6,
  TOO_BIG_TRANSACTION_ERROR = 7,
  TRANSACTION_EXPIRATION_ERROR = 8,
  SERVER_BUSY = 9,
  NO_CONNECTION = 10,
  NOT_ENOUGH_EFFECTIVE_CONNECTION = 11,
  BLOCK_UNSOLIDIFIED = 12,
  OTHER_ERROR = 20,
}
interface AccountResourceMessage {
  freeNetUsed: number;
  freeNetLimit: number;
  NetUsed: number;
  NetLimit: number;
  assetNetUsed: { [key: string]: number };
  assetNetLimit: { [key: string]: number };
  TotalNetLimit: number;
  TotalNetWeight: number;
  TotalTronPowerWeight: number;
  tronPowerUsed: number;
  tronPowerLimit: number;
  EnergyUsed: number;
  EnergyLimit: number;
  TotalEnergyLimit: number;
  TotalEnergyWeight: number;
  storageUsed: number;
  storageLimit: number;
}

export type { Account, AccountResourceMessage, Block, Return, Transaction, TransactionInfo };
