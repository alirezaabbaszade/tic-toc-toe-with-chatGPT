// let bobRossImages = [
//     "https://bit.ly/3Ck6DTU",
//     "https://bit.ly/3ozQCVk",
//     "https://bit.ly/3omYDN6",
//     "https://bit.ly/3osrfoi",
//     "https://bit.ly/3qCPjax",
//     "https://bit.ly/3CkRXE6",
//   ];
  
//   const imgs = document.getElementsByTagName("img");
  
//   for (image of imgs) {
//     const index = Math.floor(Math.random() * bobRossImages.length);
//     image.src = bobRossImages[index];
//   }


  // const txt = document.getElementById("prompt-textarea");
  // console.log(txt);

setTimeout(function() {
//   txt.value = "hi this is a test !!";
//   txt.length = 1;
// console.log(txt);
// console.log(txt.length);

document.getElementById('prompt-textarea').focus();
document.execCommand('insertText', false, 'hi this is a test !!');

  setTimeout(function() {
    document.querySelector('[data-testid="send-button"]').click();
  }, 5000);

}, 5000);


//  setTimeout(function() {

//   const el = document.getElementById("prompt-textarea");
//   el.value = "hi this is a test !!";
//   // const evt = document.createEvent("Events");
//   // evt.initEvent("change", true, true);
//   // el.dispatchEvent(evt);
//   }, 5000);



// const input = document.getElementById("prompt-textarea");
// console.log(input);

// input.select(); // you can also use input.focus()
// input.value="";

// var text = "hi this is a test !!";
// var l=text.length;
// var current = 0;
// var time = 1000;


// var write_text = function() {
//   input.value+=text[current];
//   //input.dispatchEvent(new KeyboardEvent('keydown', {'key': text[current]}));
//   input.dispatchEvent(new KeyboardEvent('keydown', {'key':text[current]} ));
//   input.dispatchEvent(new KeyboardEvent( 'keyup' , {'key':text[current]} ));
//   if(current < l-1) {
//     current++;
//     setTimeout(function(){write_text()},time);
//   } else {
//     input.setAttribute('value',input.value);
//   }
//}
//setTimeout(function(){write_text()},time);
