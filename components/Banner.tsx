import { Box, Image, Text } from "@chakra-ui/react";

export default function Banner() {
  return (
    <Box w="100%" h="430px" py={4} mt="0" position="relative">
      <Image
        src={"/images/Background.png"}
        alt="Background Sky"
        objectFit="cover"
        position="absolute"
        zIndex="-1"
        w="100%"
        h="300px"
      />

      <Box
        position="absolute"
        top="18%"
        left="10%"
        // transform="translate(-50%, -50%)"
        width="500px"
        color="white"
      >
        <Text fontSize="4xl" fontWeight="500">
          5 Continentes,
          <br /> infinitas possibilidades.
        </Text>
        <Text width="450px">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      <Image
        src={"/images/Airplane.png"}
        alt="Airplane Icon"
        position="absolute"
        zIndex="-1"
        right="60"
        top="14"
      />
    </Box>
  );
}
