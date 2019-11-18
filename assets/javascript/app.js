$(document).ready(function() {
    // FIREBASE DATABASE
    //==============================

    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDc1iy32MWxeJxY-P_0ptuIcT3H0AF00oM",
        authDomain: "rock-paper-scissor-b72b7.firebaseapp.com",
        databaseURL: "https://rock-paper-scissor-b72b7.firebaseio.com",
        projectId: "rock-paper-scissor-b72b7",
        storageBucket: "rock-paper-scissor-b72b7.appspot.com",
        messagingSenderId: "81344147045",
        appId: "1:81344147045:web:63e141da7ac6c1e467208c",
        measurementId: "G-88CYF5TFYD"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // VARIABLES
    //================================
    //create a variable to reference the database
    var database = firebase.database();

    //connections directory set up
    var connectionsRef = database.ref("/players");

    //location in database where client's connection status is stored, auto updates. True if connected, False if not connected.
    var connectedRef = database.ref(".info/connected");

    //player objects
    var player1 = null;
    var player2 = null;

    //player names
    var player1Name = "";
    var player2Name = "";

    //player name to be stored on browser
    var myPlayerName = "";

    //player choices
    var player1Choice = "";
    var player2Choice = "";

    //who's turn
    var turn = 1;

    // FUNCTIONS
    //================================
    //when client's connection state changes
    connectedRef.on("value", function(snap){
        //does player 1 exixt in database
        //if connected
        if (snap.val()){
            //add user to database
            var player = connectionsRef.push(true);
            //remove from database when disconnected
            player.onDisconnect().remove();
        }

        //does player 2 exisit in database
    });

    //when page first loads or connections list changes
    connectionsRef.on("value", function(snap){
        var usersOnline = snap.numChildren();

        if (usersOnline == 1){
            //they are player 1, ask their name & write it to DOM
            console.log(usersOnline, "players online");

            //message to DOM "waiting for playerr 2"
        }
        else if (usersOnline == 2){
            //they are player 2, ask their name & write it to DOM
            console.log(usersOnline, "players online");

            //begin game, player 1 goes first
        }
        else if (usersOnline > 2){
            //they cannot play yet...
            console.log(usersOnline, "players online");
        }
    })
    
});