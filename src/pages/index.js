import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Box, Typography, TextField, Button, Container } from "@mui/material";

export default function ComingSoon() {
  return (
    <Box sx={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "black", color: "white" }}>
      <Head>
        <title>Sunday Mall - Coming Soon</title>
        <meta name="description" content="Sunday Mall is launching soon. Stay tuned!" />
      </Head>
      
      {/* Background Image */}
      <Box sx={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <Image
          src="/cs.jpg"
          alt="Coming Soon Background"
          layout="fill"
          objectFit="cover"
          style={{ opacity: 0.4 }}
        />
      </Box>
      
      {/* Content */}
      <Container sx={{ position: "relative", textAlign: "center", px: 3, zIndex: 10 }}>
        <Typography variant="h2" fontWeight="bold" mb={2}>
          Sunday Mall
        </Typography>
        <Typography variant="h6" mb={4}>
          We are launching soon! Stay tuned for something amazing.
        </Typography>
        
        {/* Notify Me Form */}
        {/* <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "white", borderRadius: "50px", overflow: "hidden", width: "320px", mx: "auto", boxShadow: 3 }}>
          <TextField
            type="email"
            placeholder="Enter your email"
            variant="standard"
            sx={{ flex: 1, px: 2, py: 1, border: "none", outline: "none", color: "black" }}
            InputProps={{ disableUnderline: true }}
          />
          <Button sx={{ backgroundColor: "#6B5DE9", color: "white", px: 3, py: 1, fontWeight: "bold", '&:hover': { backgroundColor: "#5A4DD0" } }}>
            Notify Me
          </Button>
        </Box> */}
      </Container>
    </Box>
  );
}
