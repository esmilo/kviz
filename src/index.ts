import "reflect-metadata";
import "dotenv-safe/config";
import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { TodoResolver } from "./resolvers/todo";
import { connect } from "mongoose";

const server = async () => {
  const mongoose = await connect("mongodb://localhost:27017/kviz", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await mongoose.connect;

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [TodoResolver],
      validate: false,
    }),
  });

  const app = express();
  const PORT = parseInt(process.env.PORT);

  app.use(cors());

  apolloServer.applyMiddleware({
    app,
  });

  app.listen(PORT, () => console.log("Listening on port: ", PORT));
};

server().catch((err) => {
  console.error(err);
});
