/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AaveInput {
  EOA?: boolean;
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amounts?: string[];
  approved?: boolean;
  asset?: string;
  assets?: string[];
  atoken_to_redeeem?: string;
  borrowAmount?: string | number;
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  debtAsset?: string;
  debtToCover?: string;
  dryrun?: boolean;
  encoding?: string;
  gas?: string;
  gasPrice?: string;
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  interest_rate_mode?: string;
  lending_pool?: string;
  minHealthFactor?: string | number;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  outputTokens?: TokenProportion[];
  params?: string;
  premiums?: string[] | number[];
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  ref_code?: string;
  /** @format double */
  referralCode?: number;
  role?: string;
  /** @format double */
  slippageLimitPercent?: number;
  to?: string;
  token_id?: string;
  token_ids?: string;
  useAsCollateral?: boolean;
  user?: string;
  value?: string;
}

export interface AaveReservesAPIResponse {
  address?: string;
  body?: InputBody;
  data?: AaveReservesData;
  message: string;
  success: boolean;
}

export interface AaveReservesData {
  borrow_rate: string;
  borrow_rate_mode: string;
  current_atoken_balance: string;
  current_borrow_balance: string;
  last_update_timestamp: string;
  liquidity_rate: string;
  origination_fee: string;
  principal_borrow_balance: string;
  usage_as_collateral_enabled: string;
  variable_borrow_index: string;
}

export interface AbiEncodeInput {
  abi: any;
  functionName: string;
  params: any[];
}

export interface AbiEncodeOutput {
  address?: string;
  body?: InputBody;
  data?: {
    encoded: string;
  };
  message: string;
  success: boolean;
}

export interface AbiInput {
  components?: AbiInput[];
  indexed?: boolean;
  internalType?: string;
  name: string;
  type: string;
}

/**
 * The abi to parse the log object of the contract
 * @example {}
 */
export interface AbiItem {
  anonymous?: boolean;
  constant?: boolean;
  /** @format double */
  gas?: number;
  inputs?: AbiInput[];
  name?: string;
  outputs?: AbiOutput[];
  payable?: boolean;
  stateMutability?: string;
  type: string;
}

export interface AbiOutput {
  components?: AbiOutput[];
  internalType?: string;
  name: string;
  type: string;
}

export interface AccountAPIResponse {
  address?: string;
  body?: InputBody;
  data?: AccountResponse;
  message: string;
  success: boolean;
}

export interface AccountData {
  address?: string;
  keys?: string[];
}

export interface AccountResponse {
  data: AccountData;
}

export interface Action {
  fromAddress: string;
  fromAmount: string;
  /** @format double */
  fromChainId: number;
  fromToken: TokenDetails;
  /** @format double */
  slippage: number;
  toAddress: string;
  /** @format double */
  toChainId: number;
  toToken: TokenDetails;
}

export type AddLiquidityData = TransactionAPIResponse;

export type AddTransactionData = BaseAPIResponse;

export interface AddTransactionInput {
  rpcUrl: string;
  transaction: Transaction;
}

export interface ApiResponseChainMap {
  data?: ChainMap;
  message: string;
  success: boolean;
}

export interface ApiResponseChainsResponse {
  data?: ChainsResponse;
  message: string;
  success: boolean;
}

export interface ApiResponseConnectionsResponse {
  data?: ConnectionsResponse;
  message: string;
  success: boolean;
}

export interface ApiResponseGasPrice {
  data?: GasPrice;
  message: string;
  success: boolean;
}

export interface ApiResponsePostQuote {
  data?: PostQuote;
  message: string;
  success: boolean;
}

export interface ApiResponseQuote {
  data?: Quote;
  message: string;
  success: boolean;
}

export interface ApiResponseStatusResponse {
  data?: StatusResponse;
  message: string;
  success: boolean;
}

export interface ApiResponseStringArray {
  data?: string[];
  message: string;
  success: boolean;
}

export interface ApiResponseTokenDetails {
  data?: TokenDetails;
  message: string;
  success: boolean;
}

export interface ApiResponseTokenInfoByChainId {
  data?: TokenInfoByChainId;
  message: string;
  success: boolean;
}

export interface ApiResponseTokensResponse {
  data?: TokensResponse;
  message: string;
  success: boolean;
}

export interface ApiResponseToolsResponse {
  data?: ToolsResponse;
  message: string;
  success: boolean;
}

export type ApproveCallDataData = any;

export type ApproveCallDataPayload = any;

export type ApproveData = ERC20APIResponse;

export type ApproveResult = TransactionAPIResponse;

export type ApproveSpenderData = any;

export type ApproveSpenderPayload = any;

export interface AssembleRequest {
  pathId: string;
  receiver?: string;
  simulate?: boolean;
  userAddr: string;
}

export type AssembleTransactionData = OdosAPIResponse;

export type AssembleTransactionPayload = InputBody & AssembleRequest;

export interface BalanceAPIResponse {
  address?: string;
  body?: InputBody;
  data?: BalanceResponse;
  message: string;
  success: boolean;
}

export type BalanceOfBatchData = TransactionAPIResponse;

export type BalanceOfData = TransactionAPIResponse;

export type BalanceOfResult = TransactionAPIResponse;

export interface BalanceResponse {
  balance: string;
}

export interface BaseAPIResponse {
  address?: string;
  body?: InputBody;
  message: string;
  success: boolean;
}

export interface BitcoinAPIResponse {
  address?: string;
  body?: InputBody;
  data?: BitcoinTransactionOutput;
  message: string;
  success: boolean;
}

export interface BitcoinCashAPIResponse {
  address?: string;
  body?: InputBody;
  data?: BitcoinCashTransactionOutput;
  message: string;
  success: boolean;
}

export interface BitcoinCashInput {
  network?: string;
  private_key?: string;
}

export interface BitcoinCashTransactionInput {
  compress?: boolean;
  network?: string;
  to?: string;
  /** @format double */
  value?: number;
}

export interface BitcoinCashTransactionOutput {
  signedTx?: string;
  transaction_hash?: string;
}

export interface BitcoinInput {
  network?: string;
  private_key?: string;
}

export interface BitcoinTransactionInput {
  compress?: boolean;
  network?: string;
  to?: string;
  /** @format double */
  value?: number;
}

export interface BitcoinTransactionOutput {
  signedTx?: string;
  transaction_hash?: string;
}

export interface Block {
  hash: string;
  number: string;
  timestamp: string;
}

export type BorrowData = TransactionAPIResponse;

export type BorrowResult = LendingPoolAPIResponse;

