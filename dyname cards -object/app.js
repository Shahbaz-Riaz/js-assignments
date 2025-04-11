function Toyota(model,speed,engine,type,img,name){
    this.model = model
    this.speed = speed
    this.engine = engine
    this.type = type
    this.img = img
    this.name = name

}

const Revo = new Toyota(2022,"250mph","2000CC","pickup Truck","https://th.bing.com/th/id/R.d4b1e21ed90bc1175dab29d97392b2df?rik=n9%2bG%2fcZnqrIsfw&pid=ImgRaw&r=0","Revo")



const Corolla = new Toyota(2025,"260mph", "1500CC" , "Sedan", "https://th.bing.com/th/id/OIP.Zvpc-pHuV2-k1db3frLSDQHaEK?rs=1&pid=ImgDetMain","Corolla")



const Aqua = new Toyota(2020, "200mph", "1300CC", "HatchBack","https://th.bing.com/th/id/R.ed01b751df852b5f1c87b5c1b6b37bda?rik=ScfZ%2bEjz0e8bpQ&pid=ImgRaw&r=0","Aqua")



const Fortuner = new Toyota(2019, "220mph", "1500CC", "Jeep", "https://th.bing.com/th/id/OIP.sOoFL52DqNyC32rPYE8IoAHaDu?rs=1&pid=ImgDetMain","Fortuner")



    
    const arr = [Revo,Corolla,Aqua,Fortuner]
    
    arr.forEach(element => {
    let container = document.querySelector(".container")
    container.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${element.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><span>Model:</span> ${element.model}</li>
          <li class="list-group-item"><span>Speed:</span> ${element.speed}</li>
          <li class="list-group-item"><span>Engine:</span> ${element.engine}</li>
          <li class="list-group-item"><span>Type:</span> ${element.type}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">BUY NOW</a>
          <a href="#" class="card-link">TEST DRIVE</a>
        </div>
      </div><br>`
});