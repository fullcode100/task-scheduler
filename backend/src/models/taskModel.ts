import mongoose, { Schema, Document } from "mongoose";

export interface ITask extends Document {
  name: string;
  cronExpression?: string;
  executeAt?: Date;
  executed: boolean;
  recurring: boolean;
}

const TaskSchema: Schema = new Schema({
  name: { type: String, required: true },
  cronExpression: { type: String },
  executeAt: { type: Date },
  executed: { type: Boolean, default: false },
  recurring: { type: Boolean, default: false },
});

export default mongoose.model<ITask>("Task", TaskSchema);
