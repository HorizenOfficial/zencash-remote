import PropTypes from 'prop-types'
import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setLanguage, setCurrency } from '../actions/Settings'

import {
  Page,
  Toolbar,
  BackButton,
  List,
  ListHeader,
  ListItem
} from 'react-onsenui'

import ChangePinPage from './ChangePinPage'
import SelectCurrencyPage from './SelectCurrencyPage'
import SelectLanguagePage from './SelectLanguagePage'

import TRANSLATIONS from '../translations'

class SettingsPage extends React.Component {
  gotoComponent (c) {
    this.props.navigator.pushPage({component: c})
  }

  renderToolbar () {
    // Translation stuff
    const CUR_LANG = this.props.settings.language
    const titleLang = TRANSLATIONS[CUR_LANG].SettingsPage.title

    return (
      <Toolbar>
        <div className='left'>
          <BackButton onClick={() => this.props.navigator.popPage()}>Back</BackButton>
        </div>
        <div className='center'>
          { titleLang }
        </div>
      </Toolbar>
    )
  }

  render () {
    // Translation stuff
    const CUR_LANG = this.props.settings.language

    const changePinLang = TRANSLATIONS[CUR_LANG].PinPage.changePinTitle
    const currencyLang = TRANSLATIONS[CUR_LANG].SettingsPage.currency
    const languageLang = TRANSLATIONS[CUR_LANG].SettingsPage.language

    return (
      <Page renderToolbar={this.renderToolbar.bind(this)}>
        <List>
          <ListItem
            onClick={this.gotoComponent.bind(this, SelectLanguagePage)}
            tappable>
            { languageLang }
          </ListItem>
          <ListItem
            onClick={this.gotoComponent.bind(this, SelectCurrencyPage)}
            tappable>
            { currencyLang }
          </ListItem>
          <ListHeader></ListHeader>
          <ListItem
            onClick={this.gotoComponent.bind(this, ChangePinPage)}
            tappable>
            { changePinLang }
          </ListItem>
        </List>
      </Page>
    )
  }
}

SettingsPage.propTypes = {
  settings: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired,
  setLanguage: PropTypes.func.isRequired,
  setCurrency: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return {
    settings: state.settings
  }
}

function matchDispatchToProps (dispatch) {
  // Set context for the send page
  return bindActionCreators(
    {
      setLanguage,
      setCurrency
    },
    dispatch
  )
}

export default connect(mapStateToProps, matchDispatchToProps)(SettingsPage)
