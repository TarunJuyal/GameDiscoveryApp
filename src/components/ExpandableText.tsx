import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = children.substring(0, limit);

  return (
    <Text marginBottom={2}>
      {!isExpanded ? `${summary}...` : children}
      <Button
        marginLeft={2}
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!isExpanded)}
      >
        {isExpanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
