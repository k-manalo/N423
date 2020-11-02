import * as Model from "../model/model.js";


function initListeners() {
    $("#categories").change(function() {
        console.log(this.value)
        Model.getAlbumByCategory(this.value);
    })
    var albumAmount = $("#amount").val();
    Model.getAmountAlbums(albumAmount);

    $("#amount").change(function() {
        console.log(this.value)
        Model.getAmountAlbums(this.value);
    })
    
   
}

$(document).ready(function() {
  Model.initFirebase();
  Model.signIn(initListeners);
  
})