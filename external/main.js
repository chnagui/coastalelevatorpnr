let person = prompt("Please enter your name", "Eg: Monu");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "HELLO " + person + "! WELCOME TO COSTAL ELEVATOR SERVICES, PONNURU";
}
//Marquee-----
const marquee = document.getElementById('welcomeMarquee');
    marquee.addEventListener('mouseover', () => marquee.stop());
    marquee.addEventListener('mouseout', () => marquee.start());
// marquee end-----


