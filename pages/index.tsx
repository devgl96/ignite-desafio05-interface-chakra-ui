import {
  Center,
  Flex,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Banner from "../components/Banner";
import OptionSection from "../components/OptionSection";
import Divider from "../components/Divider";
import Carrousel from "../components/Carrousel";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Stack maxWidth={1920} justifyContent={"center"}>
      <Banner showImage={isWideVersion} />
      <OptionSection showIcon={isWideVersion} />
      <Divider />
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        width="100%"
      >
        <Center>
          <Text
            fontSize={{ lg: "5xl", base: "xl" }}
            fontWeight="500"
            textAlign="center"
          >
            Vamos nessa? <br />
            Então escolha seu continente
          </Text>
        </Center>
      </Flex>

      <Carrousel />
    </Stack>
  );
}
