import { render, screen } from "@testing-library/react";

import Heander from ".";

describe("<Heander />", () => {
    it("renderização de título", () => {
        const { container } = render(<Heander />);

        expect(
            screen.getByRole("heading", { name: /Heander/i })
        ).toBeInTheDocument();
    });
});
