/* Defaults */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/* Pure Components */
import { ConfigurationBoard } from '../PureComponents/ConfigurationBoard';

/* Actions */
import { updateTimerCount } from '../../../Actions/configurations.actions';

class Configurations extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    const { className, value } = event.target;

    if (className === 'timerCount') {
      this.props.actions.updateTimerCount(value);
    }
  }

  render() {
    return (
      <ConfigurationBoard
        settings={this.props.settings}
        onChange={this.onChange}
      />
    );
  }
};

const mapStateToProps = state => {
  return {
    settings: state.settings,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ updateTimerCount }, dispatch),
  };
};

const containerComponent = connect(mapStateToProps, mapDispatchToProps)(Configurations);

export { containerComponent as Configurations };
