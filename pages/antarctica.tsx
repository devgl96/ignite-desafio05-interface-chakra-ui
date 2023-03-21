import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Text, Grid, Tooltip } from "@chakra-ui/react";
import CustomCard from "../components/CustomCard";

export default function Antarctica() {
  const citiesInfo = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1562743227-dbfb8875c61b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
      city: "Estação Palmer",
      country: "Estados Unidos",
      flag: "/images/continents/cities/united_states_flag.png",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1561378552-1a7f6f193840?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      city: "Estação Amundsen-Scott",
      country: "Estados Unidos",
      flag: "/images/continents/cities/united_states_flag.png",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1562743338-51caec0b0e65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
      city: "Estação Concordia",
      country: "Itália",
      flag: "/images/continents/cities/italy_flag.png",
    },
  ];

  return (
    <Box mb={10}>
      <Box position={"relative"}>
        <Image
          src="https://images.pexels.com/photos/53389/iceberg-antarctica-polar-blue-53389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
          Antarctica
        </Text>
      </Box>

      <Flex mx={"140px"} my={"80px"}>
        <Box w={"50%"}>
          <Text fontSize={"24px"} textAlign={"justify"}>
            A Antártida é um continente localizado no polo sul da Terra, com uma
            área total de cerca de 14 milhões de quilômetros quadrados. É
            cercada pelo Oceano Austral e é o quinto maior continente do mundo
            em termos de área. A Antártida é conhecida por seu clima
            extremamente frio e seco, com temperaturas que podem chegar a -80°C
            no inverno.
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
              70
            </Text>
            <Text
              className={"descriptionAmount"}
              color={"#47585B"}
              fontSize={"2xl"}
              fontWeight={"600"}
            >
              estações
            </Text>
          </Box>
          <Box textAlign="center">
            <Text
              className={"amount"}
              color={"#FFBA08"}
              fontSize={"4xl"}
              fontWeight={"600"}
            >
              30
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
              +4
            </Text>
            <Text
              className={"descriptionAmount"}
              color={"#47585B"}
              fontSize={"2xl"}
              fontWeight={"600"}
            >
              áreas de estudos{" "}
              <Tooltip
                label="Incluindo biologia, geologia, climatologia e oceanografia, entre outros"
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
          Estações científicas
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
