import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import List from './components/List';

export default function App() {
  const [inputText, setInputText] = useState<any>('');
  let inputHandler = (e: any) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <>
      <div className='flex justify-end mr-6 mt-16'>
        <input
          type='text'
          onChange={inputHandler}
          placeholder=' Enter PFName or TName '
          autoComplete='name'
          maxLength={30}
          className=' ml-10 w-32  sm:w-48 md:w-48 lg:w-48 2xl:w-64 px-2 py-2 border-stone-200 border-2 rounded bg-white focus:outline-0 '
        />
      </div>
      <List input={inputText} />
    </>
  );
}
