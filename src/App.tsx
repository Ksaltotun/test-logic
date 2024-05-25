import { useEffect, useReducer, useState } from 'react';
import { LINK } from './utils/origin';
import { FilteredDesk } from './containers/FilteredDesk';
import './App.scss';
import { DataState} from './utils/types';

function App() {

  const [state, setData] = useState<DataState>({ isLoading: false, data:[]});

  async function getData() {
    if (!state.isLoading) {
      const response = await fetch(LINK);
      const data = await response.json();
      setData({ isLoading: true, data })
    }

  }



  useEffect(() => {

    getData()
  }, [state])

  return (
    <div className="App">
      {
        state?.isLoading ?
          <FilteredDesk data={state.data} />
          : null
      }
    </div>
  );
}

export default App;
