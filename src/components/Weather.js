import React, {Component} from 'react';
import { withRouter} from 'react-router-dom'
import { Container} from 'semantic-ui-react'


class Weather extends Component {
  render() {
    return (
      <Container>
      <iframe
       id="forecast_embed"
      frameborder="0"
       height="245"
       width="215"
       src="//forecast.io/embed/#lat=31.7619&lon=-106.4850&name=El Paso">
      </iframe>
      </Container>
    );
  }
}

export default withRouter(Weather);
