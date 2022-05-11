import "./index.less";
import "./components/article/article.js";
import "./components/menu/menu.js";

const testData = {
  title: "test",
  date: "test",
  firstParagraph: `test`,
  secondParagraph: `test`,
  thirdParagraph: `test`,
};

function makeArtical( {title, date, firstParagraph, secondParagraph, thirdParagraph,} ) {
  const articalDiv = document.createElement("div");
  articalDiv.classList.add("article");
  const articalTitle = document.createElement("h2");
  const articalDate = document.createElement("p");
  const articalOne = document.createElement("p");
  const articalTwo = document.createElement("p");
  const articalThree = document.createElement("p");
  const expandButton = document.createElement("span");
  expandButton.classList.add("expandButton");

  articalTitle.textContent = title;
  articalDate.textContent = date;
  articalOne.textContent = firstParagraph;
  articalTwo.textContent = secondParagraph;
  articalThree.textContent = thirdParagraph;
  expandButton.textContent = 'expand'


  articalDiv.appendChild(articalTitle);
  articalDiv.appendChild(articalDate);
  articalDiv.appendChild(articalOne);
  articalDiv.appendChild(articalTwo);
  articalDiv.appendChild(articalThree);
  articalDiv.appendChild(expandButton);
  return articalDiv;
}
const articalOne = makeArtical(testData);


const placeArticals = document.querySelector('.articles');
placeArticals.appendChild(articalOne);



console.log(testData);
console.log(articalOne);

/* <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div> */
