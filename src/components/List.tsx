import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { DataType } from '../../util';

export default function List(Props: any) {
  const url = 'https://api.npoint.io/20c1afef1661881ddc9c';
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    axios.get(`${url}`).then((res) => {
      const data = res.data.playerList;
      setData(data);
    });
  };

  const filteredData = data.filter((list) => {
    if (Props.input === '') {
      return list;
    } else {
      return (
        list.PFName.toLowerCase().includes(Props.input) ||
        list.TName.toLowerCase().includes(Props.input)
      );
    }
  });
  return (
    <main className='relative min-h-full '>
      <main className=' flex-1 '>
        <div className='relative h-full overflow-y-auto flex flex-row flex-wrap justify-center '>
          {filteredData?.map((value: any, index: any) => (
            <div
              key={index}
              className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6'
            >
              <img
                className='rounded-t-lg w-full'
                src={require(`../../src/assets/player-images/${value.Id}.jpg`)}
                alt=''
              />

              <div className='p-5'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center  mb-6'>
                  {value.PFName}
                </h5>

                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  {value.SkillDesc}
                </p>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  {value.Value}
                </p>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  {value.UpComingMatchesList[0].CCode}{' '}
                  <span className='ml-3 mr-3'> Vs</span>
                  {value.UpComingMatchesList[0].VsCCode}
                </p>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  {moment(value.UpComingMatchesList[0].MDate)
                    .local()
                    .format('DD-MM-YYYY H:MM:SS A')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </main>
  );
}
