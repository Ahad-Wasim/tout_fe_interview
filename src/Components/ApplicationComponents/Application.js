/* Defaults */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/* Components */
import { Header } from '../UIComponents/Header';
import { Configurations } from './Containers/Configuration';

/* Actions */
import { fetchCMSData } from '../../Actions/CMSContent.actions';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // Usually we would fetch CMS content here asynchronously
    // and update it to the Application state.
    this.props.actions.fetchCMSData();

  }

  render() {

    return (
      <div className="application-wrapper">

        <Header
          headerType={'H1'}
          value={this.props.content.headerValue}
        />

        <Configurations />

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
