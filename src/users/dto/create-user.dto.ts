import { IsEmail, IsInt, IsString, MinLength } from "class-validator";


export class CreateUserDto {

    @IsString()
    @MinLength(3)
    name: string

    @IsEmail()
    email: string

    @IsInt()
    number: number

}