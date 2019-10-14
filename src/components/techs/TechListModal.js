import React, { useState, useEffect } from "react";

// components
import TechItem from "./TechItem";

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getTechs();
    // eslint - disable - next - line
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch("/techs");
    const data = await res.json();
    console.log(data);

    setTechs(data);
    setLoading(false);
  };

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='model-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs.map((tech, index) => <TechItem tech={tech} key={index} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
