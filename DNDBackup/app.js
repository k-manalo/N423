var _db;
var fakeData = {
    fName: 'Kyle',
    lName: 'Manalo',
}

var classData = [
    {
        "name": 'Fighter',
        "strength": '15',
        "dexterity": '12',
        "constitution": '12',
        "intelligence": '9',
        "wisdom": '8',
        "charisma": '8'

    },
    {
        "name": 'Wizard',
        "strength": '4',
        "dexterity": '6',
        "constitution": '10',
        "intelligence": '17',
        "wisdom": '15',
        "charisma": '11'
    },
    {
        "name": 'Ranger',
        "strength": '8',
        "dexterity": '16',
        "constitution": '9',
        "intelligence": '9',
        "wisdom": '13',
        "charisma": '13'
    },
    {
        "name": 'Bard',
        "strength": '7',
        "dexterity": '12',
        "constitution": '14',
        "intelligence": '6',
        "wisdom": '7',
        "charisma": '17'
    },
    {
        "name": 'Knight',
        "strength": '14',
        "dexterity": '7',
        "constitution": '14',
        "intelligence": '7',
        "wisdom": '10',
        "charisma": '10'
    },
    {
        "name": 'Druid',
        "strength": '10',
        "dexterity": '6',
        "constitution": '13',
        "intelligence": '10',
        "wisdom": '16',
        "charisma": '7'
    },
    {
        "name": 'Thief',
        "strength": '9',
        "dexterity": '17',
        "constitution": '9',
        "intelligence": '7',
        "wisdom": '8',
        "charisma": '11'
    },
    {
        "name": 'Cleric',
        "strength": '10',
        "dexterity": '5',
        "constitution": '11',
        "intelligence": '14',
        "wisdom": '11',
        "charisma": '4'
    },
    {
        "name": 'Witch Hunter',
        "strength": '12',
        "dexterity": '10',
        "constitution": '10',
        "intelligence": '7',
        "wisdom": '12',
        "charisma": '5'
    },
    {
        "name": 'Warlock',
        "strength": '11',
        "dexterity": '9',
        "constitution": '10',
        "intelligence": '13',
        "wisdom": '11',
        "charisma": '7'
    },
    {
        "name": 'Barbarian',
        "strength": '17',
        "dexterity": '11',
        "constitution": '13',
        "intelligence": '5',
        "wisdom": '6',
        "charisma": "4"
    },
    {
        "name": 'Assassin',
        "strength": '12',
        "dexterity": '15',
        "constitution": '9',
        "intelligence": '10',
        "wisdom": '10',
        "charisma": "10"
    },
    {
        "name": 'Paladin',
        "strength": '15',
        "dexterity": '9',
        "constitution": '17',
        "intelligence": '13',
        "wisdom": '8',
        "charisma": "8"
    },
    {
        "name": 'Pirate',
        "strength": '12',
        "dexterity": '12',
        "constitution": '8',
        "intelligence": '7',
        "wisdom": '7',
        "charisma": "14"
    },
    {
        "name": 'Beggar',
        "strength": '6',
        "dexterity": '10',
        "constitution": '9',
        "intelligence": '7',
        "wisdom": '7',
        "charisma": "6"
    },


]




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
        console.log(email, "has logged in")
        $(".loginPage").css("display", "none")
        $(".roomPage").css("display", "flex")
        getRooms()
       
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

    //-------------------------------------------------ROOM (LOAD OR CREATE)------------------------
    $("#create-room-btn").click(function() {
        _db
            .collection("DDUsers").doc("rooms").collection("room")
            .add({
                roomCode: $("#newRoomCode").val(),
                roomName: $("#newRoomName").val()
            })
            alert($("#newRoomName").val() + " has been created")
    })
}

    //----------------------------------GET ROOMS-----------------------------------------
    function getRooms() {
        $("#create-room-content-btn").click(function() {
            $(".roomButtons").css("display", "none")
            $(".create-room-content").css("display", "flex")
            
        })

        $("#find-room-content-btn").click(function() {
            $(".roomButtons").css("display", "none")
            $(".find-room-content").css("display", "flex")

            console.log("room btn clicked")
            _db
            .collection("DDUsers").doc("rooms").collection("room")
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    let roomData = doc.data();
                    var id = doc.id;
                    console.log(roomData)
                 
                    $(".roomList").append(`<div id="${id}" class="loadRoom">${roomData.roomName}</div>`)
                    //getRoomData(roomData);
                })
                $(".loadRoom").click(function(e) {
                    var roomId = e.currentTarget.id;
                    console.log(roomId)
                    getRoomData(roomId)
                })
            })

           

        })

    }
    //-------------------------------------------LOAD ROOM------------------------------------
    function getRoomData(rId) {
        
            _db
            .collection("DDUsers").doc("rooms").collection("room").doc(rId)
            .get()
            .then(function(doc) {
                let roomData = doc.data()
                
                console.log(roomData.roomName)
                console.log(roomData.roomCode)
                $(".roomCode-modal").css("display", "flex");
                $("#enterCode").click(function() {
                    if($("#inputCode").val() == roomData.roomCode) {
                        
                            console.log("Correct Code")
                        
                            $(".character-list-content").css("display", "flex")
                            getPlayers(rId)
                        
                        
                    } else {
                        console.log("Incorrect Code");
                    }
                })
            })
            
         
        

    }
    //--------------------------SELECT PLAYER---------------------------------------
    function getPlayers(rPlayerId) {
        console.log(rPlayerId)

        _db
            .collection("DDUsers").doc("rooms").collection("room").doc(rPlayerId)
            .get()
            .then(function(doc) {
                let roomPData = doc.data()
                console.log(roomPData)
                $("#newPlayerBtn").click(function() {
                    $(".character-create-sheet").css("display", "flex")
                    createCharacter(rPlayerId)
                })
        })
    }

    //----------------------------------CHARACTER CREATION--------------------------------

    function createCharacter (newPlayerRoomId) {
        console.log(newPlayerRoomId)
        var classCount = 0;
        let selectedClass = "";
        
        $(".className").append(classData[0].name)
        selectedClass = classData[0].name
        console.log(selectedClass)
        //-----------------last class click--------------------
        $(".lastClassBtn").click(function() {
            classCount = classCount - 1;
            if(classCount < 0) {
                $(".className").html(classData[14].name)
                classCount = 14;
                selectedClass = classData[14].name
            } else {
                $(".className").html(classData[classCount].name)
                selectedClass = classData[classCount].name
            }
            console.log(selectedClass)
        })

        //-----------------next class click--------------------
        $(".nextClassBtn").click(function() {
            classCount = classCount + 1;
            if(classCount > 14) {
                $(".className").html(classData[0].name)
                classCount = 0;
                selectedClass = classData[0].name
            } else {
                $(".className").html(classData[classCount].name)
                selectedClass = classData[classCount].name
            }
            console.log(selectedClass)
        })

        $("#createPlayerBtn").click(function() {
            _db
            .collection("DDUsers").doc("players").collection("player")
            .add({
                roomName: newPlayerRoomId,
                playerName: $("#newPlayerName").val(),
                class: selectedClass,
              
            })  
                    
        })
            
    }


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