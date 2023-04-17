import { Flex, Image } from "@chakra-ui/react";

export default function Divider() {
  return (
    <Flex
      h={{ lg: "150", base: "30" }}
      w="100%"
      justifyContent="center"
      mt={{ lg: "1rem", base: "-1.5rem" }}
    >
      <Image src={"/images/Divider.svg"} alt="Divider element" />
    </Flex>
  );
}
