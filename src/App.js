

const FoodList = [{
  name: "Kimchi",
  image:
    "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
},
{
  name: "Samgyeopsal",
  image:
    "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
},
{
  name: "Bibimbap",
  image:
    "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
},
{
  name: "Doncasu",
  image:
    "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
},
{
  name: "Kimbap",
  image:
    "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
}]

const Food = ({name , image}) =>{
  console.log(1)
  console.log(name)
  return <div class="foodItem">
    <img src={image} alt={`food::${name}`}/>
    <h3> I Love components {name}!!</h3>
  </div>
  
}

function App() {
  return (
    <>
    <div className="App">
    </div>
    {FoodList.map(food => {
      // ** warning
      return <Food name={food.name} image={food.image}/>
    })}
    </>
    
  );
}

export default App;

/* note
dynamic data applying to props
*/