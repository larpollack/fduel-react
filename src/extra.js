const extra = () => {
  document.body.style.backgroundImage = "url('images/card2.jpg')";
  const columnScoring = document.getElementsByClassName("column-scoring");
  columnScoring[0].style.backgroundImage = "url('images/headshot.jpg')";
  const card = document.getElementsByClassName("card");
  card[0].style.backgroundImage = "url('images/hqdefault.jpg')";
  const cardRight = document.getElementsByClassName("card-right");
  cardRight[0].style.backgroundImage = "url('images/tall.jpg')";
  const excess = document.getElementsByClassName("excess");
  excess[0].style.backgroundImage = "url('images/tech.jpg')";
  excess[1].style.backgroundImage = "url('images/card2.jpg')";
  const cardPlays = document.getElementsByClassName("play-card");
  cardPlays[0].style.backgroundImage = "url('images/headshot.jpg')";
  const cardStats = document.getElementsByClassName("card-stats");
  cardStats[0].style.backgroundImage = "url('images/hqdefault.jpg')";
};

export default extra;
