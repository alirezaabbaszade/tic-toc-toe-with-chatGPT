setTimeout(function() {
document.getElementById('prompt-textarea').focus();
document.execCommand('insertText', false, 'hi this is a test !!');

  setTimeout(function() {
    document.querySelector('[data-testid="send-button"]').click();
  }, 5000);

}, 5000);