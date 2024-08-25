import React, { useState } from "react";
import "./App.css";
import MoviesList from "./components/moviesList";
import AddReview from "./components/addReview";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Input,
} from "@chakra-ui/react";
import DirectorsList from "./components/directorsList";
import GetMovieByTitle from "./components/getMovieByTitle";
import GetMoviesByGenre from "./components/getMoviesByGenre";
import DeleteReview from "./components/deleteReview";
import UpdateReview from "./components/updateReview";

function App() {
  const [showListMovie, setShowListMovie] = useState(false);
  const [showListDirector, setShowListDirector] = useState(false);
  const [showListMovieByTitle, setShowListMovieByTitle] = useState(false);
  const [showListMoviesByGenre, setShowListMoviesByGenre] = useState(false);
  const [titleEntered, setTitleEntered] = useState("");
  const [genreEntered, setGenreEntered] = useState("");

  const handleClickMovie = () => {
    setShowListMovie(!showListMovie);
    showListDirector && setShowListDirector(false);
    showListMovieByTitle && setShowListMovieByTitle(false);
    showListMoviesByGenre && setShowListMoviesByGenre(false);
  };

  const handleClickDirector = () => {
    setShowListDirector(!showListDirector);
    showListMovie && setShowListMovie(false);
    showListMovieByTitle && setShowListMovieByTitle(false);
    showListMoviesByGenre && setShowListMoviesByGenre(false);
  };

  const handleTitleChange = (e) => {
    setTitleEntered(e.target.value);
  };

  const handleClickMovieByTitle = (e) => {
    e.preventDefault();
    setShowListMovieByTitle(!showListMovieByTitle);
    showListMovie && setShowListMovie(false);
    showListDirector && setShowListDirector(false);
    showListMoviesByGenre && setShowListMoviesByGenre(false);
  };

  const handleGenreChange = (e) => {
    setGenreEntered(e.target.value);
  };

  const handleClickMoviesByGenre = (e) => {
    e.preventDefault();
    setShowListMoviesByGenre(!showListMoviesByGenre);
    showListMovie && setShowListMovie(false);
    showListDirector && setShowListDirector(false);
    showListMovieByTitle && setShowListMovieByTitle(false);
  };

  return (
    <div className="container">
      <Center>
        <Heading color={"White"} m={"10"}>
          Movies Application
        </Heading>
      </Center>
      <Flex boxShadow={"md"} mb={"2"} pb={"3"} direction={"column"}>
        <Container>
          <Button m={"3"} onClick={handleClickMovie}>
            Movies List
          </Button>
          <Button m={"3"} onClick={handleClickDirector}>
            Directors List
          </Button>
          <form onSubmit={handleClickMovieByTitle}>
            <Box>
              <Input
                type="text"
                name="title_entered"
                placeholder="Enter the movie Title"
                value={titleEntered}
                onChange={handleTitleChange}
                required
                w={"94%"}
                m={"3"}
                mb={"1"}
                color={"white"}
                _placeholder={{ opacity: 0.7, color: 'whitesmoke' }}
              />
              <Button m={"3"} type="submit">
                Movie By Title
              </Button>
            </Box>
          </form>
          <form onSubmit={handleClickMoviesByGenre}>
            <Box>
              <Input
                type="text"
                name="genre_entered"
                placeholder="Enter the movies Genre"
                value={genreEntered}
                onChange={handleGenreChange}
                required
                w={"94%"}
                m={"3"}
                mb={"1"}
                color={"white"}
                _placeholder={{ opacity: 0.7, color: 'whitesmoke' }}
              />
              <Button m={"3"} type="submit">
                Movies By Genre
              </Button>
            </Box>
          </form>
        </Container>
      </Flex>
      {showListMovie && <MoviesList />}
      {showListDirector && <DirectorsList />}
      {showListMovieByTitle && <GetMovieByTitle movie_entered={titleEntered} />}
      {showListMoviesByGenre && <GetMoviesByGenre genre_entered={genreEntered}/>}
      <AddReview />
      <DeleteReview />
      <UpdateReview /> 
    </div>
  );
}

export default App;
