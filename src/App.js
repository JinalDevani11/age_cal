import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  let [name, setname] = useState('');
  let [bdate, birthdate] = useState('');
  let [today, curetdate] = useState(getDefaultTodayDate()); // should be curetdate instead of today

  useEffect(() => {
    curetdate(getDefaultTodayDate());
  }, []);


  function getDefaultTodayDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

 
  const [age, calage] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  const agecal = () => {
    const birthdate = new Date(bdate);
    const nowDate = new Date(today);

    if (birthdate > nowDate) {
      alert("Date of birth needs to be earlier than the age at date.!");
    } else {
      const milliseconds = nowDate - birthdate;
      const seconds = Math.round(milliseconds / 1000);
      const minutes = Math.round(seconds / 60);
      const hours = Math.round(minutes / 60);
      const days = Math.round(hours / 24);
      const week = Math.round(days / 7);
      const months = Math.round(week / 4.33);
      const years = Math.round(months / 12);

      if (name === '') {
        alert("Enter Your name..!");
      } else {
        calage({ years, months, days, hours, minutes, seconds, milliseconds });
      }
    }
  }



  return (
    <div className="App">
      <form>
        <center className='center'>
          <h3 class="heading">age calculator</h3>
          <div class="design">
            Your Name:-<input type="text" name="" onChange={(e) => setname(e.target.value)}></input>
          </div>
          <div class="design">Date Of Birth:-
            <input type='date' value={bdate} name="" onChange={(e) => birthdate(e.target.value)}></input>
          </div>
          <div class="design">Today Date:-
            <input type="date" value={today} name=""onChange={(e) => curetdate(e.target.value)}></input>
          </div><br></br>
          <div class="btn">
            <input type="button" name="" value="Calulate Your Age" onClick={agecal}></input>
          </div><br></br>



          <div class="age">
            <h3>year</h3>
            <p>{age.years}</p>
          </div>
          <div class="age">
            <h3>month</h3>
            <p>{age.months}</p>
          </div>
          <div class="age">
            <h3>Day</h3>
            <p>{age.days}</p>
          </div>
          <div class="age">
            <h3>Hours</h3>
            <p>{age.hours}</p>
          </div>
          <div class="age">
            <h3>minutes</h3>
            <p>{age.minutes}</p>
          </div>
          <div class="age">
            <h3>second</h3>
            <p>{age.seconds}</p>
          </div>
          <div class="age">
            <h3>millisecond</h3>
            <p>{age.milliseconds}</p>
          </div>

        </center>
      </form>
    </div>

  );

}

export default App;
