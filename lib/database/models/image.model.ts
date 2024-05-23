import { Schema, model, models } from "mongoose";


export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string;
  width?: number;
  height?: number;
  config?: Record<string, any>;
  transformationUrl?: string;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author: {
    _id:string;
    firstName:string;
    lastName:string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const ImageSchema = new Schema({
  title: { type: String},
  transformationType: { type: String},
  publicld: { type: String },
  secureUrl: { type: String },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: String },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Image = models?.image || model("Image", ImageSchema);

export default Image;
