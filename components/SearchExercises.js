import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exOptions, fetchData } from "./utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
import { useGlobalContext } from "./Context";

const url = "https://exercisedb.p.rapidapi.com/exercises";
const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const { setEx } = useGlobalContext();
  const [loading, setLoading] = useState(false);

  const fetchExData = async () => {
    setLoading(true);
    const bodyPartsData = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
      exOptions
    );
    setLoading(false);
    setBodyParts(["all", ...bodyPartsData]);
  };
  useEffect(() => {
    fetchExData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const ExData = await fetchData(url, exOptions);
      // console.log(ExData);
      const seatchedEx = ExData.filter(
        (ex) =>
          ex.name.toLowerCase().includes(search) ||
          ex.target.toLowerCase().includes(search) ||
          ex.equipment.toLowerCase().includes(search) ||
          ex.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setEx(seatchedEx);
    }
  };
  return (
    <Stack alignItems={"center"} mt="37px" justifyContent={"center"} p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign={"center"}
      >
        Awesome Exercises <br /> You Should Know
      </Typography>
      <Box position={"relative"} mb="72px">
        <TextField
          sx={{
            backgorundColor: "#fff",
            borderRadius: "40px",
            width: { md: "700px", sm: "600px", xs: "450px", lg: "1170px" },
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search  Exercise"
          type={"text"}
        />
        <Button
          onClick={handleSearch}
          sx={{
            bgcolor: "#ff2526",
            color: "#fff",
            textTrasform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          className="search-btn"
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar loading={loading} data={bodyParts} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
