import React, { Component, Fragment } from "react";
import { Trans } from '@lingui/macro';
// import "./LanguageSwitcher.css";
import { setLanguage } from '../../actions';
import { store } from '../../store';

export class LanguageSwitcher extends Component {
  switchLanguage = (e) => {
    const selectedLanguage = e.currentTarget.value;
    store.dispatch(setLanguage(selectedLanguage));
  };

  render() {
    const languages = [
      'en-US',
      'zh-CN',
      'ms-MY',
    ];
    return (
      <div className="LanguageSwitcher">
        <header className="LanguageSwitcher-header">
          <Trans>Choose a Language</Trans>
        </header>
        <form>
          <fieldset>
            {languages.map(language => (
              <Fragment>
                <input type="radio" name="language" value={language}
                onChange={this.switchLanguage}
                />
                <label for={language}>{language}</label>
              </Fragment>
            ))}
          </fieldset>
        </form>
      </div>
    );
  }
};

export default LanguageSwitcher;