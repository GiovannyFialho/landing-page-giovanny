import styled from "styled-components";

export const Link = styled.a`
    text-decoration: none;
    color: inherit;
    margin-left: 20px;
    &::last-child {
        margin-left: 0;
    }
    svg {
        width: 40px;
        height: 40px;
    }
`;
