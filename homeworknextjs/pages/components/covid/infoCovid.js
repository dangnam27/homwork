import axios from "axios";
export async function getStaticProps() {
  const data = await axios.get(
    `https://api.covid19api.com/total/country/vietnam`
  );

  return {
    props: {
      covidInfo: data.data.slice(-10),
    },
  };
}
const InfoCovid = ({ covidInfo }) => {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Recovered</th>
            <th>Death</th>
            <th>Index</th>
          </tr>
        </thead>
        <tbody>
          {covidInfo.map((item, index) => (
            <tr key={index}>
              <td>{item.Date}</td>
              <td>{item.Confirmed}</td>
              <td>{item.Active}</td>
              <td>{item.Recovered}</td>
              <td>{item.Death}</td>
              <td>{index}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InfoCovid;
