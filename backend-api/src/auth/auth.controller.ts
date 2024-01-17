import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Get("telegram/redirect")
    redirect(@Query() params:any) {
        console.log("Query params", params)
        return this.authService.redirect()
    }
}