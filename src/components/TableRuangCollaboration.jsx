import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable, { createTheme } from 'react-data-table-component';
import { useThemeProvider } from '../utils/ThemeContext';
import LoadingSpinner from './LoadingSpinner';

export default function TableRuangCollaboration() {

const [isi, setIsi] = useState([]);

useEffect(() => {
    const fetchData = () =>{
     axios.get('https://localhost:7055/api/Member').then(postData => {

     // reshaping the array
     const customHeadings = postData.data.map(item=>({
        "idMember": item.idMember,
        "namaMember": item.namaMember,
        "idPaket": item.idPaket
     }))
     setIsi(customHeadings)
    //   console.log(customHeadings);
     })
    }
    fetchData()
}, [])  

const wee = isi.map((png) => png);
// console.log(wee);

const columns = [
    {
        name: 'Ruangan',
        selector: row => row.namaRuang,
    },
    {
        name: 'Availability',
        selector: row => row.availability,
    },
    {
        name: 'Dipesan Oleh',
        selector: row => row.dipesan,
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
            data={data}
            progressPending={pending}
            progressComponent={<LoadingSpinner />}
            theme={currentTheme}
        />
    );
}