import React, { useState, useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import ReviewTable from '../../partials/review/ReviewTable'
import axios from 'axios';
import moment from "moment";
import { FaArrowCircleLeft } from 'react-icons/fa';

import "../../css/review.css"

// Import utilities   
import { tailwindConfig, hexToRGB } from '../../utils/Utils';
  
function DetailReviewCard01() {
    const history = useNavigate()
    const [isi, setIsi] = useState([])

  const location = useLocation();
  
  useEffect(() => {
    const fetchData = () =>{
        axios.get(`https://localhost:7286/api/Review/${location.state.id}`).then(
          res => {
            // console.log(res)
            setIsi(res.data)
        })
       }
       fetchData()
     }, [])

    const centeredTextStyles = {
      textAlign: 'center',
      verticalAlign: 'middle',
    };
  
    // const history = useNavigate()

  return (
    <>
    <div className='back-review'>
      <button onClick={() => history(-1)}>
        <FaArrowCircleLeft size={30} /> {/* Ganti 30 dengan ukuran yang Anda inginkan */}
      </button>
    </div>
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
                    <td className='py-5 border-b border-blue-gray-50'>{isi.ticket}</td>
                </tr>
                <tr>
                    <th className='py-5 border-b border-blue-gray-50'>Nama:</th>
                    <td className='py-5 border-b border-blue-gray-50'>{isi.namaPIC}</td>
                </tr>
                <tr>
                <th className='py-5 border-b border-blue-gray-50' colSpan="2" style={centeredTextStyles}>Rating Ruangan</th>
                </tr>
                <tr>
                    <th className='py-5 border-b border-blue-gray-50'>Kenyamanan:</th>
                    <td className='py-5 border-b border-blue-gray-50'>{isi.kenyamanan}</td>
                </tr>
                <tr>
                    <th className='py-5 border-b border-blue-gray-50'>Fungsional:</th>
                    <td className='py-5 border-b border-blue-gray-50'>{isi.fungsional}</td>
                </tr>
                <tr>
                    <th className='py-5 border-blue-gray-50' colSpan="2" style={{...centeredTextStyles, padding: '10px 0'}}>Rating Website</th>
                </tr>
                <tr>
                  <th className='py-5 border-b border-blue-gray-50' colSpan="2" style={{...centeredTextStyles, padding: '10px 0'}}>
                    <div style={{ fontSize: '50px' }}>
                      <ReviewTable value={isi.rating} />
                    </div>
                  </th>
                </tr>
                <tr>
                  <th className='py-5  border-blue-gray-50' colSpan="2" style={{...centeredTextStyles, padding: '10px 0'}}>Kritik & Saran:</th></tr>
                <tr>
                    <td className='py-5 border-blue-gray-50 haha-text' colSpan="2" style={{...centeredTextStyles, padding: '10px 0'}}>{isi.saran}</td>
                </tr>
            </tbody>
          </table>
      </div>
    </div>
    </>
  );
}

export default DetailReviewCard01;