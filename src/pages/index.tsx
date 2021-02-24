import { GetStaticProps } from "next";

import Header from "components/Heander";
import Main from "components/Main";

import client from "graphql/client";
import GET_LANDINGPAGE from "graphql/queries/getLandingPage";
import { LandingPage } from "types/api";

export default function Home({ header, main }: LandingPage) {
    return (
        <>
            <Header {...header} />
            <Main {...main} />
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const { landingPage } = await client.request(GET_LANDINGPAGE);

    return {
        props: {
            ...landingPage
        }
    };
};
