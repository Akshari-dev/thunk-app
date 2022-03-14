const intialState=[];

export default (state=intialState, action)=>{


    switch(action.type){
          case "SET_PHOTOS":
      return [...action.value]
         default: return state    

    }
}