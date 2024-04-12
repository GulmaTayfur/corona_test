import { render, screen } from "@testing-library/react";
import DetailPage from "./index";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";

// test ortamındaki store'un krulumunu yap thunk middleware'i kullandığımızı söyle
const mockStore = configureStore([thunk]);

it("Yüklenme durumunda doğru yüklenme bileşeni ekrana basılır", () => {
  // store'un yüklenmed durumundaki halini simüle et
  const store = mockStore({
    isLoading: true,
    error: false,
    data: null,
  });

  // bileşeni gerekli kapsayıcıları tanımlayarak renderla
  render(
    <Provider store={store}>
      <BrowserRouter>
        <DetailPage />
      </BrowserRouter>
    </Provider>
  );

  // loader ekrana geliyor mu kontrol et
  screen.getAllByTestId("card-loader");
  screen.getByTestId("header-loader");
});

it("Yüklenme durumunda doğru hata bileşeni ekrana basılır", () => {});

it("Veri gelme durumunda kartlar ekrana basılır", () => {});
