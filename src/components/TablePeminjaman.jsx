import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable, { createTheme } from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { useThemeProvider } from '../utils/ThemeContext';
import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";
import LoadingSpinner from './LoadingSpinner';

export default function TablePeminjaman() {

const [status, setStatus] = useState([])
const [isi, setIsi] = useState([]);

useEffect(() => {
    const interval = setInterval(() => {
    const fetchData = () =>{
        axios.get('https://localhost:7286/api/Peminjaman').then(postData => {

        // reshaping the array
        const customHeadings = postData.data.map(item=>({
           "idPeminjaman": item.idPeminjaman,
           "idRuangan": item.idRuangan,
           "ticket": item.ticket,
           "namaPIC": item.namaPIC,
           "email": item.email,
           "noHp": item.noHp,
           "jumlahTamu": item.jumlahTamu,
           "startTime": item.startTime,
           "endTime": item.endTime,
           "keperluan": item.keperluan,
           "detailKeperluan": item.detailKeperluan,
           "status": item.status,
        }))
        setIsi(customHeadings)
        })
       }
       fetchData()
    }, 500);
    return () => clearInterval(interval);
     }, [])

useEffect(() => {
    const interval = setInterval(() => {
    const fetchData = () =>{
        axios.get('https://localhost:7286/api/Review').then(postData => {

        // reshaping the array
        const customHeadings = postData.data.map(item=>({
            "idReview": item.idReview,
            "idPeminjaman": item.idPeminjaman,
            "ticket": item.ticket,
            "namaPIC": item.namaPIC,
            "kenyamanan": item.kenyamanan,
            "fungsional": item.fungsional,
            "rating": item.rating,
            "saran": item.saran
        }))
        setReview(customHeadings)
         // console.log(customHeadings);
        })
    }
fetchData()
}, 500);
return () => clearInterval(interval);
 }, [])

const navigate = useNavigate();

const columns = [
    {
        name: 'Tiket',
        selector: row => row.tiket,
    },
    {
        name: 'PIC',
        selector: row => row.pic,
    },
    {
        name: 'Status',
        selector: row => row.status,
    },
    {
        name: 'Aksi',
        selector: row => row.aksi,
    },
];

const handleClick = (e) => {
    axios.patch(`https://localhost:7286/api/Peminjaman/Approval/${e.target.id}`,
        { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'} }   
            ).then(() => {
                Swal.fire({  
                    title: 'Berhasil', 
                    text: 'Peminjaman Disetujui',
                    icon: "success",
                    confirmButtonText: "OK",
                  });
        }).catch((error) => {
            Swal.fire({  
                title: 'Peringatan', 
                text: 'Peminjaman telah selesai',
                icon: "warning",
                confirmButtonText: "OK",
              });
        })
}

const handleCancel = (e) => {
    axios.patch(`https://localhost:7286/api/Peminjaman/Cancel/${e.target.id}`,
        { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'} }   
            ).then(() => {
                Swal.fire({  
                    title: 'Berhasil', 
                    text: 'Peminjaman Dibatalkan',
                    icon: "success",
                    confirmButtonText: "OK",
                  });
        }).catch((error) => {
            Swal.fire({  
                title: 'Peringatan', 
                text: 'Peminjaman telah selesai',
                icon: "warning",
                confirmButtonText: "OK",
              });
        })
}

function handleNavigate(e) {
    // console.log(e.target.id)
    e.preventDefault()
    navigate('/detailpeminjaman',
    {
        state:{
          id: e.target.id,
          status: status
        }
    })
}

const data = isi.map((pm) => (
    {
        id: pm.idPeminjaman,
        tiket: pm.ticket,
        pic: pm.namaPIC,
        status: pm.status,
        aksi: [
            <Button color="green" style={{width: 60, fontSize: 9, marginInlineEnd: 1}} size="sm" className="px-0 rounded-full shadow-none" onClick={handleClick} id={pm.idPeminjaman}>Approve</Button>,
            <Button color="red" style={{width: 60, fontSize: 9, marginInlineEnd: 1}} size="sm" className="px-0 rounded-full shadow-none" onClick={handleCancel} id={pm.idPeminjaman}>Cancel</Button>,
            <Button color="amber" style={{width: 60, fontSize: 9, marginInlineEnd: 1}} size="sm" className="px-0 rounded-full shadow-none" onClick={handleNavigate} id={pm.idPeminjaman}>Detail</Button>
        ],
    }
)).filter((d) => d.status !== "Done")

const [pending, setPending] = useState(true);

useEffect(() => {
    const timeout = setTimeout(() => {
        setPending(false);
    }, 600);
    return () => clearTimeout(timeout);
}, []);

const war = data.map((dat) => dat.id);
// console.log(war[0]);

const { currentTheme } = useThemeProvider();

    return (
        <DataTable
            pagination
            fixedHeader
            fixedHeaderScrollHeight="300px"
            responsive
            highlightOnHover
            keyField={data.id}
            columns={columns}
            data={data}
            progressPending={pending}
            progressComponent={<LoadingSpinner />}
            theme={currentTheme}
        />
    );
}