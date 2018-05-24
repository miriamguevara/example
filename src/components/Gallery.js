import React, {Component} from 'react';
import StackGrid, { transitions, easings } from "react-stack-grid";
import sizeMe from 'react-sizeme';

import Calculator from './Calculator'
import Weather from './Weather'
import ToDoList from './ToDoList'
import Search from './Search'
import GoogleMap from './GoogleMap'
import Converter from './Converter'
import Pinterest from './Pinterest'


const transition = transitions.scaleDown;

class Gallery extends Component {
  render() {
   return (
     <StackGrid
       monitorImagesLoaded
       columnWidth={300}
       duration={500}
       gutterWidth={10}
       gutterHeight={10}
       easing={easings.cubicOut}
       appearDelay={60}
       appear={transition.appear}
       appeared={transition.appeared}
       enter={transition.enter}
       entered={transition.entered}
       leaved={transition.leaved}
     >
       <div key="key1"> <Calculator/> </div>
       <div key="key2"><Search/></div>
       <div key="key3"><GoogleMap/></div>
       <div key="key4"><Weather/></div>
       <div key="key5"> <ToDoList/> </div>
       <div key="key6"><Converter/></div>

       <div key = "key7"><Pinterest/></div>

     </StackGrid>
   );
  }
}

export default sizeMe() (Gallery);
