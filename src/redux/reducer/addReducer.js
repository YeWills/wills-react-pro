export const addRedux = (state=[],action)=>{
  switch (action.type){
    case 'ADD':
        // console.log('ADD---redcer')
      return [
          {
        text:action.text,
        id:action.id,
        completed:false,
      }];
    default :
        // console.log('ADD--default--redcer')
      return state;
  }
}
