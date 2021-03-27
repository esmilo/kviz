import { ObjectType, Field, ID } from "type-graphql";
import { getModelForClass, Prop } from "@typegoose/typegoose";

@ObjectType({ description: "Todo Model" })
export class Todo {
  @Field(() => ID)
  id: string;

  @Field()
  @Prop()
  title: string;

  @Field()
  @Prop()
  description: string;
}

export const TodoModel = getModelForClass(Todo);
