

var _db;
var fakeData = {
    fName: 'Test',
    lName: 'Testing',
}

var classData = [
    {
        "name": 'Fighter',
        "gp": 100,
        "hp": 9,
        "initiative": 1,
        "strength": 15,
        "dexterity": 12,
        "constitution": 12,
        "intelligence": 9,
        "wisdom": 8,
        "charisma": 8,
        "acrobatics": 1,
        "animal": -1,
        "arcana": -1,
        "athletics": 2,
        "deception": -1,
        "history": -1,
        "insight": -1,
        "intimidation": -1,
        "investigation": -1,
        "medicine": -1,
        "nature": -1,
        "perception": -1,
        "performance": -1,
        "persuasion": -1,
        "religion": -1,
        "sleight": 1,
        "stealth": 1,
        "survival": -1,
        "armor": [
            {
                "item": "Iron Kettle Helm ",
                "rating": 7
            },
            {
                "item": "Wooden Round Shield",
                "rating": 7
            },
            
        ],
        "weapon": [
            {
                "weapon": "Hand-Me-Down Axe",
                "attack": 3,
                "type": "str",
                "damage": "slash"
            },

        ]

    },
    {
        "name": 'Wizard',
        "gp": 125,
        "hp": 8,
        "initiative": -2,
        "strength": 4,
        "dexterity": 6,
        "constitution": 10,
        "intelligence": 17,
        "wisdom": 15,
        "charisma": 11,
        "acrobatics": -2,
        "animal": 2,
        "arcana": 3,
        "athletics": -3,
        "deception": 0,
        "history": 3,
        "insight": 2,
        "intimidation": 0,
        "investigation": 3,
        "medicine": 3,
        "nature": 2,
        "perception": 2,
        "performance": 0,
        "persuasion": 0,
        "religion": 2,
        "sleight": -3,
        "stealth": -3,
        "survival": 2,
        "armor": [
            {
                "item": "Apprentice Hat",
                "rating": 2
            },
            {
                "item": "Apprentice Robe",
                "rating": 3
            },
            
        ],
        "weapon": [
            {
                "weapon": "Fireball",
                "attack": 9,
                "type": "int",
                "damage": "fire"
            },

        ]
    },
    {
        "name": 'Ranger',
        "gp": 70,
        "hp": 7,
        "initiative": 3,
        "strength": 8,
        "dexterity": 16,
        "constitution": 9,
        "intelligence": 9,
        "wisdom": 13,
        "charisma": 13,
        "acrobatics": 3,
        "animal": 1,
        "arcana": -1,
        "athletics": -1,
        "deception": 1,
        "history": -1,
        "insight": 1,
        "intimidation": 1,
        "investigation": -1,
        "medicine": -1,
        "nature": 1,
        "perception": 1,
        "performance": 1,
        "persuasion": 1,
        "religion": -1,
        "sleight": 3,
        "stealth": 3,
        "survival": 1,
        "armor": [
            {
                "item": "Hunter's Hat",
                "rating": 2
            },
            {
                "item": "Leather Jerkin",
                "rating": 5
            },
            
        ],
        "weapon": [
            {
                "weapon": "Longbow",
                "attack": 5,
                "type": "dex",
                "damage": "pierce"
            },

        ]
    },
    {
        "name": 'Bard',
        "gp": 50,
        "hp": 10,
        "initiative": 1,
        "strength": 7,
        "dexterity": 12,
        "constitution": 14,
        "intelligence": 6,
        "wisdom": 7,
        "charisma": 17,
        "acrobatics": 1,
        "animal": -2,
        "arcana": -2,
        "athletics": -2,
        "deception": 3,
        "history": -2,
        "insight": -2,
        "intimidation": 3,
        "investigation": -2,
        "medicine": -2,
        "nature": -2,
        "perception": -2,
        "performance": 3,
        "persuasion": 3,
        "religion": -2,
        "sleight": 1,
        "stealth": 1,
        "survival": -2,
        "armor": [
            {
                "item": "Funny Hat",
                "rating": 2
            },
            {
                "item": "Cheap Overcoat",
                "rating": 3
            },
            
        ],
        "weapon": [
            {
                "weapon": "Lute",
                "attack": 3,
                "type": "cha",
                "damage": "Boost Str"
            },

        ]
    },
    {
        "name": 'Knight',
        "gp": 200,
        "hp": 10,
        "initiative": -2,
        "strength": 14,
        "dexterity": 7,
        "constitution": 14,
        "intelligence": 7,
        "wisdom": 10,
        "charisma": 10,
        "acrobatics": -2,
        "animal": 0,
        "arcana": -2,
        "athletics": 2,
        "deception": 0,
        "history": -2,
        "insight": 0,
        "intimidation": 0,
        "investigation": -2,
        "medicine": -2,
        "nature": 0,
        "perception": 0,
        "performance": 0,
        "persuasion": 0,
        "religion": -2,
        "sleight": -2,
        "stealth": -2,
        "survival": 0,
        "armor": [
            {
                "item": "Standard Platemail",
                "rating": 10
            },
            {
                "item": "Kite Shield",
                "rating": 8
            },
            
        ],
        "weapon": [
            {
                "weapon": "Broadsword",
                "attack": 6,
                "type": "str",
                "damage": "slash"
            },

        ]
    },
    {
        "name": 'Druid',
        "gp": 10,
        "hp": 9,
        "initiative": -2,
        "strength": 10,
        "dexterity": 6,
        "constitution": 13,
        "intelligence": 10,
        "wisdom": 16,
        "charisma": 7,
        "acrobatics": -2,
        "animal": 3,
        "arcana": 0,
        "athletics": 0,
        "deception": -2,
        "history": 0,
        "insight": 3,
        "intimidation": 0,
        "investigation": -2,
        "medicine": -2,
        "nature": 3,
        "perception": 3,
        "performance": 0,
        "persuasion": 0,
        "religion": 0,
        "sleight": -2,
        "stealth": -2,
        "survival": 3,
        "armor": [
            {
                "item": "Ceremonial Wreath Crown",
                "rating": 2
            },
            {
                "item": "Dirty Robes",
                "rating": 4
            },
            
        ],
        "weapon": [
            {
                "weapon": "Shield Companions",
                "attack": 5,
                "type": "wis",
                "damage": "Boost Armor Rating"
            },

        ]
    },
    {
        "name": 'Thief',
        "gp": 100,
        "hp": 7,
        "initiative": -2,
        "strength": 9,
        "dexterity": 17,
        "constitution": 9,
        "intelligence": 7,
        "wisdom": 8,
        "charisma": 11,
        "acrobatics": 3,
        "animal": -1,
        "arcana": -2,
        "athletics": -1,
        "deception": 0,
        "history": -2,
        "insight": -1,
        "intimidation": 0,
        "investigation": -2,
        "medicine": -2,
        "nature": -1,
        "perception": -1,
        "performance": 0,
        "persuasion": 0,
        "religion": -2,
        "sleight": 3,
        "stealth": 3,
        "survival": -1,
        "armor": [
            {
                "item": "Thief Mask",
                "rating": 3
            },
            {
                "item": "Buckler",
                "rating": 6
            },
            
        ],
        "weapon": [
            {
                "weapon": "Street Dagger",
                "attack": 4,
                "type": "dex",
                "damage": "pierce"
            },

        ]
    },
    {
        "name": 'Cleric',
        "gp": 350,
        "hp": 8,
        "initiative": -3,
        "strength": 10,
        "dexterity": 5,
        "constitution": 11,
        "intelligence": 14,
        "wisdom": 11,
        "charisma": 4,
        "acrobatics": -3,
        "animal": 0,
        "arcana": 2,
        "athletics": 0,
        "deception": -3,
        "history": 2,
        "insight": 0,
        "intimidation": -3,
        "investigation": 2,
        "medicine": 2,
        "nature": 0,
        "perception": 0,
        "performance": -3,
        "persuasion": -3,
        "religion": 2,
        "sleight": -3,
        "stealth": -3,
        "survival": 0,
        "armor": [
            {
                "item": "Holy Robes",
                "rating": 3
            },
            {
                "item": "Holy Chainmail",
                "rating": 7
            },
            
        ],
        "weapon": [
            {
                "weapon": "Heal Party",
                "attack": 3,
                "type": "int",
                "damage": "Heal Party Members"
            },

        ]
    },
    {
        "name": 'Witch Hunter',
        "gp": 75,
        "hp": 8,
        "initiative": 0,
        "strength": 12,
        "dexterity": 10,
        "constitution": 10,
        "intelligence": 7,
        "wisdom": 12,
        "charisma": 5,
        "acrobatics": 0,
        "animal": 1,
        "arcana": -2,
        "athletics": 1,
        "deception": -3,
        "history": -2,
        "insight": 1,
        "intimidation": -3,
        "investigation": -2,
        "medicine": -2,
        "nature": 1,
        "perception": 1,
        "performance": -3,
        "persuasion": -3,
        "religion": -2,
        "sleight": 0,
        "stealth": 0,
        "survival": 1,
        "armor": [
            {
                "item": "Black Leather Combat Jacket",
                "rating": 6
            },
            {
                "item": "Stitched Trousers",
                "rating": 4
            },
            
        ],
        "weapon": [
            {
                "weapon": "Longsword",
                "attack": 6,
                "type": "str",
                "damage": "slash"
            },

        ]
    },
    {
        "name": 'Warlock',
        "gp": 125,
        "hp": 8,
        "initiative": -1,
        "strength": 11,
        "dexterity": 9,
        "constitution": 10,
        "intelligence": 13,
        "wisdom": 11,
        "charisma": 7,
        "acrobatics": -1,
        "animal": 0,
        "arcana": 1,
        "athletics": 0,
        "deception": -2,
        "history": 1,
        "insight": 0,
        "intimidation": -2,
        "investigation": 1,
        "medicine": 1,
        "nature": 0,
        "perception": 0,
        "performance": -2,
        "persuasion": -2,
        "religion": -1,
        "sleight": -1,
        "stealth": -1,
        "survival": 0,
        "armor": [
            {
                "item": "Bone Armor",
                "rating": 8
            },
            {
                "item": "Heretical Robes",
                "rating": 3
            },
            
        ],
        "weapon": [
            {
                "weapon": "Acid Splash",
                "attack": 8,
                "type": "int",
                "damage": "Acid"
            },

        ]
    },
    {
        "name": 'Barbarian',
        "gp": 20,
        "hp": 9,
        "initiative": 0,
        "strength": 17,
        "dexterity": 11,
        "constitution": 13,
        "intelligence": 5,
        "wisdom": 6,
        "charisma": 4,
        "acrobatics": 0,
        "animal": -2,
        "arcana": -3,
        "athletics": 3,
        "deception": -3,
        "history": -3,
        "insight": -2,
        "intimidation": -3,
        "investigation": -3,
        "medicine": -3,
        "nature": -2,
        "perception": -2,
        "performance": -3,
        "persuasion": -3,
        "religion": -3,
        "sleight": 0,
        "stealth": 0,
        "survival": -2,
        "armor": [
            {
                "item": "Fur Pants",
                "rating": 4
            },
            {
                "item": "Horned Helmet",
                "rating": 5
            },
            
        ],
        "weapon": [
            {
                "weapon": "Great Axe",
                "attack": 10,
                "type": "str",
                "damage": "slash"
            },

        ]
        
    },
    {
        "name": 'Assassin',
        "gp": 90,
        "hp": 7,
        "initiative": 2,
        "strength": 12,
        "dexterity": 15,
        "constitution": 9,
        "intelligence": 10,
        "wisdom": 10,
        "charisma": 10,
        "acrobatics": 2,
        "animal": 0,
        "arcana": 0,
        "athletics": 1,
        "deception": 0,
        "history": 0,
        "insight": 0,
        "intimidation": 0,
        "investigation": 0,
        "medicine": 0,
        "nature": 0,
        "perception": 0,
        "performance": 0,
        "persuasion": 0,
        "religion": 0,
        "sleight": 2,
        "stealth": 2,
        "survival": 0,
        "armor": [
            {
                "item": "Assassin's Hood",
                "rating": 3
            },
            {
                "item": "Common Shirt",
                "rating": 3
            },
            
        ],
        "weapon": [
            {
                "weapon": "Curved Dagger",
                "attack": 5,
                "type": "str",
                "damage": "slash"
            },

        ]
    },
    {
        "name": 'Paladin',
        "gp": 300,
        "hp": 11,
        "initiative": -1,
        "strength": 15,
        "dexterity": 9,
        "constitution": 17,
        "intelligence": 13,
        "wisdom": 8,
        "charisma": 8,
        "acrobatics": -1,
        "animal": -1,
        "arcana": 1,
        "athletics": 2,
        "deception": -1,
        "history": 1,
        "insight": -1,
        "intimidation": -1,
        "investigation": 1,
        "medicine": 1,
        "nature": -1,
        "perception": -1,
        "performance": -1,
        "persuasion": -1,
        "religion": 1,
        "sleight": -1,
        "stealth": -1,
        "survival": -1,
        "armor": [
            {
                "item": "Full Helm",
                "rating": 8
            },
            {
                "item": "Tower Shield",
                "rating": 10
            },
            
        ],
        "weapon": [
            {
                "weapon": "Holy Mace",
                "attack": 9,
                "type": "str",
                "damage": "Crush"
            },

        ]
    },
    {
        "name": 'Pirate',
        "gp": 500,
        "hp": 7,
        "initiative": 1,
        "strength": 12,
        "dexterity": 12,
        "constitution": 8,
        "intelligence": 7,
        "wisdom": 7,
        "charisma": 14,
        "acrobatics": 1,
        "animal": -2,
        "arcana": -2,
        "athletics": 1,
        "deception": 2,
        "history": -2,
        "insight": -2,
        "intimidation": 2,
        "investigation": -2,
        "medicine": -2,
        "nature": -2,
        "perception": -2,
        "performance": 2,
        "persuasion": 2,
        "religion": -2,
        "sleight": 1,
        "stealth": 1,
        "survival": -2,
        "armor": [
            {
                "item": "Pirate Hat",
                "rating": 2
            },
            {
                "item": "Captain's Coat",
                "rating": 4
            },
            
        ],
        "weapon": [
            {
                "weapon": "Cutlass",
                "attack": 6,
                "type": "str",
                "damage": "slash"
            },

        ]
    },
    {
        "name": 'Beggar',
        "gp": 0,
        "hp": 7,
        "initiative": 0,
        "strength": 6,
        "dexterity": 10,
        "constitution": 9,
        "intelligence": 7,
        "wisdom": 7,
        "charisma": 6,
        "acrobatics": 0,
        "animal": -2,
        "arcana": -2,
        "athletics": -2,
        "deception": -2,
        "history": -2,
        "insight": -2,
        "intimidation": -2,
        "investigation": -2,
        "medicine": -2,
        "nature": -2,
        "perception": -2,
        "performance": -2,
        "persuasion": -2,
        "religion": -2,
        "sleight": 0,
        "stealth": 0,
        "survival": -2,
        "armor": [
            {
                "item": "Beggar's Rags",
                "rating": 2
            },
            {
                "item": "Sandals",
                "rating": 1
            },
            
        ],
        "weapon": [
            {
                "weapon": "Wooden Club",
                "attack": 3,
                "type": "str",
                "damage": "Crush"
            },

        ]
    },
    {
        "name": 'Merchant',
        "gp": 1000,
        "hp": 7,
        "initiative": 0,
        "strength": 5,
        "dexterity": 7,
        "constitution": 8,
        "intelligence": 11,
        "wisdom": 10,
        "charisma": 12,
        "acrobatics": -2,
        "animal": 0,
        "arcana": 0,
        "athletics": -2,
        "deception": 1,
        "history": 0,
        "insight": 0,
        "intimidation": 1,
        "investigation": 0,
        "medicine": 0,
        "nature": 0,
        "perception": 0,
        "performance": 1,
        "persuasion": 1,
        "religion": 0,
        "sleight": -2,
        "stealth": -2,
        "survival": 0,
        "armor": [
            {
                "item": "Fancy Coat",
                "rating": 4
            },
            {
                "item": "Trendy Tights",
                "rating": 3
            },
            
        ],
        "weapon": [
            {
                "weapon": "Jewelled Rapier",
                "attack": 7,
                "type": "dex",
                "damage": "pierce"
            },

        ]
    }


]

