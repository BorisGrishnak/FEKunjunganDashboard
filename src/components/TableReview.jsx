import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable, { createTheme } from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { useThemeProvider } from '../utils/ThemeContext';
import { Button } from "@material-tailwind/react";
import ReviewTable from '../partials/review/ReviewTable'
     
export default function TableReview() {

const [isi, setIsi] = useState([]);

useEffect(() => {
    const fetchData = () =>{
        axios.get('https://localhost:7286/api/Review').then(postData => {

        // reshaping the array
        const customHeadings = postData.data.map(item=>({
            "idReview": item.idReview,
            "idPeminjaman": item.idPeminjaman,
            "ticket": item.ticket,
            "namaPIC": item.namaPIC,
            "kenyamanan": item.kenyamanan,
            "kelengkapan": item.kelengkapan,
            "rating": item.rating,
            "saran": item.saran
        }))
        setIsi(customHeadings)
         // console.log(customHeadings);
        })
       }
       fetchData()
     }, [])

function handleNavigate(e) {
    e.preventDefault()
    navigate('/detailreview')
}

const columns = [
    {
        name: 'Tiket',
        selector: row => row.tiket,
    },
    {
        name: 'Nama',
        selector: row => row.nama,
    },
    {
        name: 'Rating',
        selector: row => row.rating,
    },
    {
        name: 'Aksi',
        selector: row => row.aksi,
    },
];

const detail = () => {
    return <Button color="amber" style={{width: 60, fontSize: 9, marginInlineEnd: 1}} size="sm" className="px-0 rounded-full shadow-none" onClick={handleNavigate}>Detail</Button>
}

const data = isi.map((pm) => (
    {
        tiket: pm.ticket,
        nama: pm.namaPIC,
        rating: 
            <div style={{ fontSize: '15px' }}>
                <ReviewTable />
            </div>,
        aksi: [detail()],
    }
))

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