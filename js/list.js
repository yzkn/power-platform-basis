// Copyright (c) 2022 YA-androidapp(https://github.com/YA-androidapp) All rights reserved.

const get_tag_html = (tags) => {
    tags.sort();
    return tags.join(' ')
        .replace('customconnector', '<span class="badge bg-customconnector">Custom Connector</span>')
        .replace('forms', '<span class="badge bg-forms">Forms</span>')
        .replace('powerapps', '<span class="badge bg-powerapps">Power Apps</span>')
        .replace('powerautomate', '<span class="badge bg-powerautomate">Power Automate</span>')
        .replace('powerbi', '<span class="badge bg-powerbi">Power BI</span>')
        .replace('solution', '<span class="badge bg-solution">Solution</span>')
        .replace('teams', '<span class="badge bg-teams">Teams</span>')
        .replace('tutorial', '<span class="badge bg-tutorial">Tutorial</span>')
        ;
}

const load_banners = () => {
    let inner = [];
    let indicators = [];
    banners.forEach((item, index) => {
        inner.push(`
        <div class="carousel-item` + (index == 0 ? ' active' : '') + `">
            <img alt="${item['item_label']}" src="https://raw.githubusercontent.com/YA-androidapp/power-platform-basis/gh-pages/image/thumbnail/${item['item_image']}">

            <div class="container">
                <div class="carousel-caption text-end">
                    <h2 class="text-dark bg-white bg-opacity-50">${item['item_label']}</h1>
                        <p class="text-dark bg-white bg-opacity-50">${item['item_summary']}</p>
                        <p class="text-dark bg-white bg-opacity-50"><a class="btn btn-lg btn-primary"
                                href="${item['item_repo']}" role="button"
                                target="_blank">リポジトリをみる</a></p>
                </div>
            </div>
        </div>
        `);

        indicators.push(`
        <li data-bs-target="#myCarousel" data-bs-slide-to="${index}"` + (index == 0 ? ' class="active"' : '') + `></li>
        `);
    });

    const innerElem = document.getElementsByClassName('carousel-inner')[0];
    innerElem.innerHTML = inner.join();

    const indicatorsElem = document.getElementsByClassName('carousel-indicators')[0];
    indicatorsElem.innerHTML = indicators.join();
}

const load_repos = () => {
    let inner = [];
    repos.sort(() => Math.random() - 0.5);
    repos.forEach(item => {
        inner.push(`
        <div class="col">
            <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                    role="img" focusable="false"
                    style="background-size: cover; background-image: url(https://raw.githubusercontent.com/YA-androidapp/power-platform-basis/gh-pages/image/thumbnail/${item['item_image']})">
                    <title>${item['item_title']}</title>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">${item['item_label']}</text>
                </svg>
                <div class="card-body">
                    <p class="card-text">${item['item_summary']}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <a class="btn btn-sm btn-outline-secondary" href="${item['item_repo']}" role="button" target="_blank">Repo</a>
                            <span class="item_repo">${item['item_repo']}</span>
                        </div>
                        <small class="text-muted item_tag">
                            ${get_tag_html(item['item_tags'])}
                        </small>
                    </div>
                </div>
            </div>
        </div>
        `);
    });

    const listElem = document.getElementsByClassName('list')[0];
    listElem.innerHTML = inner.join();
}

window.addEventListener('DOMContentLoaded', () => {
    load_repos();
    load_banners();

    new List('repos', {
        valueNames: ['item_title', 'item_label', 'item_summary', 'item_repo', 'item_tag']
    });
});
