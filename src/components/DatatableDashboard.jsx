import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment/moment'
import DataTable from 'react-data-table-component';
import { useThemeProvider } from '../utils/ThemeContext';
import LoadingSpinner from './LoadingSpinner';

export default function DatatableDashboard() {
    
const [isi, setIsi] = useState([]);

useEffect(() => {
    const fetchData = () =>{
        axios.get('https://localhost:7286/api/Peminjaman').then(postData => {

     // reshaping the array
     const customHeadings = postData.data.map(item=>({
        "idPeminjaman": item.idPeminjaman,
        "ticket": item.ticket,
        "namaPIC": item.namaPIC,
        "email": item.email,
        "noHp": item.noHp,
        "startTime": item.startTime,
     }))
     setIsi(customHeadings)
    //   console.log(customHeadings);
     })
    }
    fetchData()
}, [])  

const wee = isi.map((pm) => (
    {
        id: pm.idPeminjaman,
        ticket: pm.ticket,
        namaPIC: pm.namaPIC,
        email: pm.email,
        noHp: pm.noHp,
        startTime: pm.startTime,
        now: moment(pm.startTime).format('DD-MM-yyyy'),
    }
)).filter((d) => d.now == moment().format('DD-MM-yyyy'))

const columns = [
    {
        name: 'Tiket',
        selector: row => row.ticket,
    },
    {
        name: 'Nama PIC',
        selector: row => row.namaPIC,
    },
    {
        name: 'Email',
        selector: row => row.email,
    },
    {
        name: 'No. Hp',
        selector: row => row.noHp,
    },
];

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