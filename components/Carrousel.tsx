import { Box, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function Carrousel() {
  const slides = [
    {
      id: 1,
      src: "/images/continents/africa.jpg",
      alt: "Africa Continent",
      title: "AFRICA",
      subTitle: "A maior diversidade genética humana do mundo",
      link: "africa",
    },
    {
      id: 2,
      src: "/images/continents/antarctica.jpg",
      alt: "Antarctica Continent",
      title: "ANTARCTICA",
      subTitle: "O continente mais frio e mais ventoso do mundo",
      link: "antarctica",
    },
    {
      id: 3,
      src: "/images/continents/asia.jpg",
      alt: "Asia Continent",
      title: "ASIA",
      subTitle: "O maior continente do mundo",
      link: "asia",
    },
    {
      id: 4,
      src: "/images/continents/oceania.jpg",
      alt: "Oceania Continent",
      title: "OCEANIA",
      subTitle: "O continente que é nação",
      link: "oceania",
    },
    {
      id: 5,
      src: "/images/continents/europe.jpg",
      alt: "Europe Continent",
      title: "EUROPA",
      subTitle: "O continente mais antigo do mundo",
      link: "europe",
    },
    {
      id: 6,
      src: "/images/continents/north-america.jpg",
      alt: "North America Continent",
      title: "AMÉRICA DO NORTE",
      subTitle: "O terceiro maior continente do mundo",
      link: "north-america",
    },
    {
      id: 7,
      src: "/images/continents/south-america.jpg",
      alt: "South America Continent",
      title: "AMÉRICA DO SUL",
      subTitle: "O continente da maior floresta tropical do mundo",
      link: "south-america",
    },
  ];

  return (
    <Box
      position="relative"
      w={{ lg: "100%", base: "100vw" }}
      h={{ lg: "70vh", base: "100vh" }}
      px={{ lg: "100", base: 0 }}
      mt="20"
    >
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="mySwiper"
        height={5}
      >
        {slides.map((image) => (
          <SwiperSlide key={image.id}>
            <Link
              href={`/continent/${image.link}`}
              id="continent_image"
              legacyBehavior
            >
              <a>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  position="absolute"
                  textAlign={"center"}
                  right={0}
                  left={0}
                  top={0}
                  bottom={0}
                  color={"#FFF"}
                >
                  <Text
                    fontSize={{ lg: "6xl", base: "2xl" }}
                    fontWeight={"bold"}
                  >
                    {image.title}
                  </Text>
                  <Text fontSize={{ lg: "xl", base: "sm" }} fontWeight={"bold"}>
                    {image.subTitle}
                  </Text>
                </Box>
                <Box>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    w={{ lg: "100%", base: "100vw" }}
                    h={{ lg: "100%", base: "100vh" }}
                  />
                </Box>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
