import React, { useState, useEffect } from 'react';

import axios from 'axios';
import moment from 'moment/moment';
import Select from 'react-select';
import TableReport from '../../components/TableReport';
import { ExportExcel } from '../../components/ExportToExcel';
import { Button } from "@material-tailwind/react";

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function ReportCard01() {

    const tahunIni = moment().format('yyyy');

    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [bulan, setBulan] = useState(0)
    const [namaBulan, setNamaBulan] = useState('All')
    const [tahun, setTahun] = useState(tahunIni)

    const [isi, setIsi] = useState([]);
    const [xlsxdata, setXlsxData] = React.useState([])

    const fileName = ["Rekap Peminjaman Ruang Command Center " + namaBulan + ' ' + tahun];

useEffect(() => {
    const interval = setInterval(() => {
    const fetchData = () =>{
        axios.get('https://localhost:7157/api/Peminjaman').then(postData => {

        // reshaping the array
        const customHeadings = postData.data.map(item=>({
           "idPeminjaman": item.idPeminjaman,
           "idRuangan": item.idRuangan,
           "ticket": item.tiket,
           "namaPIC": item.namaPIC,
           "namaRuangan": item.ruangan.namaRuangan,
           "email": item.email,
           "noHp": item.noHP,
           "jumlahTamu": item.jumlahTamu,
           "startTime": item.startTime,
           "endTime": item.endTime,
           "keperluan": item.kepentingan,
           "detailKeperluan": item.detailKepentingan,
           "status": item.status,
        }))
        const xlsxData = postData.data.map(item=>({
           "IdPeminjaman": item.idPeminjaman,
           "IdRuangan": item.idRuangan,
           "Ticket": item.tiket,
           "Nama PIC": item.namaPIC,
           "Nama Ruangan": item.ruangan.namaRuangan,
           "Email": item.email,
           "No Hp": item.noHP,
           "Jumlah Tamu": item.jumlahTamu,
           "Tanggal": moment(item.startTime).format('DD MMM yyyy'),
           "Waktu Mulai": moment(item.startTime).format('LT'),
           "Waktu Selesai": moment(item.endTime).format('LT'),
           "Keperluan": item.kepentingan,
           "detailKeperluan": item.detailKepentingan,
           "Status": item.status,
           "tanggalMent": item.startTime,
        }))
        setIsi(customHeadings)
        setXlsxData(xlsxData) 
        })
       }
       fetchData()
    }, 500);
    return () => clearInterval(interval);
     }, [])
    // console.log(isi);
    const data = isi.map((pm) => (
      {
          id: pm.idPeminjaman,
          tiket: pm.ticket,
          pic: pm.namaPIC,
          ruangan: pm.namaRuangan,
          status: pm.status,
          tanggalMent: pm.startTime,
          tanggal: moment(pm.startTime).format('DD MMM yyyy'),
          waktu: [moment(pm.startTime).format('LT'), ' - ', moment(pm.endTime).format('LT')],
          keperluan: pm.keperluan,
          jumlahTamu: [pm.jumlahTamu, ' orang'],
      }
  ))

  // Table Data Filter by Date

  const jan = data.filter((d) => moment(d.tanggalMent).format('MMM') === 'Jan' && moment(d.tanggalMent).format('yyyy') === tahun)

  const feb = data.filter((d) => moment(d.tanggalMent).format('MMM') === 'Feb' && moment(d.tanggalMent).format('yyyy') === tahun)

  const mar = data.filter((d) => moment(d.tanggalMent).format('MMM') === 'Mar' && moment(d.tanggalMent).format('yyyy') === tahun)

  const apr = data.filter((d) => moment(d.tanggalMent).format('MMM') === 'Apr' && moment(d.tanggalMent).format('yyyy') === tahun)

  const mei = data.filter((d) => moment(d.tanggalMent).format('MMM') === 'Mei' && moment(d.tanggalMent).format('yyyy') === tahun)

  const jun = data.filter((d) => moment(d.tanggalMent).format('MMM') === 'Jun' && moment(d.tanggalMent).format('yyyy') === tahun)

  const jul = data.filter((d) => moment(d.tanggalMent).format('MMM') === 'Jul' && moment(d.tanggalMent).format('yyyy') === tahun)

  const agu = data.filter((d) => moment(d.tanggalMent).format('MMM') === 'Agu' && moment(d.tanggalMent).format('yyyy') === tahun)

  const sep = data.filter((d) => moment(d.tanggalMent).format('MMM') === 'Sep' && moment(d.tanggalMent).format('yyyy') === tahun)

  const okt = data.filter((d) => moment(d.tanggalMent).format('MMM') === 'Okt' && moment(d.tanggalMent).format('yyyy') === tahun)

  const nov = data.filter((d) => moment(d.tanggalMent).format('MMM') === 'Nov' && moment(d.tanggalMent).format('yyyy') === tahun)

  const des = data.filter((d) => moment(d.tanggalMent).format('MMM') === 'Des' && moment(d.tanggalMent).format('yyyy') === tahun)


  // Export Data by Month
  const janx = xlsxdata.filter((d) => moment(d.tanggalMent).format('MMM') === 'Jan' && moment(d.tanggalMent).format('yyyy') === tahun)

  const febx = xlsxdata.filter((d) => moment(d.tanggalMent).format('MMM') === 'Feb' && moment(d.tanggalMent).format('yyyy') === tahun)

  const marx = xlsxdata.filter((d) => moment(d.tanggalMent).format('MMM') === 'Mar' && moment(d.tanggalMent).format('yyyy') === tahun)

  const aprx = xlsxdata.filter((d) => moment(d.tanggalMent).format('MMM') === 'Apr' && moment(d.tanggalMent).format('yyyy') === tahun)

  const meix = xlsxdata.filter((d) => moment(d.tanggalMent).format('MMM') === 'Mei' && moment(d.tanggalMent).format('yyyy') === tahun)

  const junx = xlsxdata.filter((d) => moment(d.tanggalMent).format('MMM') === 'Jun' && moment(d.tanggalMent).format('yyyy') === tahun)

  const julx = xlsxdata.filter((d) => moment(d.tanggalMent).format('MMM') === 'Jul' && moment(d.tanggalMent).format('yyyy') === tahun)

  const agux = xlsxdata.filter((d) => moment(d.tanggalMent).format('MMM') === 'Agu' && moment(d.tanggalMent).format('yyyy') === tahun)

  const sepx = xlsxdata.filter((d) => moment(d.tanggalMent).format('MMM') === 'Sep' && moment(d.tanggalMent).format('yyyy') === tahun)

  const oktx = xlsxdata.filter((d) => moment(d.tanggalMent).format('MMM') === 'Okt' && moment(d.tanggalMent).format('yyyy') === tahun)

  const novx = xlsxdata.filter((d) => moment(d.tanggalMent).format('MMM') === 'Nov' && moment(d.tanggalMent).format('yyyy') === tahun)

  const desx = xlsxdata.filter((d) => moment(d.tanggalMent).format('MMM') === 'Des' && moment(d.tanggalMent).format('yyyy') === tahun)


    const options = [
        { value: 0, label: 'All' },
        { value: 1, label: 'Januari' },
        { value: 2, label: 'Februari' },
        { value: 3, label: 'Maret' },
        { value: 4, label: 'April' },
        { value: 5, label: 'Mei' },
        { value: 6, label: 'Juni' },
        { value: 7, label: 'Juli' },
        { value: 8, label: 'Agustus' },
        { value: 9, label: 'September' },
        { value: 10, label: 'Oktober' },
        { value: 11, label: 'November' },
        { value: 12, label: 'Desember' },
    ]

  function renderTable() {
    switch (bulan) {
      case 0:
        return <TableReport data={data} />
        break;
    
      case 1:
        return <TableReport data={jan} />
        break;
    
      case 2:
        return <TableReport data={feb} />
        break;
    
      case 3:
        return <TableReport data={mar} />
        break;
    
      case 4:
        return <TableReport data={apr} />
        break;
    
      case 5:
        return <TableReport data={mei} />
        break;
    
      case 6:
        return <TableReport data={jun} />
        break;
    
      case 7:
        return <TableReport data={jul} />
        break;
    
      case 8:
        return <TableReport data={agu} />
        break;
    
      case 9:
        return <TableReport data={sep} />
        break;
    
      case 10:
        return <TableReport data={okt} />
        break;
    
      case 11:
        return <TableReport data={nov} />
        break;
    
      case 12:
        return <TableReport data={des} />
        break;
    
    }
  }

  function exportTable() {
    switch (bulan) {
      case 0:
        return <ExportExcel apiData={xlsxdata} fileName={fileName}></ExportExcel>
        break;
    
      case 1:
        return <ExportExcel apiData={janx} fileName={fileName}></ExportExcel>
        break;
    
      case 2:
        return <ExportExcel apiData={febx} fileName={fileName}></ExportExcel>
        break;
    
      case 3:
        return <ExportExcel apiData={marx} fileName={fileName}></ExportExcel>
        break;
    
      case 4:
        return <ExportExcel apiData={aprx} fileName={fileName}></ExportExcel>
        break;
    
      case 5:
        return <ExportExcel apiData={meix} fileName={fileName}></ExportExcel>
        break;
    
      case 6:
        return <ExportExcel apiData={junx} fileName={fileName}></ExportExcel>
        break;
    
      case 7:
        return <ExportExcel apiData={julx} fileName={fileName}></ExportExcel>
        break;
    
      case 8:
        return <ExportExcel apiData={agux} fileName={fileName}></ExportExcel>
        break;
    
      case 9:
        return <ExportExcel apiData={sepx} fileName={fileName}></ExportExcel>
        break;
    
      case 10:
        return <ExportExcel apiData={oktx} fileName={fileName}></ExportExcel>
        break;
    
      case 11:
        return <ExportExcel apiData={novx} fileName={fileName}></ExportExcel>
        break;
    
      case 12:
        return <ExportExcel apiData={desx} fileName={fileName}></ExportExcel>
        break;
    
    }
  }

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 md:col-span-12 xl:col-span-12 pb-7 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
          <div className="mb-3">
          <input 
            placeholder="Tahun" 
            defaultValue={tahunIni} 
            type="number" 
            min={2023} 
            max={tahunIni} 
            value={tahun} 
            onChange={(e) => setTahun(e.target.value)} 
            class="text-start border-2 transition duration-500 placeholder-yellow-400 focus:placeholder-transparent border-yellow-400 w-40 py-2 text-center text-yellow-400 bg-transparent rounded-md focus:outline-none " 
            />
          </div>
            <div className='mb-5'>
            <Select
              className="basic-single w-72 z-10"
              classNamePrefix="select"
              defaultValue={options[0]}
              onChange={(e) => [setBulan(e.value), setNamaBulan(e.label)]}
              isClearable={isClearable}
              isSearchable={isSearchable}
              name="bulan"
              options={options}
            />
            {exportTable()}
            </div>
          {renderTable()}
      </div>
    </div>
  );
}

export default ReportCard01;