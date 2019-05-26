export const tyyReducer = (state=[], action)=>{
  switch (action.type){
    case 'TYY':
        // console.log('TYY---redcer')
      return [
          {
        text:action.text,
        id:action.id,
        completed:false,
      }];
    default :
      // console.log('TYY--default--redcer')
      return state;
  }
}
