import React from "react";
import { GET_MOVIES_BY_GENRE } from "../queries/queries";
import { useQuery } from "@apollo/client";
import { Box, Stack, Text } from "@chakra-ui/react";
import Loading from "./loading";

function GetMoviesByGenre({genre_entered}) {
  const { loading, data, error } = useQuery(GET_MOVIES_BY_GENRE, {
    variables: { genre: genre_entered },
  });

  if (loading) return <Loading/>;
  if (error) return <p>Error: {error.message}</p>;

  return <div>
    <Text m={"5"} mb={"3"} fontSize={"2xl"} fontWeight={"500"} color={"whitesmoke"}>Movies By {genre_entered} Genre</Text>
    <Stack spacing={"1"}>
          {data.moviesByGenre.map((movie, i) => (
            <Box m={"5"} key={i}>
              <Text fontSize="xl" fontWeight={"450"} color={"whitesmoke"}>{movie.title}</Text>
              {/* <Text fontSize="lg" fontWeight={"170"} color={"whitesmoke"}>Genre: {movie.genre}</Text> */}
              <Text fontSize="lg" fontWeight={"170"} color={"whitesmoke"}>Director: {movie.director.name}</Text>
              <Text fontSize="lg" fontWeight={"170"} color={"whitesmoke"}>Year: {movie.year}</Text>
            </Box>
        ))}
      </Stack>
  </div>;
}

export default GetMoviesByGenre;
