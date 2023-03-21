import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Text, Grid, Tooltip } from "@chakra-ui/react";
import CustomCard from "../components/CustomCard";

export default function Oceania() {
  const citiesInfo = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      city: "Sydney",
      country: "Austrália",
      flag: "/images/continents/cities/australia_flag.png",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1617918781812-03f1bede89e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      city: "Auckland",
      country: "Nova Zelândia",
      flag: "/images/continents/cities/new_zealand_flag.png",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1452859030887-bb96ef08d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      city: "Brisbane",
      country: "Austrália",
      flag: "/images/continents/cities/australia_flag.png",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1505642257289-9f2d7dd73641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1521&q=80",
      city: "Melbourne",
      country: "Austrália",
      flag: "/images/continents/cities/australia_flag.png",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1558482623-d1507c001b57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      city: "Wellington",
      country: "Nova Zelândia",
      flag: "/images/continents/cities/new_zealand_flag.png",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1552294784-0342648ac419?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      city: "Suva",
      country: "Fiji",
      flag: "/images/continents/cities/fiji_flag.png",
    },
  ];
  return (
    <Box mb={10}>
      <Box position={"relative"}>
        <Image
          src="https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
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
          Oceania
        </Text>
      </Box>

      <Flex mx={"140px"} my={"80px"}>
        <Box w={"50%"}>
          <Text fontSize={"24px"} textAlign={"justify"}>
            A Oceania é o menor continente do mundo em termos de área, mas é
            composto por uma ampla variedade de ilhas e arquipélagos espalhados
            pelo Oceano Pacífico. É dividido em três regiões geográficas:
            Melanésia, Micronésia e Polinésia.
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
              14
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
              1200
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
              4.000
            </Text>
            <Text
              className={"descriptionAmount"}
              color={"#47585B"}
              fontSize={"2xl"}
              fontWeight={"600"}
            >
              cidades
              <Tooltip
                label="Estima-se que existam cerca de 4.000 cidades e vilas na Austrália, que é o maior país da região em termos de área e população."
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
