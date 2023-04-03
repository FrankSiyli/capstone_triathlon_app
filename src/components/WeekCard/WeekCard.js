import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function WeekCard () {

    const { data, error } = useSWR('/api/db', fetcher);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
    <h2 aria-label="Choose your training days">Choose your training days</h2>
    
             
             <div className='weekCard' aria-label="week card">
             {data[0].days.map((day) => (
          <div key={day.id}>
            <h3>{day.title}</h3>
            <button>{day.isToggled ? 'Selected' : 'Not Selected'}</button>
          </div>
        ))}

    </div>
    
    </>
  )
}

