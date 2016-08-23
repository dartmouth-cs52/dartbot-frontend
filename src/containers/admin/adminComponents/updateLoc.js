import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocs, createLoc, updateLoc, deleteLoc } from '../../../actions';
import UpdateLocItem from './update-loc-item';

class UpdateLoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      gps: { lat: '', long: '' },
      content: '',
    };
    this.onNewLocClick = this.onNewLocClick.bind(this);
    this.renderLocs = this.renderLocs.bind(this);
  }

  componentWillMount() {
    this.props.fetch();
  }

  onNewLocClick() {
    this.props.createLoc(this.state);
  }

  renderLocs() {
    this.props.locs.map(loc => {
      return (
        <UpdateLocItem loc={loc} update={this.props.update} delete={this.props.deleteLoc} />
      );
    });
  }

  render() {
    return (
      <div>
        <div id="newLoc">
          <button onClick={this.onNewLocClick}> Add New Location </button>
        </div>
        {this.renderLocs()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  locs: state.locs.all,
});

const mapDispatchToProps = (dispatch) => {
  return {
    create: (loc) => {
      dispatch(createLoc(loc));
    },
    update: (loc, id) => {
      dispatch(updateLoc(loc, id));
    },
    delete: (id) => {
      dispatch(deleteLoc(id));
    },
    fetch: () => {
      dispatch(fetchLocs());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateLoc);
