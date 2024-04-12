import { render, screen } from "@testing-library/react";
import ErrorDisplay from "./index";
import userEvent from "@testing-library/user-event";

describe("error display bileşeni", () => {
  test("Doğru mesajı gösterir", () => {
    const errorMessage = "404 content was not found";
    render(<ErrorDisplay message={errorMessage} retry={() => {}} />);

    //Doğru hata mesajına sahip yazı var mı

    screen.getByText(errorMessage);
  });

  test("Tekrar dene butonuna tıklanınca fonksiyon çalışır", async () => {
    // userı kur
    const user = userEvent.setup();
    // bir test / mock fonksiyonu oluştur
    const retryMock = jest.fn();

    // bileşenei renderla
    render(<ErrorDisplay message={"xx"} retry={retryMock} />);

    // butonu çağır
    const button = screen.getByRole("button");

    // butona tıkla
    await user.click(button);

    // fonksiyon çağrıldı mı kontrol et
    expect(retryMock).toHaveBeenCalled();
  });
});
