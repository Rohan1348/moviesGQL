import React, { useState } from "react";
import { DELETE_REVIEW } from "../queries/queries";
import { useMutation } from "@apollo/client";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Container,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function DeleteReview() {
  const [formId, setFormId] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [deleteReview] = useMutation(DELETE_REVIEW);

  const handleChange = (e) => {
    setFormId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formId);
    try {
      await deleteReview({
        variables: {
          deleteReviewId: formId,
        },
      });
      console.log("Review deleted");
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 2000);
    } catch (error) {
      console.error("Error deleting review: ", error.message);
    }
  };

  return (
    <Container boxShadow={"md"} p={"8"}>
      {submitted && (
        <div>
          <Alert status="error">
            <AlertIcon />
            <Box>
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>Review deleted successfully</AlertDescription>
            </Box>
          </Alert>
        </div>
      )}
      <form m={"6"} onSubmit={handleSubmit}>
        <FormLabel color={"whitesmoke"}>Delete your Review</FormLabel>
        <Input
          type="text"
          name="id"
          value={formId}
          onChange={handleChange}
          placeholder="id"
          required
          mb={"4"}
          color={"white"}
          _placeholder={{ opacity: 0.7, color: "whitesmoke" }}
        />
        <Button
          mb={"4"}
          className="button-hover"
          variant={"outline"}
          color={"whitesmoke"}
          type="submit"
        >
          Delete Review
        </Button>
      </form>
    </Container>
  );
}

export default DeleteReview;
