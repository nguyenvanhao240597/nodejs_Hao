function creatrApp(){
    let cars =[];
    return{
        add(car){
            cars.push(car);
        },
        show(){
            console.log(cars);
        }
    }
}
const app = creatrApp();
app.show();