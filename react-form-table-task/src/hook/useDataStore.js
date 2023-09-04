/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from 'react';

const useDataStore = () => {
  const [data, setData] = useState([]);

  const addData = (formData) => {
    setData([...data, formData]);
  };

  const deleteData = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

 
  return {data, addData , deleteData};
};

export default useDataStore;
