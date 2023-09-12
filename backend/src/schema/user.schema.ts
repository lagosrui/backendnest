import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {

  @Prop({default: "User0x$$$" })
  usermane: string;

  @Prop({ required: true, unique: true })
  wallet: string;

  @Prop({ default: "example2@IsEmail.com", unique: false })
  email: string;

  @Prop({default: "Create Description" })
  description: string;

  @Prop({default: "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Transparent-Image.png" })
  image: string;

  @Prop({ default: [] })
  transactionsHash: string[];

  @Prop({ default: false })
  KYC: boolean;

  @Prop({ default: Date.now })
  registrationDate: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);