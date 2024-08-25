const express = require("express");
const db = require("./db");
const { ApolloServer } = require("apollo-server-express");
// const { startStandaloneServer } = require('@apollo/server/standalone')
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

PORT = 4000;

const app = express();

// let apolloServer = {
//     graphqlPath: ""
// }

// const authenticate = (token) => {
//   try {
//       const user = jwt.verify(token, "123ABC456XYZ");
//       return user;
//   } catch (error) {
//       throw new AuthenticationError("token invalid / expired");
//   }
// };

// async function startServer() {
//   const apolloServer = new ApolloServer({
//       typeDefs,
//       resolvers,
//       context: ({ req }) => {
//           const token = req.headers.authorization || "";
//           const user = authenticate(token.replace("Bearer", ""));
//           return { user };
//       },
//   });
//   await apolloServer.start();
//   apolloServer.applyMiddleware({ app, path: "/graphql" });
// }
// startServer();

async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/graphql" });
}
startServer();

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
  console.log(`🛰️ gql path is http://localhost:4000${apolloServer.graphqlPath}`);
});
