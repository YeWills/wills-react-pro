import map from 'lodash/map';

const urlToList = (url) => {
  if (url) {
    const urlList = url.split('/').filter(i => i);
    const bb = map(urlList, (urlItem, index) => `/${urlList.slice(0, index + 1).join('/')}`);
    // console.log(bb)
      return bb;
  }
  return [];
};

export default urlToList;
