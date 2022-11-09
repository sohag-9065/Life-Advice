import React from 'react';

const SubmitButton = ({value}) => {
    return <input type="submit" value={value} className=' w-80 text-white p-2 font-bold text-lg bg-yellow-400 rounded-md '/>;
};

export default SubmitButton;