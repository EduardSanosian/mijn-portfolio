var beurtSpeler1 = true;                // Speler 1 begint
var endgame=false;
  function zet()
  { 
      if(endgame){
          return;
      }
      if(this.innerHTML != "")            // Als er al iets in staat,
      {
          return;                         // dan gaat de zet niet door
      }
      else                                // Als de cel leeg is,
      {                                   // dan gaan we de zet verwerken
        
        var speler = document.getElementById('speler');
          if(beurtSpeler1)                // Als speler 1 aan de beurt is,
          { 
            speler.innerHTML="speler 2 is aan de beurt";
              this.innerHTML = 'x';       // dan wordt de inhoud een X
          }
          else                            // Als speler 2 aan de beurt is,
          {  
              speler.innerHTML="speler 1 is aan de beurt";
              this.innerHTML = 'o';      // dan wordt de inhoud een O
          }
   
          beurtSpeler1 = !beurtSpeler1;   // Wissel de beurt
          checkwin();
          
           
      }
  }
   function checkwin() {
    var vak1 = document.getElementById('1');
    var vak2 = document.getElementById('2');
    var vak3 = document.getElementById('3');
    var vak4 = document.getElementById('4');
    var vak5 = document.getElementById('5');
    var vak6 = document.getElementById('6');
    var vak7 = document.getElementById('7');
    var vak8 = document.getElementById('8');
    var vak9 = document.getElementById('9');
    var speler = document.getElementById('speler');
    console.log(vak1.innerHTML);
    console.log(vak2.innerHTML);
    console.log(vak3.innerHTML);
    console.log(vak4.innerHTML);
    console.log(vak5.innerHTML);
    console.log(vak6.innerHTML);
    console.log(vak7.innerHTML);
    console.log(vak8.innerHTML);
    console.log(vak9.innerHTML);
    if(vak1.innerHTML=="x"&& vak2.innerHTML=="x"&& vak3.innerHTML=="x"){ 
        speler.innerHTML="speler 1 wint";
        endgame=true;
    }
    if(vak1.innerHTML=="o"&& vak2.innerHTML=="o"&& vak3.innerHTML=="o"){
        speler.innerHTML="speler 2 wint"; 
        endgame=true;
    }
    if(vak4.innerHTML=="x"&& vak5.innerHTML=="x"&& vak6.innerHTML=="x"){
        speler.innerHTML="speler 1 wint"; 
        endgame=true;
    }
    if(vak4.innerHTML=="o"&& vak5.innerHTML=="o"&& vak6.innerHTML=="o"){
        speler.innerHTML="speler 2 wint"; 
        endgame=true;
    }
    if(vak7.innerHTML=="x"&& vak8.innerHTML=="x"&& vak9.innerHTML=="x"){ 
        speler.innerHTML="speler 1 wint";
        endgame=true;
    }
    if(vak7.innerHTML=="o"&& vak8.innerHTML=="o"&& vak9.innerHTML=="o"){
        speler.innerHTML="speler 2 wint"; 
        endgame=true;
    }
    if(vak1.innerHTML=="x"&& vak4.innerHTML=="x"&& vak7.innerHTML=="x"){ 
        speler.innerHTML="speler 1 wint";
        endgame=true;
    }
    if(vak1.innerHTML=="o"&& vak4.innerHTML=="o"&& vak7.innerHTML=="o"){
        speler.innerHTML="speler 2 wint"; 
        endgame=true;
    }
    if(vak2.innerHTML=="x"&& vak5.innerHTML=="x"&& vak8.innerHTML=="x"){ 
        speler.innerHTML="speler 1 wint";
        endgame=true;
    }
    if(vak2.innerHTML=="o"&& vak5.innerHTML=="o"&& vak8.innerHTML=="o"){
        speler.innerHTML="speler 2 wint"; 
        endgame=true;
    }
    if(vak3.innerHTML=="x"&& vak6.innerHTML=="x"&& vak9.innerHTML=="x"){ 
        speler.innerHTML="speler 1 wint";
        endgame=true;
    }
    if(vak3.innerHTML=="o"&& vak6.innerHTML=="o"&& vak9.innerHTML=="o"){
        speler.innerHTML="speler 2 wint"; 
        endgame=true;
    }
    if(vak1.innerHTML=="x"&& vak5.innerHTML=="x"&& vak9.innerHTML=="x"){ 
        speler.innerHTML="speler 1 wint";
        endgame=true;
    }
    if(vak1.innerHTML=="o"&& vak5.innerHTML=="o"&& vak9.innerHTML=="o"){
        speler.innerHTML="speler 2 wint"; 
        endgame=true;
    }
    if(vak3.innerHTML=="x"&& vak5.innerHTML=="x"&& vak7.innerHTML=="x"){ 
        speler.innerHTML="speler 1 wint";
        endgame=true;
    }
    if(vak3.innerHTML=="o"&& vak5.innerHTML=="o"&& vak7.innerHTML=="o"){
        speler.innerHTML="speler 2 wint"; 
        endgame=true;
    }

   }
  function maakEvents()
  { 
      // Ken een onclick event toe aan alle td's in het document
      var tds = document.getElementsByTagName("td");
      for(var i = 0; i < tds.length; ++i)
      {
          tds[i].onclick = zet;
      }
  }
  window.onload = maakEvents;