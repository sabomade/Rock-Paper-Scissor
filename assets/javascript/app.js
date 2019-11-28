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
    var playersRef = database.ref("/players");

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
    //----------DATABASE START----------
    //listener for when page first loads or players list changes
    playersRef.on("value", function(snap){
        //if player 1 exists
        if (snap.child('player1').exists()){
            //record player1 name
            player1 = snap.val().player1;
            player1Name = player1.name;

            //write player1 info to DOM

        }
        //else player1 does not exist
        else{
            player1 = null;
            player1Name = "";

            //write "waiting..." to DOM
        }

        //if player2 exists
        if(snap.child('player2').exists()){
            //record player2 name
            player2 = snap.val().player2;
            player2Name = player2.name;

            //write player2 info to DOM

        }
        //else player2 does not exist
        else{
            player2 = null;
            player2Name = "";

            //write "waiting..." to DOM

        }

        //if both players exist, game play can begin
        if( player1 && player2){
            //it's player1's turn, update css

            //write "waiting for player1 to choose..." to DOM

        }
    });
    //listener for when players leave the game
    playersRef.on("child_removed", function(snap){
        //[this] player has left the game
        var note = snap.val().name + "has left the game";

        //write note to DOM

    });    

    //----------DATABASE END----------

    //----------ON BUTTON CLICK START----------
    $("#add-name").on('click', function(){
        
    })
});


