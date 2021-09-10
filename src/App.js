

const FoodList = [{
  id: 1,
  name: "Kimchi",
  image:
    "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
},
{
  id: 2,
  name: "Samgyeopsal",
  image:
    "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
},
{
  id: 3,
  name: "Bibimbap",
  image:
    "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
},
{
  id: 4,
  name: "Doncasu",
  image:
    "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
},
{
  id: 5,
  name: "Kimbap",
  image:
    "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
}]

const Food = ({id, name , image}) =>{
  
  return <div className="foodItem">
    <img src={image} alt={`food::${name}`}/>
    <h3> I Love components {name}!!</h3>
  </div>
  
}
const foodRenderer = (food) =>{
    return <Food key={food.id} name={food.name} image={food.image}/>
}
function App() {
  return (
    <>
    <div className="App">
    </div>
    {FoodList.map(foodRenderer)}
    </>
    
  );
}

export default App;

/* note
polishing,
index.js:1 Warning: Each child in a list should have a unique "key" prop.
--> need private key value , if component pushed to list, it loses its originality
*/