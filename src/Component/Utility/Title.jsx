import React from 'react';

const Title = ({name}) => {
    return (
        <div>
    <h1 className="text-xl uppercase font-extrabold text-center mb-5 text-[#149ECA] tracking-[0.25em]">
  {name}
  </h1>
        </div>
    );
};

export default Title;