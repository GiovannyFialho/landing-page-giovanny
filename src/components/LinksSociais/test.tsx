import { render, screen } from "@testing-library/react";

import LinksSociais from ".";

describe("<LinksSociais />", () => {
    it("renderização de título", () => {
        const { container } = render(<LinksSociais />);

        expect(
            screen.getByRole("heading", { name: /LinksSociais/i })
        ).toBeInTheDocument();
    });
});
