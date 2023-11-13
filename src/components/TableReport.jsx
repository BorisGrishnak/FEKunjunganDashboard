import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable, { createTheme } from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { useThemeProvider } from '../utils/ThemeContext';
import moment from 'moment/moment';
import LoadingSpinner from './LoadingSpinner';

export default function TableReport(props) {

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
        selector: row => row.ruangan,
    },
    {
        name: 'Status',
        selector: row => row.status,
    },
    {
        name: 'Tanggal',
        selector: row => row.tanggal,
    },
    {
        name: 'Waktu',
        selector: row => row.waktu,
    },
    {
        name: 'Keperluan',
        selector: row => row.keperluan,
    },
    {
        name: 'Jumlah Tamu',
        selector: row => row.jumlahTamu,
    },
];

const [pending, setPending] = useState(true);

useEffect(() => {
    const timeout = setTimeout(() => {
        setPending(false);
    }, 600);
    return () => clearTimeout(timeout);
}, []);
// console.log(war[0]);

const { currentTheme } = useThemeProvider();

    return (
        <DataTable
            pagination
            fixedHeader
            fixedHeaderScrollHeight="300px"
            responsive
            highlightOnHover
            keyField={props.data.id}    
            columns={columns}
            data={props.data}
            progressPending={pending}
            progressComponent={<LoadingSpinner />}
            theme={currentTheme}
        />
    );
}