import { IsString } from 'class-validator';

export class CreateMessageDtoV2 {
  @IsString()
  content: string;
}
