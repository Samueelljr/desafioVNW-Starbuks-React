import styled from 'styled-components'



export const HomeTitle = styled.div`
    color: #000000;
    font-family: Inter, sans-serif;
    padding: 0 0 1rem 6rem;
    
    h1 {
        font-weight: 400;
        font-size: 3rem;
    }


    h2 {
        font-weight: 400;
        font-size: 3.4rem;
    }

    span {
        color: #037143;
        font-weight: bold;
    }

    p {
        width: 28rem;
        font-family: Inter, sans-serif;
        font-weight: 400;
    }
`;

export const ButtonSection = styled.section`

   padding: 0 0 0 6rem;

   button {
    background-color: #037143;
    color: #FFFFFF;
    width: 10rem;
    height: 2.5rem;
    border-radius: 30px;
    border: none;
    font-family: Inter, sans-serif;
    font-weight: 700;
}

button:hover {
    cursor: pointer;
    background-color: #FFFFFF;
    color: #037143;
    border: solid #037143 2px;
}
`;

export const ImageSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    

    img:hover {
        cursor: pointer;
        rotate: 12deg;
    }
`;

export const CopoContainer = styled.div`
  
`;

export const FigureContainer = styled.div`
  display: flex;
  position: relative;
  bottom: 10rem;

  .bebida {
    display: flex;
    position: absolute;
  }
`;

export const HomeSection = styled.section`
   height: 100vh;
`;


export const ImageContainer = styled.section`
  display: flex;
  position: relative;
  padding: 0 0 0 27.2rem;
`;