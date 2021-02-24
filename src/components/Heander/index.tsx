import { Title, RedesSociais, ContainerHead } from "./styles";

import LinksSociais from "../LinksSociais";

import { SectionHeaderProps } from "types/api";

const Heander = ({ title, redesSociais }: SectionHeaderProps) => (
    <ContainerHead>
        <Title>{title}</Title>

        <RedesSociais>
            {redesSociais.map(({ title, url }) => (
                <LinksSociais key={title} title={title} url={url} />
            ))}
        </RedesSociais>
    </ContainerHead>
);

export default Heander;
