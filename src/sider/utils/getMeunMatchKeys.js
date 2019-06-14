import pathToRegexp from 'path-to-regexp';
import reduce from 'lodash/reduce';
import filter from 'lodash/filter';

const getMeunMatchKeys = (flatMenuKeys, paths) =>{
    // console.log(paths)
    const ad = reduce(paths, (matchKeys, path) => {
        const abc = matchKeys.concat(filter(flatMenuKeys, item => {
            if(pathToRegexp(item).test(path)){
                // console.log(item)
            }


            return pathToRegexp(item).test(path);
        }));
        return abc;
    }, []);
   return ad;
}


export default getMeunMatchKeys;
