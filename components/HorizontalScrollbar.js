import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../public/assets/icons/right-arrow.png";
import LeftArrowIcon from "../public/assets/icons/left-arrow.png";
const HorizontalScrollbar = ({ data, loading }) => {
  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon.src} alt="right-arrow" />
      </Typography>
    );
  };

  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon.src} alt="right-arrow" />
      </Typography>
    );
  };
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data?.map((item) => {
        return (
          <>
            {loading ? (
              <Skeleton variant="rectangular" width={270} height={280} />
            ) : (
              <Box
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m="0 40px"
              >
                <BodyPart item={item} />
              </Box>
            )}
          </>
        );
      })}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
