import React, { useState } from "react";
import axios from "axios";
import LayoutWeather from "./LayoutWeather";

const ShowWeather = () => {
  const [weather, setWeather] = useState({
    temp: "",
    humidity: "",
    weather: "",
    wind: "",
    visibility: "",
  });
  const handleChange = async (e) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&units=metric&appid=06b48d7f898665ae92a12aa3908c5a2e`
      );
      console.log(res.data);
      setWeather({
        temp: res.data.main.temp,
        humidity: res.data.main.humidity,
        weather: res.data.weather[0].description,
        wind: res.data.wind.speed,
        visibility: res.data.visibility,
      });
    } catch (e) {
      console.log(e.response.data.message);
    }
  };

  return (
    <LayoutWeather>
      <div className="row p-5">
        <div className="col">
          <h1>Thời tiết tỉnh thành Việt Nam</h1>
          <select defaultValue="default" onChange={handleChange}>
            <option value="default" disabled hidden>
              -- Choose --
            </option>
            <option value="An Giang">An Giang</option>
            <option value="Bà Rịa">Bà Rịa - Vũng Tàu</option>
            <option value="Bình Định">Bình Định</option>
            <option value="Bạc Liêu">Bạc Liêu</option>
            <option value="Bắc Giang">Bắc Giang</option>
            <option value="Bắc Kạn">Bắc Kạn</option>
            <option value="Bắc Ninh">Bắc Ninh</option>
            <option value="Bến Tre">Bến Tre</option>
            <option value="Cao Bằng">Cao Bằng</option>
            <option value="Cà Mau">Cà Mau</option>
            <option value="Cần Thơ">Cần Thơ</option>
            <option value="Gia Lai">Gia Lai</option>
            <option value="Hà Giang">Hà Giang</option>
            <option value="Hà Nam">Hà Nam</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Hà Tĩnh">Hà Tĩnh</option>
            <option value="Hưng Yên">Hưng Yên</option>
            <option value="Hai Duong">Hải Dương</option>
            <option value="Hải Phòng">Hải Phòng</option>
            <option value="Ho Chi Minh">TP. Hồ Chí Minh</option>
            <option value="Khánh Hòa">Khánh Hòa</option>
            <option value="Kon Tum">Kon Tum</option>
            <option value="Lai Châu">Lai Châu</option>
            <option value="Long An">Long An</option>
            <option value="Lào Cai">Lào Cai</option>
            <option value="Lạng Sơn">Lạng Sơn</option>
            <option value="Nam Định">Nam Định</option>
            <option value="Ninh Bình">Ninh Bình</option>
            <option value="Phú Thọ">Phú Thọ</option>
            <option value="Quảng Ngãi">Quảng Ngãi</option>
            <option value="Quảng Trị">Quảng Trị</option>
            <option value="Sóc Trăng">Sóc Trăng</option>
            <option value="Sơn La">Sơn La</option>
            <option value="Thanh Hóa">Thanh Hóa</option>
            <option value="Thái Bình">Thái Bình</option>
            <option value="Thai Nguyen">Thái Nguyên</option>
            <option value="Hue">Huế</option>
            <option value="Trà Vinh">Trà Vinh</option>
            <option value="Tuyên Quang">Tuyên Quang</option>
            <option value="Tay Ninh">Tây Ninh</option>
            <option value="Vĩnh Long">Vĩnh Long</option>
            <option value="Vĩnh Phúc">Vĩnh Phúc</option>
            <option value="Yên Bái">Yên Bái</option>
            <option value="Da Nang">Đà Nẵng</option>
          </select>
        </div>
        <div className="col">
          <p>Nhiệt độ: {weather.temp} độ C</p>
          <p>Độ ẩm: {weather.humidity}%</p>
          <p>Trời: {weather.weather}</p>
          <p>Sức gió: {weather.wind} m/s</p>
          <p>Tầm nhìn: {weather.visibility / 1000}km</p>
        </div>
      </div>
      <div></div>
    </LayoutWeather>
  );
};

export default ShowWeather;
