import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from "react";
import { IBookRoom } from "common/dto";
import { useNotificationContext } from "utils/context/notificationContext";
import { $api } from "utils/axios";

// ChartJS.register(ArcElement, Tooltip, Legend);



const PageReport = () => {
  const [data, setData] = useState<IBookRoom[]>([] as IBookRoom[]);
  const { showMessage } = useNotificationContext();

  useEffect(() => {
    // $api.get<IBookRoom[]>("/api/user/getAll")
    //   .then(value => {
    //     setData(value.data)
    //     showMessage("Данные загружены", "success");
    //   }).catch(error => console.error(error))
    console.log("Загрузка данных")

    return () => {
    }
  }, [])


  return (
    <>

    </>
  );
};

export default PageReport;




//
// const arr = [1, 2, 3, 2, 1, 1, 4, 5, 4, 4];
//
// useEffect(() => {
//
// }, [])
// const count: any = {};
// for (const num of arr) {
//     if (count[num]) {
//         count[num]++;
//     } else {
//         count[num] = 1;
//     }
// }
//
// const countArr = Object.entries(count).map(([num, count]) => ({
//     num: parseInt(num, 10),
//     count,
// }));
//
//
// console.log(countArr); // [{num: 1, count: 3}, {num: 2, count: 2}, {num: 3, count: 1}, {num: 4, count: 3}, {num: 5, count: 1}]
//
// const data = {
//     labels: countArr.map((obj: any) => obj.num),
//     datasets: [
//         {
//             label: '# of Votes',
//             data: countArr.map((obj: any) => obj.count),
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)',
//             ],
//             borderWidth: 1,
//         },
//     ],
// };
//
// return <Pie data={data} />;