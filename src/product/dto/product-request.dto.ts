import { IsString, IsArray } from 'class-validator';
import { CreditBoxPrice } from './credit-box-price.dto';

export class ProductRequestDto {
  @IsString()
  name: string; // galletas

  @IsArray()
  price?: CreditBoxPrice[];
}
