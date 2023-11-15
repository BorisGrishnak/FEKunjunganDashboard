import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable, { createTheme } from 'react-data-table-component';
import { useThemeProvider } from '../utils/ThemeContext';
import LoadingSpinner from './LoadingSpinner';

export default function TableRuangSynergy() {

const [isi, setIsi] = useState([]);

useEffect(() => {
    const fetchData = () =>{
     axios.get('https://localhost:7157/api/Peminjaman').then(postData => {

     // reshaping the array
     const customHeadings = postData.data.map(item=>({
        "idRuangan": item.idRuangan,
        "ticket": item.tiket,
        "namaPIC": item.namaPIC,
        "startTime": item.startTime,
        "endTime": item.endTime,
        "status": item.status,
     }))
     setIsi(customHeadings)
    //   console.log(customHeadings);
     })
    }
    fetchData()
}, [])  

const wee = isi.map((png) => png).filter(rg => rg.idRuangan == 2 && rg.status !== "Done");
// console.log(wee);

const columns = [
    {
        name: 'Tiket',
        selector: row => row.ticket,
    },
    {
        name: 'PIC',
        selector: row => row.namaPIC,
    },
    {
        name: 'Status',
        selector: row => row.status,
    },
    // {
    //     name: 'Aksi',
    //     selector: row => row.aksi,
    // },
];

const data = [
    {
        id: 1,
        namaRuang: 'Ruang Collaboration',
        availability: 'Dipesan',
        dipesan: 'Suroto',
        // aksi: <Button>a</Button>
    }
]

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
            data={wee}
            progressPending={pending}
            progressComponent={<LoadingSpinner />}
            theme={currentTheme}
        />
    );
}