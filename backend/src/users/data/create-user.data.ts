import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserData {
  @ApiProperty()
  nickname: string;

  @ApiProperty()
  types: string[];

  @ApiPropertyOptional({
    type: Number,
  })
  coin = 0;
}
