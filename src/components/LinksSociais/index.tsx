import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import { Link } from "./styles";

import { RedesSociaisProps } from "types/api";

const icons = {
    Github: <FaGithub />,
    Linkedin: <FaLinkedinIn />
};

const LinksSociais = ({ title, url }: RedesSociaisProps) => (
    <Link href={url} title={title} target="_blank" rel="noopener">
        {icons[title]}
    </Link>
);

export default LinksSociais;
