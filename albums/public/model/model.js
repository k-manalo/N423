var _db;

export function initFirebase() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log("User Active")
        } else {
            console.log("User Inactive")
            _db = "";
        }

       // callback();
    })
}

export function signIn(callback) {
    firebase
    .auth()
    .signInAnonymously()
    .then(function (result) {
        _db = firebase.firestore()
        callback();
    })
}

export function getAlbumByCategory(cat) {
    $(".content").html('');
    $(".content").append(`<h3>${cat}</h3>`)

    _db
    .collection("album-names")
    .where("category", "==", cat)
    .get()
    .then(function (querySnapshot) {
        querySnapshot.forEach(function(doc) {
            let album = doc.data();
            var id = doc.id;
            $(".content").append(`<div style="background-image: ${album.albumURL}; height: 400px; width: 400px; background-position: center;
            background-repeat: no-repeat;
            background-size: cover;"></div>
            <p style="margin-bottom: 15px;" >Artist: ${album.bandName} <br> Album: ${album.albumName}</p> <div style="width: 80%; height: 2px; background-color: black; margin-bottom: 16px;"></div>`)
            console.log(album)
        })
       
    })
}

export function getAmountAlbums(all) {
    $(".content").html('');
    $(".content").append(`<h3>Showing ${all} Albums</h3>`)
    

    _db
    .collection("album-names")
    .where("amount", "<=", all)
    .get()
    .then(function (querySnapshot) {
        querySnapshot.forEach(function(doc) {
            let album = doc.data();
            $(".content").append(`<div style="background-image: ${album.albumURL}; height: 400px; width: 400px; background-position: center;
            background-repeat: no-repeat;
            background-size: cover;"></div>
            <p style=" margin-bottom: 15px; margin-top: 15px"> Artist: ${album.bandName} <br> Album: ${album.albumName} <br> Category: ${album.category}</p>
            <div style="width: 80%; height: 2px; background-color: black; margin-bottom: 16px;"></div>`)
         
        })
    })
}