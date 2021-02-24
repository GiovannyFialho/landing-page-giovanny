export type RedesSociaisProps = {
    title: string;
    url: string;
};

export type SectionHeaderProps = {
    title: string;
    redesSociais: RedesSociaisProps[];
};

export type SectionMainProps = {
    title: string;
    description: string;
};

export type LandingPage = {
    header: SectionHeaderProps;
    main: SectionMainProps;
};
