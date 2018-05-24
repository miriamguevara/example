import React, {Component} from 'react';

import { withRouter} from 'react-router-dom'
import { Input, Button} from 'semantic-ui-react'


class Search extends Component {
  render() {
    return (
      <form action="https://www.google.com/search" class="searchform" method="get" name="searchform" target="_blank">
        <div class="ui input">
          <input name="sitesearch" type="hidden" />
            <input autocomplete="on" class="form-control search" name="q" placeholder=" " required="required"  type="text"/>
          <Button class="button" type="submit">Search</Button>
        </div>
      </form>
    );
  }
}
export default withRouter(Search);
