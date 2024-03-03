
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.text && request.text === "getDOM") {
      sendResponse({ dom: document.body.innerHTML });
  }
});

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   console.log("im here!!")
//   if (message.action === 'sendMyChose') {
//     //const htmlContent = document.documentElement.outerHTML;

//     document.getElementById('prompt-textarea').focus();
//     document.execCommand('insertText', false, 'Lets play tic toc toe , I chose' + message.value);


//     setTimeout(function() {
//       const lastgptResult = [...document.getElementsByClassName('w-full text-token-text-primary')].filter((element,index) => index % 2 != 0).pop();
//       console.log(lastgptResult.getElementsByTagName('p')[0].innerHTML);
//       sendResponse({ result: lastgptResult.getElementsByTagName('p')[0].innerHTML });
//     }, 3000);  

//     //sendResponse({ html: htmlContent });
//   }
// });


// setTimeout(function() {
//   document.getElementById('prompt-textarea').focus();
//   document.execCommand('insertText', false, 'hi this is a test !!');

//   setTimeout(function() {
//     document.querySelector('[data-testid="send-button"]').click();
//     setTimeout(function() {
//       const lastgptResult = [...document.getElementsByClassName('w-full text-token-text-primary')].filter((element,index) => index % 2 != 0).pop();
//       console.log(lastgptResult.getElementsByTagName('p')[0].innerHTML);
//     }, 2000);  //some times request has delay sooo =>> we cant trust to this 2000 mili seconds !!
//   }, 2000);

// }, 5000);