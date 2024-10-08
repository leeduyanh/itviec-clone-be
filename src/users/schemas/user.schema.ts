import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop()
  name: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop()
  age: number;
  @Prop()
  gender: string;
  @Prop()
  address: string;
  @Prop()
  role: string;
  @Prop()
  refresh_token: string;

  // Timestamp
  @Prop()
  createdAt: Date;
  @Prop()
  updatedAt: Date;

  // Soft-delete
  @Prop()
  isDeleted: boolean;
  @Prop()
  deletedAt: Date;

  // Reference
  @Prop({ type: Object })
  company: {
    _id: mongoose.Schema.Types.ObjectId;
    name: string;
  };
  @Prop({ type: Object })
  createdBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };
  @Prop({ type: Object })
  updatedBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };
  @Prop({ type: Object })
  deletedBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };
}

export const UserSchema = SchemaFactory.createForClass(User);
