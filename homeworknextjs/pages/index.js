import Link from "next/link";
import InfoCovid from "./components/covid/infoCovid";
import ListCovid from "./components/covid/listCovid";
import Layout from "./components/toolbar/layout";
import ShowWeather from "./components/weather/ShowWeather";

export default function Home() {
  return <ShowWeather></ShowWeather>;
}
