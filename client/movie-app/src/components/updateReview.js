import React, { useState } from "react";
import { UPDATE_REVIEW } from "../queries/queries";
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
  // NumberDecrementStepper,
  // NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  // NumberInputStepper,
} from "@chakra-ui/react";

function UpdateReview() {
  const [formValues, setFormValues] = useState({
    id: "",
    rating: -1,
  });
  const [submitted, setSubmitted] = useState(false);
  const [updateReview] = useMutation(UPDATE_REVIEW);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    try {
      await updateReview({
        variables: {
          updateReviewId: formValues.id,
          edits: {
            rating: parseInt(formValues.rating),
          },
        },
      });
      console.log("Review updated");
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 2000);
    } catch (error) {
      console.error("Error updating review: ", error.message);
    }
  };

  return (
    <Container boxShadow={"md"} p={"8"}>
      {submitted && (
        <div>
          <Alert status="info">
            <AlertIcon />
            <Box>
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>Review updated successfully</AlertDescription>
            </Box>
          </Alert>
        </div>
      )}
      <form m={"6"} onSubmit={handleSubmit}>
        <FormLabel color={"whitesmoke"}>Update your Review</FormLabel>
        <Input
          type="text"
          name="id"
          value={formValues.id}
          onChange={handleChange}
          placeholder="id"
          mb={"4"}
          color={"white"}
          _placeholder={{ opacity: 0.7, color: "whitesmoke" }}
        />
        <NumberInput mb={"4"}>
          <NumberInputField
            name="rating"
            value={formValues.rating}
            onChange={handleChange}
            placeholder="Rating"
            required
            color={"white"}
            _placeholder={{ opacity: 0.7, color: "whitesmoke" }}
          />
          {/* <NumberInputStepper color={"whitesmoke"}>
            <NumberIncrementStepper color={"whitesmoke"} />
            <NumberDecrementStepper color={"whitesmoke"} />
          </NumberInputStepper> */}
        </NumberInput>
        <Button
          mb={"4"}
          className="button-hover"
          variant={"outline"}
          color={"whitesmoke"}
          type="submit"
        >
          Update Review
        </Button>
      </form>
    </Container>
  );
}

export default UpdateReview;