export interface Bridge {
  key: string;
  logoURI: string;
  name: string;
  supportedChains: BridgeSupportedChain[];
}

export interface BridgeSupportedChain {
  /** @format double */
  fromChainId: number;
  /** @format double */
  toChainId: number;
}

export interface BroadCastRawTransactionAPIResponse {
  address?: string;
  body?: InputBody;
  data?: BroadCastRawTransactionResponse;
  message: string;
  success: boolean;
}

export interface BroadCastRawTransactionResponse {
  data: string;
  message: string;
  success: boolean;
}

export interface BroadcastInput {
  chainId: string;
  rawTransaction: string;
}

export type BroadcastTxData = BroadCastRawTransactionAPIResponse;

export type BundleTransactionsData = BaseAPIResponse;

export interface BundleTransactionsInput {
  rpcUrl: string;
  transactionIds: string[];
}

export interface Chain {
  chainType: ChainChainTypeEnum;
  coin: string;
  /** @format double */
  id: number;
  key: string;
  logoURI: string;
  mainnet: boolean;
  metamask: {
    blockExplorerUrls: string[];
    chainId: string;
    chainName: string;
    nativeCurrency: {
      /** @format double */
      decimals: number;
      name: string;
      symbol: string;
    };
    rpcUrls: string[];
  };
  multicallAddress: string;
  name: string;
  nativeToken: {
    address: string;
    /** @format double */
    chainId: number;
    coinKey: string;
    /** @format double */
    decimals: number;
    logoURI: string;
    name: string;
    priceUSD: string;
    symbol: string;
  };
  tokenlistUrl: string;
}

export enum ChainChainTypeEnum {
  EVM = 'EVM',
  SOL = 'SOL',
}

export type ChainId = string | number;

export type ChainMap = Record<string, ChainId>;

export interface ChainsResponse {
  chains: Chain[];
}

export interface Connection {
  /** @format double */
  fromChainId: number;
  fromTokens: Token[];
  /** @format double */
  toChainId: number;
  toTokens: Token[];
}

export interface ConnectionsResponse {
  connections: Connection[];
}

export interface ConveyorFinanceControllerResponse {
  convey?: TransactionResponse;
  data?: TransactionData;
  input?: InputBody;
  message: string;
  signed?: Transaction;
  success: boolean;
  tx?: {
    data: string;
    from: string;
    gas: string;
    nonce: string;
    to: string;
    value: string;
  };
}

export interface CosmosAPIResponse {
  data?: any;
  message: string;
  success: boolean;
}

export interface CreateAccountBody {
  network?: string;
  private_key?: string;
}

export type CreateAccountData = AccountAPIResponse;

export interface CreateAccountInput {
  private_key?: string;
}

export type CreateAccountResult = CosmosAPIResponse;

export type CreateBitcoinAccountData = AccountAPIResponse;

export type CreateBitcoinCashAccountData = AccountAPIResponse;

export type CreateDogeCoinAccountData = AccountAPIResponse;

export type CreateEosAccountData = AccountAPIResponse;

export type CreateLitecoinAccountData = AccountAPIResponse;

export type CreatePaymentIntentConfigData = any;

export type CreatePaymentIntentConfigPayload = any;

export interface CreatePaymentIntentInput {
  /** @format double */
  amount: number;
  config?: string;
  currency?: string;
  metadata: Record<string, string>;
  network?: string;
}

export type CreateRippleAccountData = AccountAPIResponse;

export type CreateSolanaAccountData = AccountAPIResponse;

export type CreateTronAccountData = AccountAPIResponse;

export interface CryptoCurrency {
  address: string;
  /** @format double */
  chainId: number;
  code: string;
  /** @format double */
  decimals: number;
  icon: string;
  id: string;
  name: string;
  network: string;
  networkDisplayName: string;
  symbol: string;
}

export type DeleteAccountData = AccountAPIResponse;

export type DeleteAccountResult = CosmosAPIResponse;

export type DeletePaymentIntentConfigData = PaymentIntentResponse;

export type DeleverageErc20Data = LeveragerAPIResponse;

export type DeleverageNativeData = LeveragerAPIResponse;

export type DeployContractData = TransactionAPIResponse;

export interface DeployInput {
  abi: string;
  bytecode: string;
  chain_id?: string;
  constructor_args?: string;
}

export type DepositData = ERC4626APIResponse;

export type DepositResult = LendingPoolAPIResponse;

export interface DogeCoinAPIResponse {
  address?: string;
  body?: InputBody;
  data?: DogeCoinTransactionOutput;
  message: string;
  success: boolean;
}

export interface DogeCoinInput {
  network?: string;
  private_key?: string;
}

export interface DogeCoinTransactionInput {
  compress?: boolean;
  network?: string;
  to?: string;
  /** @format double */
  value?: number;
}

export interface DogeCoinTransactionOutput {
  signedTx?: string;
  transaction_hash?: string;
}

export interface ERC20APIResponse {
  data?: any;
  message: string;
  success: boolean;
}

export interface ERC4626APIResponse {
  data?: any;
  message: string;
  success: boolean;
}

export type EncodeDataData = AbiEncodeOutput;

export interface EnsResolveAPIResponse {
  address?: string;
  body?: InputBody;
  data?: EnsResolveResponse;
  message: string;
  success: boolean;
}

export interface EnsResolveInput {
  chain_id: string;
  domain: string;
}

export interface EnsResolveResponse {
  address: string;
}

export interface EosAPIResponse {
  address?: string;
  body?: InputBody;
  data?: EosTransactionOutput;
  message: string;
  success: boolean;
}

export interface EosInput {
  network?: string;
  private_key?: string;
}

export interface EosTransactionInput {
  compress?: boolean;
  network?: string;
  to?: string;
  /** @format double */
  value?: number;
}

export interface EosTransactionOutput {
  signedTx?: string;
  transaction_hash?: string;
}

export interface Erc1155Request {
  EOA?: boolean;
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amounts?: string[];
  approved?: boolean;
  asset?: string;
  assets?: string[];
  borrowAmount?: string | number;
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  debtAsset?: string;
  debtToCover?: string;
  dryrun?: boolean;
  encoding?: string;
  gas?: string;
  gasPrice?: string;
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  minHealthFactor?: string | number;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  outputTokens?: TokenProportion[];
  params?: string;
  premiums?: string[] | number[];
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  /** @format double */
  referralCode?: number;
  role?: string;
  /** @format double */
  slippageLimitPercent?: number;
  to?: string;
  token_id?: string;
  token_ids?: string;
  useAsCollateral?: boolean;
  user?: string;
  value?: string;
}

