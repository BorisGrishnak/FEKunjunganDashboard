import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable, { createTheme } from 'react-data-table-component';
import { useThemeProvider } from '../utils/ThemeContext';
import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";
import LoadingSpinner from './LoadingSpinner';

export default function TableRuangCollaboration() {

const [isi, setIsi] = useState([]);

useEffect(() => {
    const interval = setInterval(() => {
    const fetchData = () =>{
     axios.get('https://localhost:7157/api/Peminjaman').then(postData => {
  
     // reshaping the array
     const customHeadings = postData.data.map(item=>({
        "idPeminjaman": item.idPeminjaman,
        "idRuangan": item.idRuangan,
        "namaRuangan": item.ruangan.namaRuangan,
        "namaPIC": item.namaPIC,
        "status":item.status
     }))
     setIsi(customHeadings)
    //   console.log(customHeadings);
     })
    }
    fetchData()
    }, 500);
    return () => clearInterval(interval);
  }, [])

  const handleSwitch = (e) => {
    axios.patch(`https://localhost:7157/api/Peminjaman/Switch/${e.target.id}`,
        { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'} }   
            ).then((response) => {
            Swal.fire({  
                title: 'Success', 
                text: 'Peminjaman dibuka kembali',
                icon: "success",
                confirmButtonText: "OK",
              });
        }).catch((error) => {
            Swal.fire({  
                title: 'Peringatan', 
                text: 'Peminjaman Telah Selesai',
                icon: "warning",
                confirmButtonText: "OK",
              });
            console.log(error);
        })
}

const columns = [
    {
        name: 'Ruangan',
        selector: row => row.namaRuang,
    },
    {
        name: 'Status',
        selector: row => row.status,
    },
    {
        name: 'Dipesan Oleh',
        selector: row => row.dipesan,
    },
    {
        name: 'Aksi',
        selector: row => row.aksi,
    },
];

const [availablebtn, setAvailableBtn] = useState(0);
const [available, setAvailable] = useState('Reserviert');
const [pesan, setPesan] = useState('Suroto');
const handleClick = () => {
    setAvailableBtn(1)
    setAvailable('Frei')
    setPesan('Belum ada tamu')
}

const data = isi.map((d) => (
    {
        id: d.idRuangan,
        idPeminjaman: d.idPeminjaman,
        namaRuang: d.namaRuangan,
        status: d.status,
        dipesan: d.namaPIC,
        aksi: <Button color="red" size="sm" className="rounded-full" onClick={handleSwitch} id={d.idPeminjaman}>Switch</Button>
    }
)).filter((d) => d.status !== "Done" && d.status !== "On Request")

const [pending, setPending] = useState(true);

useEffect(() => {
    const timeout = setTimeout(() => {
        setPending(false);
    }, 600);
    return () => clearTimeout(timeout);
}, []);

const { currentTheme } = useThemeProvider();

    return (
        <DataTable
            pagination
            fixedHeader
            fixedHeaderScrollHeight="300px"
            responsive
            highlightOnHover
            columns={columns}
            data={data}
            progressPending={pending}
            progressComponent={<LoadingSpinner />}
            theme={currentTheme}
        />
    );
}