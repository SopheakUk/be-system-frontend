"use client";

import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  Box,
} from "@mui/material";
import Image from "next/image";

export default function LoginPage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Card sx={{ width: 400 }}>
        <CardHeader
          sx={{
            bgcolor: "primary.main",
            height: 100,
            color: "primary.contrastText",
          }}
          title={
            <Box display="flex" justifyContent="center">
              <Image
                src="/login_logo.png" // replace with your image path
                alt="Logo"
                width={300}
                height={120}
                style={{ objectFit: "contain" }}
              />
            </Box>
          }
        />
        <CardContent>
          <Box component="form" display="flex" flexDirection="column" gap={2}>
            <TextField label="Email" type="email" fullWidth />
            <TextField label="Password" type="password" fullWidth />
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
