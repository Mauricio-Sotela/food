function getcube() {
  return (name = document.getElementById("artis").value);
}
var contenido = document.querySelector("#contenido");
b=function traer() {
  fetch("https://api.edamam.com/search?q="+getcube()+"&app_id=ce448bd7&app_key=02a720f7a7b52cd92713f617784d5bae&from=0&to=3&calories=591-722&health=alcohol-free")
    .then(res => res.json())
    .then(data => {
      console.log(data);

      let h = document.createElement("H2");
      let t = document.createTextNode(data["hits"][0]["recipe"]["label"]);
      h.appendChild(t);
      document.body.appendChild(h);

      let img=data["hits"][0]["recipe"]["image"];
      let myImage = new Image;
      myImage.src = img;
      document.body.appendChild(myImage);


      let list=data["hits"][0]["recipe"]["ingredientLines"];

      

      
      for (let i = 0; i < list.length; i++) {
        let o = document.createElement("P");
        let p = document.createTextNode(list[i]);
        o.appendChild(p);
        document.body.appendChild(o); 
      }
     
     
    
      

 
    });

    
}


