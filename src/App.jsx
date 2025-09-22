import Student from './Student.jsx'
function App() {
  // props = read-only properties that are shared between components.
// A parent component can send data to a child component.
// <Component key=value />
  return(
   <>
   <Student name="SpongeBob" age={25} isStudent={true}/>
   <Student name="SpongeBob" age={42} isStudent={false}/>
     <Student name="Squidward" age={50} isStudent={false}/>
       <Student name="Sandy" age={27} isStudent={true}/>
   </>
  );

}

export default App;
