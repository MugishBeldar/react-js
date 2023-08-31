// export const RQSuperHeroesPage = () => {
//   return <h2>React Query Super Heroes Page</h2>
// }

// steps
// import hook from reqct query
// call that hook take two arguments one is unique id and return a promise 
import { useQuery } from 'react-query';
import axios from 'axios';
import useSuperHeroesData from '../hooks/useSuperHeroesData'
const fetchSuperHero = () => {
  return axios.get('http://localhost:4000/superheroes');
}
export const RQSuperHeroesPage = () => {
  // onsuccess and orerror callback
  const onSuccess = (data) => {
    console.log('perform side effect after data fetched...', data)
  }
  const onError = (error) => {
    console.log('perform side effect after encountered error...', error)
  }
  // const { isLoading, error, data } = useQuery('superHeroes', () => {
  //   return axios.get('http://localhost:4000/superheroes')
  // })

  // // comment only for costume hooks 
  // const { isLoading, error, data, isFetching, refetch } = useQuery('superHeroes',
  //   fetchSuperHero,
  //   {
  //     // cacheTime: 5000, // default is five minutes
  //     // staleTime: 30000, //default is zero second
  //     // refetchOnMount: true, // default is true another value : true, false , 'always'
  //     // refetchOnWindowFocus: true, // default is true another value : false, 'always'
  //     // refetchInterval: false, // default is false another value in miliseconds
  //     // refetchIntervalInBackground: true,
  //     // // fetched data by click on button then do enable flag false
  //     enabled: false,
  //     onSuccess: onSuccess,
  //     onError: onError,
  //     // select: used for data transformations

  //   });


  // // custome hooks uses 
  const { isLoading, error, data, isFetching, refetch } = useSuperHeroesData(onSuccess, onError);

  if (isLoading || isFetching) {
    return <div><h1>Loading...</h1></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h1>User Data</h1>
      <button onClick={refetch}>Fetch Heroes</button>
      <ul>
        {data?.data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}