import { gql } from "@apollo/client";

const GET_MOVIES = gql`
  query Query {
    movies {
      title
      genre
      year
      duration
      budget
      director {
        name
      }
    }
  }
`;

const GET_DIRECTORS = gql`
  query Query {
    directors {
      name
      nationality
      birth_year
      movies {
        title
      }
    }
  }
`;

const GET_MOVIES_BY_GENRE = gql`
  query Query($genre: String!) {
    moviesByGenre(genre: $genre) {
      title
      genre
      year
      duration
      director {
        name
      }
    }
  }
`;

const GET_MOVIE_BY_TITLE = gql`
  query Query($title: String!) {
    movieByTitle(title: $title) {
      title
      genre
      director {
        name
      }
      duration
      budget
      year
      reviews {
        reviewer_name
        content
        rating
      }
    }
  }
`;

const ADD_REVIEW = gql`
  mutation Mutation($review: AddReviewInput!) {
    addReview(review: $review) {
      id
      movie_id
      reviewer_name
      content
      rating
    }
  }
`;

const DELETE_REVIEW = gql`
  mutation Mutation($deleteReviewId: String!) {
    deleteReview(id: $deleteReviewId) {
      reviewer_name
    }
  }
`;

const UPDATE_REVIEW = gql`
  mutation UpdateReview($updateReviewId: String!, $edits: EditReviewInput) {
    updateReview(id: $updateReviewId, edits: $edits) {
      reviewer_name
    }
  }
`;

export {
  GET_MOVIES,
  GET_DIRECTORS,
  GET_MOVIE_BY_TITLE,
  GET_MOVIES_BY_GENRE,
  ADD_REVIEW,
  DELETE_REVIEW,
  UPDATE_REVIEW
};
