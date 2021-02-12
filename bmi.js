function bmihesap(){
  let kilo =document.getElementById("kilo").value;
  let boy = document.getElementById("boy").value;
  boy/=100;
  let bmi = kilo/(boy**2);
  document.getElementById("sonuc").value=bmi.toFixed(2);
}
