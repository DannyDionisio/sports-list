import React, { useEffect } from "react";

import { LoadingSpinner, SportsListWrapper, TitlePage } from "../styles";

import { useDispatch } from "react-redux";
import { Card } from "../components/Card";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "../redux/hooks";
import { getSports } from "../features/sports/sportsSlice";
import { likeSport, unlikeSport } from "../features/sports/sportsSlice";
import { AnyAction } from "redux";
import { Sport } from "../models/models";

export const SportsList = () => {
  const dispatch = useDispatch();
  const sportsList = useAppSelector((state) => state.sports.list);
  const loading = useAppSelector((state) => state.sports.loading);

  useEffect(() => {
    dispatch(getSports() as any as AnyAction);
  }, [dispatch]);

  const handleFavoriteClick = (sport: Sport, isFavorite: boolean) => {
    isFavorite ? dispatch(likeSport(sport)) : dispatch(unlikeSport(sport));
  };

  return (
    <>
      <ThemeProvider theme={{ color: "#0082c3" }}>
        <TitlePage>Sports List</TitlePage>
      </ThemeProvider>

      <div>
        {loading ? (
          <LoadingSpinner size={100} />
        ) : (
          <SportsListWrapper>
            {sportsList.map((sport: Sport) => {
              return (
                <Card
                  key={sport.id}
                  sport={sport}
                  onClickFavorite={handleFavoriteClick}
                />
              );
            })}
          </SportsListWrapper>
        )}
      </div>
    </>
  );
};
