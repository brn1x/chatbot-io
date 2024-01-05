import { IsNotEmpty } from 'class-validator';

export class ReceiveQuestionMessageBody {
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  from: string;

  @IsNotEmpty()
  type: 'QUESTION';
}
