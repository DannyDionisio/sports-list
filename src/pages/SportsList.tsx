import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Card,
  FooterWrapper,
  IconWrapper,
  SportsListWrapper,
  Title,
  TitlePage,
} from "../styles";

import { MdOutlineSportsKabaddi } from "react-icons/md";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import {
  getSports,
  likeSport,
  unlikeSport,
} from "../redux/actions/sportsActions";
import { RootState } from "../redux/reducers/rootReducer";
import { Sport } from "../redux/reducers/sportsReducer";

const linkStyle = {
  margin: "15px",
  textDecoration: "none",
  color: "#fff",
};

export const SportsList = () => {
  const dispatch = useDispatch();
  const sportsList = useSelector((state: RootState) => state.sports.list);
  const favoritesList = useSelector(
    (state: RootState) => state.sports.favorites
  );

  useEffect(() => {
    getSports()(dispatch);
  }, [dispatch]);

  const handleClick = (sport: Sport) => {
    const isLiked = favoritesList.includes(sport.id);
    isLiked === false
      ? likeSport(sport)(dispatch)
      : unlikeSport(sport)(dispatch);
  };

  return (
    <>
      <TitlePage>Sports List</TitlePage>

      <div>
        <SportsListWrapper>
          {sportsList.map((sport: Sport) => {
            return (
              <Card key={sport.id}>
                {sport.attributes.icon ? (
                  <img src={sport.attributes.icon} alt="Icon" />
                ) : (
                  <IconWrapper>
                    <MdOutlineSportsKabaddi size={120} color="#0082C3" />
                  </IconWrapper>
                )}

                <div className="card-body">
                  <Title>{sport.attributes.name}</Title>

                  <FooterWrapper>
                    <Button>
                      <Link to={`/${sport.id}`} style={linkStyle}>
                        See More
                      </Link>
                    </Button>

                    <div onClick={() => handleClick(sport)}>
                      {favoritesList.includes(sport.id) ? (
                        <AiFillHeart size={35} />
                      ) : (
                        <AiOutlineHeart size={35} />
                      )}
                    </div>
                  </FooterWrapper>
                </div>
              </Card>
            );
          })}
        </SportsListWrapper>
      </div>
    </>
  );
};
