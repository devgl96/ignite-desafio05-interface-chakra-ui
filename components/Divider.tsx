import { Flex, Image } from "@chakra-ui/react";

export default function Divider() {
  return (
    <Flex h="150" w="100%" justifyContent="center">
      <Image src={"/images/Divider.svg"} alt="Divider element" />
    </Flex>
  );
}
