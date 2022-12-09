import React, { useEffect, useState } from "react";
import axios from "axios";

const ListCovid = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const responsive = await axios.get(
        `https://api.covid19api.com/total/country/vietnam`
      );
      for (
        let i = responsive.data.length - 1;
        i >= responsive.data.length - 10;
        i--
      ) {
        list.push(responsive.data[i]);
        setList([...list]);
      }
    };
    fetchData();
  }, []);
  console.log(list);
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
          {list.map((item, index) => (
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
export default ListCovid;

// export async function getStaticProps() {
//   const [list, setList] = useState([{}]);
//   const responsive = await axios.get(
//     `https://api.covid19api.com/total/country/vietnam`
//   );
//   for (
//     let i = responsive.data.length - 1;
//     i >= responsive.data.length - 10;
//     i--
//   ) {
//     list.push(responsive.data[i]);
//     setList([...list]);
//   }
//   console.log(list);
//   return { props: { posts: list } };
// }
