let currentPage = 1;
let allDataLoaded = false;

document.getElementById('fetch-btn').addEventListener('click', () => {
    currentPage = 1; 
    allDataLoaded = false;
    loadPage(currentPage);
    document.getElementById('next-btn').style.display = 'block';
    document.getElementById('prev-btn').style.display = 'block';
    document.getElementById('pn-btn-container').style.display = 'flex';
});

async function fetchContestData(page) {
    try {
        const response = await fetch(`https://memes.tw/wtf/api?contest=621&page=${page}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
    }
}

async function loadPage(page) {
    const data = await fetchContestData(page);
    if (data && data.length > 0) {
        clearDataContainer();
        renderData(data);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function clearDataContainer() {
    const dataContainer = document.getElementById('container');
    dataContainer.innerHTML = ''; 
}

function renderData(data) {
    const dataContainer = document.getElementById('container');

    data.forEach((item) => {
        const dataItem = document.createElement('div');
        dataItem.className = 'dataItem';

        const title = document.createElement('h2');
        title.textContent = `梗圖title:${item.title}`;

        const link = document.createElement('a');
        link.href = item.url;
        link.textContent = '原文連結';
        link.target = '_blank';

        const image = document.createElement('img');
        image.src = item.src;
        image.alt = item.title;

        dataItem.appendChild(title);
        dataItem.appendChild(link);
        dataItem.appendChild(image);
        dataContainer.appendChild(dataItem);
    });
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentPage++;
    loadPage(currentPage).then(() => {
        checkButtons();
    });
});

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        loadPage(currentPage).then(() => {
            checkButtons();
        });
    }
});

function checkButtons() {
    document.getElementById('prev-btn').style.display = currentPage > 1 ? 'block' : 'none';
    document.getElementById('next-btn').style.display = allDataLoaded ? 'none' : 'block';
}