var raceData = [
    {
        "race": "Human",
        "language": "Common",
        "speed": 30
    },
    {
        "race": "Elf",
        "language": "Common, Elvish",
        "speed": 40
    },
    {
        "race": "Dark Elf",
        "language": "Common, Elvish",
        "speed": 40
    },
    {
        "race": "Dwarf",
        "language": "Common, Dwarvish",
        "speed": 20
    },
    {
        "race": "Orc",
        "language": "Common, Dwarvish",
        "speed": 30
    },
    {
        "race": "Halfling",
        "language": "Common",
        "speed": 20
        
    },
]

var portraitData = [
    {
        helmet: [
            {
                "url": "url(../images/helmets/helmet1.png)",
                
            },
            {
                "url": "url(../images/helmets/helmet2.png)",
            },
            {
                "url": "url(../images/helmets/helmet3.png)",
            },
            {
                "url": "url(../images/helmets/helmet4.png)",
                
            },
            {
                "url": "url(../images/helmets/helmet5.png)",
            },
            {
                "url": "url(../images/helmets/helmet6.png)",
            },
            {
                "url": "url(../images/helmets/helmet7.png)",
                
            },
            {
                "url": "url(../images/helmets/helmet8.png)",
            },
            {
                "url": "url(../images/helmets/helmet9.png)",
            },
            {
                "url": "url(../images/helmets/helmet10.png)",
                
            },
            {
                "url": "url(../images/helmets/helmet11.png)",
            },
            {
                "url": "url(../images/helmets/helmet12.png)",
            },
            {
                "url": "url(../images/helmets/helmet13.png)",
                
            },
            {
                "url": "url(../images/helmets/helmet14.png)",
            },
            {
                "url": "url(../images/helmets/helmet15.png)",
            },
            {
                "url": "url(../images/helmets/helmet16.png)",
            }
        ]
    },
    {
        face: [
            {
                "url": "url(../images/faces/face1.png)",
                
            },
            {
                "url": "url(../images/faces/face2.png)",
            },
            {
                "url": "url(../images/faces/face3.png)",
            },
            {
                "url": "url(../images/faces/face4.png)",
            },
            {
                "url": "url(../images/faces/face5.png)",
            },
            {
                "url": "url(../images/faces/face6.png)",
            },

        ]
    },
    {
        armor: [
            {
                "url": "url(../images/armor/armor1.png)",
                
            },
            {
                "url": "url(../images/armor/armor2.png)",
            },
            {
                "url": "url(../images/armor/armor3.png)",
            },
            {
                "url": "url(../images/armor/armor4.png)",
            },
            {
                "url": "url(../images/armor/armor5.png)",
            },
            {
                "url": "url(../images/armor/armor6.png)",
            },
            {
                "url": "url(../images/armor/armor7.png)",
            },
            {
                "url": "url(../images/armor/armor8.png)",
            },
            {
                "url": "url(../images/armor/armor9.png)",
            },
            {
                "url": "url(../images/armor/armor10.png)",
            },
            {
                "url": "url(../images/armor/armor11.png)",
            },
            {
                "url": "url(../images/armor/armor12.png)",
            },
            {
                "url": "url(../images/armor/armor13.png)",
            },
            {
                "url": "url(../images/armor/armor14.png)",
            },
            {
                "url": "url(../images/armor/armor15.png)",
            },
            {
                "url": "url(../images/armor/armor16.png)",
            },

        ]
    }
]



