import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable, { createTheme } from 'react-data-table-component';
import { useThemeProvider } from '../utils/ThemeContext';

export default function TableRuangCollaboration() {

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