export interface Erc721Request {
  EOA?: boolean;
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amounts?: string[];
  approved?: boolean;
  asset?: string;
  assets?: string[];
  borrowAmount?: string | number;
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  debtAsset?: string;
  debtToCover?: string;
  dryrun?: boolean;
  encoding?: string;
  gas?: string;
  gasPrice?: string;
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  minHealthFactor?: string | number;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  outputTokens?: TokenProportion[];
  params?: string;
  premiums?: string[] | number[];
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  /** @format double */
  referralCode?: number;
  role?: string;
  /** @format double */
  slippageLimitPercent?: number;
  to?: string;
  token_id?: string;
  token_ids?: string;
  useAsCollateral?: boolean;
  user?: string;
  value?: string;
}

export interface Estimate {
  approvalAddress: string;
  /** @format double */
  executionDuration: number;
  feeCosts?: FeeCost[];
  fromAmount: string;
  fromAmountUSD: string;
  gasCosts: GasCost[];
  toAmount: string;
  toAmountMin: string;
  toAmountUSD: string;
}

export type EstimateGasData = TransactionAPIResponse;

export interface Exchange {
  key: string;
  logoURI: string;
  name: string;
  supportedChains: number[];
}

export type ExecuteOperationData = LeveragerAPIResponse;

export interface FeeCost {
  /** @format double */
  amount: number;
  name: string;
  /** @format double */
  percentage: number;
  token: Token;
}

export type FetchTokenDetailsData = ApiResponseTokenDetails;

export interface FetchTokenDetailsParams {
  chain: string;
  token: string;
}

export type FetchTokensData = ApiResponseTokensResponse;

export interface FiatCurrency {
  code: string;
  icon: string;
  id: string;
  name: string;
  symbol: string;
}

export type FlashLoanData = LendingPoolAPIResponse;

export interface GasCost {
  amount: string;
  amountUSD: string;
  estimate: string;
  limit: string;
  price: string;
  token: TokenInfo;
  type: string;
}

export interface GasPrice {
  /** @format double */
  average24h: number;
  /** @format double */
  average7d: number;
  chainId: string;
  history: {
    /** @format double */
    timestamp: number;
    /** @format double */
    value: number;
  }[];
  /** @format double */
  lastTimestamp: number;
  unitName: string;
}

export type GetAccountData = AccountAPIResponse;

export type GetAddressesProviderData = LendingPoolAPIResponse;

export interface GetAddressesProviderParams {
  address: string;
  chainId: string;
}

export interface GetAddressesProviderParams2 {
  address: string;
  chainId: string;
}

export type GetAddressesProviderResult = LeveragerAPIResponse;

export type GetAllPaymentIntentConfigsData = PaymentIntentResponse[];

export type GetAllPossibleConnectionsData = ApiResponseTokenInfoByChainId;

export interface GetAllPossibleConnectionsParams {
  toChain: string;
  toToken: string;
}

export type GetAllowanceData = ERC20APIResponse;

export interface GetAllowanceParams {
  address: string;
  chainId: string;
  owner: string;
  spender: string;
}

export type GetApprovedData = TransactionAPIResponse;

export type GetAssetData = ERC4626APIResponse;

export interface GetAssetParams {
  address: string;
  chainId: string;
}

export type GetBalanceData = BalanceAPIResponse;

export type GetBalanceOfData = ERC20APIResponse;

export interface GetBalanceOfParams {
  account: string;
  address: string;
  chainId: string;
}

export interface GetBalanceParams {
  accountName: string;
  chainId: string;
}

export type GetBitcoinAccountData = AccountAPIResponse;

export type GetBitcoinCashAccountData = AccountAPIResponse;

export type GetChainsData = ApiResponseChainsResponse;

export interface GetChainsParams {
  optionalChainTypes?: OptionalChainTypesEnum;
}

export enum GetChainsParams1OptionalChainTypesEnum {
  EVM = 'EVM',
  SOL = 'SOL',
}

export type GetConnectionsData = ApiResponseConnectionsResponse;

export interface GetConnectionsParams {
  chainTypes?: string;
  fromChain: string;
  fromToken: string;
  toChain: string;
  toToken: string;
}

export type GetContractInfoData = OdosAPIResponse;

export interface GetContractInfoParams {
  accountName: string;
  /** @format double */
  chainId: number;
  version: VersionEnum;
}

export enum GetContractInfoParams1VersionEnum {
  V2 = 'v2',
}

export type GetConvertToAssetsData = ERC4626APIResponse;

export interface GetConvertToAssetsParams {
  address: string;
  chainId: string;
  shares: string;
}

export type GetConvertToSharesData = ERC4626APIResponse;

export interface GetConvertToSharesParams {
  address: string;
  assets: string;
  chainId: string;
}

export type GetCurrentBlockData = OdosAPIResponse;

export interface GetCurrentBlockParams {
  accountName: string;
  /** @format double */
  chainId: number;
}

export type GetDecimalsData = ERC20APIResponse;

export interface GetDecimalsParams {
  address: string;
  chainId: string;
}

export type GetDefaultAdminRoleData = LeveragerAPIResponse;

export interface GetDefaultAdminRoleParams {
  address: string;
  chainId: string;
}

export type GetDogeCoinAccountData = AccountAPIResponse;

export type GetEosAccountData = AccountAPIResponse;

export type GetExecutorAddressData = OdosAPIResponse;

export interface GetExecutorAddressParams {
  accountName: string;
  /** @format double */
  chainId: number;
  version: VersionEnum2;
}

export enum GetExecutorAddressParams1VersionEnum {
  V2 = 'v2',
}

export type GetFlashLoanPremiumTotalData = LendingPoolAPIResponse;

export interface GetFlashLoanPremiumTotalParams {
  address: string;
  chainId: string;
}

export type GetGasPriceData = ApiResponseGasPrice;

export interface GetGasPriceParams {
  chainId: string;
}

export type GetLendingPoolData = LeveragerAPIResponse;

export interface GetLendingPoolParams {
  address: string;
  chainId: string;
}

export type GetLendingPoolRevisionData = LendingPoolAPIResponse;

export interface GetLendingPoolRevisionParams {
  address: string;
  chainId: string;
}

export type GetLiquiditySourcesData = OdosAPIResponse;

export interface GetLiquiditySourcesParams {
  accountName: string;
  /** @format double */
  chainId: number;
}

export type GetLitecoinAccountData = AccountAPIResponse;

export type GetMaxDepositData = ERC4626APIResponse;

