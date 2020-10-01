import React, { Component } from 'react';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';
import CloudItem from '../CloudItem';

const styles = {
  large: {
    fontSize: 60,
    fontWeight: 'bold'
  },
  small: {
    opacity: 0.7,
    fontSize: 16
  }
};

export default class MyCloud extends Component {
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 3000);
  }

  render() {
    return (
      <div className='app-outer'>
        <div className='app-inner'>
          <TagCloud 
            className='tag-cloud'
            style={{
              fontFamily: 'sans-serif',
              //fontSize: () => Math.round(Math.random() * 50) + 16,
              fontSize: 30,
              color: () => randomColor({
                hue: 'Pokemon'
              }),
              padding: 5,
            }}>
            <div
              style={{
                fontFamily: "fantasy",
                fontSize: 35,
                fontStyle: 'italic',
                fontWeight: 'bold',
                color: randomColor()
              }}>Futurama</div>
            <CloudItem text="Custom item, Hover me!" />
            <CloudItem text="Custom item 2, Hover me!" />
            <div className="word2"style={styles.large}>Transformers</div>
            <div style={styles.large}>Simpsons</div>
            <div style={styles.large}>Dragon Ball</div>
            <div style={styles.large}>Rick & Morty</div>
            <div style={{fontFamily: 'fantasy'}}>He man</div>
            <div style={{fontSize: 30}}>World trigger</div>
            <div style={{fontStyle: 'italic'}}>Avengers</div>
            <div style={{fontWeight: 200}}>Family Guy</div>
            <div style={{color: 'green'}}>American Dad</div>
            <div className="tag-item-wrapper">
              <div>
                Hover Me Please!
              </div>
              <div className="tag-item-tooltip">
                HOVERED!
              </div>
            </div>
            <div  className="word1">Gobots</div>
            <div className="word2">Thundercats</div>
            <div className="word3">M.A.S.K.</div>
            <div className="word4">GI Joe</div>
            <div className="word5">Inspector Gadget</div>
            <div className="word6">Bugs Bunny</div>
            <div className="word7">Tom & Jerry</div>
            <div className="word8">Cowboy Bebop</div>
            <div className="word9">Evangelion</div>
            <div className="word10">Bleach</div>
            <div className="word11">GITS</div>
            <div className="word12">Pokemon</div>
            <div className="word13">She Ra</div>
            <div className="word14">Fullmetal Alchemist</div>
            <div className="word15">Gundam</div>
            <div className="word16">Uni Taisen</div>
            <div className="word17">Pinky and the Brain</div>
            <div className="word18">Bobs Burgers</div>
            <div style={styles.small}>Dino Riders</div>
            <div style={styles.small}>Silverhawks</div>
            <div style={styles.small}>Bravestar</div>
            <div style={styles.small}>Starcom</div>
            <div style={styles.small}>Cops</div>
            <div style={styles.small}>Alfred J. Kwak</div>
            <div style={styles.small}>Dr Snuggles</div>
          </TagCloud>
        </div>
      </div>
    );
  }
}

---------------------------------
import React, { Component } from 'react';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';
import CloudItem from '../CloudItem';


export default class MyCloud extends Component {
    componentDidMount() {
        setInterval(() => {
          this.forceUpdate();
        }, 3000);
      }
    
  render() {
    return (
        <div className='app-outer' >
        <div className='app-inner'>

        <div
            className='tag-cloud'>
        
        
        {/* <CloudItem text="Custom item, Hover me!" />
        <CloudItem text="Custom item 2, Hover me!" />
        <div className="tag-item-wrapper">
              <div>
                Hover Me Please!
              </div>
              <div className="tag-item-tooltip">
                HOVERED!
              </div>
            </div> */}



<div className="word1"> react-native</div>
<div className="word2" >JavaScript</div>
<div className="word3" >react-native-magic-move</div>
<div className="word4">React.js</div>
<div className="word5">iOS</div>
<div className="word6" >Android</div>
<div className="word7">Java</div>
<div className="word8">Native</div>
<div className="word9">CSS</div>
<div className="word10">ES6</div>
<div className="word11">UX</div>
<div className="word12">Jest</div>
<div className="word13">C++</div>
<div className="word14">XCode</div>
<div className="word15">Cordova</div>
<div className="word16">MFC</div>
<div className="word17">.NET</div>
<div className="word18">VBA</div>

      </div>
      </div>
      </div>
    );
  }
}

