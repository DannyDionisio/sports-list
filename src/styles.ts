import styled from "styled-components";

export const TitlePage = styled.h1`
  color: #0082c3;
  text-align: center;
`;

//SportsList
export const SportsListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 190px;
  border: 1px solid #0082c3;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
`;

export const Title = styled.h5`
  color: #000;
  font-size: 24px;
`;

export const Button = styled.button`
  background: #348ab5;
  color: #fff;
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
  border: none;
  &:hover {
    background: #66afd2;
    transition: 0.3s;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 190px;
`;

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

//SportDetail
export const SportDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin: 100px 200px;
  border: 2px solid #0082c3;
  border-radius: 10px;
`;

export const ImgWrapper = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

export const InfoWrapper = styled.div`
  margin: 20px;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: space-between;
  margin: 30px 0;
`;
