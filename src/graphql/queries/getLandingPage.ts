const GET_LANDINGPAGE = /* GraphQL */ `
    fragment header on LandingPage {
        header {
            titulo
            redesSociais {
                titulo
                url
            }
        }
    }

    fragment main on LandingPage {
        main {
            titulo
            descricao
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
