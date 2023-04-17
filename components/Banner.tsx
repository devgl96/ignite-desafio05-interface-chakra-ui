import { Box, Image, Text } from "@chakra-ui/react";

interface BannerProps {
  showImage: boolean;
}

export default function Banner({ showImage }: BannerProps) {
  return (
    <Box
      w="100%"
      h={{ lg: "430px", base: "200px" }}
      py={4}
      mt="0"
      position="relative"
      overflow="hidden"
    >
      <Image
        src={"/images/Background.png"}
        alt="Background Sky"
        objectFit="cover"
        position="absolute"
        zIndex="-1"
        w="100%"
        h={{ lg: "300px", base: "200px" }}
      />

      <Box
        position="absolute"
        top="18%"
        left={{ lg: "10%", base: "5%" }}
        // transform="translate(-50%, -50%)"
        width={{ lg: "500px", md: "350px", base: "300px" }}
        color="white"
      >
        <Text fontSize={{ lg: "4xl", base: "2xl" }} fontWeight="500">
          5 Continentes,
          <br /> infinitas possibilidades.
        </Text>
        <Text
          width={{ lg: "450px", base: "340px" }}
          fontSize={{ md: "lg", base: "sm" }}
          fontWeight={"400"}
          mt={"5"}
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      {showImage && (
        <Image
          src={"/images/Airplane.png"}
          alt="Airplane Icon"
          position="absolute"
          zIndex="-1"
          right="60"
          top="14"
        />
      )}
    </Box>
  );
}
