import { createAsyncThunk } from "@reduxjs/toolkit";
import { headers } from "../constants/index";
import axios from "axios";

//api'lardan bayrak ve ülke corona verisini alacak ve slice'a aktaracak asenkron thunk aksiyonu yazalım

export const getData = createAsyncThunk("countryData", async (isoCode) => {
  //api isteğinde kullanılacak parametreyi belirle
  const params = { q: isoCode };

  // corona bilgilerini alacağımız api isteğini ayarla
  const req1 = axios.get(`https://covid-19-statistics.p.rapidapi.com/reports`, {
    params,
    headers,
  });
  // ülke detaylarını alacağımız api isteğini ayarla
  const req2 = axios.get(`https://restcountries.com/v3.1/name/${isoCode}`);

  // her iki api isteğini senkron paralel bir şekilde gönder
  const responses = await Promise.all([req1, req2]);

  // covid bilgilerindeki region nesnesini covid nesnesi içerisinde dağt

  const covid = {
    ...responses[0].data.data[0],
    ...responses[0].data.data[0].region,
  };

  delete covid.region;
  delete covid.cities;

  //payloadı return edeceğiz
  return {
    covid,
    country: responses[1].data[0],
  };
});
