import { Flex, Image } from "@chakra-ui/react";

export default function OptionSection() {
  return (
    <Flex
      direction={"row"}
      alignItems="center"
      justifyContent="space-evenly"
      w="100%"
    >
      <Image src={"/images/Nightlife.svg"} alt="Nightlife logo" />
      <Image src={"/images/Beach.svg"} alt="Beach logo" />
      <Image src={"/images/Modern.svg"} alt="Modern logo" />
      <Image src={"/images/Classic.svg"} alt="Classic logo" />
      <Image src={"/images/More.svg"} alt="And more logo" />
    </Flex>
  );
}