export interface GetMaxDepositParams {
  address: string;
  chainId: string;
  receiver: string;
}

export type GetMaxMintData = ERC4626APIResponse;

export interface GetMaxMintParams {
  address: string;
  chainId: string;
  receiver: string;
}

export type GetMaxNumberReservesData = LendingPoolAPIResponse;

export interface GetMaxNumberReservesParams {
  address: string;
  chainId: string;
}

export type GetMaxRedeemData = ERC4626APIResponse;

export interface GetMaxRedeemParams {
  address: string;
  chainId: string;
  owner: string;
}

export type GetMaxStableRateBorrowSizePercentData = LendingPoolAPIResponse;

export interface GetMaxStableRateBorrowSizePercentParams {
  address: string;
  chainId: string;
}

export type GetMaxWithdrawData = ERC4626APIResponse;

export interface GetMaxWithdrawParams {
  address: string;
  chainId: string;
  owner: string;
}

export type GetMessageData = PingResponse;

export type GetMinHfData = LeveragerAPIResponse;

export interface GetMinHfParams {
  address: string;
  chainId: string;
}

export type GetNameData = ERC20APIResponse;

export interface GetNameParams {
  address: string;
  chainId: string;
}

export type GetNonceData = NonceAPIResponse;

export type GetOnePaymentIntentConfigsData = PaymentIntentResponse;

export type GetQuoteBody = InputBody & QuoteRequestV2;

export type GetQuoteData = ApiResponseQuote;

export type GetQuoteOutput = ApiResponseQuote;

export interface GetQuoteParams {
  allowBridges?: string[];
  allowExchanges?: string[];
  denyBridges?: string[];
  denyExchanges?: string[];
  /** @format double */
  fee?: number;
  fromAddress: string;
  fromAmount: string;
  fromChain: string;
  fromToken: string;
  integrator?: string;
  order?: OrderEnum;
  preferBridges?: string[];
  preferExchanges?: string[];
  referrer?: string;
  /** @format double */
  slippage?: number;
  toAddress?: string;
  toChain: string;
  toToken: string;
}

export enum GetQuoteParams1OrderEnum {
  BEST_VALUE = 'BEST_VALUE',
  BEST_FEE = 'BEST_FEE',
  BEST_FEE_GAS = 'BEST_FEE_GAS',
}

export interface GetQuoteParams3 {
  affiliateAddress?: string;
  /** @format double */
  affiliateBasisPoints?: number;
  allowSmartContractRecipient?: boolean;
  buyAsset: string;
  /** @format double */
  limit?: number;
  preferredProvider?: string;
  providers?: string[];
  recipientAddress: string;
  /** @format double */
  sellAmount: number;
  sellAsset: string;
  senderAddress: string;
  /** @format double */
  slippage?: number;
}

export type GetQuoteResult = OdosAPIResponse;

export type GetReserveDataData = LendingPoolAPIResponse;

export interface GetReserveDataParams {
  address: string;
  asset: string;
  chainId: string;
}

export type GetReservesListData = LendingPoolAPIResponse;

export interface GetReservesListParams {
  address: string;
  chainId: string;
}

export type GetRippleAccountData = AccountAPIResponse;

export type GetRoleAdminData = LeveragerAPIResponse;

export interface GetRoleAdminParams {
  address: string;
  chainId: string;
  role: string;
}

export type GetRouterAddressData = OdosAPIResponse;

export interface GetRouterAddressParams {
  accountName: string;
  /** @format double */
  chainId: number;
  version: VersionEnum1;
}

export enum GetRouterAddressParams1VersionEnum {
  V2 = 'v2',
}

export type GetSolanaAccountData = AccountAPIResponse;

export type GetSupportedChainsData = OdosAPIResponse;

export interface GetSupportedChainsParams {
  accountName: string;
}

export type GetSupportedChainsResult = ApiResponseChainMap;

export interface GetSupportedOnRampsResponse {
  message: {
    displayName: string;
    icon: string;
    icons: {
      png: {
        '160x160': string;
        '32x32': string;
      };
      svg: string;
    };
    id: string;
  }[];
}

export type GetSupportedProvidersData = ApiResponseStringArray;

export type GetSupportedTokensData = OdosAPIResponse;

export interface GetSupportedTokensParams {
  accountName: string;
  /** @format double */
  chainId: number;
}

export interface GetSwapDto {
  allowPartialFill?: boolean;
  amount: string;
  /** @format double */
  chainId?: number;
  compatibility?: boolean;
  complexityLevel?: string;
  connectorTokens?: string;
  disableEstimate?: boolean;
  dst: string;
  fee?: string;
  from: string;
  gasLimit?: string;
  gasPrice?: string;
  includeProtocols?: boolean;
  includeTokensInfo?: boolean;
  mainRouteParts?: string;
  parts?: string;
  permit?: string;
  protocols?: string;
  receiver?: string;
  referrer?: string;
  /** @format double */
  slippage: number;
  src: string;
}

export type GetSymbolData = ERC20APIResponse;

export interface GetSymbolParams {
  address: string;
  chainId: string;
}

export type GetToolsData = ApiResponseToolsResponse;

export interface GetToolsParams {
  chains?: string;
}

export type GetTotalAssetsData = ERC4626APIResponse;

export interface GetTotalAssetsParams {
  address: string;
  chainId: string;
}

export type GetTotalSupplyData = ERC20APIResponse;

export interface GetTotalSupplyParams {
  address: string;
  chainId: string;
}

export type GetTronAccountData = AccountAPIResponse;

export type GetUserAccountDataData = LendingPoolAPIResponse;

export interface GetUserAccountDataParams {
  address: string;
  chainId: string;
  user: string;
}

export type GetWethData = LeveragerAPIResponse;

export interface GetWethParams {
  address: string;
  chainId: string;
}

export type GetstatusData = ApiResponseStatusResponse;

export interface GetstatusParams {
  txHash: string;
}

export type GrantRoleData = LeveragerAPIResponse;

export type HasRoleData = LeveragerAPIResponse;

export interface HasRoleParams {
  account: string;
  address: string;
  chainId: string;
  role: string;
}

export interface IBCTransferTransactionInput {
  /** @format double */
  account_number: number;
  amount: string;
  chain_id: string;
  demon: string;
  fee_amount: string;
  fee_demon: string;
  from_address: string;
  /** @format double */
  gas_limit: number;
  memo: string;
  /** @format double */
  sequence: number;
  source_channel: string;
  source_port: string;
  /** @format double */
  timeout_height: number;
  to_address: string;
}

