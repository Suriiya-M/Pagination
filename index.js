const player=
[
    { pid:1, No: 7,Name: 'Dhoni', country: 'India' },
    { pid:2, No: 18,Name: 'Kohli', country: 'India' },
    { pid:3, No: 3,Name: 'Ayruz', country: 'India' },
    { pid:4, No: 1, Name: 'Rahul', country: 'India' },
    { pid:5, No: 10, Name: 'Sachin', country: 'India' },
    { pid:6, No: 45, Name: 'Rohit', country: 'India' },
    { pid:7, No: 333, Name: 'Gayle', country: 'WI' },
    { pid:8, No: 12, Name: 'Yuvi', country: 'India' },
    { pid:9, No: 22, Name: 'Kane', country: 'NZ' },
    { pid:10, No: 14, Name: 'Ricky', country: 'Australia' },
    { pid:11, No: 17, Name: 'ABD', country: 'SA' },
    { pid:12, No: 30, Name: 'Pat', country: 'Australia' },
    { pid:13, No: 48, Name: 'Raina', country: 'India' },
    { pid:14, No: 48, Name: 'Hussey', country: 'Australia' },
    { pid:15, No: 47, Name: 'Bravo', country: 'WI' },
    { pid:16, No: 51,Name: 'Bairstow', country: 'England' },
    { pid:17, No: 52, Name: 'Dilshan', country: 'Sri Lanka' },
    { pid:18, No: 49, Name: 'steve smith', country: 'Australia' },
    { pid:19, No: 56, Name: 'babar azam', country: 'Pakistan' },
    { pid:20, No: 16, Name: 'Mohammad Rizwan', country: 'Pakistan' },
    { pid:21, No: 10, Name: 'Afridi', country: 'Pakistan' },
    { pid:22, No: 12, Name: 'Quinton', country: 'South Africa' },
    { pid:23, No: 1, Name: 'hasim amla', country: 'South Africa' },
    { pid:24, No: 4, Name: 'aiden markram', country: 'South Africa' },
    { pid:25, No: 45, Name: 'klassen', country: 'South Africa' },
    { pid:26, No: 8, Name: 'Dale Steyn', country: 'South Africa' },
    { pid:27, No: 19, Name: 'Faf', country: 'South Africa' },
    { pid:28, No: 12, Name: 'russel', country: 'West Indies' },
    { pid:29, No: 52, Name: 'Rovman Powell', country: 'West Indies' },
    { pid:30, No: 74, Name: 'Sunil Narine', country: 'West Indies' },
    { pid:31, No: 55, Name: 'pollard', country: 'West Indies' },
    { pid:32, No: 18, Name: 'Trend Boult', country: 'New Zealand' },
    { pid:33, No: 19, Name: 'Mitchell', country: 'New Zealand' },
    { pid:34, No: 88, Name: 'conway', country: 'New Zealand' },
    { pid:35, No: 74, Name: 'santner', country: 'New Zealand' },
    { pid:36, No: 8, Name: 'Rachin', country: 'New Zealand' },
    { pid:37, No: 8, Name: 'jadeja', country: 'India' },
    { pid:38, No: 49, Name: 'hasaranga', country: 'Sri Lanka' },
    { pid:39, No: 1, Name: 'perara', country: 'Sri Lanka' },
    { pid:40, No: 31, Name: 'jayasuriya', country: 'Sri Lanka' }
];
console.log(player);

let currentPage=1;
const itemsPerPage=5;
let sorted=false;


function generatePlayerHTML(player) {
    return `<tr><td>${player.No}</td>
            <td>${player.Name}</td>
            <td>${player.country}</td>
            </tr>`;


}


function view(pageNumber, itemsPerPage) {
const tableBody = document.getElementById('playerTableBody');
let html = '';

let playersToDisplay = player;

if (sorted) 
{
    playersToDisplay.sort((a, b) => a.No - b.No);
}
const startIndex = (pageNumber - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;

playersToDisplay.slice(startIndex, endIndex).forEach(p => {
html += generatePlayerHTML(p);
    });

tableBody.innerHTML = html;
}


view(currentPage, itemsPerPage);


function sortByJersey() {
    sorted = true;
    alert('Your Table is Sorted by Jersey No')
    view(currentPage, itemsPerPage);
}

document.getElementById('btn-prev').addEventListener('click', function() 
{
    if (currentPage>1) 
    {
        currentPage--;
        view(currentPage, itemsPerPage);
    }
    else 
    {
        currentPage=9;
    }
}
);

document.getElementById('btn-next').addEventListener('click', function() 
{
    if (currentPage < Math.ceil(player.length / itemsPerPage)) 
    {
        currentPage++;
        view(currentPage, itemsPerPage);
    } 
    else 
    {
        currentPage=0;
    }
}
);

