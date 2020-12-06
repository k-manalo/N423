

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
                
                alert("This Email is already in use.")

                
            }
            if(errorCode == "auth/weak-password") {
                
                alert("Password must be at least 8 characters.")

                
            }
            if(errorCode == "auth/invalid-email") {
                
                alert("Password must be at least 8 characters.")

                
            }
        })
        .then(function() {
            $(".signupPage").css("display", "none")
            $(".signin-content").css("display", "unset")
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

       $(".playerPage").css("display", "none")
            $(".login-page").css("display", "flex")
            $(".signin-content").css("display", "unset")
            
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
        var hp = 0;
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
                        name: armorA
                    },
                    {
                        name: armorB
                    },
                ],
                weapons: [
                    {
                        
                        name: wName,
                        attack: wAttack,
                        type: wType,
                        damage: wDamage,
                            
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
        $(".playerPage").css("display", "unset")
        $(".show-players-container").css("display", "none")
        $(".enterPlayerBtn").css("display", "none")
        $(".roomPage").css("display", "none")
        $(".login-page").css("display", "none")

        $(".ps-stats-link").click(function() {
            $(".pp-stats-container").css("display", "flex")
            $(".pp-inventory-container").css("display", "none")
            $(".pp-biography-container").css("display", "none")
            $(".pp-settings-container").css("display", "none")

            $(".ps-stats-link").css("background-color", "tan")
            $(".ps-inventory-link").css("background-color", "rgb(156, 137, 110)")
            $(".ps-bio-link").css("background-color", "rgb(156, 137, 110)")
            $(".ps-settings-link").css("background-color", "rgb(156, 137, 110)")
        })
        $(".ps-inventory-link").click(function() {
            $(".pp-stats-container").css("display", "none")
            $(".pp-inventory-container").css("display", "flex")
            $(".pp-biography-container").css("display", "none")
            $(".pp-settings-container").css("display", "none")

            $(".ps-stats-link").css("background-color", "rgb(156, 137, 110)")
            $(".ps-inventory-link").css("background-color", "tan")
            $(".ps-bio-link").css("background-color", "rgb(156, 137, 110)")
            $(".ps-settings-link").css("background-color", "rgb(156, 137, 110)")
        })
        $(".ps-bio-link").click(function() {
            $(".pp-stats-container").css("display", "none")
            $(".pp-inventory-container").css("display", "none")
            $(".pp-biography-container").css("display", "flex")
            $(".pp-settings-container").css("display", "none")

            $(".ps-stats-link").css("background-color", "rgb(156, 137, 110)")
            $(".ps-inventory-link").css("background-color", "rgb(156, 137, 110)")
            $(".ps-bio-link").css("background-color", "tan")
            $(".ps-settings-link").css("background-color", "rgb(156, 137, 110)")
        })
        $(".ps-settings-link").click(function() {
            $(".pp-stats-container").css("display", "none")
            $(".pp-inventory-container").css("display", "none")
            $(".pp-biography-container").css("display", "none")
            $(".pp-settings-container").css("display", "flex")

            $(".ps-stats-link").css("background-color", "rgb(156, 137, 110)")
            $(".ps-inventory-link").css("background-color", "rgb(156, 137, 110)")
            $(".ps-bio-link").css("background-color", "rgb(156, 137, 110)")
            $(".ps-settings-link").css("background-color", "tan")
        })


        _db
        .collection("DDUsers").doc("players").collection("player").doc(charID)
        .get()
        .then(function(doc) {
            let charData = doc.data()

            //------player portrait

            $(".pp-name").html(charData.playerName)
            $(".pp-armor").css("background-image", charData.parmor)
            $(".pp-face").css("background-image", charData.pface)
            $(".pp-helmet").css("background-image", charData.phelmet)

            //--------player level

            $(".pp-lvl").html(charData.level)
            $(".pp-hp").html(charData.hp)
            $(".pp-ar").html(charData.armor)
            $(".pp-gp").html(charData.gp)

            //---------race

            $(".pp-class").html(charData.class)
            $(".pp-race").html(charData.race)
            $(".pp-languages").html(charData.language)
            $(".pp-speed").html(charData.speed)

            //----------stats

            $(".pp-str").html(charData.strength)
            $(".pp-dex").html(charData.dexterity)
            $(".pp-con").html(charData.constitution)
            $(".pp-int").html(charData.intelligence)
            $(".pp-wis").html(charData.wisdom)
            $(".pp-cha").html(charData.charisma)

            //------------skills

            $(".pp-acr").html(charData.acrobatics)
            $(".pp-ani").html(charData.animal)
            $(".pp-arc").html(charData.arcana)
            $(".pp-ath").html(charData.athletics)
            $(".pp-dec").html(charData.deception)
            $(".pp-his").html(charData.history)
            $(".pp-ins").html(charData.insight)        
            $(".pp-inti").html(charData.intimidation)
            $(".pp-inv").html(charData.investigation)
            $(".pp-med").html(charData.medicine)
            $(".pp-nat").html(charData.nature)
            $(".pp-per").html(charData.perception)
            $(".pp-perf").html(charData.performance)
            $(".pp-pers").html(charData.persuasion)
            $(".pp-rel").html(charData.religion)
            $(".pp-sle").html(charData.sleight)
            $(".pp-ste").html(charData.stealth)
            $(".pp-sur").html(charData.survival)

            playerStats(charID);
        })

        _db
        .collection("DDUsers").doc("players").collection("player").doc(charID)
        .get()
        .then(function(doc) {
            let wepData = doc.data()
            
            getWeps(wepData)
            
           
        })
        _db
        .collection("DDUsers").doc("players").collection("player").doc(charID)
        .get()
        .then(function(doc) {
            let armorData = doc.data()
            
            getArmor(armorData)
            
           
        })
        _db
        .collection("DDUsers").doc("players").collection("player").doc(charID)
        .get()
        .then(function(doc) {
            let bioData = doc.data()
            
            getBio(bioData)
            
           
        })
        _db
        .collection("DDUsers").doc("players").collection("player").doc(charID)
        .get()
        .then(function() {
            
            
            getSettings(charID)
            
           
        })

        

    }

    function getWeps(wepData) {

        let wepLength = wepData.weapons.length
        console.log(wepLength)

        for(i = 1; i <= wepLength; i++) {
            console.log(i)
            let wepCount = 0
            let wepId = wepData.weapons[wepCount].name
            

            console.log(wepData.weapons[wepCount].name)

            $(".pp-weps").append(`<div id="${wepId}" class="wepName" style="background-color: rgb(235, 45, 45)">${wepCount}) ${wepData.weapons[wepCount].name}</div> <div id="${wepId}" class="wepAttack" style="background-color: rgba(156, 137, 110, .5)">${wepData.weapons[wepCount].attack}</div> <div id="${wepId}" class="wepDamage" style="background-color: rgba(156, 137, 110, .5)">${wepData.weapons[wepCount].damage}</div> <div id="${wepId}" class="wepType" style="background-color: rgba(156, 137, 110, .5)">${wepData.weapons[wepCount].type}</div>`)

            // $("#selectWep").append(`<option value="${wepCount}">${wepData.weapons[wepCount].name}</option>`)

        }

        

        
        // wepActions(charID)
        
    }

    function getArmor(armorData) {

        let armLength = armorData.armorI.length
        console.log(armLength)

        for(i = 1; i <= armLength; i++) {
            console.log(i)
            let armCount = 0
            let armId = armorData.armorI[armCount].name
            

            //console.log(wepData.weapons[armCount].name)

            $(".pp-armor-list").append(`<div id="${armId}" class="armName" style="background-color: rgb(235, 45, 45)">${armCount}) ${armorData.armorI[armCount].name}</div>`)

            // $("#selectWep").append(`<option value="${wepCount}">${wepData.weapons[wepCount].name}</option>`)
            armCount++;

        }

        

        
        // wepActions(charID)
        
    }

    function getBio(bioData) {
        let bioInfo = bioData.biography
        let traitInfo = bioData.traits

        $(".pp-bio").html(bioInfo)
        $(".pp-traits").html(traitInfo)
    }
    
    function getSettings(charID) {

        $("#deletePlayer").click(function() {
            _db
            .collection("DDUsers").doc("players").collection("player").doc(charID)
            .delete()
            $(".playerPage").css("display", "none")
            $(".login-page").css("display", "flex")
            $(".roomPage").css("display", "flex")
            $(".roomButtons").css("display", "flex")
            alert("Player Deleted")

        })
        $("#switchPlayers").click(function() {
            $(".playerPage").css("display", "none")
            $(".login-page").css("display", "flex")
            $(".roomPage").css("display", "flex")
            $(".roomButtons").css("display", "flex")
        })
        $("#viewCredits").click(function() {
            $(".showCredits").css("display", "flex")
            $(".pp-settings-buttons").css("display", "none")

        })
        $(".creditsBack").click(function() {
            $(".showCredits").css("display", "none")
            $(".pp-settings-buttons").css("display", "flex")

        })

    }



    // function wepActions(charID) {
    //     $("#selectWepBtn").click(function() {
            
    //         $(".pp-weps-list").css("display", "none")
    //         $(".pp-weps-action").css("display", "flex")
            

    //         selectWeps(charID)
    //     })
    // }

    // function selectWeps(charID) {
    //     $("#selectWep").change(function() {
    //         console.log(this.value)
    //         var selectValue = this.value
    //         console.log(selectValue)

    //         selectWepAction(selectValue, charID)
    //     })
    // }

    // function selectWepAction(value, charID) {

    //     $("#dropWep").click(function() {

    //         let zero = 0;

    //          var dropRef = _db
    //         .collection("DDUsers").doc("players").collection("player").doc(charID.weapons[0])
            
    //         dropRef
    //         .delete()
            

            
    //         // .then(function(doc) {


    //         //     let userdrop = doc.data()
    //         //     let weaponDrop = userdrop.weapons[0].w1[value]
    //         //     console.log(weaponDrop)

    //         //     dropWep(weaponDrop)
    //         // })
            

          
    //     })
        
    // }

    

    function playerStats(levelUpID) {
        
        console.log(levelUpID)
        var lvlUpPts = 0;

        //------------level up-------------

        $("#levelUp").click(function() {

            $(".levelUp-modal").css("display", "flex");
            $(".player-level-container").css("display", "none");

            $("#levelUp-yes").click(function() {

                $(".levelUp-modal").css("display", "none");
                $(".player-level-container").css("display", "flex");

                var levelUpCol = _db
                .collection("DDUsers").doc("players").collection("player").doc(levelUpID)

                let newLevel = 0
                
                

                levelUpCol
                .get()
                .then(function(doc) {

                    let levelUpData = doc.data();
                    

                    
                        newLevel = levelUpData.level + 1;
                      
                        lvlUpPts = 3;

                        
                        
                        levelUpPlayer(newLevel)
                        allocatePoints(lvlUpPts)
                        
                })




            })
            $("#levelUp-no").click(function() {
                $(".levelUp-modal").css("display", "none");
                $(".player-level-container").css("display", "flex");

            })

            

        })

        function levelUpPlayer(newPlayerLevel) {

            console.log(newPlayerLevel)
       

            _db
            .collection("DDUsers").doc("players").collection("player").doc(levelUpID)
            .update({
                
                level: newPlayerLevel,
               
            })

            $(".pp-lvl").html(newPlayerLevel)
            
        }

        function allocatePoints(points) {
            $(".points-left-con").css("display", "flex")
            $(".pp-stats-button-container").css("display", "flex")
            // $(".levelUp-con").css("display", "flex")

            $(".pp-inc-str").css("box-shadow", "0px 6px 3px 4px rgb(235, 45, 45)")
            $(".pp-inc-dex").css("box-shadow", "0px 6px 3px 4px rgb(235, 45, 45)")
            $(".pp-inc-con").css("box-shadow", "0px 6px 3px 4px rgb(235, 45, 45)")
            $(".pp-inc-int").css("box-shadow", "0px 6px 3px 4px rgb(235, 45, 45)")
            $(".pp-inc-wis").css("box-shadow", "0px 6px 3px 4px rgb(235, 45, 45)")
            $(".pp-inc-cha").css("box-shadow", "0px 6px 3px 4px rgb(235, 45, 45)")

            $(".points").html(points)

            _db
            .collection("DDUsers").doc("players").collection("player").doc(levelUpID)
            .get()
            .then(function(doc) {
                let pointsData = doc.data()
               
                $(".pp-inc-str").click(function() {
                
                    let newStr = pointsData.strength + 1;
                    $(".pp-str").html(newStr)
                    console.log(newStr)

                    points--;
                   
                    $(".points").html(points)

                    increaseStrength(newStr)

                    if(points == 0){
                        $(".points-left-con").css("display", "none")
                        $(".pp-stats-button-container").css("display", "none")
                    }
                    $(".pp-inc-str").css("box-shadow", "0px 6px 3px 4px tan")
                    

                })
                $(".pp-inc-dex").click(function() {
                    
                    let newDex = pointsData.dexterity + 1;
                    $(".pp-dex").html(newDex)
                    console.log(newDex)

                    points--;
                 
                    $(".points").html(points)

                    increaseDexterity(newDex)

                    if(points == 0){
                        $(".points-left-con").css("display", "none")
                        $(".pp-stats-button-container").css("display", "none")
                    }
                    $(".pp-inc-dex").css("box-shadow", "0px 6px 3px 4px tan")

                })
                $(".pp-inc-con").click(function() {
                    let newCon = pointsData.constitution + 1;
                    let newHp = pointsData.hp + 6;

                    $(".pp-con").html(newCon)
                    $(".pp-hp").html(newHp)
                    console.log(newCon)

                    
                    points--;

                    $(".points").html(points)

                    increaseConstitution(newCon, newHp)

                    if(points == 0){
                        $(".points-left-con").css("display", "none")
                        $(".pp-stats-button-container").css("display", "none")
                    }
                    $(".pp-inc-con").css("box-shadow", "0px 6px 3px 4px tan")

                })
                $(".pp-inc-int").click(function() {
                    let newInt = pointsData.intelligence + 1;
                    $(".pp-int").html(newInt)
                    console.log(newInt)

                    points--;

                    increaseIntelligence(newInt)
                    
                    $(".points").html(points)

                    if(points == 0){
                        $(".points-left-con").css("display", "none")
                        $(".pp-stats-button-container").css("display", "none")
                    }
                    $(".pp-inc-int").css("box-shadow", "0px 6px 3px 4px tan")

                })
                $(".pp-inc-wis").click(function() {
                    let newWis = pointsData.wisdom + 1;
                    $(".pp-wis").html(newWis)
                    console.log(newWis)

                    points--;

                    increaseWisdom(newWis)

                    $(".points").html(points)

                    if(points == 0){
                        $(".points-left-con").css("display", "none")
                        $(".pp-stats-button-container").css("display", "none")
                    }
                    $(".pp-inc-wis").css("box-shadow", "0px 6px 3px 4px tan")

                })
                $(".pp-inc-cha").click(function() {
                    let newCha = pointsData.charisma + 1;
                    $(".pp-cha").html(newCha)
                    console.log(newCha)

                    points--;

                    increaseCharisma(newCha)

                    $(".points").html(points)

                    if(points == 0){
                        $(".points-left-con").css("display", "none")
                        $(".pp-stats-button-container").css("display", "none")
                    }
                    $(".pp-inc-cha").css("box-shadow", "0px 6px 3px 4px tan")

                })
                    
                

                

                



            })

            
        }

        function increaseStrength(newStr) {

            strDb = _db
            .collection("DDUsers").doc("players").collection("player").doc(levelUpID)

                strDb
                .update({
                    
                    strength: newStr,
                
                })

            $(".pp-str").html(newStr)

            if(newStr == 1) {
                let newAth = -5

                strDb
                .update({
                    
                    athletics: newAth,
                
                })
                $(".pp-ath").html(newAth)
            }
            if(newStr == 2 || newStr == 3) {
                let newAth = -4

                strDb
                .update({
                    
                    athletics: newAth,
                
                })

                $(".pp-ath").html(newAth)
            }
            if(newStr == 4 || newStr == 5) {
                let newAth = -3

                strDb
                .update({
                    
                    athletics: newAth,
                
                })

                $(".pp-ath").html(newAth)
            }
            if(newStr == 6 || newStr == 7) {
                let newAth = -2

                strDb
                .update({
                    
                    athletics: newAth,
                
                })

                $(".pp-ath").html(newAth)
            }
            if(newStr == 8 || newStr == 9) {
                let newAth = -1

                strDb
                .update({
                    
                    athletics: newAth,
                
                })

                $(".pp-ath").html(newAth)
            }
            if(newStr == 10 || newStr == 11) {
                let newAth = 0

                strDb
                .update({
                    
                    athletics: newAth,
                
                })

                $(".pp-ath").html(newAth)
            }
            if(newStr == 12 || newStr == 13) {
                let newAth = 1

                strDb
                .update({
                    
                    athletics: newAth,
                
                })

                $(".pp-ath").html(newAth)
            }
            if(newStr == 14 || newStr == 15) {
                let newAth = 2

                strDb
                .update({
                    
                    athletics: newAth,
                
                })

                $(".pp-ath").html(newAth)
            }
            if(newStr == 16 || newStr == 17) {
                let newAth = 3

                strDb
                .update({
                    
                    athletics: newAth,
                
                })

                $(".pp-ath").html(newAth)
            }
            if(newStr == 18 || newStr == 19) {
                let newAth = 4

                strDb
                .update({
                    
                    athletics: newAth,
                
                })

                $(".pp-ath").html(newAth)
            }
            if(newStr == 20 || newStr == 21) {
                let newAth = 5

                strDb
                .update({
                    
                    athletics: newAth,
                
                })

                $(".pp-ath").html(newAth)
            }
            if(newStr == 22 || newStr == 23) {
                let newAth = 6

                strDb
                .update({
                    
                    athletics: newAth,
                
                })

                $(".pp-ath").html(newAth)
            }
            if(newStr == 24 || newStr == 25) {
                let newAth = 7

                strDb
                .update({
                    
                    athletics: newAth,
                
                })

                $(".pp-ath").html(newAth)
            }
            if(newStr == 26 || newStr == 27) {
                let newAth = 8

                strDb
                .update({
                    
                    athletics: newAth,
                
                })

                $(".pp-ath").html(newAth)
            }
            if(newStr == 28 || newStr == 29) {
                let newAth = 9

                strDb
                .update({
                    
                    athletics: newAth,
                
                })

                $(".pp-ath").html(newAth)
            }
            if(newStr == 30) {
                let newAth = 10

                strDb
                .update({
                    
                    athletics: newAth,
                
                })

                $(".pp-ath").html(newAth)
            }

        }

        function increaseDexterity(newDex) {
            dexDb = _db
            .collection("DDUsers").doc("players").collection("player").doc(levelUpID)

                dexDb
                .update({
                    
                    dexterity: newDex,
                
                })

            $(".pp-dex").html(newDex)

            if(newDex == 1) {
                let newAcr = -5
                let newSle = -5
                let newSte = -5

                dexDb
                .update({
                    
                    acrobatics: newAcr,
                    sleight: newSle,
                    stealth: newSte
                
                })
                $(".pp-acr").html(newAcr)
                $(".pp-sle").html(newSle)
                $(".pp-ste").html(newSte)
            }
            if(newDex == 2 || newDex == 3) {
                let newAcr = -4
                let newSle = -4
                let newSte = -4

                dexDb
                .update({
                    
                    acrobatics: newAcr,
                    sleight: newSle,
                    stealth: newSte
                
                })
                $(".pp-acr").html(newAcr)
                $(".pp-sle").html(newSle)
                $(".pp-ste").html(newSte)
            }
            if(newDex == 4 || newDex == 5) {
                let newAcr = -3
                let newSle = -3
                let newSte = -3

                dexDb
                .update({
                    
                    acrobatics: newAcr,
                    sleight: newSle,
                    stealth: newSte
                
                })
                $(".pp-acr").html(newAcr)
                $(".pp-sle").html(newSle)
                $(".pp-ste").html(newSte)
            }
            if(newDex == 6 || newDex == 7) {
                let newAcr = -2
                let newSle = -2
                let newSte = -2

                dexDb
                .update({
                    
                    acrobatics: newAcr,
                    sleight: newSle,
                    stealth: newSte
                
                })
                $(".pp-acr").html(newAcr)
                $(".pp-sle").html(newSle)
                $(".pp-ste").html(newSte)
            }
            if(newDex == 8 || newDex == 9) {
                let newAcr = -1
                let newSle = -1
                let newSte = -1

                dexDb
                .update({
                    
                    acrobatics: newAcr,
                    sleight: newSle,
                    stealth: newSte
                
                })
                $(".pp-acr").html(newAcr)
                $(".pp-sle").html(newSle)
                $(".pp-ste").html(newSte)
            }
            if(newDex == 10 || newDex == 11) {
                let newAcr = 0
                let newSle = 0
                let newSte = 0

                dexDb
                .update({
                    
                    acrobatics: newAcr,
                    sleight: newSle,
                    stealth: newSte
                
                })
                $(".pp-acr").html(newAcr)
                $(".pp-sle").html(newSle)
                $(".pp-ste").html(newSte)
            }
            if(newDex == 12 || newDex == 13) {
                let newAcr = 1
                let newSle = 1
                let newSte = 1

                dexDb
                .update({
                    
                    acrobatics: newAcr,
                    sleight: newSle,
                    stealth: newSte
                
                })
                $(".pp-acr").html(newAcr)
                $(".pp-sle").html(newSle)
                $(".pp-ste").html(newSte)
            }
            if(newDex == 14 || newDex == 15) {
                let newAcr = 2
                let newSle = 2
                let newSte = 2

                dexDb
                .update({
                    
                    acrobatics: newAcr,
                    sleight: newSle,
                    stealth: newSte
                
                })
                $(".pp-acr").html(newAcr)
                $(".pp-sle").html(newSle)
                $(".pp-ste").html(newSte)
            }
            if(newDex == 16 || newDex == 17) {
                let newAcr = 3
                let newSle = 3
                let newSte = 3

                dexDb
                .update({
                    
                    acrobatics: newAcr,
                    sleight: newSle,
                    stealth: newSte
                
                })
                $(".pp-acr").html(newAcr)
                $(".pp-sle").html(newSle)
                $(".pp-ste").html(newSte)
            }
            if(newDex == 18 || newDex == 19) {
                let newAcr = 4
                let newSle = 4
                let newSte = 4

                dexDb
                .update({
                    
                    acrobatics: newAcr,
                    sleight: newSle,
                    stealth: newSte
                
                })
                $(".pp-acr").html(newAcr)
                $(".pp-sle").html(newSle)
                $(".pp-ste").html(newSte)
            }
            if(newDex == 20 || newDex == 21) {
                let newAcr = 5
                let newSle = 5
                let newSte = 5

                dexDb
                .update({
                    
                    acrobatics: newAcr,
                    sleight: newSle,
                    stealth: newSte
                
                })
                $(".pp-acr").html(newAcr)
                $(".pp-sle").html(newSle)
                $(".pp-ste").html(newSte)
            }
            if(newDex == 22 || newDex == 23) {
                let newAcr = 6
                let newSle = 6
                let newSte = 6

                dexDb
                .update({
                    
                    acrobatics: newAcr,
                    sleight: newSle,
                    stealth: newSte
                
                })
                $(".pp-acr").html(newAcr)
                $(".pp-sle").html(newSle)
                $(".pp-ste").html(newSte)
            }
            if(newDex == 24 || newDex == 25) {
                let newAcr = 7
                let newSle = 7
                let newSte = 7

                dexDb
                .update({
                    
                    acrobatics: newAcr,
                    sleight: newSle,
                    stealth: newSte
                
                })
                $(".pp-acr").html(newAcr)
                $(".pp-sle").html(newSle)
                $(".pp-ste").html(newSte)
            }
            if(newDex == 26 || newDex == 27) {
                let newAcr = 8
                let newSle = 8
                let newSte = 8

                dexDb
                .update({
                    
                    acrobatics: newAcr,
                    sleight: newSle,
                    stealth: newSte
                
                })
                $(".pp-acr").html(newAcr)
                $(".pp-sle").html(newSle)
                $(".pp-ste").html(newSte)
            }
            if(newDex == 28 || newDex == 29) {
                let newAcr = 9
                let newSle = 9
                let newSte = 9

                dexDb
                .update({
                    
                    acrobatics: newAcr,
                    sleight: newSle,
                    stealth: newSte
                
                })
                $(".pp-acr").html(newAcr)
                $(".pp-sle").html(newSle)
                $(".pp-ste").html(newSte)
            }
            if(newDex == 30) {
                let newAcr = 10
                let newSle = 10
                let newSte = 10

                dexDb
                .update({
                    
                    acrobatics: newAcr,
                    sleight: newSle,
                    stealth: newSte
                
                })
                $(".pp-acr").html(newAcr)
                $(".pp-sle").html(newSle)
                $(".pp-ste").html(newSte)
            }
        }

        function increaseConstitution(newCon, newHp) {
            conDb = _db
            .collection("DDUsers").doc("players").collection("player").doc(levelUpID)

                conDb
                .update({
                    
                    constitution: newCon,
                    hp: newHp
                
                })

            $(".pp-con").html(newCon)
            $(".pp-hp").html(newHp)
            
        }

        function increaseIntelligence(newInt) {
            intDb = _db
            .collection("DDUsers").doc("players").collection("player").doc(levelUpID)

                intDb
                .update({
                    
                    intelligence: newInt,
                
                })

            $(".pp-int").html(newInt)

            if(newInt == 1) {
                let newArc = -5
                let newHis = -5
                let newInv = -5
                let newMed = -5
                let newRel = -5

                intDb
                .update({
                    
                    arcana: newArc,
                    history: newHis,
                    investigation: newInv,
                    medicine: newMed,
                    religion: newRel
                
                })
                $(".pp-arc").html(newArc)
                $(".pp-his").html(newHis)
                $(".pp-med").html(newMed)
                $(".pp-rel").html(newRel)
            }
            if(newInt == 2 || newInt == 3) {
                let newArc = -4
                let newHis = -4
                let newInv = -4
                let newMed = -4
                let newRel = -4

                intDb
                .update({
                    
                    arcana: newArc,
                    history: newHis,
                    investigation: newInv,
                    medicine: newMed,
                    religion: newRel
                
                })
                $(".pp-arc").html(newArc)
                $(".pp-his").html(newHis)
                $(".pp-med").html(newMed)
                $(".pp-rel").html(newRel)
            }
            if(newInt == 4 || newInt == 5) {
                let newArc = -3
                let newHis = -3
                let newInv = -3
                let newMed = -3
                let newRel = -3

                intDb
                .update({
                    
                    arcana: newArc,
                    history: newHis,
                    investigation: newInv,
                    medicine: newMed,
                    religion: newRel
                
                })
                $(".pp-arc").html(newArc)
                $(".pp-his").html(newHis)
                $(".pp-med").html(newMed)
                $(".pp-rel").html(newRel)
            }
            if(newInt == 6 || newInt == 7) {
                let newArc = -2
                let newHis = -2
                let newInv = -2
                let newMed = -2
                let newRel = -2

                intDb
                .update({
                    
                    arcana: newArc,
                    history: newHis,
                    investigation: newInv,
                    medicine: newMed,
                    religion: newRel
                
                })
                $(".pp-arc").html(newArc)
                $(".pp-his").html(newHis)
                $(".pp-med").html(newMed)
                $(".pp-rel").html(newRel)
            }
            if(newInt == 8 || newInt == 9) {
                let newArc = -1
                let newHis = -1
                let newInv = -1
                let newMed = -1
                let newRel = -1

                intDb
                .update({
                    
                    arcana: newArc,
                    history: newHis,
                    investigation: newInv,
                    medicine: newMed,
                    religion: newRel
                
                })
                $(".pp-arc").html(newArc)
                $(".pp-his").html(newHis)
                $(".pp-med").html(newMed)
                $(".pp-rel").html(newRel)
            }
            if(newInt == 10 || newInt == 11) {
                let newArc = 0
                let newHis = 0
                let newInv = 0
                let newMed = 0
                let newRel = 0

                intDb
                .update({
                    
                    arcana: newArc,
                    history: newHis,
                    investigation: newInv,
                    medicine: newMed,
                    religion: newRel
                
                })
                $(".pp-arc").html(newArc)
                $(".pp-his").html(newHis)
                $(".pp-med").html(newMed)
                $(".pp-rel").html(newRel)
            }
            if(newInt == 12 || newInt == 13) {
                let newArc = 1
                let newHis = 1
                let newInv = 1
                let newMed = 1
                let newRel = 1

                intDb
                .update({
                    
                    arcana: newArc,
                    history: newHis,
                    investigation: newInv,
                    medicine: newMed,
                    religion: newRel
                
                })
                $(".pp-arc").html(newArc)
                $(".pp-his").html(newHis)
                $(".pp-med").html(newMed)
                $(".pp-rel").html(newRel)
            }
            if(newInt == 14 || newInt == 15) {
                let newArc = 2
                let newHis = 2
                let newInv = 2
                let newMed = 2
                let newRel = 2

                intDb
                .update({
                    
                    arcana: newArc,
                    history: newHis,
                    investigation: newInv,
                    medicine: newMed,
                    religion: newRel
                
                })
                $(".pp-arc").html(newArc)
                $(".pp-his").html(newHis)
                $(".pp-med").html(newMed)
                $(".pp-rel").html(newRel)
            }
            if(newInt == 16 || newInt == 17) {
                let newArc = 3
                let newHis = 3
                let newInv = 3
                let newMed = 3
                let newRel = 3

                intDb
                .update({
                    
                    arcana: newArc,
                    history: newHis,
                    investigation: newInv,
                    medicine: newMed,
                    religion: newRel
                
                })
                $(".pp-arc").html(newArc)
                $(".pp-his").html(newHis)
                $(".pp-med").html(newMed)
                $(".pp-rel").html(newRel)
            }
            if(newInt == 18 || newInt == 19) {
                let newArc = 4
                let newHis = 4
                let newInv = 4
                let newMed = 4
                let newRel = 4

                intDb
                .update({
                    
                    arcana: newArc,
                    history: newHis,
                    investigation: newInv,
                    medicine: newMed,
                    religion: newRel
                
                })
                $(".pp-arc").html(newArc)
                $(".pp-his").html(newHis)
                $(".pp-med").html(newMed)
                $(".pp-rel").html(newRel)
            }
            if(newInt == 20 || newInt == 21) {
                let newArc = 5
                let newHis = 5
                let newInv = 5
                let newMed = 5
                let newRel = 5

                intDb
                .update({
                    
                    arcana: newArc,
                    history: newHis,
                    investigation: newInv,
                    medicine: newMed,
                    religion: newRel
                
                })
                $(".pp-arc").html(newArc)
                $(".pp-his").html(newHis)
                $(".pp-med").html(newMed)
                $(".pp-rel").html(newRel)
            }
            if(newInt == 22 || newInt == 23) {
                let newArc = 6
                let newHis = 6
                let newInv = 6
                let newMed = 6
                let newRel = 6

                intDb
                .update({
                    
                    arcana: newArc,
                    history: newHis,
                    investigation: newInv,
                    medicine: newMed,
                    religion: newRel
                
                })
                $(".pp-arc").html(newArc)
                $(".pp-his").html(newHis)
                $(".pp-med").html(newMed)
                $(".pp-rel").html(newRel)
            }
            if(newInt == 24 || newInt == 25) {
                let newArc = 7
                let newHis = 7
                let newInv = 7
                let newMed = 7
                let newRel = 7

                intDb
                .update({
                    
                    arcana: newArc,
                    history: newHis,
                    investigation: newInv,
                    medicine: newMed,
                    religion: newRel
                
                })
                $(".pp-arc").html(newArc)
                $(".pp-his").html(newHis)
                $(".pp-med").html(newMed)
                $(".pp-rel").html(newRel)
            }
            if(newInt == 26 || newInt == 27) {
                let newArc = 8
                let newHis = 8
                let newInv = 8
                let newMed = 8
                let newRel = 8

                intDb
                .update({
                    
                    arcana: newArc,
                    history: newHis,
                    investigation: newInv,
                    medicine: newMed,
                    religion: newRel
                
                })
                $(".pp-arc").html(newArc)
                $(".pp-his").html(newHis)
                $(".pp-med").html(newMed)
                $(".pp-rel").html(newRel)
            }
            if(newInt == 28 || newInt == 29) {
                let newArc = 9
                let newHis = 9
                let newInv = 9
                let newMed = 9
                let newRel = 9

                intDb
                .update({
                    
                    arcana: newArc,
                    history: newHis,
                    investigation: newInv,
                    medicine: newMed,
                    religion: newRel
                
                })
                $(".pp-arc").html(newArc)
                $(".pp-his").html(newHis)
                $(".pp-med").html(newMed)
                $(".pp-rel").html(newRel)
            }
            if(newInt == 30) {
                let newArc = 10
                let newHis = 10
                let newInv = 10
                let newMed = 10
                let newRel = 10

                intDb
                .update({
                    
                    arcana: newArc,
                    history: newHis,
                    investigation: newInv,
                    medicine: newMed,
                    religion: newRel
                
                })
                $(".pp-arc").html(newArc)
                $(".pp-his").html(newHis)
                $(".pp-med").html(newMed)
                $(".pp-rel").html(newRel)
            }
        }

        function increaseWisdom(newWis) {
            wisDb = _db
            .collection("DDUsers").doc("players").collection("player").doc(levelUpID)

                wisDb
                .update({
                    
                    wisdom: newWis,
                
                })

            $(".pp-wis").html(newWis)

            if(newWis == 1) {
                let newAni = -5
                let newIns = -5
                let newNat = -5
                let newPer = -5
                let newSur = -5

                wisDb
                .update({
                    
                    animal: newAni,
                    insight: newIns,
                    nature: newNat,
                    perception: newPer,
                    survival: newSur
                
                })
                $(".pp-ani").html(newAni)
                $(".pp-ins").html(newIns)
                $(".pp-nat").html(newNat)
                $(".pp-per").html(newPer)
                $(".pp-sur").html(newSur)
            }
            if(newWis == 2 || newWis == 3) {
                let newAni = -4
                let newIns = -4
                let newNat = -4
                let newPer = -4
                let newSur = -4

                wisDb
                .update({
                    
                    animal: newAni,
                    insight: newIns,
                    nature: newNat,
                    perception: newPer,
                    survival: newSur
                
                })
                $(".pp-ani").html(newAni)
                $(".pp-ins").html(newIns)
                $(".pp-nat").html(newNat)
                $(".pp-per").html(newPer)
                $(".pp-sur").html(newSur)
            }
            if(newWis == 4 || newWis == 5) {
                let newAni = -3
                let newIns = -3
                let newNat = -3
                let newPer = -3
                let newSur = -3

                wisDb
                .update({
                    
                    animal: newAni,
                    insight: newIns,
                    nature: newNat,
                    perception: newPer,
                    survival: newSur
                
                })
                $(".pp-ani").html(newAni)
                $(".pp-ins").html(newIns)
                $(".pp-nat").html(newNat)
                $(".pp-per").html(newPer)
                $(".pp-sur").html(newSur)
            }
            if(newWis == 6 || newWis == 7) {
                let newAni = -2
                let newIns = -2
                let newNat = -2
                let newPer = -2
                let newSur = -2

                wisDb
                .update({
                    
                    animal: newAni,
                    insight: newIns,
                    nature: newNat,
                    perception: newPer,
                    survival: newSur
                
                })
                $(".pp-ani").html(newAni)
                $(".pp-ins").html(newIns)
                $(".pp-nat").html(newNat)
                $(".pp-per").html(newPer)
                $(".pp-sur").html(newSur)
            }
            if(newWis == 8 || newWis == 9) {
                let newAni = -1
                let newIns = -1
                let newNat = -1
                let newPer = -1
                let newSur = -1

                wisDb
                .update({
                    
                    animal: newAni,
                    insight: newIns,
                    nature: newNat,
                    perception: newPer,
                    survival: newSur
                
                })
                $(".pp-ani").html(newAni)
                $(".pp-ins").html(newIns)
                $(".pp-nat").html(newNat)
                $(".pp-per").html(newPer)
                $(".pp-sur").html(newSur)
            }
            if(newWis == 10 || newWis == 11) {
                let newAni = 0
                let newIns = 0
                let newNat = 0
                let newPer = 0
                let newSur = 0

                wisDb
                .update({
                    
                    animal: newAni,
                    insight: newIns,
                    nature: newNat,
                    perception: newPer,
                    survival: newSur
                
                })
                $(".pp-ani").html(newAni)
                $(".pp-ins").html(newIns)
                $(".pp-nat").html(newNat)
                $(".pp-per").html(newPer)
                $(".pp-sur").html(newSur)
            }
            if(newWis == 12 || newWis == 13) {
                let newAni = 1
                let newIns = 1
                let newNat = 1
                let newPer = 1
                let newSur = 1

                wisDb
                .update({
                    
                    animal: newAni,
                    insight: newIns,
                    nature: newNat,
                    perception: newPer,
                    survival: newSur
                
                })
                $(".pp-ani").html(newAni)
                $(".pp-ins").html(newIns)
                $(".pp-nat").html(newNat)
                $(".pp-per").html(newPer)
                $(".pp-sur").html(newSur)
            }
            if(newWis == 14 || newWis == 15) {
                let newAni = 2
                let newIns = 2
                let newNat = 2
                let newPer = 2
                let newSur = 2

                wisDb
                .update({
                    
                    animal: newAni,
                    insight: newIns,
                    nature: newNat,
                    perception: newPer,
                    survival: newSur
                
                })
                $(".pp-ani").html(newAni)
                $(".pp-ins").html(newIns)
                $(".pp-nat").html(newNat)
                $(".pp-per").html(newPer)
                $(".pp-sur").html(newSur)
            }
            if(newWis == 16 || newWis == 17) {
                let newAni = 3
                let newIns = 3
                let newNat = 3
                let newPer = 3
                let newSur = 3

                wisDb
                .update({
                    
                    animal: newAni,
                    insight: newIns,
                    nature: newNat,
                    perception: newPer,
                    survival: newSur
                
                })
                $(".pp-ani").html(newAni)
                $(".pp-ins").html(newIns)
                $(".pp-nat").html(newNat)
                $(".pp-per").html(newPer)
                $(".pp-sur").html(newSur)
            }
            if(newWis == 18 || newWis == 19) {
                let newAni = 4
                let newIns = 4
                let newNat = 4
                let newPer = 4
                let newSur = 4

                wisDb
                .update({
                    
                    animal: newAni,
                    insight: newIns,
                    nature: newNat,
                    perception: newPer,
                    survival: newSur
                
                })
                $(".pp-ani").html(newAni)
                $(".pp-ins").html(newIns)
                $(".pp-nat").html(newNat)
                $(".pp-per").html(newPer)
                $(".pp-sur").html(newSur)
            }
            if(newWis == 20 || newWis == 21) {
                let newAni = 5
                let newIns = 5
                let newNat = 5
                let newPer = 5
                let newSur = 5

                wisDb
                .update({
                    
                    animal: newAni,
                    insight: newIns,
                    nature: newNat,
                    perception: newPer,
                    survival: newSur
                
                })
                $(".pp-ani").html(newAni)
                $(".pp-ins").html(newIns)
                $(".pp-nat").html(newNat)
                $(".pp-per").html(newPer)
                $(".pp-sur").html(newSur)
            }
            if(newWis == 22 || newWis == 23) {
                let newAni = 6
                let newIns = 6
                let newNat = 6
                let newPer = 6
                let newSur = 6

                wisDb
                .update({
                    
                    animal: newAni,
                    insight: newIns,
                    nature: newNat,
                    perception: newPer,
                    survival: newSur
                
                })
                $(".pp-ani").html(newAni)
                $(".pp-ins").html(newIns)
                $(".pp-nat").html(newNat)
                $(".pp-per").html(newPer)
                $(".pp-sur").html(newSur)
            }
            if(newWis == 24 || newWis == 25) {
                let newAni = 7
                let newIns = 7
                let newNat = 7
                let newPer = 7
                let newSur = 7

                wisDb
                .update({
                    
                    animal: newAni,
                    insight: newIns,
                    nature: newNat,
                    perception: newPer,
                    survival: newSur
                
                })
                $(".pp-ani").html(newAni)
                $(".pp-ins").html(newIns)
                $(".pp-nat").html(newNat)
                $(".pp-per").html(newPer)
                $(".pp-sur").html(newSur)
            }
            if(newWis == 26 || newWis == 27) {
                let newAni = 8
                let newIns = 8
                let newNat = 8
                let newPer = 8
                let newSur = 8

                wisDb
                .update({
                    
                    animal: newAni,
                    insight: newIns,
                    nature: newNat,
                    perception: newPer,
                    survival: newSur
                
                })
                $(".pp-ani").html(newAni)
                $(".pp-ins").html(newIns)
                $(".pp-nat").html(newNat)
                $(".pp-per").html(newPer)
                $(".pp-sur").html(newSur)
            }
            if(newWis == 28 || newWis == 29) {
                let newAni = 9
                let newIns = 9
                let newNat = 9
                let newPer = 9
                let newSur = 9

                wisDb
                .update({
                    
                    animal: newAni,
                    insight: newIns,
                    nature: newNat,
                    perception: newPer,
                    survival: newSur
                
                })
                $(".pp-ani").html(newAni)
                $(".pp-ins").html(newIns)
                $(".pp-nat").html(newNat)
                $(".pp-per").html(newPer)
                $(".pp-sur").html(newSur)
            }
            if(newWis == 30) {
                let newAni = 10
                let newIns = 10
                let newNat = 10
                let newPer = 10
                let newSur = 10

                wisDb
                .update({
                    
                    animal: newAni,
                    insight: newIns,
                    nature: newNat,
                    perception: newPer,
                    survival: newSur
                
                })
                $(".pp-ani").html(newAni)
                $(".pp-ins").html(newIns)
                $(".pp-nat").html(newNat)
                $(".pp-per").html(newPer)
                $(".pp-sur").html(newSur)
            }
        }

        function increaseCharisma(newCha) {
            chaDb = _db
            .collection("DDUsers").doc("players").collection("player").doc(levelUpID)

                chaDb
                .update({
                    
                    charisma: newCha,
                
                })

            $(".pp-cha").html(newCha)

            if(newCha == 1) {
                let newDec = -5
                let newInti = -5
                let newPerf = -5
                let newPers = -5
                

                chaDb
                .update({
                    
                    deception: newDec,
                    intimidation: newInti,
                    performance: newPerf,
                    persuasion: newPers
                
                })
                $(".pp-dec").html(newDec)
                $(".pp-inti").html(newInti)
                $(".pp-perf").html(newPerf)
                $(".pp-pers").html(newPers)
                
            }
            if(newCha == 2 || newCha == 3) {
                let newDec = -4
                let newInti = -4
                let newPerf = -4
                let newPers = -4
                

                chaDb
                .update({
                    
                    deception: newDec,
                    intimidation: newInti,
                    performance: newPerf,
                    persuasion: newPers
                
                })
                $(".pp-dec").html(newDec)
                $(".pp-inti").html(newInti)
                $(".pp-perf").html(newPerf)
                $(".pp-pers").html(newPers)
                
            }
            if(newCha == 4 || newCha == 5) {
                let newDec = -3
                let newInti = -3
                let newPerf = -3
                let newPers = -3
                

                chaDb
                .update({
                    
                    deception: newDec,
                    intimidation: newInti,
                    performance: newPerf,
                    persuasion: newPers
                
                })
                $(".pp-dec").html(newDec)
                $(".pp-inti").html(newInti)
                $(".pp-perf").html(newPerf)
                $(".pp-pers").html(newPers)
                
            }
            if(newCha == 6 || newCha == 7) {
                let newDec = -2
                let newInti = -2
                let newPerf = -2
                let newPers = -2
                

                chaDb
                .update({
                    
                    deception: newDec,
                    intimidation: newInti,
                    performance: newPerf,
                    persuasion: newPers
                
                })
                $(".pp-dec").html(newDec)
                $(".pp-inti").html(newInti)
                $(".pp-perf").html(newPerf)
                $(".pp-pers").html(newPers)
                
            }
            if(newCha == 8 || newCha == 9) {
                let newDec = -1
                let newInti = -1
                let newPerf = -1
                let newPers = -1
                

                chaDb
                .update({
                    
                    deception: newDec,
                    intimidation: newInti,
                    performance: newPerf,
                    persuasion: newPers
                
                })
                $(".pp-dec").html(newDec)
                $(".pp-inti").html(newInti)
                $(".pp-perf").html(newPerf)
                $(".pp-pers").html(newPers)
                
            }
            if(newCha == 10 || newCha == 11) {
                let newDec = 0
                let newInti = 0
                let newPerf = 0
                let newPers = 0
                

                chaDb
                .update({
                    
                    deception: newDec,
                    intimidation: newInti,
                    performance: newPerf,
                    persuasion: newPers
                
                })
                $(".pp-dec").html(newDec)
                $(".pp-inti").html(newInti)
                $(".pp-perf").html(newPerf)
                $(".pp-pers").html(newPers)
                
            }
            if(newCha == 12 || newCha == 13) {
                let newDec = 1
                let newInti = 1
                let newPerf = 1
                let newPers = 1
                

                chaDb
                .update({
                    
                    deception: newDec,
                    intimidation: newInti,
                    performance: newPerf,
                    persuasion: newPers
                
                })
                $(".pp-dec").html(newDec)
                $(".pp-inti").html(newInti)
                $(".pp-perf").html(newPerf)
                $(".pp-pers").html(newPers)
                
            }
            if(newCha == 14 || newCha == 15) {
                let newDec = 2
                let newInti = 2
                let newPerf = 2
                let newPers = 2
                

                chaDb
                .update({
                    
                    deception: newDec,
                    intimidation: newInti,
                    performance: newPerf,
                    persuasion: newPers
                
                })
                $(".pp-dec").html(newDec)
                $(".pp-inti").html(newInti)
                $(".pp-perf").html(newPerf)
                $(".pp-pers").html(newPers)
                
            }
            if(newCha == 16 || newCha == 17) {
                let newDec = 3
                let newInti = 3
                let newPerf = 3
                let newPers = 3
                

                chaDb
                .update({
                    
                    deception: newDec,
                    intimidation: newInti,
                    performance: newPerf,
                    persuasion: newPers
                
                })
                $(".pp-dec").html(newDec)
                $(".pp-inti").html(newInti)
                $(".pp-perf").html(newPerf)
                $(".pp-pers").html(newPers)
                
            }
            if(newCha == 18 || newCha == 19) {
                let newDec = 4
                let newInti = 4
                let newPerf = 4
                let newPers = 4
                

                chaDb
                .update({
                    
                    deception: newDec,
                    intimidation: newInti,
                    performance: newPerf,
                    persuasion: newPers
                
                })
                $(".pp-dec").html(newDec)
                $(".pp-inti").html(newInti)
                $(".pp-perf").html(newPerf)
                $(".pp-pers").html(newPers)
                
            }
            if(newCha == 20 || newCha == 21) {
                let newDec = 5
                let newInti = 5
                let newPerf = 5
                let newPers = 5
                

                chaDb
                .update({
                    
                    deception: newDec,
                    intimidation: newInti,
                    performance: newPerf,
                    persuasion: newPers
                
                })
                $(".pp-dec").html(newDec)
                $(".pp-inti").html(newInti)
                $(".pp-perf").html(newPerf)
                $(".pp-pers").html(newPers)
                
            }
            if(newCha == 22 || newCha == 23) {
                let newDec = 6
                let newInti = 6
                let newPerf = 6
                let newPers = 6
                

                chaDb
                .update({
                    
                    deception: newDec,
                    intimidation: newInti,
                    performance: newPerf,
                    persuasion: newPers
                
                })
                $(".pp-dec").html(newDec)
                $(".pp-inti").html(newInti)
                $(".pp-perf").html(newPerf)
                $(".pp-pers").html(newPers)
                
            }
            if(newCha == 24 || newCha == 25) {
                let newDec = 7
                let newInti = 7
                let newPerf = 7
                let newPers = 7
                

                chaDb
                .update({
                    
                    deception: newDec,
                    intimidation: newInti,
                    performance: newPerf,
                    persuasion: newPers
                
                })
                $(".pp-dec").html(newDec)
                $(".pp-inti").html(newInti)
                $(".pp-perf").html(newPerf)
                $(".pp-pers").html(newPers)
                
            }
            if(newCha == 26 || newCha == 27) {
                let newDec = 8
                let newInti = 8
                let newPerf = 8
                let newPers = 8
                

                chaDb
                .update({
                    
                    deception: newDec,
                    intimidation: newInti,
                    performance: newPerf,
                    persuasion: newPers
                
                })
                $(".pp-dec").html(newDec)
                $(".pp-inti").html(newInti)
                $(".pp-perf").html(newPerf)
                $(".pp-pers").html(newPers)
                
            }
            if(newCha == 28 || newCha == 29) {
                let newDec = 9
                let newInti = 9
                let newPerf = 9
                let newPers = 9
                

                chaDb
                .update({
                    
                    deception: newDec,
                    intimidation: newInti,
                    performance: newPerf,
                    persuasion: newPers
                
                })
                $(".pp-dec").html(newDec)
                $(".pp-inti").html(newInti)
                $(".pp-perf").html(newPerf)
                $(".pp-pers").html(newPers)
                
            }
            if(newCha == 30) {
                let newDec = 10
                let newInti = 10
                let newPerf = 10
                let newPers = 10
                

                chaDb
                .update({
                    
                    deception: newDec,
                    intimidation: newInti,
                    performance: newPerf,
                    persuasion: newPers
                
                })
                $(".pp-dec").html(newDec)
                $(".pp-inti").html(newInti)
                $(".pp-perf").html(newPerf)
                $(".pp-pers").html(newPers)
                
            }
        }

        //------------adjust hp--------------

        $("#adjustHp").click(function() {

            $(".adjustHp-modal").css("display", "flex");
            $(".player-level-container").css("display", "none");

            $("#confirmNewHp").click(function() {

                
                $(".adjustHp-modal").css("display", "none");
                $(".player-level-container").css("display", "flex");

                var adjustHpCol = _db
                .collection("DDUsers").doc("players").collection("player").doc(levelUpID)

                var ppNewHp = parseInt($("#pp-newHp").val(), 10)
                
                adjustHpCol
                .get()
                .then(function(doc) {
                    let adjustHpData = doc.data()
                    console.log(adjustHpData.hp)

                    var newHp = adjustHpData.hp + ppNewHp;

                    console.log(newHp)
                    confirmNewHp(newHp)
                })

                

            })
            $("#cancelNewHp").click(function() {
                $(".adjustHp-modal").css("display", "none");
                $(".player-level-container").css("display", "flex");

            })
        })

        function confirmNewHp(confirmHp) {
            _db
            .collection("DDUsers").doc("players").collection("player").doc(levelUpID)
            .update({
                
                hp: confirmHp
            })

            $(".pp-hp").html(confirmHp)
        }

        //------------adjust gp---------------

        $("#adjustGp").click(function() {

            $(".adjustGp-modal").css("display", "flex");
            $(".player-level-container").css("display", "none");

            $("#confirmNewGp").click(function() {

                
                $(".adjustGp-modal").css("display", "none");
                $(".player-level-container").css("display", "flex");

                var adjustGpCol = _db
                .collection("DDUsers").doc("players").collection("player").doc(levelUpID)

                var ppNewGp = parseInt($("#pp-newGp").val(), 10)
                
                adjustGpCol
                .get()
                .then(function(doc) {
                    let adjustGpData = doc.data()
                    console.log(adjustGpData.gp)

                    var newGp = adjustGpData.gp + ppNewGp;

                    console.log(newGp)
                    confirmNewGp(newGp)
                })

                

            })
            $("#cancelNewGp").click(function() {
                $(".adjustGp-modal").css("display", "none");
                $(".player-level-container").css("display", "flex");

            })
        })

        function confirmNewGp(confirmGp) {
            _db
            .collection("DDUsers").doc("players").collection("player").doc(levelUpID)
            .update({
                
                gp: confirmGp
            })

            $(".pp-gp").html(confirmGp)
        }

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