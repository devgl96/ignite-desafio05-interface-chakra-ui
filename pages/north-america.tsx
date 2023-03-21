import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Text, Grid, Tooltip } from "@chakra-ui/react";
import CustomCard from "../components/CustomCard";

export default function NorthAmerica() {
  const citiesInfo = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      city: "Nova York",
      country: "Estados Unidos",
      flag: "/images/continents/cities/united_states_flag.png",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1429554429301-1c7d5ae2d42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      city: "Los Angeles",
      country: "Estados Unidos",
      flag: "/images/continents/cities/united_states_flag.png",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244&q=80",
      city: "Chicago",
      country: "Estados Unidos",
      flag: "/images/continents/cities/united_states_flag.png",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1507992781348-310259076fe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      city: "Toronto",
      country: "Canadá",
      flag: "/images/continents/cities/canada_flag.png",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1493794179168-82ca7cb00437?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      city: "Cidade do México",
      country: "México",
      flag: "/images/continents/cities/mexico_flag.png",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1559510904-60bd53ecb973?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1537&q=80",
      city: "Vancouver",
      country: "Canadá",
      flag: "/images/continents/cities/canada_flag.png",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1589083130544-0d6a2926e519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      city: "Miami",
      country: "Estados Unidos",
      flag: "/images/continents/cities/united_states_flag.png",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1575540576545-3db8561c29e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1451&q=80",
      city: "Montreal",
      country: "Canadá",
      flag: "/images/continents/cities/canada_flag.png",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1550109161-7262e652bf82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      city: "Las Vegas",
      country: "Estados Unidos",
      flag: "/images/continents/cities/united_states_flag.png",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      city: "San Francisco",
      country: "Estados Unidos",
      flag: "/images/continents/cities/united_states_flag.png",
    },
  ];
  return (
    <Box mb={10}>
      <Box position={"relative"}>
        <Image
          src="https://images.unsplash.com/photo-1516141535911-e3b982713e61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          w="100%"
          h={"500px"}
          fit={"cover"}
        />
        <Text
          position={"absolute"}
          left={32}
          bottom={16}
          fontSize={50}
          fontWeight={"bold"}
          color={"#FFF"}
        >
          América do Norte
        </Text>
      </Box>

      <Flex mx={"140px"} my={"80px"}>
        <Box w={"50%"}>
          <Text fontSize={"24px"} textAlign={"justify"}>
            A América do Norte é um continente localizado no hemisfério norte do
            planeta Terra, limitado a norte pelo Oceano Ártico, a leste pelo
            Oceano Atlântico, a sul pelo Golfo do México e pelo Mar do Caribe, e
            a oeste pelo Oceano Pacífico.
          </Text>
        </Box>
        <Flex w={"50%"} gap={10} alignItems="center" justifyContent="center">
          <Box textAlign="center">
            <Text
              className={"amount"}
              color={"#FFBA08"}
              fontSize={"4xl"}
              fontWeight={"600"}
            >
              3
            </Text>
            <Text
              className={"descriptionAmount"}
              color={"#47585B"}
              fontSize={"2xl"}
              fontWeight={"600"}
            >
              países
            </Text>
          </Box>
          <Box textAlign="center">
            <Text
              className={"amount"}
              color={"#FFBA08"}
              fontSize={"4xl"}
              fontWeight={"600"}
            >
              6
            </Text>
            <Text
              className={"descriptionAmount"}
              color={"#47585B"}
              fontSize={"2xl"}
              fontWeight={"600"}
            >
              línguas
            </Text>
          </Box>
          <Box textAlign="center">
            <Text
              className={"amount"}
              color={"#FFBA08"}
              fontSize={"4xl"}
              fontWeight={"600"}
            >
              20.000
            </Text>
            <Text
              className={"descriptionAmount"}
              color={"#47585B"}
              fontSize={"2xl"}
              fontWeight={"600"}
            >
              cidades
              <Tooltip
                label="Nos Estados Unidos, por exemplo, existem mais de 19.000 cidades e vilas. No Canadá, há mais de 5.000 municípios, e no México há mais de 2.400 municípios"
                fontSize="md"
              >
                <InfoOutlineIcon fontSize={12} color={"#999999"} />
              </Tooltip>
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Box mx={"140px"}>
        <Text left={32} bottom={16} fontSize={30} fontWeight={"500"} my={16}>
          Cidades
        </Text>

        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {citiesInfo.map((info) => (
            <CustomCard key={info.id} {...info} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
