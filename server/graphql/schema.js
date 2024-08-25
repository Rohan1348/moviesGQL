const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Movie {
    id: String!
    title: String!
    genre: String!
    year: Int!
    duration: String!
    budget: String!
    director: Director!
    reviews: [Review!]
  }

  type Director {
    id: String!
    name: String!
    nationality: String!
    birth_year: String!
    movies: [Movie!]
  }

  type Review {
    id: String!
    rating: Int!
    content: String!
    reviewer_name: String!
    movie_id: String!
    movie: Movie!
  }

  type Query {
    movies: [Movie]
    directors: [Director]
    reviews: [Review]
    moviesByGenre(genre: String!): [Movie]
    movieByTitle(title: String!): Movie
  }

  type Mutation {
    addReview(review: AddReviewInput!): Review
    deleteReview(id: String!): Review
    updateReview(id: String!, edits: EditReviewInput): Review
  }

  input AddReviewInput {
    id: String!
    rating: Int!
    content: String!
    reviewer_name: String!
    movie_id: String!
  }

  input EditReviewInput {
    rating: Int!
  }
`;

module.exports = typeDefs;
