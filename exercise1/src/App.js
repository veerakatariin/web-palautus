import React from 'react'
import './App.css';
import TopPage from './components/TopPage';
import NewsNotification from './components/NewsNotification.js';
import NewsComponents from './components/NewsComponents.js';

const NewsNotificationData = [
  {
    notificationtopic: 'ULKOMAAT: ',
    notificationbody: 'Boris Johnson: Maamme ei palaa vanhaan matalien palkkojen malliin'
  },
  {
    notificationtopic: 'PÄIVÄN TIMANTTI: ',
    notificationbody: 'Rikolliset jakavat nyt valtaa uusiksi'
  },
  {
    ad: 'MAINOS: ',
    adtext: 'Lunasta kaksi viikkoa maksutonta lukuaikaa!'
  }
]


document.body.style.backgroundColor = "lightgray";

function App() {
  return (
    
    <div>
      <TopPage /><div style={{paddingBottom:'20px', paddingTop:'10px'}}>
                  {NewsNotificationData.map(element =>  <NewsNotification data={element} />)}
      </div><NewsComponents />
    </div>
  );
}

export default App;
