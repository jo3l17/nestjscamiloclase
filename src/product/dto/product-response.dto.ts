import { CreditBoxPrice } from './credit-box-price.dto';

export class ProductResponseDto {
  uuid: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  price?: CreditBoxPrice;
}
