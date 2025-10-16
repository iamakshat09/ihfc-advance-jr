const Car={
    color:"red",
    name:"Brezza",

    start(){
        console.log("Car is started")
    },

    stop(){
        console.log("car is stoped")
    },

    getdata(){
        console.log("the car name is "+this.name+", with color "+this.color)
    }
}

Car.start()
Car.stop()
Car.getdata()