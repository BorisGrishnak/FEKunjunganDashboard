import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment/moment'
import BarChart from '../../charts/BarChart01';
import LoadingSpinner from '../../components/LoadingSpinner';
import { Button } from "@material-tailwind/react";

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard04() {

  const [isi, setIsi] = useState([]);
  const [minggu, setMinggu] = useState(0)
  const [enam, setEnam] = useState(0)
  const [lima, setLima] = useState(0)
  const [empat, setEmpat] = useState(0)
  const [tiga, setTiga] = useState(0)
  const [dua, setDua] = useState(0)
  const [kemaren, setKemarin] = useState(0)
  const [showComponent, setShowComponent] = useState(false); 

  useEffect(() => { 
    const timeout = setTimeout(() => { 
      setShowComponent(true); 
    }, 1000); 
 
    return () => clearTimeout(timeout); 
  }, []); 

  // console.log(dat.map(row => row.book));

  useEffect(() => {
    const interval = setInterval(() => {
      const fetchData = () =>{
          axios.get('https://localhost:7286/api/Peminjaman').then(postData => {
  
       // reshaping the array
       const customHeadings = postData.data.map(item=>({
          "idPeminjaman": item.idPeminjaman,
          "ticket": item.ticket,
          "namaPIC": item.namaPIC,
          "email": item.email,
          "noHp": item.noHp,
          "startTime": item.startTime,
          "now": moment(item.startTime).format('DD-MM-YY')
       }))
       const dataMingguLalu = customHeadings.filter((d) => d.now == mingguLalu).map((d) => d)
       setMinggu(Number(dataMingguLalu.length))
       const dataEnamLalu = customHeadings.filter((d) => d.now == enamLalu).map((d) => d)
       setEnam(Number(dataEnamLalu.length))
       const dataLimaLalu = customHeadings.filter((d) => d.now == limaLalu).map((d) => d)
       setLima(Number(dataLimaLalu.length))
       const dataEmpatLalu = customHeadings.filter((d) => d.now == empatLalu).map((d) => d)
       setEmpat(Number(dataEmpatLalu.length))
       const dataTigaLalu = customHeadings.filter((d) => d.now == tigaLalu).map((d) => d)
       setTiga(Number(dataTigaLalu.length))
       const dataDuaLalu = customHeadings.filter((d) => d.now == duaLalu).map((d) => d)
       setDua(Number(dataDuaLalu.length))
       const dataKemaren = customHeadings.filter((d) => d.now == kemarin).map((d) => d)
       setKemarin(Number(dataKemaren.length))
       setIsi(customHeadings)
        // console.log(dataEmpatLalu);
       })
      }
      fetchData()
    }, 500);
    return () => clearInterval(interval);
     }, [isi])

    //  console.log(isi);
  
  const mingguLalu = moment().subtract(7, 'days').format('DD-MM-YY')
  const enamLalu = moment().subtract(6, 'days').format('DD-MM-YY')
  const limaLalu = moment().subtract(5, 'days').format('DD-MM-YY')
  const empatLalu = moment().subtract(4, 'days').format('DD-MM-YY')
  const tigaLalu = moment().subtract(3, 'days').format('DD-MM-YY')
  const duaLalu = moment().subtract(2, 'days').format('DD-MM-YY')
  const kemarin = moment().subtract(1, 'days').format('DD-MM-YY')

  // const label = [mingguLalu, enamLalu, limaLalu, empatLalu, tigaLalu, duaLalu, kemarin]
  const dat = [
    { label: mingguLalu, book: minggu },
    { label: enamLalu, book: enam },
    { label: limaLalu, book: lima },
    { label: empatLalu, book: empat },
    { label: tigaLalu, book: tiga },
    { label: duaLalu, book: dua },
    { label: kemarin, book: kemaren },
  ];
  // console.log(empat);

  const dataEmpatLalu = isi.filter((d) => d.now == empatLalu)

  const chartData = {
    labels: dat.map(row => row.label),
    datasets: [
      // Blue bars
      {
        label: 'Indirect',
        data: dat.map(row => row.book),
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  function bChart() {
    if (showComponent == true) {
      return <BarChart data={chartData} width={595} height={248} /> 
    } else {
      return (
      <div className="text-center pt-14 pb-10">
        <LoadingSpinner />
      </div> 
      )
    }
  }

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100 text-center">Jumlah Tamu Dalam Seminggu Terakhir</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      {bChart()}
      {/* { showComponent && <BarChart data={chartData} width={595} height={248} /> } */}
    </div>
  );
}

export default DashboardCard04;
