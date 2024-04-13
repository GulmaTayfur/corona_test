import { render, screen } from "@testing-library/react";
import DetailPage from "./index";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { storeData } from "../../constants";

// test ortamındaki store'un krulumunu yap thunk middleware'i kullandığımızı söyle
const mockStore = configureStore([thunk]);

it("Yüklenme durumunda doğru bileşenler ekrana basılır", () => {
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

it("Hata durumunda doğru hata bileşeni ekrana basılır", () => {
  // store'un hata durumundaki verisini simüle et
  const store = mockStore({
    isLoading: false,
    error: "Request failed with status code 404",
    data: null,
  });
  // test edilecek bileşeni renderla
  render(
    <Provider store={store}>
      <BrowserRouter>
        <DetailPage />
      </BrowserRouter>
    </Provider>
  );

  // hatanın mesajını gösteren bileşen ekrana basıldı mı?
  screen.getByText(/failed with/i);
});

it("Veri gelme durumunda kartlar ekrana basılır", () => {
  const store = mockStore(storeData);
  render(
    <Provider store={store}>
      <BrowserRouter>
        <DetailPage />
      </BrowserRouter>
    </Provider>
  );

  // Ülke bayrağı ekrana geliyor mu
  const image = screen.getByRole("img");

  // resmin kaynağı doğru mu?
  expect(image).toHaveProperty("src", "https://flagcdn.com/br.svg");
  // Ülke başlığı ekrana geliyor mu
  const title = screen.getByTestId("title");

  // başlığın içeriği doğru mu
  expect(title).toHaveTextContent("Brazil");

  // kartlar ekrana geliyor mu?

  // covid nesnesini bileşendeki gibi diziye çevirdik
  const covidData = Object.entries(storeData.data.covid);

  // dizideki her bir eleman için key ve value değerleri ekrana basılıyor mu kontrol et
  covidData.forEach((item) => {
    // başlıklar doğru geldi mi?
    screen.getAllByText(item[0].split("_").join(" "), { exact: false });

    // değerler doğru geldi mi?
    screen.getAllByText(item[1]);
  });
});
