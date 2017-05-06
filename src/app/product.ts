
export class Product {
  public ID : number;
  public Name: string;

  public Futures : Array<Future>;
  public Expirations : Array<Expiration>;
}

export class Future {
  public ID : number;
  public Symbol : string;
  public ExpirationDate : Date;
  public Price : FuturePrice;
  
}

export class FuturePrice {
  public Open : number;
  public High : number;
  public Low : number;
  public Last : number;
}

export class Expiration {
  public ID : number;
  public Symbol : string;
  public ExpirationDate : Date;
}