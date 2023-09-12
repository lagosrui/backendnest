import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';

import { UserService } from './user.service';
import { User } from 'src/schema/user.schema';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('count')
  countUsers(): Promise<number> {
    return this.userService.countUsers();
  }

  @Get('search')
  findOneByWallet(@Query('wallet') wallet: string): Promise<User | null> {
    return this.userService.findOneByWallet(wallet);
  }

  @Post()
  createUser(@Body('wallet') wallet: string): Promise<User> {
    return this.userService.createUser(wallet);
  }

  @Get('checkWallet')
  isWalletRegistered(@Query('wallet') wallet: string): Promise<boolean> {
    return this.userService.isWalletRegistered(wallet);
  }

  @Put(':wallet')
  updateUserByWallet(@Param('wallet') wallet: string, @Body() data: Partial<User>): Promise<User> {
    return this.userService.updateUserByWallet(wallet, data);
  }

  @Put('byId/:id')
  updateUserById(@Param('id') id: string, @Body() data: Partial<User>): Promise<User> {
    return this.userService.updateUserById(id, data);
  }
}
