import { IsEmail, IsNotEmpty } from 'class-validator';

// for User
export class RegisterUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  age: string;

  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  address: string;
}
