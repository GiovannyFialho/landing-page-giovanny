const GET_LANDINGPAGE = /* GraphQL */ `
    fragment header on LandingPage {
        header {
            title
            redesSociais {
                title
                url
            }
        }
    }

    fragment main on LandingPage {
        main {
            title
            description
        }
    }

    query GET_LANDINGPAGE {
        landingPage {
            ...header
            ...main
        }
    }
`;

export default GET_LANDINGPAGE;
