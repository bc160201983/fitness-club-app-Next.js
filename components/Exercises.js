import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";

import { Box, Stack, Typography } from "@mui/material/";
import { useGlobalContext } from "./Context";
import ExercisesCard from "./ExercisesCard";
import { exOptions, fetchData } from "./utils/fetchData";
const url = "https://exercisedb.p.rapidapi.com/exercises";
const Exercises = () => {
  const { ex, setEx, bodyPart } = useGlobalContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [exPerPage] = useState(6);
  const indexOfLastEx = currentPage * exPerPage;
  const indexOfFirstEx = indexOfLastEx - exPerPage;
  const currentEx = ex.slice(indexOfFirstEx, indexOfLastEx);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  const fetchExData = async () => {
    let exData = [];
    if (bodyPart === "all") {
      exData = await fetchData(url, exOptions);
    } else {
      exData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
        exOptions
      );
    }
    setEx(exData);
  };

  useEffect(() => {
    fetchExData();
  }, [bodyPart]);
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Sowing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent={"center"}
      >
        {currentEx.map((item, index) => {
          return <ExercisesCard key={`${item.name}-${index}`} item={item} />;
        })}
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {ex.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(ex.length / exPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
