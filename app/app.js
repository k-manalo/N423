var _db;
var fakeData = {
    fName: 'Kyle',
    lName: 'Manalo',
}



function initFirebase() {

    firebase
        .auth()
        .onAuthStateChanged(function(user) {
            if (user) {
                
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;
                //User is signed in
                console.log(email, "is signed in", user)
                //connected
                console.log("connected");

                 _db = firebase.firestore();
            } else {
                //User is signed out
                console.log("User is signed out")
            }
        });
}

function initListeners() {
    console.log("initListener")
    /*
    $("#getData").click(function() {
        _db
        .collection("DDUsers")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(doc.data(), ' ', doc.id)
            })
        })
    })
    
    $("#addData").click(function() {
        _db
        .collection("DDUsers")
        .add(fakeData)
        .then(function(doc) {
            console.log("Added Data")
            console.log("Ref: " + doc.id);
        })
    })
    */
   //-------------------------------------------------------------SIGN UP----------------------------------------------------------
    $("#signup-btn").click(function() {
        
        let email = $("#sEmail").val();
        let password = $("#sPassword").val();

        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage + ' ' + errorCode + ' ', error)
            if(errorCode == "auth/email-already-in-use") {
                $(".errorModal").css("display", "flex")
                $(".error-message").html("This Email is already in use.")

                $("#closeError").click(function() {
                    $(".errorModal").css("display", "none")
                })
            }
            if(errorCode == "auth/weak-password") {
                $(".errorModal").css("display", "flex")
                $(".error-message").html("Password must be at least 8 characters.")

                $("#closeError").click(function() {
                    $(".errorModal").css("display", "none")
                })
            }
        })
       
     })
      //-------------------------------------------------------------LOGIN----------------------------------------------------------
    $("#login-btn").click(function() {

        let email = $("#lEmail").val();
        let password = $("#lPassword").val();

        $(".roomPage").css("display", "flex")

        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        
        })
        console.log(email, "xxxxxxxxxxxxxxxxxxxxxxxxxxx")
       
    })
    //-------------------------------------------------------------LOGOUT----------------------------------------------------------
    $("#logout-btn").click(function() {
       firebase
       .auth()
       .signOut()
       .then(function() {
           console.log(email, "has signed out")
           _db = "";
       }).catch(function (error) {
           console.log("signout error")
       })
    })

    //---------------------------------------------------------NAVIGATION-----------------------------------------------------

    $("#login").click(function() {
        console.log("Login Page");
        $(".signupPage").css("display", "none")

        $(".loginPage").css("display", "flex")
    })
    $("#signup").click(function() {
        console.log("Signup Page");
        $(".loginPage").css("display", "none")

        $(".signupPage").css("display", "flex")
    })

    $("#room-btn").click(function() {
        console.log("room btn clicked")
        _db
        .collection("DDUsers")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                let roomData = doc.data();
                console.log(roomData)
            })
        })
    })

}

    //------------------------------------------------------------CREATE CHARACTER---------------------------------------------------



$(document).ready(function () {

        try {
            let app = firebase.app();
             //run initFirebase
            initFirebase();
            //listeners
            initListeners();

            
            
        } catch (e) {
            console.error (e);
        }
    
    
})