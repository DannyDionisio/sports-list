import { Chip, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AnyAction } from "redux";
import { ThemeProvider } from "styled-components";
import { getSport } from "../features/sports/sportsSlice";
import { RootState } from "../redux/store";
import {
  ImgWrapper,
  InfoWrapper,
  LoadingSpinner,
  SportDetailContainer,
  TagsWrapper,
  TitlePage,
} from "../styles";

export const SportDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const sport = useSelector((state: RootState) => state.sports.sport);
  const loading = useSelector((state: RootState) => state.sports.loading);

  useEffect(() => {
    if (id) {
      dispatch(getSport(id) as any as AnyAction);
    }
  }, [dispatch, id]);

  return (
    <>
      <SportDetailContainer>
        {loading ? (
          <LoadingSpinner size={100} />
        ) : (
          <>
            <ImgWrapper
              src={sport?.relationships.images.data[0]?.url}
              alt="Sport"
            />
            <InfoWrapper>
              <ThemeProvider theme={{ color: "#0082c3" }}>
                <TitlePage>{sport?.attributes.name}</TitlePage>
              </ThemeProvider>
              <span>{sport?.attributes.description}</span>

              <TagsWrapper>
                {sport?.relationships.tags.data.map((tag: string) => (
                  <Stack direction="row" spacing={1}>
                    <Chip
                      key={tag}
                      label={tag}
                      variant="filled"
                      sx={{ backgroundColor: "#0082c3", color: "#fff" }}
                    />
                  </Stack>
                ))}
              </TagsWrapper>
            </InfoWrapper>
          </>
        )}
      </SportDetailContainer>
    </>
  );
};
