import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CompanyDocument = HydratedDocument<Company>;

@Schema({ timestamps: true })
export class Company {
  // Dto
  @Prop()
  name: string;
  @Prop()
  address: string;
  @Prop()
  description: string;

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

  // Reference to User
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

export const UserSchema = SchemaFactory.createForClass(Company);
