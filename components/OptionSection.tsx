import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";

interface OptionSectionProps {
  showIcon: boolean;
}

export default function OptionSection({ showIcon }: OptionSectionProps) {
  return (
    <Flex
      direction={"row"}
      alignItems="center"
      justifyContent={{ lg: "space-evenly", base: "center" }}
      maxWidth={"100%"}
      mx={{ lg: "auto", base: "12" }}
      mt={{ md: "20", base: "9" }}
      flexWrap={"wrap"}
      columnGap={"3.5rem"}
      mb={"0"}
    >
      <Box>
        <Flex
          direction={{ lg: "column", base: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
          mb="7"
        >
          {showIcon ? (
            <Image src={"/images/Nightlife.svg"} alt="Nightlife logo" />
          ) : (
            <Icon viewBox="0 0 200 200" color="#ffba08">
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
          )}
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="semibold">
            vida noturna
          </Text>
        </Flex>
      </Box>
      <Box>
        <Flex
          direction={{ lg: "column", base: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
          mb="7"
        >
          {showIcon ? (
            <Image src={"/images/Beach.svg"} alt="Beach logo" />
          ) : (
            <Icon viewBox="0 0 200 200" color="#ffba08">
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
          )}
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="semibold">
            praia
          </Text>
        </Flex>
      </Box>
      <Box>
        <Flex
          direction={{ lg: "column", base: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
          mb="7"
        >
          {showIcon ? (
            <Image src={"/images/Modern.svg"} alt="Modern logo" />
          ) : (
            <Icon viewBox="0 0 200 200" color="#ffba08">
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
          )}
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="semibold">
            moderno
          </Text>
        </Flex>
      </Box>
      <Box>
        <Flex
          direction={{ lg: "column", base: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
          mb="7"
        >
          {showIcon ? (
            <Image src={"/images/Classic.svg"} alt="Classic logo" />
          ) : (
            <Icon viewBox="0 0 200 200" color="#ffba08">
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
          )}
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="semibold">
            clássico
          </Text>
        </Flex>
      </Box>
      <Box>
        <Flex
          direction={{ lg: "column", base: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
          mb="7"
        >
          {showIcon ? (
            <Image src={"/images/More.svg"} alt="And more logo" />
          ) : (
            <Icon viewBox="0 0 200 200" color="#ffba08">
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
          )}
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="semibold">
            e mais
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
