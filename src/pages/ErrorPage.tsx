import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";
import { BsEmojiDizzy } from "react-icons/bs";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <Box padding={10}>
        <Heading fontSize="8vw" marginBottom={2}>
          Oops
        </Heading>
        <HStack fontSize="3vw">
          <Text>
            {isRouteErrorResponse(error)
              ? "This Page Does Not Exist."
              : "An Unexpected Error Occured."}
          </Text>
          <BsEmojiDizzy />
        </HStack>
      </Box>
    </>
  );
};

export default ErrorPage;
