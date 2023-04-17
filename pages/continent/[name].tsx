import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Text, Grid, Tooltip } from "@chakra-ui/react";
import CustomCard from "../../components/CustomCard";

interface CityProps {
  id: number;
  url: string;
  city: string;
  country: string;
  flag: string;
}

interface ContinentProps {
  continent: string;
  continentImageURL: string;
  cities: CityProps[];
  continentName: string;
  continentDescription: string;
  amountCountries: number;
  amountLanguages: number;
  amountCities: number;
  labelTooltip: string;
}

export default function Continent() {
  const [continentInfo, setContinentInfo] = useState<ContinentProps>();
  const [cities, setCities] = useState<CityProps[]>([]);
  const router = useRouter();
  const { name } = router.query;

  useEffect(() => {
    getInfo();
  }, [name]);

  async function getInfo() {
    const response = await fetch(
      `http://localhost:3333/data?continent=${name}`
    ).then((response) => response.json());

    if (response) {
      setContinentInfo(response[0]);
      setCities(response[0].cities);
    }
  }

  function formatNumber(amountNumber: number) {
    const formatting = new Intl.NumberFormat("pt-BR").format(amountNumber);

    return formatting;
  }

  if (!continentInfo)
    return (
      <Image
        src={"https://media.tenor.com/qsdblRVNZysAAAAM/flying-airplane.gif"}
        mx="auto"
      />
    );

  return (
    <Box mb={10}>
      <Box position={"relative"} w={"100%"}>
        <Image
          src={continentInfo.continentImageURL}
          h={{ lg: "500px", base: "200px" }}
          fit={"cover"}
          w={"100%"}
        />
        <Text
          position={"absolute"}
          right={0}
          left={{ lg: 32, base: "20%" }}
          bottom={16}
          top={16}
          fontSize={{ lg: 50, base: 30 }}
          fontWeight={"bold"}
          color={"#FFF"}
        >
          {continentInfo.continentName}
        </Text>
      </Box>

      <Flex
        justifyContent={"center"}
        my={{ lg: "80px", base: "20px" }}
        width={"100%"}
        flexDirection={{ lg: "row", base: "column" }}
      >
        <Box w={{ lg: "50%", base: "100%" }}>
          <Text
            fontSize={{ lg: "24px", base: "20px" }}
            textAlign={"justify"}
            mx={{ lg: 0, base: "12px" }}
          >
            {continentInfo.continentDescription}
          </Text>
        </Box>
        <Flex
          w={{ lg: "50%", base: "100%" }}
          gap={10}
          alignItems="center"
          justifyContent="center"
        >
          <Box textAlign="center">
            <Text
              className={"amount"}
              color={"#FFBA08"}
              fontSize={"4xl"}
              fontWeight={"600"}
            >
              {continentInfo.amountCountries}
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
              {formatNumber(continentInfo.amountLanguages)}
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
              {formatNumber(continentInfo.amountCities)}
            </Text>
            <Text
              className={"descriptionAmount"}
              color={"#47585B"}
              fontSize={"2xl"}
              fontWeight={"600"}
            >
              cidades{" "}
              <Tooltip label={continentInfo.labelTooltip} fontSize="md">
                <InfoOutlineIcon fontSize={12} color={"#999999"} />
              </Tooltip>
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Box mx={{ lg: "80px", base: "10px" }}>
        <Text
          left={32}
          bottom={16}
          fontSize={30}
          fontWeight={"500"}
          my={{ lg: 16, base: 4 }}
        >
          Cidades +100
        </Text>

        <Grid
          templateColumns={{ lg: "repeat(4, 1fr)", base: "repeat(1, 1fr)" }}
          gap={6}
          mx={{ lg: 0, base: "15%" }}
        >
          {cities.map((info) => (
            <CustomCard key={info.id} {...info} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
