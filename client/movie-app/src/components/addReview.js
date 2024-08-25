import React, { useState } from "react";
import { ADD_REVIEW } from "../queries/queries";
import { useMutation } from "@apollo/client";
import {
  Button,
  Container,
  FormLabel,
  Input,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  // NumberDecrementStepper,
  // NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  // NumberInputStepper,
} from "@chakra-ui/react";

function AddReview() {
  const [formValues, setFormValues] = useState({
    id: "",
    movie_id: "",
    reviewer_name: "",
    content: "",
    rating: -1,
  });
  const [submitted, setSubmitted] = useState(false);
  const [addReview] = useMutation(ADD_REVIEW);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    try {
      await addReview({
        variables: {
          review: {
            content: formValues.content,
            id: formValues.id,
            movie_id: formValues.movie_id,
            rating: parseInt(formValues.rating),
            reviewer_name: formValues.reviewer_name,
          },
        },
      });
      console.log("Review added");
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 2000);
    } catch (error) {
      console.error("Error adding review: ", error.message);
    }
  };

  return (
    <Container boxShadow={"md"} p={"8"}>
      {submitted && (
        <Box mb={"4"}>
          <Alert status="success">
            <AlertIcon />
            <Box>
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>Review added successfully</AlertDescription>
            </Box>
          </Alert>
        </Box>
      )}
      <form m={"6"} onSubmit={handleSubmit}>
        <FormLabel color={"whitesmoke"}>Add your Review</FormLabel>
        <Input
          type="text"
          name="id"
          value={formValues.id}
          onChange={handleChange}
          placeholder="id"
          required
          mb={"4"}
          color={"white"}
          _placeholder={{ opacity: 0.7, color: "whitesmoke" }}
        />
        <Input
          type="text"
          name="movie_id"
          value={formValues.movie_id}
          onChange={handleChange}
          placeholder="movie_id"
          required
          mb={"4"}
          color={"white"}
          _placeholder={{ opacity: 0.7, color: "whitesmoke" }}
        />
        <Input
          type="text"
          name="reviewer_name"
          value={formValues.reviewer_name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          mb={"4"}
          color={"white"}
          _placeholder={{ opacity: 0.7, color: "whitesmoke" }}
        />
        <Input
          type="text"
          name="content"
          value={formValues.content}
          onChange={handleChange}
          placeholder="Content"
          required
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
          variant={"outline"}
          className="button-hover"
          color={"whitesmoke"}
          type="submit"
        >
          Submit Review
        </Button>
      </form>
    </Container>
  );
}

export default AddReview;
