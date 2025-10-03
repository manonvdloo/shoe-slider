

  function showCorrectShoe(shoe) {
  /*console.log(shoe);*/
  /*tl.pause();*/
  switch(shoe) {
  case 'Nike Air Max 1':
    console.log('It is Nike Air Max 1');
    tl.seek("airmaxLabel");
    break;
  case 'Nike Air Max Solo':
    console.log('It is Nike Air Max Solo');
    tl.seek("maxsoloLabel");
    break;
  case 'Nike Impact 4 pink':
    console.log('It is Nike Impact 4 pink');
    tl.seek("impactLabel");
    break;
  case 'Nike Air Max Lite':
    console.log('It is Nike Air Max Lite');
    tl.seek("maxliteLabel");
    break;
  case 'Nike Impact 4 blue':
    console.log('It is Nike Impact 4 blue');
    tl.seek("impact4Label");
    break;
  default:
    console.log('Its something else');
}
  

/*
//jumps to the "myLabel" label
tl.seek("myLabel");

https://gsap.com/docs/v3/GSAP/Timeline/seek()/

// insert at the START of the  previous animation
tl.addLabel("myLabel", "<");
*/
  
  }




let tl = gsap.timeline();

tl.to(".impact_animation", {ease: 'power1.inOut', opacity: 1, y: 0, duration: 2,})
  .to(".impact-not-active", {ease: 'power1.inOut', opacity: 0, y: 0, duration: 2,}, "<") /*green block hides*/
tl.addLabel("impactLabel", "<")
  .add(() => {}, "+=2")
  .to(".impact_animation", {ease: 'power1.inOut', opacity: 0, y: 0, duration: 1,})
  .to(".impact-not-active", {ease: 'power1.inOut', opacity: 1, y: 0, duration: 1,}, "<") /*green block reappears*/

  /*second shoe showing as a big image*/
  .to(".airmax_animation", {ease: 'power1.inOut', opacity: 1, y: 0, duration: 2,})
  .to(".airmax-not-active", {ease: 'power1.inOut', opacity: 0, y: 0, duration: 2,}, "<") /*green block hides*/
tl.addLabel("airmaxLabel", "<")
  .add(() => {}, "+=2")
  .to(".airmax_animation", {ease: 'power1.inOut', opacity: 0, y: 0, duration: 1,})
  .to(".airmax-not-active", {ease: 'power1.inOut', opacity: 1, y: 0, duration: 1,}, "<") /*green block reappears*/



  /*third shoe showing as a big image*/
  .to(".impact4_animation", {ease: 'power1.inOut', opacity: 1, y: 0, duration: 2,})
  .to(".impact4-not-active", {ease: 'power1.inOut', opacity: 0, y: 0, duration: 2,}, "<") /*green block hides*/
tl.addLabel("impact4Label", "<")
  .add(() => {}, "+=2")
  .to(".impact4_animation", {ease: 'power1.inOut', opacity: 0, y: 0, duration: 1,})
  .to(".impact4-not-active", {ease: 'power1.inOut', opacity: 1, y: 0, duration: 1,}, "<") /*green block reappears*/


  /*fourth shoe showing as a big image*/
  .to(".maxsolo_animation", {ease: 'power1.inOut', opacity: 1, y: 0, duration: 2,})
  .to(".maxsolo-not-active", {ease: 'power1.inOut', opacity: 0, y: 0, duration: 2,}, "<") /*green block hides*/
tl.addLabel("maxsoloLabel", "<")
  .add(() => {}, "+=2")
  .to(".maxsolo_animation", {ease: 'power1.inOut', opacity: 0, y: 0, duration: 1,})
  .to(".maxsolo-not-active", {ease: 'power1.inOut', opacity: 1, y: 0, duration: 1,}, "<") /*green block reappears*/



  /*fifth shoe showing as a big image*/
  .to(".maxlite_animation", {ease: 'power1.inOut', opacity: 1, y: 0, duration: 2,})
  .to(".maxlite-not-active", {ease: 'power1.inOut', opacity: 0, y: 0, duration: 2,}, "<") /*green block hides*/
tl.addLabel("maxliteLabel", "<")
  .add(() => {}, "+=2")
  .to(".maxlite_animation", {ease: 'power1.inOut', opacity: 0, y: 0, duration: 1,})
  .to(".maxlite-not-active", {ease: 'power1.inOut', opacity: 1, y: 0, duration: 1,}, "<") /*green block reappears*/




  .to(".impact_animation", {ease: 'power1.inOut', opacity: 1, y: 0, duration: 2,})
  .to(".impact-not-active", {ease: 'power1.inOut', opacity: 0, y: 0, duration: 2,}, "<") /*green block hides*/

