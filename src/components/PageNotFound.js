import {withRouter} from 'react-router-dom'
import React, { Component } from 'react';

class PageNotFound extends Component{
  render(){
    return(
      <div>
      page not found 
      </div>

    )
  }
}

export default withRouter(PageNotFound);
