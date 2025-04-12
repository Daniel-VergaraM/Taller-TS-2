class Serie {
  constructor(
    public id: number,
    public name: string,
    public channel: string,
    public seasons: number,
    public description: string,
    public link: string,
    public image: string
  ) {}
}

const series = [
  new Serie(
    1,
    "Breaking Bad",
    "AMC",
    5,
    "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer",
    "https://www.amc.com/shows/breaking-bad",
    "https://i.imgur.com/GGje0vc.jpg"
  ),

  new Serie(
    2,
    "Orange Is the New Black",
    "Netflix",
    6,
    "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary",
    "https://www.netflix.com/co/title/70242311",
    "https://i.imgur.com/EvKe48G.jpg"
  ),

  new Serie(
    3,
    "Game of Thrones",
    "HBO",
    7,
    "American fantasy drama",
    "https://www.hbo.com/game-of-thrones",
    "https://i.imgur.com/TDCEV1S.jpg"
  ),

  new Serie(
    4,
    "The Big Bang Theory",
    "CBS",
    12,
    "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
    "https://www.cbs.com/shows/big_bang_theory/about/",
    "https://i.imgur.com/uAEpVWk.jpg"
  ),

  new Serie(
    5,
    "Sherlock",
    "BBC",
    4,
    "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
    "https://www.bbc.co.uk/programmes/b018ttws",
    "https://i.imgur.com/02B7qhj.jpg"
  ),

  new Serie(
    6,
    "A Very English Scandal",
    "BBC",
    2,
    "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
    "https://www.bbc.co.uk/programmes/p065smy4",
    "https://i.imgur.com/D4y3DrQ.jpg"
  ),
];

function average(): number {
  let s = 0;
  series.forEach((serie) => {
    s += serie.seasons;
  });
  return s / series.length;
}

function updateTable(): void {
  const tableBody = document.querySelector(
    "#seriesTable tbody"
  ) as HTMLTableSectionElement;
  const averageValue = average();

  tableBody.innerHTML = "";

  series.forEach((serie) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${serie.id}</td>
            <td><a href="#" class="serie-link">${serie.name}</a></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
    tableBody.appendChild(row);
    const serieLink = row.querySelector(".serie-link") as HTMLAnchorElement;
    serieLink.addEventListener("click", (e) => {
      e.preventDefault();
      renderCard(serie);
    });
  });

  const mediaRow = document.createElement("tr");
  mediaRow.innerHTML = `
                <td colspan="3">Average seasons</td>
                <td>${averageValue}</td>
                <td></td>
            `;
  tableBody.appendChild(mediaRow);
}

function renderCard(serie: Serie): void {
  const cardContainer = document.getElementById("serieCard");
  if (!cardContainer) {
    console.error("There's no container to render the card.");
    return;
  }
  
  if (!serie.name && !serie.image && !serie.description && !serie.link) {
    cardContainer.classList.add("d-none");
    return;
  }
  
  // Make the card visible when info is available.
  cardContainer.classList.remove("d-none");
  
  cardContainer.innerHTML = `
    <img class="card-img-top" src=${serie.image} alt="Card">
    <div class="card-body">
      <h5 class="card-title">${serie.name}</h5>
      <p class="card-text">${serie.description}</p>
      <a href="${serie.link}" class="btn btn-primary" target="_blank">Go to the website</a>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", updateTable);
