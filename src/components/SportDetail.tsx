import { Chip, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSportById } from "../redux/actions/sportsActions";
import { RootState } from "../redux/reducers/rootReducer";
import {
  ImgWrapper,
  InfoWrapper,
  SportDetailContainer,
  TagsWrapper,
} from "../styles";

export const SportDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const sport = useSelector((state: RootState) => state.sports.sport);

  useEffect(() => {
    if (id) {
      getSportById(id)(dispatch);
    }
  }, [dispatch, id]);

  return (
    <>
      <SportDetailContainer>
        <ImgWrapper
          src={sport?.relationships.images.data[0]?.url}
          alt="Sport"
        />

        <InfoWrapper>
          <h1>{sport?.attributes.name}</h1>
          <span>{sport?.attributes.description}</span>

          <TagsWrapper>
            {sport?.relationships.tags.data.map((tag: string) => (
              <Stack direction="row" spacing={1}>
                <Chip
                  label={tag}
                  variant="filled"
                  sx={{ backgroundColor: "#0082c3", color: "#fff" }}
                />
              </Stack>
            ))}
          </TagsWrapper>
        </InfoWrapper>
      </SportDetailContainer>
    </>
  );
};
