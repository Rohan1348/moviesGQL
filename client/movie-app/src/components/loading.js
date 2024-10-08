import { Box, Spinner } from "@chakra-ui/react";
import React from "react";

function Loading() {
  return (
    <div>
      <Box m={10}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Box>
    </div>
  );
}

export default Loading;
