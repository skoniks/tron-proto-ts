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

interface AssetIssueContract {
  id: string;
  owner_address: Uint8Array;
  name: Uint8Array;
  abbr: Uint8Array;
  total_supply: number;
  frozen_supply: AssetIssueContract_FrozenSupply[];
  trx_num: number;
  precision: number;
  num: number;
  start_time: number;
  end_time: number;
  order: number;
  vote_score: number;
  description: Uint8Array;
  url: Uint8Array;
  free_asset_net_limit: number;
  public_free_asset_net_limit: number;
  public_free_asset_net_usage: number;
  public_latest_free_net_time: number;
}
interface AssetIssueContract_FrozenSupply {
  frozen_amount: number;
  frozen_days: number;
}

interface OutputPoint {
  hash: Uint8Array;
  index: number;
}
interface PedersenHash {
  content: Uint8Array;
}
interface IncrementalMerkleTree {
  left: PedersenHash | undefined;
  right: PedersenHash | undefined;
  parents: PedersenHash[];
}
interface IncrementalMerkleVoucher {
  tree: IncrementalMerkleTree | undefined;
  filled: PedersenHash[];
  cursor: IncrementalMerkleTree | undefined;
  cursor_depth: number;
  rt: Uint8Array;
  output_point: OutputPoint | undefined;
}
interface SpendDescription {
  value_commitment: Uint8Array;
  anchor: Uint8Array;
  nullifier: Uint8Array;
  rk: Uint8Array;
  zkproof: Uint8Array;
  spend_authority_signature: Uint8Array;
}
interface ReceiveDescription {
  value_commitment: Uint8Array;
  note_commitment: Uint8Array;
  epk: Uint8Array;
  c_enc: Uint8Array;
  c_out: Uint8Array;
  zkproof: Uint8Array;
}

