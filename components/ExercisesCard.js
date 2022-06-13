import React from "react";
import Link from "next/link";
import { Button, Stack, Typography } from "@mui/material";

const ExercisesCard = ({ item }) => {
  return (
    <Link href={`/exercise/${item.id}`}>
      <div className="exercise-card" style={{ cursor: "pointer" }}>
        <img src={item.gifUrl} alt={item.name} loading="lazy" />
        <Stack direction={"row"}>
          <Button
            sx={{
              ml: "21px",
              color: "#FFF",
              background: "#FFA9A9",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {item.bodyPart}
          </Button>
          <Button
            sx={{
              ml: "21px",
              color: "#FFF",
              background: "#FCC757",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {item.target}
          </Button>
        </Stack>
        <Typography
          ml="21px"
          color={"#000"}
          fontWeight="bold"
          mt="11px"
          pb="10px"
          textTransform={"capitalize"}
          fontSize="22px"
        >
          {item.name}
        </Typography>
      </div>
    </Link>
  );
};

export default ExercisesCard;
