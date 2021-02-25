import styled from "styled-components";

export const ContainerHead = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    height: 100vh;
    @media (max-width: 900px) {
        padding: 15px 10px;
        align-items: flex-start;
    }
`;

export const Title = styled.h1`
    font-size: 10rem;
    margin-bottom: 5rem;
    @media (max-width: 900px) {
        font-size: 6rem;
    }
`;

export const RedesSociais = styled.div`
    display: flex;
`;
