"use client";

import { UserToken } from "@/user/user.token";
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  Box,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { bindUrl } from "@/base/http.client";
import AlertSnackBar from "@/app/components/AlertSnackBar";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.SubmitEvent) => {
    e.preventDefault();

    fetch(bindUrl("user/login"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const userToken = new UserToken(data);
        if (userToken.success()) {
          router.push("/");
        } else {
          setError(userToken.message);
          setOpen(true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
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
                  loading="eager"
                  src="/login_logo.png"
                  alt="Logo"
                  width={300}
                  height={120}
                  style={{ objectFit: "contain" }}
                />
              </Box>
            }
          />
          <CardContent>
            <Box
              component="form"
              onSubmit={handleLogin}
              display="flex"
              flexDirection="column"
              gap={2}
            >
              <TextField
                label="Username"
                type="text"
                fullWidth
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="contained" color="primary" type="submit">
                Login
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <AlertSnackBar
        open={open}
        message={error}
        severity="error"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
