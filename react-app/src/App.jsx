import React from 'react'

const MFE1_Button = React.lazy(
  () => import('micro1/MicroFrontEnd1Index')
);
const App =() => {
  const [date, setDate] = React.useState(new Date())

  return (
    <div>
        <React.Suspense fallback='Loading Button'>
          <MFE1_Button
            firstName='Slava'
            lastName='kek'
          />
        </React.Suspense>
    </div>
  );
}


export default App