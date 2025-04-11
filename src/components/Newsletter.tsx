import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { z } from "zod"

const emailSchema = z.object({
  email: z
    .string({ message: "Informe seu email" })
    .email({ message: "Informe um email válido" }),
})

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: any) => {
    e.preventDefault();

    const result = emailSchema.safeParse({ email });
    console.log(result);
  }

  return (
    <Box sx={{ bgcolor: '#fff', py: { xs: 6, md: 10 }, textAlign: 'center', height: 'auto', overflow: 'hidden' }}>
      <Container>
        <Typography variant="h4" gutterBottom sx={{ color: '#555ab9', mb: 4, fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}>Quer ficar por dentro de todas novidades?</Typography>

        <Box component="form" method="POST" onSubmit={handleSubscribe} sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TextField
            name="email"
            type="text"
            placeholder="Informe seu email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} sx={{ color: 'white' }}
          />

          <Button type="submit" variant="contained" sx={{ bgcolor: 'white', color: '#555ab9', fontWeight: 'bold', height: '52px', '&:hover': { bgcolor: '#555ab9', color: 'white', scale: 1.01 } }}>
            Ok
          </Button>
        </Box>
      </Container>
    </Box >
  );
}
