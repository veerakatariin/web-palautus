import React from "react";
import SideSection from './SideSection';
import MainSection from './MainSection';

const MainSectionData = [
    {
        mainbody: 'Ennätysmäärä Kiinan sotilas­koneita on lentänyt viime päivinä Taiwanin lähettyvillä – HS kysyi tutkijalta, mihin Kiina pyrkii.',
        maintopic: 'Taiwan',
        image: 'plane.png'
    },
    {
        mainbody: 'Kun kylän viereen rakennettiin tehdas, kanat alkoivat kuolla ja lapset valittaa vatsa­kipuja: Kenialainen Phyllis Omido sai tehtaan suljettua.',
        maintopic: 'HS-haastattelu',
        image: 'kyla.png'
      },
    {
        mainbody: 'Kahdeksan kuoli pienkoneen törmättyä rakennuksen seinään Milanossa.',
        maintopic: 'Italia',
        image: 'crash.png'
    } 
  ]
  
  const SideSectionData = [
    {
        sidebody: 'Boris Johnson: Maamme ei palaa vanhaan matalien palkkojen malliin',
        sidetopic: 'Britannia'
    },
    {
        sidebody: 'Näin mullistui vuonna 1796 rakennettu hirsilinna – Suomalainen huippuarkkitehti remontoi viisi vuotta sukutaloaan, ja lopputulos on jotain täysin poikkeuksellista',
        sidetopic: 'Sisäänkäynti'
    },
    {
        sidebody: 'Yksi metaanivuoto lämmitti ilmastoa yhtä paljon kuin kaksi miljoonaa autoa vuodessa, eikä kukaan välittänyt – Ekokatastrofi on niin valtava, ettei mikään yksittäinen teko hetkauta meitä enää',
        sidetopic: 'HS Ympäristö'
    },
    {
        sidebody: 'Ennätysmäärä Kiinan sotilas­koneita on lentänyt viime päivinä Taiwanin lähettyvillä – HS kysyi tutkijalta, mihin Kiina pyrkii',
        sidetopic: 'Taiwan'
    },
    {
        sidebody: 'Perhe löysi unelmakodin yhdeltä Suomen halutuimmista asuinalueista ja teki sen vuoksi ison uhrauksen – Tältä näyttää koti, jossa sisustus on tärkeämpää kuin neliöt',
        sidetopic: 'Asuminen'
    },
    {
        sidebody: 'Sukeltaja hukkui Tampereen keskustassa järjestetyn sukellus­tapahtuman yhteydessä',
        sidetopic: 'Onnettomuudet'
    }
  ]

export default function News() {

    return (
            
      <div className={'newsies'}>
      <div style={{display:'flex', flexDirection:'row'}}>
      <div style={{display:'flex', flexDirection:'column'}}>
      {
        MainSectionData.map(element =>  <MainSection data={element} />)
      }</div>
      <div style={{display:'flex', flexDirection:'column'}}>
        <div style={{fontSize:'30px', fontWeight:'700', paddingTop:'10px', paddingLeft:'20px', backgroundColor:'white', marginLeft:'15px', marginRight:'250px'}}>
          Luetuimmat</div>
      {
        SideSectionData.map(element =>  <SideSection data={element} />)
      }
      </div>
      </div>
      </div>
    )
}