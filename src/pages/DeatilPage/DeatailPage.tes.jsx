import { render } from "@testing-library/react";
import DetailPage from "./index";

it("Yüklenme durumunda doğru yüklenme bileşeni ekrana basılır", () => {
  render(<DetailPage />);
});

it("Yüklenme durumunda doğru hata bileşeni ekrana basılır", () => {});

it("Veri gelme durumunda kartlar ekrana basılır", () => {});
