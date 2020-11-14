import styled from "styled-components";
import bannerImage from "../../assets/images/rawpixel-411166-unsplash.png";

export const BannerWrapper = styled.div`
  height: 100vh;
  width: 43.13vw;
  background-image: url(${bannerImage});
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0) 16%,
      rgba(0, 0, 0, 0) 42%,
      rgba(0, 0, 0, 0.5) 69%,
      rgba(0, 0, 0, 0.8) 96%
    ),
    url(${bannerImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: row;

  .banner__text {
    color: var(--base-color-white);
    text-align: right;
    width: 66.85%;
    position: absolute;
    right: 7.25%;
    bottom: 4.72%;
  }
  .banner__quote {
    margin-bottom: 8px;
    font-size: 20px;
    line-height: 30px;
  }
  .banner__name {
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
  }
  .banner__company {
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
