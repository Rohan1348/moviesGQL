import React from "react";
import { useQuery } from "@apollo/client";
import { GET_DIRECTORS } from "../queries/queries";
import { Box, Flex, Text } from "@chakra-ui/react";
import Loading from "./loading";

function DirectorsList() {
  const { loading, data, error } = useQuery(GET_DIRECTORS);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Text
        m={"5"}
        mb={"3"}
        fontSize={"2xl"}
        fontWeight={"500"}
        color={"whitesmoke"}
      >
        List of Directors
      </Text>
      <Flex minWidth='1000px' flexWrap={"wrap"}>
        {data.directors.map((director, i) => (
          <Box mb={"5"} mr={"3"} p={"5"} flexBasis="350px" boxShadow="md" borderRadius={"lg"} key={i}>
            <Text className="card-layout-subhead">
              {director.name}
            </Text>
            <Text className="card-layout-text">
              Nationality: {director.nationality}
            </Text>
            {/* <Text fontSize="lg" fontWeight={"170"} color={"whitesmoke"}>
              Birth Year: {director.birth_year}
            </Text> */}
            <Text className="card-layout-subhead">Movies</Text>
            {director.movies.map((movie, i) => {
              return (
                <Text key={i} className="card-layout-text">
                  {movie.title}
                </Text>
              );
            })}
          </Box>
        ))}
      </Flex>
    </div>
  );
}

export default DirectorsList;
