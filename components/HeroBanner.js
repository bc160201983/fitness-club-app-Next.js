import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../public/assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Box
      position="relative"
      p="20px"
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
    >
      <Typography color="#ff2526" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography mb={4} fontSize={"22px"} lineHeight="35px">
        Check out the most effective exercises.
      </Typography>
      <Button
        sx={{ backgroundColor: "#ff2526", padding: "10px" }}
        href="#exercises"
        color="error"
        variant="contained"
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2526"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Exercises
      </Typography>
      <img src={HeroBannerImage.src} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
