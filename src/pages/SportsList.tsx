import React, { useEffect } from "react";

import { SportsListWrapper, TitlePage } from "../styles";

import { useDispatch, useSelector } from "react-redux";
import {
  getSports,
  likeSport,
  unlikeSport,
} from "../redux/actions/sportsActions";
import { RootState } from "../redux/reducers/rootReducer";
import { Sport } from "../redux/reducers/sportsReducer";
import { Card } from "../components/Card";

export const SportsList = () => {
  const dispatch = useDispatch();
  const sportsList = useSelector((state: RootState) => state.sports.list);

  useEffect(() => {
    getSports()(dispatch);
  }, [dispatch]);

  const handleFavoriteClick = (sport: Sport, isFavorite: boolean) => {
    isFavorite ? likeSport(sport)(dispatch) : unlikeSport(sport)(dispatch);
  };

  return (
    <>
      <TitlePage>Sports List</TitlePage>

      <div>
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
      </div>
    </>
  );
};
