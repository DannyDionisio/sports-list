import React from "react";

import {
  Button,
  CardStyle,
  FavoriteButton,
  FooterWrapper,
  IconWrapper,
  Title,
} from "../styles";

import { MdOutlineSportsKabaddi } from "react-icons/md";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { Sport } from "../models/models";
import { RootState } from "../redux/store";

const linkStyle = {
  margin: "15px",
  textDecoration: "none",
  color: "#fff",
};

interface CardProps {
  sport: Sport;
  onClickFavorite: (sport: Sport, isFavorte: boolean) => void;
}

export const Card: React.FC<CardProps> = ({ sport, onClickFavorite }) => {
  const isFavorite = useSelector((state: RootState) =>
    state.sports.favorites.includes(sport.id)
  );

  return (
    <CardStyle>
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

          <FavoriteButton onClick={() => onClickFavorite(sport, !isFavorite)}>
            {isFavorite ? (
              <AiFillHeart size={35} />
            ) : (
              <AiOutlineHeart size={35} />
            )}
          </FavoriteButton>
        </FooterWrapper>
      </div>
    </CardStyle>
  );
};
