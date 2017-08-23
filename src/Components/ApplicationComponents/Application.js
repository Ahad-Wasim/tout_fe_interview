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
    /*
      This is a good place to integrate any external API calls.
      Being that that this is just a timer applicatoin, not much
      is really needed.
    */

    /*
      Usually we would fetch CMS content here asynchronously
      and update it to the Application state.
    */

    this.props.actions.fetchCMSData();
  }

  render() {

    return (
      <div className="application-wrapper container">
        <Header
          headerType={'H1'}
          className={"text-center"}
          value={this.props.content.headerValue}
        />
        <Header
          headerType={'H3'}
          className={"text-center"}
          value={'By: ' + this.props.content.author}
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
