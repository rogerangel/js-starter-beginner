//https://data.cityofnewyork.us/resource/f9bf-2cp4.json

// [
//     {
//         "dbn": "14K449",
//         "school_name": "BROOKLYN LATIN SCHOOL, THE",
//         "num_of_sat_test_takers": "72",
//         "sat_critical_reading_avg_score": "586",
//         "sat_math_avg_score": "584",
//         "sat_writing_avg_score": "570"
//     }
// ]

async function getNYCSATs() {
    const data = await fetch("https://data.cityofnewyork.us/resource/f9bf-2cp4.json")
    return await data.json()
}

const getSATBtn = document.getElementById('fetchSat').addEventListener('click', async () => {
    const data = await getNYCSATs()
    
    const tableBody = document.createElement('tbody');
    const dataLen = await data.length
    tableBody.rows(dataLen)
    
    // await data.forEach((d, i) => {
        
    // })

    
})
