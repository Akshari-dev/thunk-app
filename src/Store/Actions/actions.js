const fetchPhotos=()=>dispatch=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json =>  dispatch({type:'SET_PHOTOS',value:json}))
}



export {fetchPhotos}