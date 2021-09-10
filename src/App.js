


const Tester = (props) =>{
  console.log(props)
  return <h3> I Love components!!</h3>
}

function App() {
  return (
    <>
    <div className="App">
    </div>
    <Tester name="jisang" potato = {true} someThing ={[1,2,3,4,5,false]}/>
    </>
    
  );
}

export default App;

/* note
how to send data to child component
 name="jisang"
 name => prop
 'jisnag' = value
*/