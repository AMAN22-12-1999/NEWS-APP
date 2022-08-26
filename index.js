//from https://newsapi.org (news Api)
// API Key:-5c2ed0201e3a4fc1af4dd65073c72390


//Intialize the new API Parameters:-
let source = 'bbc-news';
let apiKeyValue = '644fd5c877264986a76faf9638db0880';

//Grab the news Container:-
let newsAccordion = document.getElementById('newsAccordion');

//Create an AJAX Get request:-
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=5c2ed0201e3a4fc1af4dd65073c72390`, true);

//What to do when request is ready:-
xhr.onload = function () {
    if (this.status === 200) {
        let json=JSON.parse(this.responseText);
        console.log("json=",json);
        
        let articles=json.articles;
        console.log("articles=",articles);
        
        let newsHtml=" ";
        
        articles.forEach(function(elements,index) {
            let news = `
                    <div class="card">
                        <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                                   <u><strong>BREAKING NEWS ${index+1}:-</strong></u> ${elements["title"]}
                                </button>
                            </h2>
                        </div>
        
                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                            <div class="card-body"> ${elements["content"]}. <a href=${elements["url"]} target="_blank" >Read More Here.</a></div>
                        </div>
                    </div>`;
            
            newsHtml+=news;
        });
        
        newsAccordion.innerHTML=newsHtml;

    }
    else {
        console.log("Error");
    }
}

xhr.send();


// https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKeyValue}

