import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable, { createTheme } from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { useThemeProvider } from '../utils/ThemeContext';
import { Button } from "@material-tailwind/react";
import ReviewTable from '../partials/review/ReviewTable'
import LoadingSpinner from './LoadingSpinner';
     
export default function TableReview() {

const [isi, setIsi] = useState([]);
const navigate = useNavigate();

useEffect(() => {
    const interval = setInterval(() => {
        const fetchData = () =>{
            axios.get('https://localhost:7157/api/Review').then(postData => {

            // reshaping the array
            const customHeadings = postData.data.map(item=>({
                "idReview": item.idReview,
                "idPeminjaman": item.peminjaman.idPeminjaman,
                "ticket": item.peminjaman.tiket,
                "namaPIC": item.peminjaman.namaPIC,
                "kenyamanan": item.kenyamanan,
                "fungsional": item.fungsional,
                "rating": item.rating,
                "saran": item.saran
            }))
            setIsi(customHeadings)
             // console.log(customHeadings);
            })
           }
           fetchData()
    }, 100);
return () => clearInterval(interval);
}, [])

function handleNavigate(e) {
    e.preventDefault()
    navigate('/detailreview',
    {
        state:{
          id: e.target.id
        }
    })
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

const data = isi.map((pm, index) => (
    {
        key: index,
        tiket: pm.ticket,
        nama: pm.namaPIC,
        rating: 
            <div style={{ fontSize: '15px' }}>
                <ReviewTable value={pm.rating} />
            </div>,
        aksi: <Button color="amber" style={{width: 60, fontSize: 9, marginInlineEnd: 1}} size="sm" className="px-0 rounded-full shadow-none" onClick={handleNavigate} id={pm.idReview}>Detail</Button>,
    }
))

const { currentTheme } = useThemeProvider();

const [pending, setPending] = useState(true);

useEffect(() => {
    const timeout = setTimeout(() => {
        setPending(false);
    }, 600);
    return () => clearTimeout(timeout);
}, []);

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