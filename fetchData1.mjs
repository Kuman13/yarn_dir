import fetch from 'node-fetch';

async function fetchData() {
    const response = await fetch('https://reqres.in/api/users?page=1&per_page=5', {method: 'POST', body: 'a=1'});
    const data = await response.json();
    console.log(data);
}

fetchData().catch(error => {
    console.error('Error:', error);
});
