import "./App.css";

function App() {

  const handleAddUser = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};
    form.reset();
    console.log(user);
    

    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user) 
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        alert('User Added Successfully')
      }
    })
    .catch(error => console.log(error))


  }
  return (
    <>
      <div className="text-center">
        <h1>Simple CRUD Client</h1>
        <form onSubmit={handleAddUser}>
          <input type="text" name="name" id="" /> <br /> <br />
          <input type="email" name="email" id="" /> <br /> <br />
          <input type="submit" value="ADD NEW USER" />
        </form>
      </div>
    </>
  );
}

export default App;
