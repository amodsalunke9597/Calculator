function showAlert() {
    alert("Hello, World!");
  }
  
  function showConfirm() {
    if (confirm("Are you sure you want to delete this item?")) {
      alert("Item deleted!");
    } else {
      alert("Deletion canceled.");
    }
  }
  
  function showPrompt() {
    var name = prompt("Please enter your name:", "John Doe");
    alert("Hello, " + name + "!");
  }
  
  function showClose(){
    Window.close();
  }
  
  function showOpen(){
    open('https://www.google.com')
  }
