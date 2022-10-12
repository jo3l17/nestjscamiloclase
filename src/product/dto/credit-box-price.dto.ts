import { IsNumber } from 'class-validator';

export class CreditBoxPrice {
  @IsNumber()
  price: number;

  @IsNumber()
  discount: number;
}
