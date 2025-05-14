const Greet = () =>{
    const dateToday = new Date().getDate();
    const monthToday = new Date().getMonth() + 1;
    const name  = "SAM"

    return (
        <div>
            <h1>welcome {name}</h1>
            <p>{dateToday}</p>
            <p>{monthToday}</p>
        </div>
        
    )
}

export default Greet;