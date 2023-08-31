// custome query hook 

import { useQuery } from 'react-query';
import axios from 'axios';


const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery('superHeroes', () => {
        return axios.get('http://localhost:4000/superheroes');
    },
        {
            // cacheTime: 5000, // default is five minutes
            // staleTime: 30000, //default is zero second
            // refetchOnMount: true, // default is true another value : true, false , 'always'
            // refetchOnWindowFocus: true, // default is true another value : false, 'always'
            // refetchInterval: false, // default is false another value in miliseconds
            // refetchIntervalInBackground: true,
            // // fetched data by click on button then do enable flag false
            enabled: false,
            onSuccess: onSuccess,
            onError: onError,
            // select: used for data transformations
        });
};

export default useSuperHeroesData;


// // first method 

// const fetchSuperHero = () => {
//     return axios.get('http://localhost:4000/superheroes');
// }

// const useSuperHeroesData = (onSuccess, onError) => {
//     return useQuery('superHeroes',
//         fetchSuperHero,
//         {
//             // cacheTime: 5000, // default is five minutes
//             // staleTime: 30000, //default is zero second
//             // refetchOnMount: true, // default is true another value : true, false , 'always'
//             // refetchOnWindowFocus: true, // default is true another value : false, 'always'
//             // refetchInterval: false, // default is false another value in miliseconds
//             // refetchIntervalInBackground: true,
//             // // fetched data by click on button then do enable flag false
//             enabled: false,
//             onSuccess: onSuccess,
//             onError: onError,
//             // select: used for data transformations
//         });
// }



// export default useSuperHeroesData;
