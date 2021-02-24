import { Wrapper, Title, Description } from "./styles";

import { SectionMainProps } from "types/api";

const Main = ({ title, description }: SectionMainProps) => (
    <Wrapper>
        <Title>{title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
    </Wrapper>
);

export default Main;
