import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Text, Grid, Tooltip } from "@chakra-ui/react";
import CustomCard from "../components/CustomCard";

export default function SouthAmerica() {
  const citiesInfo = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/45917/pexels-photo-45917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      city: "São Paulo",
      country: "Brasil",
      flag: "/images/continents/cities/brazil_flag.png",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      city: "Buenos Aires",
      country: "Argentina",
      flag: "/images/continents/cities/argentina_flag.png",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      city: "Rio de Janeiro",
      country: "Brasil",
      flag: "/images/continents/cities/brazil_flag.png",
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/3696051/pexels-photo-3696051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      city: "Lima",
      country: "Peru",
      flag: "/images/continents/cities/peru_flag.png",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1651782979877-c42a879a55d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      city: "Bogotá",
      country: "Colômbia",
      flag: "/images/continents/cities/colombia_flag.png",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1566079463188-97d2f1352582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      city: "Santiago",
      country: "Chile",
      flag: "/images/continents/cities/chile_flag.png",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1587244233244-0d707dc4f765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1460&q=80",
      city: "Quito",
      country: "Equador",
      flag: "/images/continents/cities/ecuador_flag.png",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1567030955538-903aa54335d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      city: "Montevideo",
      country: "Uruguai",
      flag: "/images/continents/cities/uruguay_flag.png",
    },
  ];
  return (
    <Box mb={10}>
      <Box position={"relative"}>
        <Image
          src="https://images.unsplash.com/photo-1571422657325-63704f9273ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
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
          América do Sul
        </Text>
      </Box>

      <Flex mx={"140px"} my={"80px"}>
        <Box w={"50%"}>
          <Text fontSize={"24px"} textAlign={"justify"}>
            A América do Sul é o quarto maior continente do mundo, localizado no
            hemisfério sul. A região é conhecida por sua diversidade cultural,
            étnica e geográfica, com uma rica história que remonta a
            civilizações antigas como os incas e os astecas.
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
              12
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
              +8
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
              7.200
            </Text>
            <Text
              className={"descriptionAmount"}
              color={"#47585B"}
              fontSize={"2xl"}
              fontWeight={"600"}
            >
              cidades{" "}
              <Tooltip
                label="O Brasil, por exemplo, tem mais de 5.000 municípios, enquanto a Argentina tem mais de 2.200 municípios. Além disso, outros países sul-americanos, como Colômbia, Chile, Peru e Equador, também têm muitos municípios. "
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
          Cidades +100
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
