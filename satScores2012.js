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
    await data.forEach((d, i) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${d.school_name}</td>
            <td>${d.num_of_sat_test_takers}</td>
            <td>${d.sat_critical_reading_avg_score}</td>
        `;
        tableBody.appendChild(row);
    });

    const table = document.getElementById('sat');
    table.appendChild(tableBody);
})
