import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    redirect() {
        return "Hello from Telegram!"
    }
}
