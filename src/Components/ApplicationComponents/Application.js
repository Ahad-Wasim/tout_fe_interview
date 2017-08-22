/* Defaults */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/* Container Components */
import { Settings } from './Containers/Settings/Settings';
import { TimerCollection } from './Containers/TimerCollection/TimerCollection';

/* UI Components */
import { Header } from '../UIComponents/Header';

/* Actions */
import { fetchCMSData } from '../../Actions/CMSContent.actions';

class Application extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Usually we would fetch CMS content here asynchronously
    // and update it to the Application state.
    this.props.actions.fetchCMSData();

    // This is can also be a good place to integrate any other external API calls. Being that that this is just a timer, not much is really needed.

  }

  render() {

    return (
      <div className="application-wrapper">
        <Header
          headerType={'H1'}
          value={this.props.content.headerValue}
        />
        <Settings />

        <TimerCollection />

      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    content: state.content,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ fetchCMSData }, dispatch),
  };
};

const rootComponent = connect(mapStateToProps, mapDispatchToProps)(Application);

export { rootComponent as Application };
