import React from 'react';

const Title = ({ name }) => {
    return (
        <div className="flex justify-center items-center relative md:mb-5 mb-4">
        

            {/* Title text */}
            <h1
                className="md:text-2xl text-lg  font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#149ECA] via-[#1DB9D4] to-[#1DC4E9] tracking-[0.30em] drop-shadow-lg animate-pulse"
                style={{
                    textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
                }}
            >
                {name}
            </h1>
        </div>
    );
};

export default Title;
