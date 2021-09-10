


const Tester = ({name}) =>{
  console.log(name)
  return <h3> I Love components {name}!!</h3>
}

function App() {
  return (
    <>
    <div className="App">
    </div>
    <Tester name="jisang"/>
    <Tester name="h"/>
    <Tester name="s"/>
    <Tester name="a"/>
    </>
    
  );
}

export default App;

/* note
props decomposing

reusable components with modifing props
*/