import reduce from 'lodash/reduce';

const getFlatMenuKeys = menuData => {
    // console.log(menuData);
   const aa =reduce(menuData, (keys, item) => {
        keys.push(item.path);
        if (item.children) {
            return keys.concat(getFlatMenuKeys(item.children));
        }
        return keys;
    }, []);
    // console.log(aa);
    return aa;
}

export default getFlatMenuKeys;
