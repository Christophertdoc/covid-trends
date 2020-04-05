import React, { useEffect } from 'react'
const googleTrends = require('google-trends-api')

const Data = () => {
    useEffect(() => {
        // console.log('useEffect')
        googleTrends.interestOverTime({keyword: 'Women\'s march'})
        .then(function(results){
          console.log('These results are awesome', results);
        })
        .catch(function(err){
          console.error('Oh no there was an error', err);
        })
    })
    return (
        <div>
            <h2>Data</h2>
        </div>
    )
}

export default Data