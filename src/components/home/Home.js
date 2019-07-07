import React from "react";
import { connect } from "react-redux";
import { sampleAction } from "../../actions/sampleActions";

function Home(props) {
  const { sampleAction, sampleGlobalState } = props;

  return (
    <div>
      <h3>Welcome</h3>
    </div>
  );
}

const mapStateToProps = state => ({
  sampleGlobalState: state.sampleGlobalState
});

export default connect(
  mapStateToProps,
  { sampleAction }
)(Home);
