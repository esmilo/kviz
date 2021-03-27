import { Arg, Field, InputType, Mutation, Query } from "type-graphql";
import { TodoModel, Todo } from "../entities/Todo";

@InputType()
class TodoInput implements Partial<Todo> {
  @Field()
  title: string;

  @Field()
  description: string;
}

export class TodoResolver {
  @Query(() => [Todo])
  async todos(): Promise<Todo[]> {
    return await TodoModel.find();
  }

  @Mutation(() => Todo)
  async createTodo(@Arg("opt") opt: TodoInput) {
    const todo = await TodoModel.create(opt);
    return todo;
  }
}
