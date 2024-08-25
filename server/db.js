const mongoose = require("mongoose");
// const Movie = require("./models/movie");
// const Director = require("./models/director");
// const Review = require("./models/review");
// const { movies, directors, reviews } = require("./data");

mongoose
  .connect("mongodb://127.0.0.1:27017/moviesDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connection successful");
    // Movie.insertMany(movies)
    //   .then(() => console.log("movie data inserted successfully"))
    //   .catch((err) => console.error("error inserting data: ", err));
    // Director.insertMany(directors)
    //   .then(() => console.log("director data inserted successfully"))
    //   .catch((err) => console.error("error inserting data: ", err));
    // Review.insertMany(reviews)
    //   .then(() => console.log("review data inserted successfully"))
    //   .catch((err) => console.error("error inserting data: ", err));
  })
  .catch((err) => console.error("Failed to connect to mongoDB", err));
