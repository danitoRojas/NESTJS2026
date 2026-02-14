import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly ussersServive: UsersService) { }

    @Post()
    crete(@Body() CreateUserDto: CreateUserDto) {
        return this.ussersServive.create(CreateUserDto)
    }



}
