import React, { useState, useContext, useEffect } from "react";
import { exOptions, fetchData } from "./utils/fetchData";
// make sure to use https
//export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const ExerciseDBUrl = "https://exercisedb.p.rapidapi.com";
const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [ex, setEx] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <AppContext.Provider
      value={{
        bodyPart,
        setBodyPart,
        ex,
        setEx,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
