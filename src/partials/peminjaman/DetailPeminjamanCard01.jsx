import { useState, useEffect } from 'react';
import axios from 'axios'
import moment from "moment";
import { useLocation } from 'react-router-dom';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DetailPeminjamanCard01() {
  
  const [isi, setIsi] = useState([])

  const location = useLocation();
  
  useEffect(() => {
    const fetchData = () =>{
        axios.get(`https://localhost:7286/api/Peminjaman/${location.state.id}`).then(
          res => {
            console.log(res)
            setIsi(res.data)
        })
       }
       fetchData()
     }, [])


  return (
    <div className="flex flex-col col-span-full sm:col-span-6 md:col-span-12 xl:col-span-12 pb-7 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
        </header>
        {/* <h2 className="text-lg text-center font-semibold text-slate-800 dark:text-slate-100 mb-4">Denah Letak Ruangan</h2> */}
        {/* <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">Sales</div> */}
        {/* <div className="flex"> */}
          {/* <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">Orang</div> */}
          <table className='w-full min-w-max table-auto text-left'>
            <tbody>
                <tr>
                    <th className='py-5 border-b border-blue-gray-50'>Tiket:</th>
                    <td className='py-5 border-b border-blue-gray-50'>{isi.idPeminjaman}</td>
                </tr>
                <tr>
                    <th className='py-5 border-b border-blue-gray-50'>Nama PIC:</th>
                    <td className='py-5 border-b border-blue-gray-50'>{isi.namaPIC}</td>
                </tr>
                <tr>
                    <th className='py-5 border-b border-blue-gray-50'>Ruangan:</th>
                    <td className='py-5 border-b border-blue-gray-50'>{isi.namaRuangan}</td>
                </tr>
                <tr>
                    <th className='py-5 border-b border-blue-gray-50'>Kepentingan:</th>
                    <td className='py-5 border-b border-blue-gray-50'>{isi.keperluan}</td>
                </tr>
                <tr>
                    <th className='py-5 border-b border-blue-gray-50'>Tanggal:</th>
                    <td className='py-5 border-b border-blue-gray-50'>{moment(isi.startTime).format('DD MMMM yyyy')}</td>
                </tr>
                <tr>
                    <th className='py-5 border-b border-blue-gray-50'>Waktu Mulai:</th>
                    <td className='py-5 border-b border-blue-gray-50'>{moment(isi.startTime).format('hh:mm')}</td>
                </tr>
                <tr>
                    <th className='py-5 border-b border-blue-gray-50'>Waktu Selesai:</th>
                    <td className='py-5 border-b border-blue-gray-50'>{moment(isi.endTime).format('hh:mm')}</td>
                </tr>
                <tr>
                    <th className='py-5 border-b border-blue-gray-50'>Status:</th>
                    <td className='py-5 border-b border-blue-gray-50'>{isi.status}</td>
                </tr>
            </tbody>
          </table>
        {/* </div> */}
      </div>
    </div>
  );
}

export default DetailPeminjamanCard01;