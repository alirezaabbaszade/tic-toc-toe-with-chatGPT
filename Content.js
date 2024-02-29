setTimeout(function() {
document.getElementById('prompt-textarea').focus();
document.execCommand('insertText', false, 'hi this is a test !!');

  setTimeout(function() {
    document.querySelector('[data-testid="send-button"]').click();
    setTimeout(function() {
      const lastgptResult = [...document.getElementsByClassName('w-full text-token-text-primary')].filter((element,index) => index % 2 != 0).pop();
      console.log(lastgptResult.getElementsByTagName('p')[0].innerHTML);
    }, 2000);  //some times request has delay sooo =>> we cant trust to this 2000 mili seconds !!
  }, 2000);
  
}, 5000);