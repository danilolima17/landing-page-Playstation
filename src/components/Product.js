import styled from "styled-components";

function Product(props) {
  const data = props.data;
  return (
    <>
      {!data ? (
        <div>Loading...</div>
      ) : (
        <ProductView>
          <div className="col-1">
            <h2>
              {data.system}
              <br />
              {data.item}
            </h2>
            <h3>{data.description}</h3>
            <p>{data.details}</p>
            <h4>{data.price}</h4>
            <BuyNowBtn>
              Compre Agora <img src="./imgs/arrow.png" alt="arrow" />
            </BuyNowBtn>
          </div>

          <div className="col-2">
            <img src={data.img} alt="controller" />
            <div className="color-box"></div>
            <div className="add-button">
              <img src="./imgs/add.png" alt="add" />
              <p>Adicionar Cartão</p>
            </div>
          </div>
        </ProductView>
      )}
    </>
  );
}

export default Product;

const ProductView = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  align-items: center;

  .col-1 {
    flex-basis: 40%;
    position: relative;
    margin-left: 50px;
  }

  .col-1 h2 {
    font-size: 54px;
  }
  .col-1::after {
    position: absolute;
    content: "";
    height: 80%;
    width: 10px;
    background: linear-gradient(#000077, #000077);
    top: 4px;
    left: -40px;
  }

  .col-1 h3 {
    font-size: 30px;
    color: #707070;
    font-weight: 100;
    margin: 20px 0 10px;
  }
  .col-1 p {
    font-size: 16px;
    color: #b7b7b7;
    font-weight: 100;
  }
  .col-1 h4 {
    font-size: 16px;
    margin: 30px 0;
  }

  .col-2 {
    flex-basis: 60%;
    display: flex;
    position: relative;
    align-items: center;

    img {
      width: 90%;
    }

    .color-box {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 80%;
      background: linear-gradient(#000077, #000077);
      z-index: -1;
      transform: translateX(150px);
      border-radius: 20px 0 0 20px;
    }

    .add-button {
      color: white;
      text-align: center;
      cursor: pointer;
    }

    .add-button img {
      width: 35px;
      margin-bottom: 5px;
    }
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column-reverse;
    margin: 50px 0;

    .col-1 {
      flex-basis: 100%;
    }

    .col-1 h2 {
      font-size: 35px;
    }
    .col-1 h3 {
      font-size: 15px;
    }

    .col-2 {
      flex-basis: 100%;
      margin-bottom: 50px;
    }

    .col-2 img {
      width: 77%;
    }

    .col-2 .color-box {
      transform: translateX(75px);
    }
  }
`;

const BuyNowBtn = styled.button`
  display: flex;
  align-items: center;
  color: white;
  width: 140px;
  justify-content: center;
  border: none;
  padding: 10px 12px;
  border-radius: 6px;
  background: linear-gradient(#000077, #000077);
  transition: width 0.5s;
  cursor: pointer;

  img {
    width: 30px;
    display: none;
  }

  &&:hover {
    width: 150px;
    justify-content: space-between;

    img {
      display: block;
    }
  }
`;
