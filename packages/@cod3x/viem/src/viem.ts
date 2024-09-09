import { CodexSDK } from '@cod3x/sdk';
import { TypedDataField } from '@ethersproject/abstract-signer';
import type {
  Hex,
  LocalAccount,
  SerializeTransactionFn,
  SignableMessage,
  TransactionSerializable,
  TypedDataDefinition,
  TypedDataDomain,
} from 'viem';
import { serializeTransaction } from 'viem';
import { toAccount } from 'viem/accounts';

export async function createCodexAccount(input: {
  sdk: CodexSDK;
  ethereumAddress: string;
}): Promise<LocalAccount> {
  const { sdk, ethereumAddress } = input;

  return toAccount({
    address: ethereumAddress as Hex,
    signMessage: function ({
      message,
    }: {
      message: SignableMessage;
    }): Promise<Hex> {
      return sdk.SignMessage(
        ethereumAddress,
        message as string
      ) as Promise<`0x${string}`>;
    },
    signTransaction: function <
      TTransactionSerializable extends TransactionSerializable
    >(
      transaction: TTransactionSerializable,
      args?:
        | { serializer?: SerializeTransactionFn<TTransactionSerializable> }
        | undefined
    ): Promise<Hex> {
      const serializer = !args?.serializer
        ? serializeTransaction
        : args.serializer;

      return sdk.SignTransaction(
        ethereumAddress,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        serializer(transaction) as any
      ) as Promise<`0x${string}`>;
    },
    signTypedData: function (
      typedData: TypedDataDefinition | { [key: string]: unknown }
    ): Promise<Hex> {
      return sdk.SignTypedData(
        ethereumAddress,
        typedData.domain as TypedDataDomain,
        typedData.types as Record<string, TypedDataField[]>,
        typedData.message as Record<string, string> // Type assertion
      ) as Promise<`0x${string}`>;
    },
  }) as LocalAccount;
}
