// FetchYogaData.jsx
import React from 'react';
import UseFetch from './UseFetch';

const FetchYogaData = () => {
    // Fetch the data from the API
    const { data } = UseFetch('https://api.example.com/yoga-benefits');

    // Console log the fetched data
    console.log(data);

    return (
        <div>
            <h1>Yoga Benefits</h1>
            {/* Display the data inside a list */}
            <ul className="list_data_main">
                {data && data.length > 0 ? (
                    data.map((item, index) => (
                        <li key={index}>{item.benefit}</li>
                    ))
                ) : (
                    <li>Loading...</li>
                )}
            </ul>
        </div>
    );
};

export default FetchYogaData;