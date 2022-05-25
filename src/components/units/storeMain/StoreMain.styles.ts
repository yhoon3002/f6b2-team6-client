import styled from "@emotion/styled";
// import { useMediaQuery } from "react-responsive";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainWrapper = styled.div`
  width: 1920px;
  /* padding-top: 70px; */
`;

export const ImageWrapper = styled.div`
  width: 100%;
`;

export const MainImage = styled.div`
  width: 100%;
  height: 1080px;
  /* background-color: Red; */
  background-image: url("/images/main/carousel_1.png");
  background-position: center;
  background-size: cover;
`;

export const MainImage2 = styled.div`
  width: 100%;
  height: 1080px;
  /* background-color: Red; */
  background-image: url("/images/main/main_2.png");
  background-position: center;
  background-size: cover;
`;

export const MainImage3 = styled.div`
  width: 100%;
  height: 1080px;
  /* background-color: Red; */
  background-image: url("/images/main/main_3.png");
  background-position: center;
  background-size: cover;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 325px 340px 361px 340px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 188px;
`;

export const Text1 = styled.div`
  font-weight: 900;
  font-size: 48px;

  margin-bottom: 20px;
`;

export const Text2 = styled.div`
  font-weight: 400;
  font-size: 20px;

  margin-bottom: 89px;
`;

export const Text3 = styled.div`
  font-weight: 400;
  font-size: 24px;

  margin-bottom: 29px;
`;

export const MoveButton = styled.button`
  width: 300px;
  height: 80px;
  background-color: #b150f2;
  border-radius: 10px;
  font-weight: 700;
  font-size: 24px;

  margin-top: 130px;
`;

export const Player = styled.div`
  width: 732px;
  height: 407px;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #2c2c2c;
  border: 1px solid #b150f2;
  box-shadow: 0px 4px 4px #1b1b1b;
  border-radius: 10px;
`;

export const ReviewWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 32px;

  margin-bottom: 44px;
`;

export const BestReviewWrapper = styled.div`
  width: 100%;
  padding: 228px 340px 500px 340px;
`;

export const BestProductWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
`;

export const BestProductBox = styled.div`
  width: 400px;
  border-radius: 30px 30px 0px 0px;
`;

export const ReviewImage = styled.img<{ src: string }>`
  width: 400px;
  height: 291px;

  /* background-color: blue; */

  /* background-image: url(); */
  background-position: center;
  background-size: cover;

  border-radius: 10px 10px 0px 0px;
`;

export const ReviewDownWrapper = styled.div`
  width: 400px;
  height: 174px;
  padding: 30px 30px;

  background-color: #2c2c2c;

  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: flex-start; */

  border-radius: 0px 0px 10px 10px;
`;

export const ReviewEmoji = styled.div`
  width: 24px;
  height: 24px;

  background-image: url("/images/review_like_white.png");
  background-position: center;
  background-size: cover;

  margin-right: 10px;
`;

export const ReviewScore = styled.div`
  /* width: 54px; */

  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
`;

export const ProductsPrice = styled.div`
  /* width: 54px; */

  color: #ffffff;
  font-weight: 700;
  font-size: 32px;
`;

export const ReviewTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  /* margin-bottom: 30px; */
  color: white;
`;

export const ReviewTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

export const ReviewLikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  cursor: pointer;
`;

export const ReviewContents = styled.div`
  /* width: 420px; */
  font-weight: 400;
  font-size: 18px;

  color: #b1b1b1;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PreloaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 0px;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  z-index: 9999;
`;

export const PreloaderDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden;
`;

export const PreloaderChild = styled.div`
  width: 100%;
  min-height: 100%;
  position: relative;
  z-index: 999;
  background: url("/images/Bg_img.png") no-repeat center center fixed;
`;

export const HideTitle = styled.div`
  width: 744px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 355px;

  font-family: "NanumGothicCoding";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 64px;
  color: #ffffff;
`;

export const HideTopContents = styled.div`
  width: 420px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 73px;

  font-family: "NanumGothicCoding";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #f1f1f1;
`;

export const HideBottomContents = styled.div`
  width: 420px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;

  font-family: "NanumGothicCoding";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #f1f1f1;
`;

export const HideButton = styled.button`
  width: 242px;
  height: 84px;
  background: #b150f2;
  border-radius: 20px;
  margin-left: 839px;
  margin-top: 176px;
  border: none;

  font-family: "NanumGothicCoding";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;
