import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { Box, Container, Typography } from "@mui/material";
import { CustomCTAButton } from "./CustomCTAButton";

import cardMock from "../assets/card-mock.png";

interface HeroSectionProps {
  type?: "internal";
}

export default function HeroSection({ type }: HeroSectionProps) {
  const router = useRouter();

  const internal = type === "internal";

  return (
    <>
      <Box component="header" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100vw', height: internal ? '35vh' : '50vh', position: internal ? 'fixed' : 'relative', left: 0, backdropFilter: 'blur(20px)', py: 2 }}>
        <nav className="menu">
          <Link href="/" prefetch={false}>
            <Typography component="span" sx={{
              color: 'black',
              textTransform: 'uppercase',
              fontWeight: router.route === "/" ? 'bold' : 'semibold',
              '&:hover': { cursor: 'pointer', fontWeight: 'bold' }
            }}>Home</Typography>
          </Link>

          <Link href="/blog" prefetch={false}>
            <Typography component="span" sx={{
              color: 'black',
              textTransform: 'uppercase',
              fontWeight: router.route === "/blog" ? 'bold' : 'semibold',
              '&:hover': { cursor: 'pointer', fontWeight: 'bold' }
            }}>Blog</Typography>
          </Link>
        </nav>

        <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: '100vw', height: '90%', maxWidth: "1180px" }}>

          <Box sx={{ textAlign: 'left', display: 'flex', justifyContent: 'center', height: '100%', flexDirection: 'column', gap: 2 }}>
            <Typography component="h1" variant="h3" sx={{ padding: 0, margin: 0, fontSize: { xs: '2.5rem', md: '3rem' } }}>
              O cartão que entende você
            </Typography>

            <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }} >
              Zero anuidade, cashback instantâneo e muito mais
            </Typography>

            <Box sx={{ mt: 4 }}>
              <CustomCTAButton>
                Quero meu cartão
              </CustomCTAButton>
            </Box>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center', height: '80%', position: 'relative', top: '-5vh' }}>
            <Image
              src={cardMock}
              alt="Cartão de crédito"
              width={type === "internal" ? 300 : 500}
              height={type === "internal" ? 300 : 500}
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Container >
      </Box >

      {internal && (<Box sx={{ height: '40vh' }} />)
      }
    </>

  );
}