
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPhotos } from './Store/Actions/actions';

function App() {
  const photos = useSelector(store => store.photos)
  console.warn(photos);
  const dispatch=useDispatch()

  useEffect(() => {
    console.warn('componentDidMount Called')
    dispatch(fetchPhotos())
  })
  /* 
  componentDidMount(){
    api call
  }
  */
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {
            photos.map(photos => {

              return (
                <span>
                <img src={photos.thumbnailUrl} />
                </span>
)
            
            })
          }
        </div>
      </header>
    </div>
  );
}

export default App;
