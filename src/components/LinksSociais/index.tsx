import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import { Link } from "./styles";

import { RedesSociaisProps } from "types/api";

const icons = {
    Github: <FaGithub />,
    Linkedin: <FaLinkedinIn />
};

const LinksSociais = ({ titulo, url }: RedesSociaisProps) => (
    <Link href={url} title={titulo} target="_blank" rel="noopener">
        {icons[titulo as keyof typeof icons]}
    </Link>
);

export default LinksSociais;
