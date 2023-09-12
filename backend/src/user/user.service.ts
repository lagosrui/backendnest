import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schema/user.schema';


@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async countUsers(): Promise<number> {
    return this.userModel.countDocuments().exec();
  }

  async findOneByWallet(wallet: string): Promise<User | null> {
    return this.userModel.findOne({ wallet }).exec();
  }

  async createUser(wallet: string): Promise<User> {
    const user = new this.userModel({ wallet });
    return user.save();
  }

  async isWalletRegistered(wallet: string): Promise<boolean> {
    const user = await this.userModel.findOne({ wallet }).exec();
    return !!user;
  }

  async updateUserByWallet(wallet: string, data: Partial<User>): Promise<User> {
    return this.userModel.findOneAndUpdate({ wallet }, data, { new: true }).exec();
  }

  async updateUserById(id: string, data: Partial<User>): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }
}
