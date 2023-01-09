export type Options = {
  apiKey: string;
  apiSecret: string;
  sandboxMode: boolean;
};

export interface Response<T> {
  message: string;
  data: T;
  errors?: [
    {
      message: string;
      property: string;
    }
  ];
  meta?: {
    perPage: number;
    currentPage: number;
    totalPages: number;
    count: number;
    total: number;
  };
}

export interface Currency {
  id: string;

  name: string;

  code: string;

  receivable: boolean;

  withdrawable: boolean;

  transferrable: boolean;

  minimumDeposit: number;

  /**
   * This property only applies when above 0
   */
  maximumDeposit: number;

  /**
   * This property only applies when above 0
   */
  maximumDailyDepositLimit: number;

  maximumDecimalPlaces: number;
}

export interface Quote {
  id: string;
  rate: number;
  side: string;
  amount: number;
  expiryDate: Date;
  amountReceived: number;
}

export interface TradePair {
  id: string;
  isSellable: boolean;
  isBuyable: boolean;
  source: Currency;
  target: Currency;
}

export interface Network {
  id: string;
  name: string;
  code: string;
  memoRegex: string;
  addressRegex: string;
  minimumConfirmations: number;
}
export interface BankAccountPayout {
  accountNumber: string;
  accountName: string;
  bankName: string;
  bankCode: string;
  pagaBankCode: string;
  merchantCode: string;
}

export interface CryptoAccountPayout {
  address: string;
  network: string;
  memo?: string;
}

export enum TransactionCategory {
  DEPOSIT = "DEPOSIT",
  WITHDRAWAL = "WITHDRAWAL",
  SWAP = "SWAP",
  TRANSFER = "TRANSFER",
}
