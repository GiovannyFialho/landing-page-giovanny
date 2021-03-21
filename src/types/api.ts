export type RedesSociaisProps = {
    titulo: string;
    url: string;
};

export type SectionHeaderProps = {
    titulo: string;
    redesSociais: RedesSociaisProps[];
};

export type SectionMainProps = {
    titulo: string;
    descricao: string;
};

export type LandingPage = {
    header: SectionHeaderProps;
    main: SectionMainProps;
};
