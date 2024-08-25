import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MOVIES } from "../queries/queries";
import { Box, Flex, Text } from "@chakra-ui/react";
import Loading from '../components/loading';

function MoviesList() {
  const { loading, data, error } = useQuery(GET_MOVIES);

  if (loading) return <Loading/>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Text m={"5"} mb={"3"} fontSize={"2xl"} fontWeight={"500"} color={"whitesmoke"}>List of Movies</Text>
      <Flex minWidth='1000px' flexWrap={"wrap"}>
        {data.movies.map((movie, i) => (
          // {data.moviesByGenre.map((movie, i) => (
            <Box mb={"5"} mr={"3"} p={"5"} flexBasis="350px" boxShadow="md" borderRadius={"lg"} key={i}>
              <Text className="card-layout-subhead">{movie.title}</Text>
              <Text className="card-layout-subhead">Director: {movie.director.name}</Text>
              <Text className="card-layout-text">Genre: {movie.genre}</Text>
              <Text className="card-layout-text">duration: {movie.duration}</Text>
              {/* <p>Year: {movie.year}</p>
            <p>budget: {movie.budget}</p> */}
            </Box>
        ))}
      </Flex>
    </div>
  );
}

export default MoviesList;
