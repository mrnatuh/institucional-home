import { Box, Container, Typography } from "@mui/material";
import { CustomCTAButton } from "./CustomCTAButton";

export default function CallToAction() {
  return (
    <Box sx={{ bgcolor: '#555ab9', py: { xs: 6, md: 10 }, textAlign: 'center', height: 'auto', overflow: 'hidden', mt: 3 }}>
      <Container>
        <Typography variant="h4" gutterBottom sx={{ color: 'white', mb: 4, fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}>Pronto para ter o cartão que te dá mais?</Typography>

        <CustomCTAButton>
          Pedir agora
        </CustomCTAButton>
      </Container>
    </Box >
  );
}
