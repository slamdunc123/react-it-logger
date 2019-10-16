import React, { useEffect } from "react";
import PropTypes from "prop-types";

// redux
import { connect } from "react-redux";
import { getTechs } from "../../actions/techActions";

// components
import TechItem from "./TechItem";

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint - disable - next - line
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='model-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map((tech, index) => <TechItem tech={tech} key={index} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  tech: state.tech,
  getTechs
});

export default connect(
  mapStateToProps,
  { getTechs }
)(TechListModal);
