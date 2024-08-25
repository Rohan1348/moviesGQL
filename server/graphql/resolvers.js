const Movie = require("../models/movie");
const Director = require("../models/director");
const Review = require("../models/review");

const resolvers = {
  Query: {
    movies: async () => {
      try {
        return await Movie.find();
      } catch (error) {
        throw new Error("OOps.. failed to fetch the movies..");
      }
    },
    directors: async () => {
      try {
        return await Director.find();
      } catch (error) {
        throw new Error("OOps.. failed to fetch the movies..");
      }
    },
    reviews: async () => {
      try {
        return await Review.find();
      } catch (error) {
        throw new Error("OOps.. failed to fetch the movies..");
      }
    },
    moviesByGenre: async (_, { genre }) => {
      try {
        return await Movie.find({ genre });
      } catch (error) {
        throw new Error("OOps.. failed to fetch the movies by genre");
      }
    },
    movieByTitle: async (_, { title }) => {
      try {
        const response = await Movie.findOne({ title });
        // console.log(response);
        return response;
      } catch (error) {
        throw new Error("OOps.. failed to fetch the movies by genre");
      }
    },
  },
  Movie: {
    reviews: async (parent) => {
      try {
        return Review.find({movie_id: parent.id})
      } catch (error) {
        throw new Error("OOps.. failed to fetch");
      }
    },
    director: async (parent) => {
      try {
        return Director.findOne({id: parent.director_id})
      } catch (error) {
        throw new Error("OOps.. failed to fetch");
      }
    }
  },
  Director: {
    movies: async (parent) => {
      try {
        return Movie.find({director_id: parent.id})
      } catch (error) {
        throw new Error("OOps.. failed to fetch");
      }
    }
  },
  Review: {
    movie: async (parent) => {
      try {
        return Movie.findOne({id: parent.movie_id})
      } catch (error) {
        throw new Error("OOps.. failed to fetch");
      }
    }
  },
  Mutation: {
    addReview: async (_, {review}) => {
      let newReview = new Review(review);
      return await newReview.save();
    },
    deleteReview: async (_, {id}) => {
      const deletedReview = await Review.findOneAndDelete({id});
      return deletedReview;
    },
    updateReview: async (_, {id, edits}) => {
      const updatedReview = await Review.findOneAndUpdate({id}, edits, {new: true})
      // return await Review.findOne({id: id});
      return updatedReview;
    }
  }
};

module.exports = resolvers;
