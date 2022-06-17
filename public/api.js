let RandomURL = "https://www.themealdb.com/api/json/v1/1/random.php"
const response = await fetch(url);
const data = await response.json();

export default data;