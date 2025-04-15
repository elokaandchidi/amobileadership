import { useEffect, useState } from 'react'
import { WinnerInfo } from '../utils/interface';
import { client } from '../utils/client';
import { winnersQuery } from '../utils/data';

import noImg from "../assets/images/no-image.jpg"

const WinnerComponent = () => {
    const [winnerList, setWinnerList] = useState<WinnerInfo[]>([]);
    
    const fetchParticipants = () =>{
        // setLoading(true);
        client.fetch(winnersQuery())
        .then((data) => {
        setWinnerList(data);
        // setLoading(false);
        })
    }

    useEffect(() => {
        fetchParticipants();
        // eslint-disable-next-line
    }, []);
    return (
        <div className="flex flex-col gap-7 font-EB w-full">
          
          {winnerList?.map((winner, index) => (
            <div key={index} className={`flex flex-col gap-7 w-full`}>
              <div className="font-EB font-semibold text-lg">{winner?.year}</div>
              <div className="grid md:grid-cols-2 gap-7">
                {winner?.prizewinners?.map((prizewinner, subIndex) => (
                  <div key={subIndex} className="flex flex-col w-full max-w-4xl mx-auto justify-between items-center gap-7 lg:py-10 p-4 relative border border-gray-200 rounded-lg">
                    <div 
                      className={`${subIndex % 2 === 0 ? `bg-[url('/images/bg-img-1.svg')]` : `bg-[url('/images/bg-img-2.svg')]`} relative flex flex-col items-center justify-center w-full h-[15rem] bg-cover bg-center bg-no-repeat`}
                      style={{
                        backgroundSize: 'contain',
                        backgroundPosition: 'center center'
                      }}
                    >
                      <img 
                        src={prizewinner?.imageUrl || noImg} 
                        alt="winner" 
                        className="object-cover relative md:w-1/2 w-3/5 rounded-full aspect-square shadow-lg"
                      />
                    </div>
        
                    <div className="w-full px-2 space-y-4">
                      <h2 className="font-bold text-lg lg:text-xl text-gray-800 truncate">
                        {prizewinner?.name}
                      </h2>
                      <p className="text-[#b8935c] italic font-nunito text-sm lg:text-base">
                        {prizewinner?.school}
                      </p>
                      <div className="mt-3 w-full">
                        <span className="inline-block bg-[#141f3f] px-4 py-2 text-xs lg:text-sm text-white rounded-md shadow-sm">
                          {prizewinner?.position}
                        </span>
                      </div>
                    </div>
                  </div>

                ))}
              </div>
            </div>
          ))}
        </div>
    )
}

export default WinnerComponent