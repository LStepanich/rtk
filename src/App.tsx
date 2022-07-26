import { useEffect } from 'react';
import './App.css';
import PostContainer from './components/PostContainer';
import { useAppDispath, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/actionCreators';


function App() {
  const dispatch = useAppDispath();
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  const { users, isLoading, error } = useAppSelector((state) => state.userReducer)


  return (
    <div className="App">
      {/* {isLoading && <h1>LOADING</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}
      <PostContainer />
    </div>
  );
}

export default App;
