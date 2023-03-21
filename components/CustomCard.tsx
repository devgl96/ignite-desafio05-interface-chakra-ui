import { Box, Image, Text } from "@chakra-ui/react";

interface CustomCardProps {
  id?: number;
  url: string;
  city: string;
  country: string;
  flag: string;
}

export default function CustomCard(props: CustomCardProps) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      borderColor="yellow.500" // Set the border color here
      width={"256px"}
      height={"279px"}
    >
      <Image src={props.url} alt={props.city} height={"173px"} />

      <Box p="6" position={"relative"}>
        <Box
          borderRadius={"full"}
          backgroundColor="#000"
          width={30}
          height={30}
          position={"absolute"}
          right={5}
          top={12}
        >
          <Image src={props.flag} />
        </Box>
        <Text mt="1" fontWeight="bold" as="h4" lineHeight="tight" isTruncated>
          {props.city}
        </Text>

        <Text mt="2" color="gray.500">
          {props.country}
        </Text>
      </Box>
    </Box>
  );
}