function initFirebase() {
    
    document.getElementById("title-audio").play()

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

        

        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            loginSuccess = 1;
        
        })
        console.log(email, "has logged in")
                $(".loginPage").css("display", "none")
                $(".roomPage").css("display", "flex")
                getRooms()

        // .then(function(loginSuccess) {
        //     if(loginSuccess = 0) {
        //         
        //     } else {
        //         alert("Invalid Login")
        //     }
        // })
        
        
       
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
        $(".signin-content").css("display", "none")
        $(".loginPage").css("display", "unset")
    })
    $("#signup").click(function() {
        console.log("Signup Page");
        $(".loginPage").css("display", "none")
        $(".signin-content").css("display", "none")
        $(".signupPage").css("display", "unset")
    })

    //-------------------------------------------------ROOM (LOAD OR CREATE)------------------------
    $("#create-room-btn").click(function() {
        _db
            .collection("DDUsers").doc("rooms").collection("room")
            .add({
                roomCode: $("#newRoomCode").val(),
                roomName: $("#newRoomName").val()
            })
          
            $(".room-created-modal").css("display", "unset")
            $(".room-created-message").append($("#newRoomName").val() + " has been created")
    })


    $(".room-created-close").click(function() {
        $(".room-created-modal").css("display", "none")
        $(".create-room-content").css("display", "none")
        $(".roomButtons").css("display", "unset")

    })


    $(".character-created-modal-close").click(function() {
        $(".character-created-modal").css("display", "none")
    })

    

    
}

    //----------------------------------GET ROOMS-----------------------------------------
    function getRooms() {
        $("#create-room-content-btn").click(function() {
            $(".roomButtons").css("display", "none")
            $(".create-room-content").css("display", "unset")
            
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
                            $(".find-room-content").css("display", "none")
                            $(".roomCode-modal").css("display", "none")
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
                    $(".character-create-sheet").css("display", "unset")
                    $(".login-page").css("display", "none")
                    createCharacter(rPlayerId)
                })

                $("#loadPlayerBtn").click(function() {
                    console.log("loadClicked")
                    $(".show-players-container").css("display", "flex")
                    $(".character-list-content").css("display", "none")


                    var roomPlayers = _db
                    .collection("DDUsers").doc("players").collection("player");
                    roomPlayers
                    .where('roomName', '==', rPlayerId)
                    .get()
                    .then(function(querySnapshot) {
                        querySnapshot.forEach(function(doc) {
                            let pData = doc.data()
                            var id = doc.id;
                            console.log(pData)

                            console.log(roomPlayers)
                            $(".playerList").append(`<div id="${id}" class="p-container">${pData.playerName}</div>`)
                            console.log(pData.playerName)
                        })
                        $(".p-container").click(function(e) {
                            
                            var pID = e.currentTarget.id
                            console.log(pID)

                            $(".enterPlayerBtn").css("display", "unset")
                            $(".enterPlayerBtn").click(function() {
                                loadCharacterSheetData(pID)
                            })
                            
                        })
                        
                    })
                })
        })
    }

    //----------------------------------CHARACTER CREATION--------------------------------

    function createCharacter (newPlayerRoomId) {

        //document.getElementById("create-audio").play()

        console.log(newPlayerRoomId)
        var classCount = 0;
        let raceUrlCount = 0;
        let urlCount = 0;
       
        let selectedClass = "";

        let phelmet = "";
        let pface = "";
        let parmor = "";

        var level = 1;
        let gp = "";
        let hp = "";
        let initiative = "";
        let strength = "";
        let dexterity = "";
        let constitution = "";
        let intelligence = "";
        let wisdom = "";
        let charisma = "";
        let acrobatics = "";
        let animal = "";
        let arcana = "";
        let athletics = "";
        let deception = "";
        let history = "";
        let insight = "";
        let intimidation = "";
        let investigation = "";
        let medicine = "";
        let nature = "";
        let perception = "";
        let performance = "";
        let persuasion = "";
        let religion = "";
        let sleight = "";
        let stealth = "";
        let survival = "";
        
        let armor = "";
        var armori = [
            {

            },
        ];
       let armorA = "";
       let armorB = "";

       let wName = "";
       let wAttack = "";
       let wType = "";
       let wDamage = "";





        var raceCount = 0;
        let selectedRace = "";
        let language = "";
        let speed  = "";
        
        //----------default class-----------------------

        //armor
        for(i = 1; i <= classData[0].armor.length; i++) {
            console.log(i)
            if(i == 1) {

                armorA = classData[classCount].armor[0].item
                console.log(armorA)
              
                armor = classData[classCount].armor[0].rating
                console.log(armor)
            
            } if(i > 1) {
                let a = i - 1

                armorB = classData[classCount].armor[a].item
                console.log(armorB)

                armor = armor + classData[classCount].armor[a].rating
                console.log(armor)

            }
        }

        $(".className").append(classData[0].name)

        selectedClass = classData[0].name


        $(".p-armor").css("background-image", portraitData[2].armor[0].url)
        $(".p-face").css("background-image", portraitData[1].face[0].url)
        $(".p-helmet").css("background-image", portraitData[0].helmet[0].url)

        $(".level-con").append(level)
        $(".hp-con").append(classData[0].hp)
        $(".armor-con").append(armor)
        $(".gp-con").append(classData[0].gp)
        $(".cStr").append(classData[0].strength)
        $(".cDex").append(classData[0].dexterity)
        $(".cCon").append(classData[0].constitution)
        $(".cInt").append(classData[0].intelligence)
        $(".cWis").append(classData[0].wisdom)
        $(".cCha").append(classData[0].charisma)
        $(".cAcr").append(classData[0].acrobatics)
        $(".cAni").append(classData[0].animal)
        $(".cArc").append(classData[0].arcana)
        $(".cAth").append(classData[0].athletics)
        $(".cDec").append(classData[0].deception)
        $(".cHis").append(classData[0].history)
        $(".cIns").append(classData[0].insight)
        $(".cInti").append(classData[0].intimidation)
        $(".cInv").append(classData[0].investigation)
        $(".cMed").append(classData[0].medicine)
        $(".cNat").append(classData[0].nature)
        $(".cPer").append(classData[0].perception)
        $(".cPerf").append(classData[0].performance)
        $(".cPers").append(classData[0].persuasion)
        $(".cRel").append(classData[0].religion)
        $(".cSle").append(classData[0].sleight)
        $(".cSte").append(classData[0].stealth)
        $(".cSur").append(classData[0].survival)

        $(".weaponName").html(classData[0].weapon[0].weapon)
        $(".weaponAttack").html(classData[0].weapon[0].attack)
        $(".weaponType").html(classData[0].weapon[0].type)
        $(".weaponDamage").html(classData[0].weapon[0].damage)

        $(".armor").html(armorA)
        $(".armor").append(armorB)

        level = level;
        armor = armor;
        armorA = armorA;
        armorB = armorB;

        phelmet = portraitData[0].helmet[0].url;
        pface = portraitData[1].face[0].url;
        parmor = portraitData[2].armor[0].url;

        wName = classData[0].weapon[0].weapon;
        wAttack = classData[0].weapon[0].attack;
        wType = classData[0].weapon[0].type;
        wDamage = classData[0].weapon[0].damage;
        gp = classData[0].gp;
        hp = classData[0].hp;
        initiative = classData[0].initiative;
        strength = classData[0].strength;
        dexterity = classData[0].dexterity;
        constitution = classData[0].constitution;
        intelligence = classData[0].intelligence;
        wisdom = classData[0].wisdom;
        charisma = classData[0].charisma;
        acrobatics = classData[0].acrobatics;
        animal = classData[0].animal;
        arcana = classData[0].arcana;
        athletics = classData[0].athletics;
        deception = classData[0].deception;
        history = classData[0].history;
        insight = classData[0].insight;
        intimidation = classData[0].intimidation;
        investigation = classData[0].investigation;
        medicine = classData[0].medicine;
        nature = classData[0].nature;
        perception = classData[0].perception;
        performance = classData[0].performance;
        persuasion = classData[0].persuasion;
        religion = classData[0].religion;
        sleight = classData[0].sleight
        stealth = classData[0].stealth;
        survival = classData[0].survival;
        console.log(selectedClass)

        //----------default race

        $(".raceName").append(raceData[0].race)
        $(".language").html(raceData[0].language)
        $(".speed").html(raceData[0].speed)

        selectedRace = raceData[0].race
        language = raceData[0].language
        speed = raceData[0].speed
        console.log(selectedRace)

        //-------------------switch class-----------------------------

        //-----------------last class click--------------------
        $(".lastClassBtn").click(function() {
            console.log("last clicked")
            classCount = classCount - 1;
            urlCount = urlCount - 1;
            if(classCount < 0) {

                

               //armor

                let armor = "";
             
                for(i = 1; i <= classData[15].armor.length; i++) {
                    console.log(i)
                    if(i == 1) {

                        armorA = classData[15].armor[0].item
                        console.log(armorA)
                        
                        armor = classData[15].armor[0].rating
                        console.log(armor)

                    } if(i > 1) {
                        let a = i - 1

                        armorB = classData[15].armor[a].item
                        console.log(armorB)

                        armor = armor + classData[15].armor[a].rating
                        console.log(armor)

                    }
                }



                $(".className").html(classData[15].name)
                classCount = 15;

                selectedClass = classData[15].name

                $(".level-con").html(level)
                $(".hp-con").html(classData[15].hp)
                $(".armor-con").html(armor)
                $(".gp-con").html(classData[15].gp)
                $(".cStr").html(classData[15].strength)
                $(".cDex").html(classData[15].dexterity)
                $(".cCon").html(classData[15].constitution)
                $(".cInt").html(classData[15].intelligence)
                $(".cWis").html(classData[15].wisdom)
                $(".cCha").html(classData[15].charisma)
                $(".cAcr").html(classData[15].acrobatics)
                $(".cAni").html(classData[15].animal)
                $(".cArc").html(classData[15].arcana)
                $(".cAth").html(classData[15].athletics)
                $(".cDec").html(classData[15].deception)
                $(".cHis").html(classData[15].history)
                $(".cIns").html(classData[15].insight)
                $(".cInti").html(classData[15].intimidation)
                $(".cInv").html(classData[15].investigation)
                $(".cMed").html(classData[15].medicine)
                $(".cNat").html(classData[15].nature)
                $(".cPer").html(classData[15].perception)
                $(".cPerf").html(classData[15].performance)
                $(".cPers").html(classData[15].persuasion)
                $(".cRel").html(classData[15].religion)
                $(".cSle").html(classData[15].sleight)
                $(".cSte").html(classData[15].stealth)
                $(".cSur").html(classData[15].survival)
                $(".weaponName").html(classData[15].weapon[0].weapon)
                $(".weaponAttack").html(classData[15].weapon[0].attack)
                $(".weaponType").html(classData[15].weapon[0].type)
                $(".weaponDamage").html(classData[15].weapon[0].damage)
                
                $(".armor").html(armorA)
                $(".armor").append(armorB)



                
                
                

                level = level;
                armor = armor;
                armorA = armorA;
                armorB = armorB;
                wName = classData[15].weapon[0].weapon;
                wAttack = classData[15].weapon[0].attack;
                wType = classData[15].weapon[0].type;
                wDamage = classData[15].weapon[0].damage;
                gp = classData[15].gp;
                hp = classData[15].hp;
                initiative = classData[15].initiative;
                strength = classData[15].strength;
                dexterity = classData[15].dexterity;
                constitution = classData[15].constitution;
                intelligence = classData[15].intelligence;
                wisdom = classData[15].wisdom;
                charisma = classData[15].charisma;
                acrobatics = classData[15].acrobatics;
                animal = classData[15].animal;
                arcana = classData[15].arcana;
                athletics = classData[15].athletics;
                deception = classData[15].deception;
                history = classData[15].history;
                insight = classData[15].insight;
                intimidation = classData[15].intimidation;
                investigation = classData[15].investigation;
                medicine = classData[15].medicine;
                nature = classData[15].nature;
                perception = classData[15].perception;
                performance = classData[15].performance;
                persuasion = classData[15].persuasion;
                religion = classData[15].religion;
                sleight = classData[15].sleight
                stealth = classData[15].stealth;
                survival = classData[15].survival;
            } else {

                //armor

                for(i = 1; i <= classData[classCount].armor.length; i++) {
                    console.log(i)
                    if(i == 1) {

                        armorA = classData[classCount].armor[0].item
                        console.log(armorA)

                        armor = classData[classCount].armor[0].rating
                        console.log(armor)


                    } if(i > 1) {
                        let a = i - 1

                        armorB = classData[classCount].armor[a].item
                        console.log(armorB)

                        armor = armor + classData[classCount].armor[a].rating
                        console.log(armor)
                    }
                }

                $(".className").html(classData[classCount].name)
                selectedClass = classData[classCount].name

                $(".level-con").html(level)
                $(".hp-con").html(classData[classCount].hp)
                $(".armor-con").html(armor)
                $(".gp-con").html(classData[classCount].gp)
                $(".cStr").html(classData[classCount].strength)
                $(".cDex").html(classData[classCount].dexterity)
                $(".cCon").html(classData[classCount].constitution)
                $(".cInt").html(classData[classCount].intelligence)
                $(".cWis").html(classData[classCount].wisdom)
                $(".cCha").html(classData[classCount].charisma)
                $(".cAcr").html(classData[classCount].acrobatics)
                $(".cAni").html(classData[classCount].animal)
                $(".cArc").html(classData[classCount].arcana)
                $(".cAth").html(classData[classCount].athletics)
                $(".cDec").html(classData[classCount].deception)
                $(".cHis").html(classData[classCount].history)
                $(".cIns").html(classData[classCount].insight)
                $(".cInti").html(classData[classCount].intimidation)
                $(".cInv").html(classData[classCount].investigation)
                $(".cMed").html(classData[classCount].medicine)
                $(".cNat").html(classData[classCount].nature)
                $(".cPer").html(classData[classCount].perception)
                $(".cPerf").html(classData[classCount].performance)
                $(".cPers").html(classData[classCount].persuasion)
                $(".cRel").html(classData[classCount].religion)
                $(".cSle").html(classData[classCount].sleight)
                $(".cSte").html(classData[classCount].stealth)
                $(".cSur").html(classData[classCount].survival)
                $(".weaponName").html(classData[classCount].weapon[0].weapon)
                $(".weaponAttack").html(classData[classCount].weapon[0].attack)
                $(".weaponType").html(classData[classCount].weapon[0].type)
                $(".weaponDamage").html(classData[classCount].weapon[0].damage)

                $(".armor").html(armorA)
                $(".armor").append(armorB)

                armor = armor
                level = level;
                armorA = armorA;
                armorB = armorB;
                wName = classData[classCount].weapon[0].weapon;
                wAttack = classData[classCount].weapon[0].attack;
                wType = classData[classCount].weapon[0].type;
                wDamage = classData[classCount].weapon[0].damage;
                gp = classData[classCount].gp;
                hp = classData[classCount].hp;
                initiative = classData[classCount].initiative;
                strength = classData[classCount].strength;
                dexterity = classData[classCount].dexterity;
                constitution = classData[classCount].constitution;
                intelligence = classData[classCount].intelligence;
                wisdom = classData[classCount].wisdom;
                charisma = classData[classCount].charisma;
                acrobatics = classData[classCount].acrobatics;
                animal = classData[classCount].animal;
                arcana = classData[classCount].arcana;
                athletics = classData[classCount].athletics;
                deception = classData[classCount].deception;
                history = classData[classCount].history;
                insight = classData[classCount].insight;
                intimidation = classData[classCount].intimidation;
                investigation = classData[classCount].investigation;
                medicine = classData[classCount].medicine;
                nature = classData[classCount].nature;
                perception = classData[classCount].perception;
                performance = classData[classCount].performance;
                persuasion = classData[classCount].persuasion;
                religion = classData[classCount].religion;
                sleight = classData[classCount].sleight
                stealth = classData[classCount].stealth;
                survival = classData[classCount].survival;
            }
            console.log(selectedClass)


            if(urlCount < 0) {
                    
                $(".p-armor").css("background-image", portraitData[2].armor[15].url)
                $(".p-helmet").css("background-image", portraitData[0].helmet[15].url)
                
                urlCount = 15

                parmor = portraitData[2].armor[15].url
                phelmet = portraitData[0].helmet[15].url
                
            } else {
                $(".p-armor").css("background-image", portraitData[2].armor[urlCount].url)
                $(".p-helmet").css("background-image", portraitData[0].helmet[urlCount].url)

                parmor = portraitData[2].armor
                phelmet = portraitData[0].helmet[urlCount].url
            }

        })

        //-----------------next class click--------------------
        $(".nextClassBtn").click(function() {
            classCount = classCount + 1;
            urlCount = urlCount + 1;

            if(classCount > 15) {

                //armor
                for(i = 1; i <= classData[0].armor.length; i++) {
                    console.log(i)
                    if(i == 1) {

                        armorA = classData[0].armor[0].item
                        console.log(armorA)

                        armor = classData[0].armor[0].rating
                        console.log(armor)
                    } if(i > 1) {
                        let a = i - 1

                        armorB = classData[0].armor[a].item
                        console.log(armorB)

                        armor = armor + classData[0].armor[a].rating
                        console.log(armor)
                    }
                }


                $(".className").html(classData[0].name)
                classCount = 0;

                selectedClass = classData[0].name

                
                $(".level-con").html(level)
                $(".hp-con").html(classData[0].hp)
                $(".armor-con").html(armor)
                $(".gp-con").html(classData[0].gp)
                $(".cStr").html(classData[0].strength)
                $(".cDex").html(classData[0].dexterity)
                $(".cCon").html(classData[0].constitution)
                $(".cInt").html(classData[0].intelligence)
                $(".cWis").html(classData[0].wisdom)
                $(".cCha").html(classData[0].charisma)
                $(".cAcr").html(classData[0].acrobatics)
                $(".cAni").html(classData[0].animal)
                $(".cArc").html(classData[0].arcana)
                $(".cAth").html(classData[0].athletics)
                $(".cDec").html(classData[0].deception)
                $(".cHis").html(classData[0].history)
                $(".cIns").html(classData[0].insight)
                $(".cInti").html(classData[0].intimidation)
                $(".cInv").html(classData[0].investigation)
                $(".cMed").html(classData[0].medicine)
                $(".cNat").html(classData[0].nature)
                $(".cPer").html(classData[0].perception)
                $(".cPerf").html(classData[0].performance)
                $(".cPers").html(classData[0].persuasion)
                $(".cRel").html(classData[0].religion)
                $(".cSle").html(classData[0].sleight)
                $(".cSte").html(classData[0].stealth)
                $(".cSur").html(classData[0].survival)
                $(".weaponName").html(classData[0].weapon[0].weapon)
                $(".weaponAttack").html(classData[0].weapon[0].attack)
                $(".weaponType").html(classData[0].weapon[0].type)
                $(".weaponDamage").html(classData[0].weapon[0].damage)

                $(".armor").html(armorA)
                $(".armor").append(armorB)

                level = level;
                armor = armor
                armorA = armorA;
                armorB = armorB;
                wName = classData[0].weapon[0].weapon;
                wAttack = classData[0].weapon[0].attack;
                wType = classData[0].weapon[0].type;
                wDamage = classData[0].weapon[0].damage;
                gp = classData[0].gp;
                hp = classData[0].hp;
                initiative = classData[0].initiative;
                strength = classData[0].strength;
                dexterity = classData[0].dexterity;
                constitution = classData[0].constitution;
                intelligence = classData[0].intelligence;
                wisdom = classData[0].wisdom;
                charisma = classData[0].charisma;
                acrobatics = classData[0].acrobatics;
                animal = classData[0].animal;
                arcana = classData[0].arcana;
                athletics = classData[0].athletics;
                deception = classData[0].deception;
                history = classData[0].history;
                insight = classData[0].insight;
                intimidation = classData[0].intimidation;
                investigation = classData[0].investigation;
                medicine = classData[0].medicine;
                nature = classData[0].nature;
                perception = classData[0].perception;
                performance = classData[0].performance;
                persuasion = classData[0].persuasion;
                religion = classData[0].religion;
                sleight = classData[0].sleight
                stealth = classData[0].stealth;
                survival = classData[0].survival;
            } else {

                //armor
                for(i = 1; i <= classData[classCount].armor.length; i++) {
                    console.log(i)
                    if(i == 1) {
                        armorA = classData[classCount].armor[0].item
                        console.log(armorA)

                        armor = classData[classCount].armor[0].rating
                        console.log(armor)
                    } if(i > 1) {
                        let a = i - 1

                        armorB = classData[classCount].armor[a].item
                        console.log(armorB)

                        armor = armor + classData[classCount].armor[a].rating
                        console.log(armor)
                    }
                }

                $(".className").html(classData[classCount].name)
                selectedClass = classData[classCount].name

                $(".level-con").html(level)
                $(".hp-con").html(classData[classCount].hp)
                $(".armor-con").html(armor)
                $(".gp-con").html(classData[classCount].gp)
                $(".cStr").html(classData[classCount].strength)
                $(".cDex").html(classData[classCount].dexterity)
                $(".cCon").html(classData[classCount].constitution)
                $(".cInt").html(classData[classCount].intelligence)
                $(".cWis").html(classData[classCount].wisdom)
                $(".cCha").html(classData[classCount].charisma)
                $(".cAcr").html(classData[classCount].acrobatics)
                $(".cAni").html(classData[classCount].animal)
                $(".cArc").html(classData[classCount].arcana)
                $(".cAth").html(classData[classCount].athletics)
                $(".cDec").html(classData[classCount].deception)
                $(".cHis").html(classData[classCount].history)
                $(".cIns").html(classData[classCount].insight)
                $(".cInti").html(classData[classCount].intimidation)
                $(".cInv").html(classData[classCount].investigation)
                $(".cMed").html(classData[classCount].medicine)
                $(".cNat").html(classData[classCount].nature)
                $(".cPer").html(classData[classCount].perception)
                $(".cPerf").html(classData[classCount].performance)
                $(".cPers").html(classData[classCount].persuasion)
                $(".cRel").html(classData[classCount].religion)
                $(".cSle").html(classData[classCount].sleight)
                $(".cSte").html(classData[classCount].stealth)
                $(".cSur").html(classData[classCount].survival)
                $(".weaponName").html(classData[classCount].weapon[0].weapon)
                $(".weaponAttack").html(classData[classCount].weapon[0].attack)
                $(".weaponType").html(classData[classCount].weapon[0].type)
                $(".weaponDamage").html(classData[classCount].weapon[0].damage)

                $(".armor").html(armorA)
                $(".armor").append(armorB)
                
                level = level;
                armor = armor;
                armorA = armorA;
                armorB = armorB;
                wName = classData[classCount].weapon[0].weapon;
                wAttack = classData[classCount].weapon[0].attack;
                wType = classData[classCount].weapon[0].type;
                wDamage = classData[classCount].weapon[0].damage;
                gp = classData[classCount].gp;
                hp = classData[classCount].hp;
                initiative = classData[classCount].initiative;
                strength = classData[classCount].strength;
                dexterity = classData[classCount].dexterity;
                constitution = classData[classCount].constitution;
                intelligence = classData[classCount].intelligence;
                wisdom = classData[classCount].wisdom;
                charisma = classData[classCount].charisma;
                acrobatics = classData[classCount].acrobatics;
                animal = classData[classCount].animal;
                arcana = classData[classCount].arcana;
                athletics = classData[classCount].athletics;
                deception = classData[classCount].deception;
                history = classData[classCount].history;
                insight = classData[classCount].insight;
                intimidation = classData[classCount].intimidation;
                investigation = classData[classCount].investigation;
                medicine = classData[classCount].medicine;
                nature = classData[classCount].nature;
                perception = classData[classCount].perception;
                performance = classData[classCount].performance;
                persuasion = classData[classCount].persuasion;
                religion = classData[classCount].religion;
                sleight = classData[classCount].sleight
                stealth = classData[classCount].stealth;
                survival = classData[classCount].survival;
            }
            console.log(selectedClass)

            if(urlCount > 15) {
                    
                $(".p-armor").css("background-image", portraitData[2].armor[0].url)
                $(".p-helmet").css("background-image", portraitData[0].helmet[0].url)
                
                urlCount = 0

                parmor = portraitData[2].armor[0].url;
                phelmet = portraitData[0].helmet[0].url;
            } else {
                $(".p-armor").css("background-image", portraitData[2].armor[urlCount].url)
                $(".p-helmet").css("background-image", portraitData[0].helmet[urlCount].url)

                parmor = portraitData[2].armor[urlCount].url
                phelmet = portraitData[0].helmet[urlCount].url
            }

        })

        //-------------------------------switch race---------------------

        //--------------------last race click----------

        $(".lastRaceBtn").click(function() {
            raceCount = raceCount - 1;
            if(raceCount < 0) {
                $(".raceName").html(raceData[5].race)
                $(".language").html(raceData[5].language)
                $(".speed").html(raceData[5].speed)
                $(".p-face").css("background-image", portraitData[1].face[5].url)

                raceCount = 5;

                pface = portraitData[1].face[5].url

                selectedRace = raceData[5].race;
                language = raceData[5].language;
                speed = raceData[5].speed;

                
            } else {
                $(".raceName").html(raceData[raceCount].race)
                $(".language").html(raceData[raceCount].language)
                $(".speed").html(raceData[raceCount].speed)
                $(".p-face").css("background-image", portraitData[1].face[raceCount].url)

                pface = portraitData[1].face[raceCount].url;
                selectedRace = raceData[raceCount].race
                language = raceData[raceCount].language;
                speed = raceData[raceCount].speed;
            }
            console.log(selectedRace)
        })

        //---------------------next race click-------------

        $(".nextRaceBtn").click(function() {
            raceCount = raceCount + 1;
            if(raceCount > 5) {
                $(".raceName").html(raceData[0].race)
                $(".language").html(raceData[0].language)
                $(".speed").html(raceData[0].speed)

                $(".p-face").css("background-image", portraitData[1].face[0].url)


                pface = portraitData[1].face[0].url
                raceCount = 0;
                selectedRace = raceData[0].race
                language = raceData[0].language;
                speed = raceData[0].speed;
            } else {
                $(".raceName").html(raceData[raceCount].race)
                $(".language").html(raceData[raceCount].language)
                $(".speed").html(raceData[raceCount].speed)

                $(".p-face").css("background-image", portraitData[1].face[raceCount].url)

                pface = portraitData[1].face[raceCount].url

                selectedRace = raceData[raceCount].race
                language = raceData[raceCount].language;
                speed = raceData[raceCount].speed;
            }
            console.log(selectedRace)
        })

        $("#createPlayerBtn").click(function() {
            
            var pbonus = 2;
            _db
            .collection("DDUsers").doc("players").collection("player")
            .add({
                roomName: newPlayerRoomId,
                playerName: $("#newPlayerName").val(),
                class: selectedClass,
                race: selectedRace,
                language: language,
                speed: speed,
                level: level,
                pbonus: pbonus,
                gp: gp,
                hp: hp,
                parmor: parmor,
                phelmet: phelmet,
                pface: pface,
                armor: armor,
                armorI: [
                    {
                        armorA: armorA
                    },
                    {
                        armorB: armorB
                    },
                ],
                weapons: [
                    {
                        w1: [
                            {
                                name: wName,
                                attack: wAttack,
                                type: wType,
                                damage: wDamage,
                            }
                        ]
                    }
                ],
                initiative: initiative,
                strength: strength,
                dexterity: dexterity,
                constitution: constitution,
                intelligence: intelligence,
                wisdom: wisdom,
                charisma: charisma,
                acrobatics: acrobatics,
                animal: animal,
                arcana: arcana,
                athletics: athletics,
                deception: deception,
                history: history,
                insight: insight,
                intimidation: intimidation,
                investigation: investigation,
                medicine: medicine,
                nature: nature,
                perception: perception,
                performance: performance,
                persuasion: persuasion,
                religion: religion,
                sleight: sleight,
                stealth: stealth,
                survival: survival,
                traits: $("#create-traits").val(),
                biography: $("#create-bio").val(),
              
            })

            $(".character-create-sheet").css("display", "none")
            $(".login-page").css("display", "flex")
            $(".roomPage").css("display", "flex")
            $(".character-created-modal").css("display", "flex")
            $(".character-created-message").html("Character Created!")        
        })
            
    }

    //----------------------------------LOAD CHARACTER SHEET-------------------------------

    function loadCharacterSheetData(charID) {
        $(".playerPage").css("display", "flex")
        _db
        .collection("DDUsers").doc("players").collection("player").doc(charID)
        .get()
        .then(function(doc) {
            let charData = doc.data()

            $(".playerSheet-name").html(charData.playerName)
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