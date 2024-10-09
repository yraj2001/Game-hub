import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  no: number;
}

const NoOfReviews = ({ no }: Props) => {
  let color = no > 500 ? "green" : no > 50 ? "yellow" : no < 51 ? "red" : " ";
  return (
    <>
      <Badge
        colorScheme={color}
        fontSize="14px"
        paddingX={2}
        borderRadius="5px"
      >
        {no}
      </Badge>
    </>
  );
};

export default NoOfReviews;
