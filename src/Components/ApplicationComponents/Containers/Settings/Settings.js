/* Defaults */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/* Pure Components */
import { SettingsBoard } from '../../PureComponents/SettingsBoard/SettingsBoard';

/* Actions */
import { addTimers } from '../../../../Actions/timerCollections.actions';

/* Utils */
import { determineValue } from '../../../../Utils/Helper/helper';

class Settings extends Component {
  constructor(props) {
    super(props);
  };

  componentWillMount() {
    const { timerDefault, applicationDefault: { timerCount } } = this.props.settings;
    this.props.actions.addTimers(timerCount, timerDefault);
  }

  render() {
    const { settings, timerCollection } = this.props;

    return (
      <SettingsBoard value={settings.applicationDefault.timerCount} />
    );
  }
};

const mapStateToProps = state => {
  return {
    settings: state.settings,
    timerCollection: state.timerCollection,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ addTimers }, dispatch),
  };
};

const containerComponent = connect(mapStateToProps, mapDispatchToProps)(Settings);

export { containerComponent as Settings };
