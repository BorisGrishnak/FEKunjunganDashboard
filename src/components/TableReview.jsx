import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable, { createTheme } from 'react-data-table-component';
import { useThemeProvider } from '../utils/ThemeContext';
import { Button } from "@material-tailwind/react";

export default function TableReview() {

// const [isi, setIsi] = useState([]);

// useEffect(() => {
//     const fetchData = () =>{
//      axios.get('https://localhost:7225/api/Tamu').then(postData => {

//      // reshaping the array
//      const customHeadings = postData.data.map(item=>({
//        "idTamu": item.idTamu,
//        "namaTamu": item.namaTamu,
//        "emailTamu": item.emailTamu,
//        "kepentingan": item.kepentingan,
//      }))
//      setIsi(customHeadings)
//     //   console.log(customHeadings);
//      })
//     }
//     fetchData()
// }, [])  

// const wee = isi.map((png) => png);
// console.log(wee);

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
        name: 'Ruangan',
        selector: row => row.namaRuang,
    },
    {
        name: 'Tanggal, Jam Mulai',
        selector: row => row.tanggalJamMulai,
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

const [approve, setApprove] = useState(0);
const [canceled, setCanceled] = useState(0);
const [status, setStatus] = useState('On Request')

const handleClick = () => {
    setApprove(1)
    setCanceled(2)
    setStatus('Approved')
}

const handleCancel = () => {
    setCanceled(1)
    setApprove(2)
    setStatus('Cancelled')
}

function approval() {
    if (approve == 0) {
        return <Button color="green" style={{width: 80, fontSize: 8, marginInlineEnd: 1}} size="sm" className="rounded-full" onClick={handleClick}>Approve</Button>
    } 
    if (approve == 2) {
        return <Button color="grey" style={{width: 80, fontSize: 8, marginInlineEnd: 1}} size="sm" className="rounded-full" disabled={true}>-</Button>
    }else {
        return <Button color="green" style={{width: 80, fontSize: 8, marginInlineEnd: 1}} size="sm" className="rounded-full" disabled={true}>Approved</Button>
    }
}

function cancel() {
    if (canceled == 0) {
        return <Button color="red" style={{width: 80, fontSize: 8, marginInlineEnd: 1}} size="sm" className="rounded-full" onClick={handleCancel}>Cancel</Button>
    } 
    if (canceled == 2) {
        return <Button color="grey" style={{width: 80, fontSize: 8, marginInlineEnd: 1}} size="sm" className="rounded-full" disabled={true}>-</Button>
    }else {
        return <Button color="red" style={{width: 80, fontSize: 8, marginInlineEnd: 1}} size="sm" className="rounded-full" disabled={true}>Cancelled</Button>
    }
}

const data = [
    {
        id: 666,
        tiket: 666,
        pic: 'Anton Szandor LaVey',
        namaRuang: 'Ruang Collaboration',
        tanggalJamMulai: '24/10/2023, 09:00',
        status: status,
        aksi: [approval(), cancel()],
    }
]

const { currentTheme } = useThemeProvider();

    return (
        <DataTable
            pagination
            fixedHeader
            fixedHeaderScrollHeight="300px"
            responsive
            columns={columns}
            data={data}
            theme={currentTheme}
        />
    );
}