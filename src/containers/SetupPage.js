import PropTypes from 'prop-types'
import React from 'react'

import {
  Page,
  Toolbar,
  Button
} from 'react-onsenui'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setSecretPhrase, setSecretItems } from '../actions/Secrets'

class SetupPage extends React.Component {
  renderToolbar () {
    return (
      <Toolbar>
        <div className='center'>
          ZEN Remote Setup
        </div>
      </Toolbar>
    )
  }

  render () {
    return (
      <Page renderToolbar={this.renderToolbar.bind(this)}>
        <div style={{padding: '12px 12px 0 12px'}}>
          <Button
            onClick={() => this.props.sethasExistingSettings(true)}
            style={{width: '100%'}}
          >Hello World
          </Button>
        </div>
      </Page>
    )
  }
}

SetupPage.propTypes = {
  context: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired,
  setSecretPhrase: PropTypes.func.isRequired,
  setSecretItems: PropTypes.func.isRequired,
  sethasExistingSettings: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return {
    context: state.context
  }
}

function matchDispatchToProps (dispatch) {
  // Set context for the send page
  return bindActionCreators(
    {
      setSecretPhrase,
      setSecretItems
    },
    dispatch
  )
}

export default connect(mapStateToProps, matchDispatchToProps)(SetupPage)
