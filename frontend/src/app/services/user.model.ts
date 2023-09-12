export interface User {
    _id: string;
    usermane: string;
    wallet: string;
    email: string;
    description: string;
    image: string;
    transactionsHash: string[];
    KYC: boolean;
    registrationDate: Date;
  }