export interface IERC20Approval {
  contract: string;
  logIndex: string;
  owner: string;
  spender: string;
  tokenDecimals: string;
  tokenName: string;
  tokenSymbol: string;
  transactionHash: string;
  triggers?: TriggerOutput[];
  value: string;
  valueWithDecimals?: string;
}

export interface IERC20Transfer {
  contract: string;
  from: string;
  logIndex: string;
  to: string;
  tokenDecimals: string;
  tokenName: string;
  tokenSymbol: string;
  transactionHash: string;
  triggers?: TriggerOutput[];
  value: string;
  valueWithDecimals?: string;
}

export interface INFTApproval {
  account: string;
  approvedAll: boolean;
  contract: string;
  logIndex: string;
  operator: string;
  tokenContractType: string;
  tokenId: string | null;
  tokenName: string;
  tokenSymbol: string;
  transactionHash: string;
}

export interface INFTApprovalERC1155 {
  account: string;
  approved: boolean;
  contract: string;
  logIndex: string;
  operator: string;
  tokenContractType: string;
  tokenName: string;
  tokenSymbol: string;
  transactionHash: string;
}

export interface INFTApprovalERC721 {
  approved: string;
  contract: string;
  logIndex: string;
  owner: string;
  tokenContractType: string;
  tokenId: string;
  tokenName: string;
  tokenSymbol: string;
  transactionHash: string;
}

export interface INFTTransfer {
  amount: string;
  contract: string;
  from: string;
  logIndex: string;
  operator: string | null;
  to: string;
  tokenContractType: string;
  tokenId: string;
  tokenName: string;
  tokenSymbol: string;
  transactionHash: string;
  triggers?: TriggerOutput[];
}

export interface INativeBalance {
  address: string;
  balance: string;
}

export interface IOldNFTApproval {
  ERC1155: INFTApprovalERC1155[];
  ERC721: INFTApprovalERC721[];
}

export interface IWebhook {
  erc20Approvals: IERC20Approval[];
  erc20Transfers: IERC20Transfer[];
  abi: AbiItem[];
  block: Block;
  chainId: string;
  confirmed: boolean;
  logs: Log[];
  nativeBalances: INativeBalance[];
  /** @deprecated */
  nftApprovals: IOldNFTApproval;
  nftTokenApprovals: INFTApproval[];
  nftTransfers: INFTTransfer[];
  /** @format double */
  retries: number;
  streamId: string;
  tag: string;
  txs: Transaction[];
  txsInternal: InternalTransaction[];
}

export interface InputBody {
  EOA?: boolean;
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amounts?: string[];
  approved?: boolean;
  asset?: string;
  assets?: string[];
  borrowAmount?: string | number;
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  debtAsset?: string;
  debtToCover?: string;
  dryrun?: boolean;
  encoding?: string;
  gas?: string;
  gasPrice?: string;
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  minHealthFactor?: string | number;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  outputTokens?: TokenProportion[];
  params?: string;
  premiums?: string[] | number[];
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  /** @format double */
  referralCode?: number;
  role?: string;
  /** @format double */
  slippageLimitPercent?: number;
  to?: string;
  token_id?: string;
  token_ids?: string;
  useAsCollateral?: boolean;
  user?: string;
  value?: string;
}

export interface InternalTransaction {
  from: string | null;
  gas: string | null;
  to: string | null;
  transactionHash: string;
  value: string | null;
}

export type IsApprovedForAllData = TransactionAPIResponse;

export type IsApprovedForAllResult = TransactionAPIResponse;

export type IsPausedData = LendingPoolAPIResponse;

export interface IsPausedParams {
  address: string;
  chainId: string;
}

export interface IsPausedParams2 {
  address: string;
  chainId: string;
}

export type IsPausedResult = LeveragerAPIResponse;

export type LendData = TransactionAPIResponse;

export interface LendingPoolAPIResponse {
  address?: string;
  body?: InputBody;
  broadcasted?: any;
  data?: any;
  function?: string;
  message: string;
  params?: any[];
  success: boolean;
  transaction?: any;
  user_op?: string;
}

export type LeverageErc20Data = LeveragerAPIResponse;

export type LeverageNativeData = LeveragerAPIResponse;

export interface LeveragerAPIResponse {
  address?: string;
  body?: InputBody;
  broadcasted?: any;
  data?: any;
  function?: string;
  message: string;
  params?: any[];
  success: boolean;
  transaction?: any;
  user_op?: string;
}

export type LiquidationCallData = LendingPoolAPIResponse;

export type ListAccountsData = AccountAPIResponse;

export type ListAccountsResult = CosmosAPIResponse;

export type ListBitcoinAccountsData = AccountAPIResponse;

export type ListBitcoinCashAccountsData = AccountAPIResponse;

export type ListDogeCoinAccountsData = AccountAPIResponse;

export type ListEosAccountsData = AccountAPIResponse;

export type ListLitecoinAccountsData = AccountAPIResponse;

export type ListRippleAccountsData = AccountAPIResponse;

export type ListSolanaAccountsData = AccountAPIResponse;

export type ListTronAccountsData = AccountAPIResponse;

export interface LitecoinAPIResponse {
  address?: string;
  body?: InputBody;
  data?: LitecoinTransactionOutput;
  message: string;
  success: boolean;
}

export interface LitecoinInput {
  network?: string;
  private_key?: string;
}

export interface LitecoinTransactionInput {
  compress?: boolean;
  network?: string;
  to?: string;
  /** @format double */
  value?: number;
}

export interface LitecoinTransactionOutput {
  signedTx?: string;
  transaction_hash?: string;
}

export interface Log {
  topic0: string | null;
  topic1: string | null;
  topic2: string | null;
  topic3: string | null;
  address: string;
  data: string;
  logIndex: string;
  transactionHash: string;
  triggers?: TriggerOutput[];
}

export interface Message {
  crypto: CryptoCurrency[];
  fiat: FiatCurrency[];
}

export interface MessageInput {
  message: string;
}

export type MintData = ERC4626APIResponse;

export type MoralisWebhookData = any;

export type MultiSignSolanaTransactionData = SolanaAPIResponse;

export type NameData = TransactionAPIResponse;

export interface NonceAPIResponse {
  address?: string;
  body?: InputBody;
  data?: NonceResponse;
  message: string;
  success: boolean;
}

export interface NonceResponse {
  /** @format double */
  nonce: number;
}

export interface OdosAPIResponse {
  address?: string;
  body?: InputBody;
  broadcasted?: any;
  data?: any;
  function?: string;
  message: string;
  params?: any[];
  success: boolean;
  transaction?: any;
  user_op?: any;
}

