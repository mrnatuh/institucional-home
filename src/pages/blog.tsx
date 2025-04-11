import Head from "next/head";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import HeroSection from "../components/HeroSection";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const posts = await res.json();

  return {
    props: { posts },
    revalidate: 60,
  };
}

export default function BlogPage({ posts }: { posts: any[] }) {
  return (
    <>
      <Head>
        <title>Blog | Institucional Home</title>
      </Head>

      <HeroSection type="internal" />

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Typography variant="h2" gutterBottom sx={{ fontSize: '2rem' }}>Últimos Artigos</Typography>

          {posts.map((post) => (
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h3" gutterBottom sx={{ fontSize: '1.8rem' }}>
                  {post.title}
                </Typography>

                <Typography>{post.body}</Typography>
              </CardContent>
            </Card>
          ))}
        </Container>
      </Box>
    </>
  );
}
