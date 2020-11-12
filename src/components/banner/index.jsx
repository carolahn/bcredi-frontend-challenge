import { BannerWrapper } from "./styled";

const Banner = () => {
  return (
    <BannerWrapper className="banner">
      <div className="banner__text">
        <p className="banner__quote">
          "Obtive crédito para capital de giro. O processo foi bem sucedido e
          tudo que foi abordado, foi cumprido."
        </p>
        <p className="banner__name">Camila Bragança,</p>
        <p className="banner__company">Sideral Tecnologia</p>
      </div>
    </BannerWrapper>
  );
};

export default Banner;