export type OnRamperCheckoutData = any;

export type OnRamperGetQuotesBuyData = Quotes;

export interface OnRamperGetQuotesBuyParams {
  /** @format double */
  amount: number;
  /** @default "" */
  clientName?: string;
  /** @default "" */
  country?: string;
  crypto: string;
  fiat: string;
  /** @default "creditcard" */
  paymentMethod?: string;
  /** @default "" */
  uuid?: string;
}

export type OnRamperGetQuotesSellData = SellQuotes;

export interface OnRamperGetQuotesSellParams {
  /** @format double */
  amount: number;
  /** @default "" */
  clientName?: string;
  /** @default "" */
  country?: string;
  crypto: string;
  fiat: string;
  /** @default "creditcard" */
  paymentMethod?: string;
  /** @default "" */
  uuid?: string;
}

export type OnRamperGetSupportedAssetsData = SupportedAssetResponse;

export interface OnRamperGetSupportedAssetsParams {
  country: string;
  source: string;
}

export type OnRamperGetSupportedCurrenciesData = SupportedCurrenciesResponse;

export interface OnRamperGetSupportedCurrenciesParams {
  type: string;
}

export type OnRamperGetSupportedDefaultsAllData = SupportedDefaultResponse;

export interface OnRamperGetSupportedDefaultsAllParams {
  country: string;
  type: string;
}

export type OnRamperGetSupportedOnRampsAllData = GetSupportedOnRampsResponse;

export type OnRamperGetSupportedPaymentTypesData =
  SupportedPaymentTypesCurrencyResponse;

export type OnRamperGetSupportedPaymentTypesFiatData =
  SupportedPaymentTypesCurrencyResponse;

export interface OnRamperGetSupportedPaymentTypesFiatParams {
  country: string;
  fiat: string;
}

export interface OnRamperGetSupportedPaymentTypesParams {
  country: string;
  fiat: string;
  type: string;
}

export enum OptionalChainTypesEnum {
  EVM = 'EVM',
  SOL = 'SOL',
}

export enum OrderEnum {
  BEST_VALUE = 'BEST_VALUE',
  BEST_FEE = 'BEST_FEE',
  BEST_FEE_GAS = 'BEST_FEE_GAS',
}

export enum OrderEnum1 {
  BEST_VALUE = 'BEST_VALUE',
  BEST_FEE = 'BEST_FEE',
  BEST_FEE_GAS = 'BEST_FEE_GAS',
}

export type OwnerOfData = TransactionAPIResponse;

export interface PathVizImageConfig {
  /** @format double */
  height?: number;
  legendTextColor?: string;
  linkColors?: string[];
  nodeColor?: string;
  nodeTextColor?: string;
  /** @format double */
  width?: number;
}

export type PauseData = LeveragerAPIResponse;

export type PaymentCreatePaymentIntentData = PaymentIntentResponse;

export type PaymentDeletePaymentIntentData = PaymentIntentResponse;

export type PaymentGetAllPaymentIntentsData = PaymentIntentResponse[];

export type PaymentGetAvailableChainsData = string[];

export type PaymentGetPaymentIntentData = PaymentIntentResponse;

export interface PaymentIntentResponse {
  /** @format double */
  amount?: number;
  currency?: string;
  destination?: string;
  id?: string;
  message?: string;
  metadata?: Record<string, string>;
  network?: string;
  qr_code?: string;
  status?: string;
  success: boolean;
  uri?: string;
}

export interface PaymentType {
  icon: string;
  name: string;
  paymentTypeId: string;
}

export type PaymentUpdatePaymentIntentData = PaymentIntentResponse;

export interface PingResponse {
  message: string;
}

export interface PostQuote {
  broadcast: any;
  input: InputBody;
  quote: Quote;
  signed: any;
}

export type PostQuoteData = ApiResponsePostQuote;

export interface PostQuoteParams {
  accountName: string;
  allowBridges?: string[];
  allowExchanges?: string[];
  denyBridges?: string[];
  denyExchanges?: string[];
  /** @format double */
  fee?: number;
  fromAddress: string;
  fromAmount: string;
  fromChain: string;
  fromToken: string;
  integrator?: string;
  order?: OrderEnum1;
  preferBridges?: string[];
  preferExchanges?: string[];
  referrer?: string;
  /** @format double */
  slippage?: number;
  toAddress?: string;
  toChain: string;
  toToken: string;
}

export enum PostQuoteParams1OrderEnum {
  BEST_VALUE = 'BEST_VALUE',
  BEST_FEE = 'BEST_FEE',
  BEST_FEE_GAS = 'BEST_FEE_GAS',
}

export interface PostQuoteParams2 {
  accountName: string;
  affiliateAddress?: string;
  /** @format double */
  affiliateBasisPoints?: number;
  allowSmartContractRecipient?: boolean;
  buyAsset: string;
  /** @format double */
  limit?: number;
  preferredProvider?: string;
  providers?: string[];
  recipientAddress: string;
  /** @format double */
  sellAmount: number;
  sellAsset: string;
  senderAddress: string;
  /** @format double */
  slippage?: number;
}

export type PostQuoteResult = ApiResponseQuote;

export type ProtocolsData = any;

export type ProtocolsPayload = any;

export interface Quote {
  action: Action;
  estimate: Estimate;
  id: string;
  includedSteps: Step[];
  tool: string;
  transactionRequest: TransactionRequest;
  type: string;
}

export type QuoteData = any;

export type QuotePayload = any;

export interface QuoteRequestV2 {
  /** @format double */
  chainId: number;
  compact?: boolean;
  disableRFQs?: boolean;
  /** @format double */
  gasPrice?: number;
  inputTokens: TokenAmount[];
  likeAsset?: boolean;
  outputTokens: TokenProportion[];
  pathViz?: boolean;
  pathVizImage?: boolean;
  pathVizImageConfig?: PathVizImageConfig;
  poolBlacklist?: string[];
  /** @format double */
  referralCode?: number;
  simple?: boolean;
  /** @format double */
  slippageLimitPercent?: number;
  sourceBlacklist?: string[];
  sourceWhitelist?: string[];
  userAddr?: string;
}

export type Quotes = Quote[];

export type ReadAccountData = CosmosAPIResponse;

export type RedeemData = ERC4626APIResponse;

export type RemoveLiquidityData = TransactionAPIResponse;

export type RenounceRoleData = LeveragerAPIResponse;

export type RepayData = TransactionAPIResponse;

export type RepayResult = LendingPoolAPIResponse;

export type ResolveData = EnsResolveAPIResponse;

