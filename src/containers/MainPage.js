import 'babel-polyfill'

import PropTypes from 'prop-types'
import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  Page,
  List,
  ListItem,
  ListHeader,
  Splitter,
  SplitterSide,
  SplitterContent
} from 'react-onsenui'

import AboutPage from './AboutPage'
import SettingsPage from './SettingsPage'

class MainPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      splitterOpen: false
    }
  }

  render () {
    return (
      <Page>
        <Splitter>
          <SplitterSide
            side='left'
            isOpen={this.state.splitterOpen}
            onClose={(e) => this.setState({ splitterOpen: false })}
            onOpen={(e) => this.setState({ splitterOpen: true })}
            collapse
            width={240}
            isSwipeable>
            <Page>
              <List
                dataSource={[
                  {
                    name: 'About',
                    component: AboutPage
                  },
                  {
                    name: 'Settings',
                    component: SettingsPage
                  }
                ]}
                renderHeader={() => <ListHeader>ZEN</ListHeader>}
                renderRow={(i) =>
                  <ListItem
                    onClick={() => this.gotoComponent(i.component)}
                    modifier='longdivider'
                    tappable>
                    {i.name}
                  </ListItem>
                }
              />
            </Page>
          </SplitterSide>

          <SplitterContent>
            <h1>Hello World</h1>
          </SplitterContent>
        </Splitter>
      </Page>
    )
  }
}

MainPage.propTypes = {
  secrets: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  context: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    secrets: state.secrets,
    settings: state.settings,
    context: state.context
  }
}

function matchDispatchToProps (dispatch) {
  // Set context for the send page
  return bindActionCreators(
    {
    },
    dispatch
  )
}

export default connect(mapStateToProps, matchDispatchToProps)(MainPage)
