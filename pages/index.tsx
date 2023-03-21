import { Center, Flex, Stack, Text } from "@chakra-ui/react";
import Banner from "../components/Banner";
import OptionSection from "../components/OptionSection";
import Divider from "../components/Divider";
import Carrousel from "../components/Carrousel";

export default function Home() {
  return (
    <Stack>
      <Banner />
      <OptionSection />
      <Divider />
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        width="100%"
      >
        <Center>
          <Text fontSize="5xl">
            Vamos nessa? <br />
            Então escolha seu continente
          </Text>
        </Center>
      </Flex>

      <Carrousel />
    </Stack>
  );
}
