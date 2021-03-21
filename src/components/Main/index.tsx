import { Wrapper, Title, Description } from "./styles";

import { SectionMainProps } from "types/api";

const Main = ({ titulo, descricao }: SectionMainProps) => (
    <Wrapper>
        <Title>{titulo}</Title>
        <Description dangerouslySetInnerHTML={{ __html: descricao }} />
    </Wrapper>
);

export default Main;
