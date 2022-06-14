import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Fitness Club - Best Fitness App in Town</title>
      </Head>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
}
