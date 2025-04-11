import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";

const benefits = [
  { title: "Cashback", desc: "Dinheiro de volta em todas as compras e serviços do cartão." },
  { title: "Sem Tarifas", desc: "Sem anuidade ou taxas escondidas na compra do cartão." },
  { title: "App Completo", desc: "Gerencie tudo pelo celular com uma interface intuitiva." },
  { title: "Suporte", desc: "Suporte 24h por dia e 7 dias por semana por e-mail e telefone." },
  { title: "Segurança", desc: "Segurança e privacidade garantidas. Bloqueio de transações suspeitas." },
  { title: "Prazo de Pagamento", desc: "Prazo de pagamento flexivel para você. Pague onde quiser." },
];

export default function BenefitsSection() {
  return (
    <Box sx={{ p: { md: 8 }, mt: 3, height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      <Container>
        <Grid container spacing={4}>
          {benefits.map((b, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <Card sx={{ height: '150px', border: '1px solid #555ab9', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                  <Typography variant="h6">{b.title}</Typography>
                  <Typography sx={{ py: 0 }}>{b.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}