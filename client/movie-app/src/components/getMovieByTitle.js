import React from "react";
import { GET_MOVIE_BY_TITLE } from "../queries/queries";
import { useQuery } from "@apollo/client";
import { Box, Stack, Text } from "@chakra-ui/react";
import Loading from "./loading";

function GetMovieByTitle({movie_entered}) {
  const { loading, data, error } = useQuery(GET_MOVIE_BY_TITLE, {
    variables: { title: movie_entered },
  });

  if (loading) return <Loading/>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Text m={"5"} mb={"3"} fontSize={"2xl"} fontWeight={"500"} color={"whitesmoke"}>Movie By Title: {movie_entered}</Text>
      <Stack spacing={"1"}>
          <Box m={"5"}>
            <Text fontSize="xl" fontWeight={"450"} color={"whitesmoke"}>
              {data.movieByTitle.title}
            </Text>
            <Text fontSize="lg" fontWeight={"170"} color={"whitesmoke"}>
              Director: {data.movieByTitle.director.name}
            </Text>
            <Text fontSize="lg" fontWeight={"170"} color={"whitesmoke"}>
              Genre: {data.movieByTitle.genre}
            </Text>
            <Text fontSize="lg" fontWeight={"170"} color={"whitesmoke"}>
              Year: {data.movieByTitle.year}
            </Text>
            <Text fontSize="lg" fontWeight={"170"} color={"whitesmoke"}>
              Duration: {data.movieByTitle.duration}
            </Text>
            <Text fontSize="lg" fontWeight={"170"} color={"whitesmoke"}>
              Budget: {data.movieByTitle.budget}
            </Text>
            <Text mt={"7"} fontSize="xl" fontWeight={"450"} color={"whitesmoke"}>Reviews</Text>
            {data.movieByTitle.reviews.map((review, i) => {
              return (
                <Box key={i} mt={"3"}>
                  <Text fontSize="lg" fontWeight={"170"} color={"whitesmoke"}>{review.reviewer_name}</Text>
                  <Text fontSize="lg" fontWeight={"170"} color={"whitesmoke"}>{review.content}</Text>
                  <Text fontSize="lg" fontWeight={"170"} color={"whitesmoke"}>Rating: {review.rating}</Text>
                </Box>
              );
            })}
          </Box>
      </Stack>
    </div>
  );
}

export default GetMovieByTitle;
