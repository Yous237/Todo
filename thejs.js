
const input = document.querySelector("#add");
const  btn = document.querySelector("#btn");
const list = document.querySelector("#list");
const affichage = document.querySelector("#affichage");
var el = document.getElementsByTagName('li');
const valider = document.querySelector("#valider")
var alltask = []
var compt = 0

// this function will allow us to add elements when we click the button
function Task(name, len, txt, lvl, wdin) {
  this.name = name
  this.len = len;
  this.txt = txt;
  this.lvl = lvl ;
  this.wdin = wdin ;
  this.done= false ;
  this.line = "";
  this.get_name = function(){return (this.name) };
  this.get_txt = function(){return (this.txt)};
  this.get_lvl = function () {return (this.lvl)};
  this.get_wdin = function () {return (this.wdin)};
  this.its_one = function () {return (this.done)};
  this.disp = function (){
    var div = document.getElementById("taskup");

    if (div.style.display === "none") {
      div.style.display = "block";
    }else{
       div.style.display = "none";
    }
    /*
    var nom = "Your task is "+ this.get_name();
    var temps = "It takes about"+this.len;
    var text = this.get_txt();
    var niveau = "Task difficulty :" + this.get_lvl();
    var cqcd = "your task needs"+ this.get_wdin();
    */
    var disp = [nom,temps,text,niveau,cqcd];
    document.getElementById("11").innerHTML =   "Your task is "+ this.get_name();
    document.getElementById("12").innerHTML =   "It takes about"+this.len;
    document.getElementById("13").innerHTML =   this.get_txt();
    document.getElementById("14").innerHTML =   "Task difficulty :" + this.get_lvl();
    document.getElementById("15").innerHTML =   "your task needs"+ this.get_wdin();

  /*
  for (let i=0;i <4;i++){
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(disp[i]));
      div.appendChild(li);
      var stop = document.createElement("li")
      for (let i=10;i <5;i++){
        console.log(i)

        document.getElementById(""+i+10).innerHTML = dispi[y];
        y+=1;
    }
    var un = document.getElementById("11");
    var deux = document.getElementById("12");
    var trois = document.getElementById("13");
    var quatre = document.getElementById("14");
    var cinque = document.getElementById("15");

  };
  */
}
cacher.onclick = function(){
  var div = document.getElementById("taskup");

  if (div.style.display === "none") {
    div.style.display = "block";
  }else{
     div.style.display = "none";
  };
  };
}

///creer objet tache
valider.onclick = function(){
  const nom = document.getElementById("nom");
  const temp = document.getElementById("temps");
  const texte = document.getElementById("texte");
  const niveau = document.getElementById("niveau");
  const ressource = document.getElementById("ressource");
  var tache = new Task(nom.value, temp.value, texte.value, niveau.value, ressource.value);

  alltask.push(tache);

  var button = document.createElement("button");
  button.innerHTML = "...";

  li = document.createElement('li');
  li.id = compt;
  li.appendChild(button);

  li.innerHTML = tache.get_name();
  list.insertBefore(li,list.childNodes[0]);
  compt += 1;

  var div = document.getElementById("popUp");
  div.style.display = "none";
};
///afficahge onglet tache
btn.onclick = function(){
  var div = document.getElementById("popUp");

  if (div.style.display === "none") {
    div.style.display = "block";
  }else{
     div.style.display = "none";
  }
};

//this function will allow us to check the clicked elements
var ele = ""
list.onclick = function(ev){
    if(ev.target.tagName == 'LI'){
      var ind = ev.target.id;
      ele = ind
      alltask[ind].disp();
      ///ca foncctione ca --->suprimer.onclick = $('#'+ind).remove();
      suprimer.onclick = function(){
        $('#'+ele).remove();
        var div = document.getElementById("taskup");
        div.style.display = "none";
      };
    };
};

//0507
