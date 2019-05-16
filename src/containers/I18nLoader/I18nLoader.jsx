import React, { Component } from 'react';
import { connect } from 'react-redux';
import { I18nProvider } from '@lingui/react';

export class I18nLoader extends Component {
  state = {
    catalogs: {},
  }

  loadCatalog = async (language) => {
    const catalog = await import(
      /* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
      `../../locales/${language}/messages.js`)

    this.setState(state => ({
      catalogs: {
        ...state.catalogs,
        [language]: catalog
      }
    }))
  }

  componentDidMount() {
    this.loadCatalog(this.props.language)
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { language } = nextProps
    const { catalogs } = nextState

    if (language !== this.props.language && !catalogs[language]) {
      this.loadCatalog(language)
      return false
    }

    return true
  }

  render () {
    const { children, language } = this.props
    const { catalogs } = this.state

    // Skip rendering when catalog isn't loaded.
    if (!catalogs[language]) return (
       <div>
         Loading...
       </div>
    )

    return (
      <I18nProvider language={language} catalogs={catalogs}>
        {children}
      </I18nProvider>
    )
  }
}

// Example: depends on implementation of reducer
const getLanguage = state => state.locale.language

export default connect(state => ({
  language: getLanguage(state)
}))(I18nLoader)