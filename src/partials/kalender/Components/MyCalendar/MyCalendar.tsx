import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from "moment";
import Calendar from "../Calendar";

export default function MyCalendar() {

const [isi, setIsi] = useState<any[]>([]);

useEffect(() => {
    const fetchData = () =>{
        axios.get('https://localhost:7286/api/Peminjaman').then(postData => {

        // reshaping the array
        const customHeadings = postData.data.map((item: { idPeminjaman: "item.idPeminjaman"; idRuangan: any; namaPIC: any; email: any; noHp: any; jumlahTamu: any; startTime: any; endTime: any; keperluan: any; status: any; })=>({
            "idPeminjaman": item.idPeminjaman,
            "idRuangan": item.idRuangan,
            "namaPIC": item.namaPIC,
            "email": item.email,
            "noHp": item.noHp,
            "jumlahTamu": item.jumlahTamu,
            "startTime": item.startTime,
            "endTime": item.endTime,
            "keperluan": item.keperluan,
            "status": item.status,
        }))
        setIsi(customHeadings)
         // console.log(customHeadings);
        })
       }
       fetchData()
}, [])


const wee = isi.map((pm) => ({
    start: moment(pm.startTime).toDate(),
    end: moment(pm.endTime).toDate(),
    title: [pm.namaPIC, ": ", pm.keperluan],
    data: {
      type: "App",
    },
}));

// const events = [
//   {
//     start: moment(start).toDate(),
//     end: moment("end").toDate(),
//     title: "namaPIC",
//     data: {
//       type: "App",
//     },
//   }
// ];

const components = {
  event: (props: any) => {
    const eventType = props?.event?.data?.type;
    switch (eventType) {
      case "App":
        return (
          <div
            style={{ background: "#FDD60C", color: "black", height: "100%" }}
          >
            {props.title}
          </div>
        );
      default:
        return null;
    }
  },
};

  return <Calendar events={wee} components={components} />;
}
