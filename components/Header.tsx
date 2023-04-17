import { useRouter } from "next/router";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  const router = useRouter();

  return (
    <Flex alignItems="center" justifyContent="center" h="20" w="100%">
      <Box position={"absolute"} left={{ lg: "200", base: "5" }}>
        {router.pathname !== "/" && (
          <Link href="/" legacyBehavior>
            <a>
              <ChevronLeftIcon fontSize={30} />
            </a>
          </Link>
        )}
      </Box>
      <Image src={"/images/Logo.svg"} alt="World Trip Logo" />
    </Flex>
  );
}
