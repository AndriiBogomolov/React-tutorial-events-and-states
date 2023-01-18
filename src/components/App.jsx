import React from 'react';
// import Counter from './Counter/Counter';
// import Dropdown from './Dropdown/Dropdown';
import ColorPicker from './ColorPicker/ColorPicker';

const colorPickerOptions = [
  { label: 'red', color: '#f44336' },
  { label: 'green', color: '#4caf50' },
  { label: 'blue', color: '#2196f3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },

];

export const App = () => (
  <>
  <h1>Состояние компонента</h1>
  
    <ColorPicker options={colorPickerOptions}  />

    {/* <Dropdown /> */}

  {/* <Counter/> */}

  </>
  // return (
  //   <div
  //     style={{
  //       height: '100vh',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       fontSize: 40,
  //       color: '#010101'
  //     }}
  //   >
  //     React homework template
  //   </div>
  // );
);
// export default App;
