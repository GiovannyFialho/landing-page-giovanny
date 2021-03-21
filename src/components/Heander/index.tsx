import { Title, RedesSociais, ContainerHead } from "./styles";

import LinksSociais from "../LinksSociais";

import { SectionHeaderProps } from "types/api";

const Heander = ({ titulo, redesSociais }: SectionHeaderProps) => (
    <ContainerHead>
        <Title>{titulo}</Title>

        <RedesSociais>
            {redesSociais.map(({ titulo, url }) => (
                <LinksSociais key={titulo} titulo={titulo} url={url} />
            ))}
        </RedesSociais>
    </ContainerHead>
);

export default Heander;
