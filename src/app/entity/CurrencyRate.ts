

export class CurrencyRate{

  private readonly _date:string
  private readonly _rate:number

  constructor(date:string,rate: number) {
    this._date=date
    this._rate = rate
  }

  get date(): string {
    return this._date
  }

  get rate(): number {
    return this._rate
  }


  public static default():CurrencyRate{
    return new CurrencyRate("",3.339)
  }

  public toJSONString() : string {

    return JSON.stringify({
      "rate":this?.rate
    });

  }

}
