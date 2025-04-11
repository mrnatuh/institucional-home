import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface CustomCTAButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export function CustomCTAButton({ children, ...props }: CustomCTAButtonProps) {
  return (
    <Button variant="contained" size="large" sx={{ border: '1px solid white', bgcolor: 'white', color: '#555ab9', fontWeight: 'bold', '&:hover': { bgcolor: '#555ab9', color: 'white', scale: 1.01 } }} {...props}>
      {children}
    </Button>
  );
}