import styled from 'styled-components'


export const Legends = styled.section`

display: flex;
flex-direction: column;
color: #FFFFFF;
gap: 1rem;


h4 {
    font-family: Inter, sans-serif;
    font-weight: 700;
}

h1 {
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 3rem;
}

p {
    font-family: Poppins, sans-serif;
    font-weight: 400;
    width: 24rem;
    line-height: 1.4rem;
}

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

export const NovidadesSection = styled.section`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #1E3932;
    align-items: center;
    justify-content: center;
`;

export const ButtonSection = styled.section`
`;