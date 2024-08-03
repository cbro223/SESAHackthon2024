import React, {useState} from "react";
import Header from "../components/Header";

export default function RocketRacingBets() {
  const competitors = [ // 
    'Thomas Adams',
    'Kevin Jia',
    'Adreas Kemphr-Lier'
  ]

  let onSubmitChoices = (titles) => {
    titles.forEach(element => {
      var e = document.getElementById(element.split().join());
      var value = e.value;
      var text = e.options[e.selectedIndex].text;
      console.log(text)
    });
  }

  return (
    <div className={"slater"}>
      <Header/>
      <div className="w-100 flex justify-center">
        <img src="/assets/Banners/GalaticGallopBanner.png" alt="Banner title"
             className="w-1/2 drop-shadow-[2px_2px_10px_#c7b8bf]"/>
      </div>
      <RocketBettingOption title={'First Place'} options={competitors}/>
      <RocketBettingOption title={'Second Place'} options={competitors}/>
      <button className="rounded-md bg-blue-200"
              onClick={() => onSubmitChoices(['First Place', 'Second Place'])}> SUBMIT
      </button>
    </div>
  );
}

function RocketBettingOption({title, options}) {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  }
  return (
    <>
      <div className={`w-100 bg-lime-500 flex p-2 items-center text-black rounded-md`} onClick={toggleVisibility}>
        <h1 className={'w-60'}>{title}</h1>
        <select id={title.split().join()}>
          {options.map((item, index) => (
            <option key={index} value={item} id={index} style={{borderRadius: '5px'}}>{item}</option>
          ))}
        </select>
      </div>
    </>
  )
}
