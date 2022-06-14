import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import Detail from "./Detail";
import ExVideos from "./ExVideos";
import SimilarEx from "./SimilarEx";
import { exOptions, fetchData, youtubeOptions } from "./utils/fetchData";

const DetailPage = ({ id }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [exDetail, setExDetail] = useState([]);
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const getExDetail = async (id) => {
    setLoading(true);
    const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
    const youtubeSearchUrl =
      "https://youtube-search-and-download.p.rapidapi.com";

    const exDetailData = await fetchData(
      `${exerciseDbUrl}/exercises/exercise/${id}`,
      exOptions
    );
    setLoading(false);
    setExDetail(exDetailData);
    const exerciseVideosData = await fetchData(
      `${youtubeSearchUrl}/search?query=${exDetailData.name} exercise`,
      youtubeOptions
    );
    setExerciseVideos(exerciseVideosData.contents);

    const targetMuscleExercisesData = await fetchData(
      `${exerciseDbUrl}/exercises/target/${exDetailData.target}`,
      exOptions
    );
    setTargetMuscleExercises(targetMuscleExercisesData);

    const equimentExercisesData = await fetchData(
      `${exerciseDbUrl}/exercises/equipment/${exDetailData.equipment}`,
      exOptions
    );
    setEquipmentExercises(equimentExercisesData);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    getExDetail(id);
  }, [id]);

  return (
    <Box>
      <Detail loading={loading} exDetail={exDetail} />
      <ExVideos exerciseVideos={exerciseVideos} name={exDetail.name} />
    </Box>
  );
};

export default DetailPage;