export type RevokeRoleData = LeveragerAPIResponse;

export interface RippleAPIResponse {
  address?: string;
  body?: InputBody;
  data?: RippleTransactionOutput;
  message: string;
  success: boolean;
}

export interface RippleInput {
  network?: string;
  private_key?: string;
}

export interface RippleTransactionInput {
  compress?: boolean;
  network?: string;
  to?: string;
  /** @format double */
  value?: number;
}

export interface RippleTransactionOutput {
  signedTx?: string;
  transaction_hash?: string;
}

export type SafeBatchTransferFromData = TransactionAPIResponse;

export type SafeTransferFromData = TransactionAPIResponse;

export type SafeTransferFromResult = TransactionAPIResponse;

export interface SellQuote {
  /** @format double */
  networkFee: number;
  paymentMethod: string;
  /** @format double */
  payout: number;
  quoteId: string;
  ramp: string;
  /** @format double */
  rate: number;
  recommendations: string[];
  /** @format double */
  transactionFee: number;
}

export type SellQuotes = SellQuote[];

export interface SendBundledInput {
  bundleId: string;
  rpcUrl: string;
}

export type SendBundledUserOperationsData = TransactionAPIResponse;

export interface SendUserOpInput {
  amount: string;
  data?: string;
  rpcUrl: string;
  toAddress: string;
}

export type SendUserOperationData = TransactionAPIResponse;

export type SetApprovalForAllData = TransactionAPIResponse;

export type SetApprovalForAllResult = TransactionAPIResponse;

export type SetUserUseReserveAsCollateralData = LendingPoolAPIResponse;

export type SignBitcoinCashTransactionData = BitcoinCashAPIResponse;

export type SignBitcoinTransactionData = BitcoinAPIResponse;

export type SignDogeCoinTransactionData = DogeCoinAPIResponse;

export type SignEosTransactionData = EosAPIResponse;

export type SignIbcTransferTransactionData = CosmosAPIResponse;

export type SignLitecoinTransactionData = LitecoinAPIResponse;

export interface SignMessage {
  data: string;
  encoding?: string;
  header?: boolean;
  name?: string;
  signtype?: boolean;
}

export interface SignMessageAPIResponse {
  address?: string;
  body?: InputBody;
  data?: TransactionData;
  message: string;
  success: boolean;
}

export type SignMessageData = SignMessageAPIResponse;

export type SignMessageResult = CosmosAPIResponse;

export type SignRippleTransactionData = RippleAPIResponse;

export type SignSolanaTransactionData = SolanaAPIResponse;

export type SignTransactionData = TransactionAPIResponse;

export type SignTransferTransactionData = CosmosAPIResponse;

export type SignTronTransactionData = TronAPIResponse;

export interface SignTypedData {
  data: string;
}

export type SignTypedDataData = SignMessageAPIResponse;

export interface SolanaAPIResponse {
  address?: string;
  body?: InputBody;
  data?: SolanaTransactionOutput;
  message: string;
  success: boolean;
}

export interface SolanaInput {
  network?: string;
  private_key?: string;
}

export interface SolanaSignTransactionInput {
  network?: string;
  unsigned_tx: string;
}

export interface SolanaTransactionInput {
  compress?: boolean;
  network?: string;
  to?: string;
  /** @format double */
  value?: number;
}

export interface SolanaTransactionOutput {
  signedTx?: string;
  transaction_hash?: string;
}

export interface StatusResponse {
  receiving: TransactionStatus;
  sending: TransactionStatus;
  status: string;
  substatus: string;
  tool: string;
}

export interface Step {
  action: Action;
  estimate: Estimate;
  id: string;
  tool: string;
  type: string;
}

export type SuggestGasPriceData = TransactionAPIResponse;

export interface SuggestGasPriceParams {
  accountName: string;
  chainId: string;
}

export interface SupportedAssetResponse {
  assets: {
    crypto: string[];
    fiat: string;
    paymentMethods: string[];
  }[];
  country: string;
}

export interface SupportedCurrenciesResponse {
  message: Message;
}

export interface SupportedDefaultResponse {
  defaults: {
    id: {
      /** @format double */
      amount: number;
      paymentMethod: string;
      provider: string;
      source: string;
      target: string;
    };
  };
  recommended: {
    /** @format double */
    amount: number;
    paymentMethod: string;
    provider: string;
    source: string;
    target: string;
  };
}

export interface SupportedPaymentTypesCurrencyResponse {
  message: SupportedPaymentTypesMessage;
}

export interface SupportedPaymentTypesMessage {
  applepay: PaymentType;
  creditcard: PaymentType;
  googlepay: PaymentType;
}

export type SupportsInterfaceData = LeveragerAPIResponse;

export interface SupportsInterfaceParams {
  address: string;
  chainId: string;
  interfaceId: string;
}

export type SwapBorrowRateModeData = LendingPoolAPIResponse;

export type SwapData = any;

export type SwapExactEthForTokensData = TransactionAPIResponse;

export type SwapExactTokensForTokensData = TransactionAPIResponse;

export type SwapInput = InputBody & QuoteRequestV2;

export type SwapOutput = OdosAPIResponse;

export type SwapResult = ConveyorFinanceControllerResponse;

export type SymbolData = TransactionAPIResponse;

export interface TatumTransactionEvent {
  address: string;
  amount: string;
  /** @format double */
  blockNumber: number;
  chain: string;
  counterAddress: string;
  currency: string;
  mempool: boolean;
  subscriptionType: string;
  test: boolean;
  txId: string;
}

export type TatumWebhookData = any;

export interface Token {
  address: string;
  /** @format double */
  chainId: number;
  /** @format double */
  decimals: number;
  logoURI: string;
  name: string;
  symbol: string;
}

export interface TokenAmount {
  amount: string;
  tokenAddress: string;
}

export interface TokenDetails {
  address: string;
  /** @format double */
  chainId: number;
  coinKey: string;
  /** @format double */
  decimals: number;
  logoURI: string;
  name: string;
  priceUSD: string;
  symbol: string;
}

export interface TokenInfo {
  address: string;
  /** @format double */
  decimals: number;
  logoURI?: string;
  name: string;
  symbol: string;
}

export type TokenInfoByChainId = Record<string, TokenInfo[]>;

export interface TokenProportion {
  /** @format double */
  proportion: number;
  tokenAddress: string;
}

