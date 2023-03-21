import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Text, Grid, Tooltip } from "@chakra-ui/react";
import CustomCard from "../components/CustomCard";

export default function Asia() {
  const citiesInfo = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80",
      city: "Tóquio",
      country: "Japão",
      flag: "/images/continents/cities/japan_flag.png",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      city: "Pequim",
      country: "China",
      flag: "/images/continents/cities/china_flag.png",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1531169628939-e84f860fa5d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      city: "Bangkok",
      country: "Tailândia",
      flag: "/images/continents/cities/thailand_flag.png",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
      city: "Hong Kong",
      country: "China",
      flag: "/images/continents/cities/china_flag.png",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      city: "Dubai",
      country: "Emirados Árabes Unidos",
      flag: "/images/continents/cities/united_arab_emirates_flag.png",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1573132223210-d65883b944aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80",
      city: "Mumbai",
      country: "Índia",
      flag: "/images/continents/cities/india_flag.png",
    },
  ];
  return (
    <Box mb={10}>
      <Box position={"relative"}>
        <Image
          src="https://images.unsplash.com/photo-1535139262971-c51845709a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
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
          Ásia
        </Text>
      </Box>

      <Flex mx={"140px"} my={"80px"}>
        <Box w={"50%"}>
          <Text fontSize={"24px"} textAlign={"justify"}>
            O continente asiático é o maior continente do mundo em termos de
            área e população. É cercado por três oceanos: o Oceano Pacífico, o
            Oceano Índico e o Ártico. A Ásia é o lar de uma grande diversidade
            de culturas, etnias, religiões e línguas.
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
              49
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
              2.300
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
              10.000
            </Text>
            <Text
              className={"descriptionAmount"}
              color={"#47585B"}
              fontSize={"2xl"}
              fontWeight={"600"}
            >
              cidades{" "}
              <Tooltip
                label="Algumas fontes afirmam que existem cerca de 24.000 cidades na Ásia, enquanto outras estimam em torno de 10.000."
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
          Cidades +10.000
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
