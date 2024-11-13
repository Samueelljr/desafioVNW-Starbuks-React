import styled from 'styled-components'

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 9rem 4rem 6rem;

    ul {
        display: flex;
        gap: 3rem;
        
        li {
            font-family: Inter, sans-serif;
            font-weight: 400;
            font-size: 1.2rem;
            list-style: none;
        }
    }
    
    a {
        text-decoration: none;
        color: #000;
    }

    a:hover {
        cursor: pointer;
        color: #037143;
    }

            

`;

;
