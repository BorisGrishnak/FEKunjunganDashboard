import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable, { createTheme } from 'react-data-table-component';
import { useThemeProvider } from '../utils/ThemeContext';
import { Button } from "@material-tailwind/react";

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

function switchBtn() {
    if (availablebtn == 0) {
        return <Button color="red" size="sm" className="rounded-full" onClick={handleClick}>Switch</Button>
    } else {
        return <Button color="green" size="sm" className="rounded-full" disabled={true}>Switch</Button>
    }
}

const data = [
    {
        id: 1,
        namaRuang: 'Ruang Collaboration',
        availability: available,
        dipesan: pesan,
        aksi: switchBtn()
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