interface Return {
  result: boolean;
  code: Return_response_code;
  message: Uint8Array;
}
declare enum Return_response_code {
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
  OTHER_ERROR = 20,
}
interface BlockReference {
  block_num: number;
  block_hash: Uint8Array;
}
interface WitnessList {
  witnesses: Witness[];
}
interface ProposalList {
  proposals: Proposal[];
}
interface ExchangeList {
  exchanges: Exchange[];
}
interface AssetIssueList {
  assetIssue: AssetIssueContract[];
}
interface BlockList {
  block: Block[];
}
interface TransactionList {
  transaction: Transaction[];
}
interface TransactionIdList {
  txId: string[];
}
interface DelegatedResourceMessage {
  fromAddress: Uint8Array;
  toAddress: Uint8Array;
}
interface DelegatedResourceList {
  delegatedResource: DelegatedResource[];
}
interface GetAvailableUnfreezeCountRequestMessage {
  owner_address: Uint8Array;
}
interface GetAvailableUnfreezeCountResponseMessage {
  count: number;
}
interface CanDelegatedMaxSizeRequestMessage {
  type: number;
  owner_address: Uint8Array;
}
interface CanDelegatedMaxSizeResponseMessage {
  max_size: number;
}
interface CanWithdrawUnfreezeAmountRequestMessage {
  owner_address: Uint8Array;
  timestamp: number;
}
interface CanWithdrawUnfreezeAmountResponseMessage {
  amount: number;
}
interface PricesResponseMessage {
  prices: string;
}
interface NodeList {
  nodes: Node[];
}
interface Node {
  address: Address | undefined;
}
interface Address {
  host: Uint8Array;
  port: number;
}
interface EmptyMessage {
}
interface NumberMessage {
  num: number;
}
interface BytesMessage {
  value: Uint8Array;
}
interface TimeMessage {
  beginInMilliseconds: number;
  endInMilliseconds: number;
}
interface BlockReq {
  id_or_num: string;
  detail: boolean;
}
interface BlockLimit {
  startNum: number;
  endNum: number;
}
interface TransactionLimit {
  transactionId: Uint8Array;
  limitNum: number;
}
interface AccountPaginated {
  account: Account | undefined;
  offset: number;
  limit: number;
}
interface TimePaginatedMessage {
  timeMessage: TimeMessage | undefined;
  offset: number;
  limit: number;
}
interface AccountNetMessage {
  freeNetUsed: number;
  freeNetLimit: number;
  NetUsed: number;
  NetLimit: number;
  assetNetUsed: { [key: string]: number };
  assetNetLimit: { [key: string]: number };
  TotalNetLimit: number;
  TotalNetWeight: number;
}
interface AccountNetMessage_AssetNetUsedEntry {
  key: string;
  value: number;
}
interface AccountNetMessage_AssetNetLimitEntry {
  key: string;
  value: number;
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
interface AccountResourceMessage_AssetNetUsedEntry {
  key: string;
  value: number;
}
interface AccountResourceMessage_AssetNetLimitEntry {
  key: string;
  value: number;
}
interface PaginatedMessage {
  offset: number;
  limit: number;
}
interface TransactionExtention {
  transaction:
    | Transaction
    | undefined;
  txid: Uint8Array;
  constant_result: Uint8Array[];
  result: Return | undefined;
  energy_used: number;
  logs: TransactionInfo_Log[];
  internal_transactions: InternalTransaction[];
  energy_penalty: number;
}
interface EstimateEnergyMessage {
  result: Return | undefined;
  energy_required: number;
}
interface BlockExtention {
  transactions: TransactionExtention[];
  block_header: BlockHeader | undefined;
  blockid: Uint8Array;
}
interface BlockListExtention {
  block: BlockExtention[];
}
interface TransactionListExtention {
  transaction: TransactionExtention[];
}
interface BlockIncrementalMerkleTree {
  number: number;
  merkleTree: IncrementalMerkleTree | undefined;
}
interface TransactionSignWeight {
  permission: Permission | undefined;
  approved_list: Uint8Array[];
  current_weight: number;
  result: TransactionSignWeight_Result | undefined;
  transaction: TransactionExtention | undefined;
}
interface TransactionSignWeight_Result {
  code: TransactionSignWeight_Result_response_code;
  message: string;
}
declare enum TransactionSignWeight_Result_response_code {
  ENOUGH_PERMISSION = 0,
  NOT_ENOUGH_PERMISSION = 1,
  SIGNATURE_FORMAT_ERROR = 2,
  COMPUTE_ADDRESS_ERROR = 3,
  PERMISSION_ERROR = 4,
  OTHER_ERROR = 20,
}
interface TransactionApprovedList {
  approved_list: Uint8Array[];
  result: TransactionApprovedList_Result | undefined;
  transaction: TransactionExtention | undefined;
}
interface TransactionApprovedList_Result {
  code: TransactionApprovedList_Result_response_code;
  message: string;
}
declare enum TransactionApprovedList_Result_response_code {
  SUCCESS = 0,
  SIGNATURE_FORMAT_ERROR = 1,
  COMPUTE_ADDRESS_ERROR = 2,
  OTHER_ERROR = 20,
}
interface IvkDecryptParameters {
  start_block_index: number;
  end_block_index: number;
  ivk: Uint8Array;
}
interface IvkDecryptAndMarkParameters {
  start_block_index: number;
  end_block_index: number;
  ivk: Uint8Array;
  ak: Uint8Array;
  nk: Uint8Array;
}
interface OvkDecryptParameters {
  start_block_index: number;
  end_block_index: number;
  ovk: Uint8Array;
}
interface DecryptNotes {
  noteTxs: DecryptNotes_NoteTx[];
}
interface DecryptNotes_NoteTx {
  note:
    | Note
    | undefined;
  txid: Uint8Array;
  index: number;
}
interface DecryptNotesMarked {
  noteTxs: DecryptNotesMarked_NoteTx[];
}
interface DecryptNotesMarked_NoteTx {
  note:
    | Note
    | undefined;
  txid: Uint8Array;
  index: number;
  is_spend: boolean;
}
interface Note {
  value: number;
  payment_address: string;
  rcm: Uint8Array;
  memo: Uint8Array;
}
interface SpendNote {
  note:
    | Note
    | undefined;
  alpha: Uint8Array;
  voucher:
    | IncrementalMerkleVoucher
    | undefined;
  path: Uint8Array;
}
interface ReceiveNote {
  note: Note | undefined;
}
interface PrivateParameters {
  transparent_from_address: Uint8Array;
  ask: Uint8Array;
  nsk: Uint8Array;
  ovk: Uint8Array;
  from_amount: number;
  shielded_spends: SpendNote[];
  shielded_receives: ReceiveNote[];
  transparent_to_address: Uint8Array;
  to_amount: number;
  timeout: number;
}
interface PrivateParametersWithoutAsk {
  transparent_from_address: Uint8Array;
  ak: Uint8Array;
  nsk: Uint8Array;
  ovk: Uint8Array;
  from_amount: number;
  shielded_spends: SpendNote[];
  shielded_receives: ReceiveNote[];
  transparent_to_address: Uint8Array;
  to_amount: number;
  timeout: number;
}
interface SpendAuthSigParameters {
  ask: Uint8Array;
  tx_hash: Uint8Array;
  alpha: Uint8Array;
}
interface NfParameters {
  note: Note | undefined;
  voucher: IncrementalMerkleVoucher | undefined;
  ak: Uint8Array;
  nk: Uint8Array;
}
interface ExpandedSpendingKeyMessage {
  ask: Uint8Array;
  nsk: Uint8Array;
  ovk: Uint8Array;
}
interface ViewingKeyMessage {
  ak: Uint8Array;
  nk: Uint8Array;
}
interface IncomingViewingKeyMessage {
  ivk: Uint8Array;
}
interface DiversifierMessage {
  d: Uint8Array;
}
interface IncomingViewingKeyDiversifierMessage {
  ivk: IncomingViewingKeyMessage | undefined;
  d: DiversifierMessage | undefined;
}
interface PaymentAddressMessage {
  d: DiversifierMessage | undefined;
  pkD: Uint8Array;
  payment_address: string;
}
interface ShieldedAddressInfo {
  sk: Uint8Array;
  ask: Uint8Array;
  nsk: Uint8Array;
  ovk: Uint8Array;
  ak: Uint8Array;
  nk: Uint8Array;
  ivk: Uint8Array;
  d: Uint8Array;
  pkD: Uint8Array;
  payment_address: string;
}
interface NoteParameters {
  ak: Uint8Array;
  nk: Uint8Array;
  note: Note | undefined;
  txid: Uint8Array;
  index: number;
}
interface SpendResult {
  result: boolean;
  message: string;
}
interface TransactionInfoList {
  transactionInfo: TransactionInfo[];
}
interface SpendNoteTRC20 {
  note: Note | undefined;
  alpha: Uint8Array;
  root: Uint8Array;
  path: Uint8Array;
  pos: number;
}
interface PrivateShieldedTRC20Parameters {
  ask: Uint8Array;
  nsk: Uint8Array;
  ovk: Uint8Array;
  from_amount: string;
  shielded_spends: SpendNoteTRC20[];
  shielded_receives: ReceiveNote[];
  transparent_to_address: Uint8Array;
  to_amount: string;
  shielded_TRC20_contract_address: Uint8Array;
}
interface PrivateShieldedTRC20ParametersWithoutAsk {
  ak: Uint8Array;
  nsk: Uint8Array;
  ovk: Uint8Array;
  from_amount: string;
  shielded_spends: SpendNoteTRC20[];
  shielded_receives: ReceiveNote[];
  transparent_to_address: Uint8Array;
  to_amount: string;
  shielded_TRC20_contract_address: Uint8Array;
}
interface ShieldedTRC20Parameters {
  spend_description: SpendDescription[];
  receive_description: ReceiveDescription[];
  binding_signature: Uint8Array;
  message_hash: Uint8Array;
  trigger_contract_input: string;
  parameter_type: string;
}
interface IvkDecryptTRC20Parameters {
  start_block_index: number;
  end_block_index: number;
  shielded_TRC20_contract_address: Uint8Array;
  ivk: Uint8Array;
  ak: Uint8Array;
  nk: Uint8Array;
  events: string[];
}
interface OvkDecryptTRC20Parameters {
  start_block_index: number;
  end_block_index: number;
  ovk: Uint8Array;
  shielded_TRC20_contract_address: Uint8Array;
  events: string[];
}
interface DecryptNotesTRC20 {
  noteTxs: DecryptNotesTRC20_NoteTx[];
}
interface DecryptNotesTRC20_NoteTx {
  note: Note | undefined;
  position: number;
  is_spent: boolean;
  txid: Uint8Array;
  index: number;
  to_amount: string;
  transparent_to_address: Uint8Array;
}
interface NfTRC20Parameters {
  note: Note | undefined;
  ak: Uint8Array;
  nk: Uint8Array;
  position: number;
  shielded_TRC20_contract_address: Uint8Array;
}
interface NullifierResult {
  is_spent: boolean;
}
interface ShieldedTRC20TriggerContractParameters {
  shielded_TRC20_Parameters: ShieldedTRC20Parameters | undefined;
  spend_authority_signature: BytesMessage[];
  amount: string;
  transparent_to_address: Uint8Array;
}

export { type AccountNetMessage, type AccountNetMessage_AssetNetLimitEntry, type AccountNetMessage_AssetNetUsedEntry, type AccountPaginated, type AccountResourceMessage, type AccountResourceMessage_AssetNetLimitEntry, type AccountResourceMessage_AssetNetUsedEntry, type Address, type AssetIssueList, type BlockExtention, type BlockIncrementalMerkleTree, type BlockLimit, type BlockList, type BlockListExtention, type BlockReference, type BlockReq, type BytesMessage, type CanDelegatedMaxSizeRequestMessage, type CanDelegatedMaxSizeResponseMessage, type CanWithdrawUnfreezeAmountRequestMessage, type CanWithdrawUnfreezeAmountResponseMessage, type DecryptNotes, type DecryptNotesMarked, type DecryptNotesMarked_NoteTx, type DecryptNotesTRC20, type DecryptNotesTRC20_NoteTx, type DecryptNotes_NoteTx, type DelegatedResourceList, type DelegatedResourceMessage, type DiversifierMessage, type EmptyMessage, type EstimateEnergyMessage, type ExchangeList, type ExpandedSpendingKeyMessage, type GetAvailableUnfreezeCountRequestMessage, type GetAvailableUnfreezeCountResponseMessage, type IncomingViewingKeyDiversifierMessage, type IncomingViewingKeyMessage, type IvkDecryptAndMarkParameters, type IvkDecryptParameters, type IvkDecryptTRC20Parameters, type NfParameters, type NfTRC20Parameters, type Node, type NodeList, type Note, type NoteParameters, type NullifierResult, type NumberMessage, type OvkDecryptParameters, type OvkDecryptTRC20Parameters, type PaginatedMessage, type PaymentAddressMessage, type PricesResponseMessage, type PrivateParameters, type PrivateParametersWithoutAsk, type PrivateShieldedTRC20Parameters, type PrivateShieldedTRC20ParametersWithoutAsk, type ProposalList, type ReceiveNote, type Return, Return_response_code, type ShieldedAddressInfo, type ShieldedTRC20Parameters, type ShieldedTRC20TriggerContractParameters, type SpendAuthSigParameters, type SpendNote, type SpendNoteTRC20, type SpendResult, type TimeMessage, type TimePaginatedMessage, type TransactionApprovedList, type TransactionApprovedList_Result, TransactionApprovedList_Result_response_code, type TransactionExtention, type TransactionIdList, type TransactionInfoList, type TransactionLimit, type TransactionList, type TransactionListExtention, type TransactionSignWeight, type TransactionSignWeight_Result, TransactionSignWeight_Result_response_code, type ViewingKeyMessage, type WitnessList };
