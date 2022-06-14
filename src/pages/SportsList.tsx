import React, { useEffect } from "react";

import { LoadingSpinner, SportsListWrapper, TitlePage } from "../styles";

import { useDispatch, useSelector } from "react-redux";
import {
  getSports,
  likeSport,
  unlikeSport,
} from "../redux/actions/sportsActions";
import { RootState } from "../redux/reducers/rootReducer";
import { Sport } from "../redux/reducers/sportsReducer";
import { Card } from "../components/Card";
import { ThemeProvider } from "styled-components";

export const SportsList = () => {
  const dispatch = useDispatch();
  const sportsList = useSelector((state: RootState) => state.sports.list);
  const loading = useSelector((state: RootState) => state.sports.loading);

  useEffect(() => {
    //dispatch(getSports());

    getSports()(dispatch);
  }, [dispatch]);

  const handleFavoriteClick = (sport: Sport, isFavorite: boolean) => {
    isFavorite ? likeSport(sport)(dispatch) : unlikeSport(sport)(dispatch);
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
