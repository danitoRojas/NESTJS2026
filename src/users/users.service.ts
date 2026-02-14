import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    private user: any[] = []

    private idCounter = 1



    create(createUserDato: CreateUserDto) {
        const newUser = {
            id: this.idCounter++,
            ...CreateUserDto
        }
        this.user.push(newUser)
        return newUser
    }

}
