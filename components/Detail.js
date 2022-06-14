import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../public/assets/icons/body-part.png";
import TargetImage from "../public/assets/icons/target.png";
import eQImage from "../public/assets/icons/equipment.png";
import { useGlobalContext } from "./Context";
import Skeleton from "@mui/material/Skeleton";
const Detail = ({ exDetail, loading }) => {
  const { bodyPart, gifUrl, target, equipment, name } = exDetail;

  const ExtraDetail = [
    {
      icon: BodyPartImage.src,
      name: bodyPart,
    },
    {
      icon: TargetImage.src,
      name: target,
    },
    {
      icon: eQImage.src,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap={"60px"}
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Head>
        <title>{name} - Fitness Club</title>
      </Head>
      {loading ? (
        <Skeleton variant="rectangular" width={740} height={740} />
      ) : (
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      )}

      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          sx={{ fontSize: { lg: "64px", xs: "30px" } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {loading ? <Skeleton /> : name}
        </Typography>
        <Typography
          sx={{ fontSize: { lg: "24px", xs: "18px" } }}
          color="#4F4C4C"
        >
          {loading ? (
            <Skeleton width={500} height={100} />
          ) : (
            <>
              Exercises keep you strong.
              <span style={{ textTransform: "capitalize" }}>name</span> bup is
              one of the best <br /> exercises to target your target. It will
              help you improve your <br /> mood and gain energy.
            </>
          )}
        </Typography>
        {ExtraDetail.map((item, index) => (
          <Stack key={index} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                style={{ width: "50px", height: "50px" }}
                src={item.icon}
                alt={bodyPart}
              />
            </Button>
            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: "30px", xs: "20px" } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
