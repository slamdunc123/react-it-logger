import React, { useEffect } from "react";
import PropTypes from "prop-types";

// redux
import { connect } from "react-redux";
import { getLogs } from "../../actions/logActions";

// components
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show...</p>
      ) : (
        logs.map((log, index) => <LogItem log={log} key={index} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  log: state.log //pertains to rootReducer
});

export default connect(
  mapStateToProps,
  { getLogs }
)(Logs);