export interface TokenSwapParams {
  EOA?: boolean;
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amountIn: string;
  amounts?: string[];
  approved?: boolean;
  asset?: string;
  assets?: string[];
  borrowAmount?: string | number;
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  debtAsset?: string;
  debtToCover?: string;
  dryrun?: boolean;
  encoding?: string;
  gas?: string;
  gasPrice?: string;
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  minHealthFactor?: string | number;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  outputTokens?: TokenProportion[];
  params?: string;
  premiums?: string[] | number[];
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  recipient: string;
  /** @format double */
  referralCode?: number;
  referrer: string;
  role?: string;
  slippage: string;
  /** @format double */
  slippageLimitPercent?: number;
  to?: string;
  tokenIn: string;
  /** @format double */
  tokenInDecimals: number;
  tokenOut: string;
  /** @format double */
  tokenOutDecimals: number;
  token_id?: string;
  token_ids?: string;
  useAsCollateral?: boolean;
  user?: string;
  value?: string;
}

export type TokenUriData = TransactionAPIResponse;

export type TokensData = any;

export type TokensPayload = any;

export interface TokensResponse {
  tokens: Record<string, Token[]>;
}

export interface ToolsResponse {
  bridges: Bridge[];
  exchanges: Exchange[];
}

export interface Transaction {
  data?: string | null;
  moon_scan_url?: string;
  raw_transaction?: string;
  signature?: string;
  signed_transaction?: string;
  transaction?: Tx;
  transaction_hash?: string;
  transactions?: TransactionData[];
  userOps?: TransactionRequest[];
  userop_transaction?: string;
}

export interface TransactionAPIResponse {
  address?: string;
  body?: InputBody;
  broadcasted?: BroadCastRawTransactionResponse;
  data?: Transaction;
  function?: string;
  message: string;
  params?: any[];
  signedTx?: any;
  success: boolean;
  transaction?: any;
  transaction_hash?: any;
}

export interface TransactionData {
  moon_scan_url?: string;
  raw_transaction?: string;
  signature?: string;
  signed_message?: string;
  signed_transaction: string;
  transaction?: Tx;
  transaction_hash: string;
  userOps?: TransactionRequest[];
  userop_transaction?: string;
}

export interface TransactionInput {
  /** @format double */
  amount: number;
  destination: string;
  metaData: {
    quoteId: string;
  };
  network: string;
  onramp: string;
  originatingHost: string;
  partnerContext: string;
  paymentMethod: string;
  source: string;
  supportedParams: {
    partnerData: {
      redirectUrl: {
        success: string;
      };
    };
    theme: {
      /** @format double */
      borderRadius: number | null;
      cardColor: string;
      isDark: boolean;
      primaryColor: string;
      primaryTextColor: string;
      secondaryColor: string;
      secondaryTextColor: string;
      themeName: string;
    };
  };
  type: string;
  uuid: string;
  wallet: {
    address: string;
  };
}

export interface TransactionRequest {
  data?: string;
  from?: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  nonce?: string;
  to?: string;
  value?: string;
}

export interface TransactionResponse {
  /** @format double */
  chainId: number;
  /** @format double */
  currentBlockNumber: number;
  info: {
    affiliateAggregator: string;
    affiliateGas: string;
    amountOut: string;
    amountOutMin: string;
    conveyorGas: string;
  };
  message: string;
  tx: {
    data: string;
    from: string;
    gas: string;
    nonce: string;
    to: string;
    value: string;
  };
}

export interface TransactionStatus {
  amount: string;
  /** @format double */
  chainId: number;
  gasPrice: string;
  gasUsed: string;
  token: TokenInfo;
  txHash: string;
  txLink: string;
}

export type TransferData = ERC20APIResponse;

export type TransferEthData = TransactionAPIResponse;

export type TransferFromData = ERC20APIResponse;

export type TransferFromResult = TransactionAPIResponse;

export type TransferResult = TransactionAPIResponse;

export type TransferSolanaTransactionData = SolanaAPIResponse;

export type TransferTokensSignSolanaTransactionData = SolanaAPIResponse;

export interface TransferTransactionInput {
  /** @format double */
  account_number: number;
  amount: string;
  chain_id: string;
  demon: string;
  fee_amount: string;
  fee_demon: string;
  from_address: string;
  /** @format double */
  gas_limit: number;
  memo: string;
  /** @format double */
  sequence: number;
  /** @format double */
  timeout_height: number;
  to_address: string;
}

export interface TriggerOutput {
  name: string;
  value: any;
}

export interface TronAPIResponse {
  address?: string;
  body?: InputBody;
  data?: TronTransactionOutput;
  message: string;
  success: boolean;
}

export interface TronInput {
  network?: string;
  private_key?: string;
}

export interface TronTransactionInput {
  compress?: boolean;
  network?: string;
  to?: string;
  /** @format double */
  value?: number;
}

export interface TronTransactionOutput {
  signedTx?: string;
  transaction_hash?: string;
}

export interface Tx {
  blob_gas?: string | null;
  blob_gas_fee_cap?: string | null;
  blob_hashes?: string[] | null;
  /** @format double */
  chain_id?: number;
  data?: string;
  from?: string;
  gas?: string;
  gas_fee_cap?: string | null;
  gas_price?: string;
  gas_tip_cap?: string | null;
  /** @format double */
  nonce?: number;
  r?: string;
  s?: string;
  to?: string | null;
  /** @format double */
  type?: number;
  v?: string;
  value?: string;
}

export interface UniswapInput {
  EOA?: boolean;
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amount_a?: string;
  amount_b?: string;
  amounts?: string[];
  approved?: boolean;
  asset?: string;
  assets?: string[];
  borrowAmount?: string | number;
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  debtAsset?: string;
  debtToCover?: string;
  dryrun?: boolean;
  encoding?: string;
  gas?: string;
  gasPrice?: string;
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  minHealthFactor?: string | number;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  outputTokens?: TokenProportion[];
  params?: string;
  premiums?: string[] | number[];
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  /** @format double */
  referralCode?: number;
  role?: string;
  /** @format double */
  slippageLimitPercent?: number;
  to?: string;
  token_a?: string;
  token_b?: string;
  token_id?: string;
  token_ids?: string;
  useAsCollateral?: boolean;
  user?: string;
  value?: string;
}

export type UnpauseData = LeveragerAPIResponse;

export type UpdatePaymentIntentConfigData = PaymentIntentResponse;

export type UpdatePaymentIntentConfigPayload = any;

export type UserReserveDataData = AaveReservesAPIResponse;

export enum VersionEnum {
  V2 = 'v2',
}

export enum VersionEnum1 {
  V2 = 'v2',
}

export enum VersionEnum2 {
  V2 = 'v2',
}

export type WithdrawData = ERC4626APIResponse;