import {GameState} from '../../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let lvl = require( "./../structures/level11.js" );
let txtInput = null;
let finalScore = null;
const BIG = 100000;
const API_KEY = "x";
const SECRET_KEY = "x";
let errorTxt = null;
let sendingScroeTxt = null;
let sendScoreButton = null;
let youAreOnPlaceTxt = null;
let leaderboardTxt = "";

export class Level11 extends LevelPrototype {
	constructor() {
		super();
		let protoLevel = _.cloneDeep( this.prototypeLevel );
		this.levelObj = _.merge( protoLevel, lvl );
	}

	addStartingText(){
        finalScore = game.global.time;
        let minutes = Math.round(finalScore / 60);
        let seconds = finalScore % 60;
        if(game.global.isHardMode){
             window.game.add.text(80, 30, 'Your time (hard mode): ' + minutes + ' minutes, ' + seconds + ' seconds', {font: '20px Courier', fill: '#fff'});
        } else {
             window.game.add.text(80, 30, 'Your time (easy mode): ' + minutes + ' minutes, ' + seconds + ' seconds', {font: '20px Courier', fill: '#fff'});
        }
    }

    addOptionalEndingScreen(){
    window.game.add.text(280, 86, 'Name: ', {font: '20px Courier', fill: '#fff'});


        game.add.plugin(PhaserInput.Plugin);
        txtInput = game.add.inputField(340, 80, { 
            font: '18px Arial',
            fill: '#212121',
            fontWeight: 'bold',
            width: 250,
            padding: 8,
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 6,
        });

        // TODO replace temp mute-button with actual button asset
        let restartButton = game.add.button(100, 80, 'mute-button', this.restartGame, this, 0, 0, 1);
        sendScoreButton = game.add.button(410, 130, 'mute-button', this.sendScore, this, 0, 0, 1);

        App42.initialize(API_KEY, SECRET_KEY);
    }

    sendScore(){
        if(errorTxt != null){
            errorTxt.kill(); 
        }
        if(sendScoreButton != null){
            sendScoreButton.kill();
        }

        sendingScroeTxt = window.game.add.text(320, 160, 'Sending score...', {font: '22px Courier', fill: '#fff'});
                   

        App42.initialize(API_KEY, SECRET_KEY);

        
          setTimeout(function(){
              let gameName = "Evil Slime City";  
              let userName = txtInput.value;
              if(userName == ""){
                   userName = "Slimy Guest";
              }  
              let gameScore = BIG - finalScore;  
              let result;
              var scoreBoardService = new App42ScoreBoard()    
              scoreBoardService.saveUserScore(gameName,userName,gameScore,{ 
                success: function(object){
                    console.log("Success!");
                    if(sendingScroeTxt != null){
                        sendingScroeTxt.kill();
                    }
                    youAreOnPlaceTxt = window.game.add.text(340, 120, 'Your palce: ToDo', {font: '17px Courier', fill: '#fff'});
                    youAreOnPlaceTxt.fontWeight = 'bold';

                    this.loadTopScores();
                },
                loadTopScores: function(object){
                                     scoreBoardService.getTopRankings(gameName,{    
                                        success: function(object)   
                                        {    
                                            let game = JSON.parse(object);    
                                            result = game.app42.response.games.game;  
                                            console.log("gameName is : " + result.name)  
                                            let scoreList = result.scores.score;  
                                            if (scoreList instanceof Array) {  
                                                    for (let i = 0; i < scoreList.length; i++) {  
                                                        let t = BIG - scoreList[i].value; 
                                                        let m = Math.round(t / 60); 
                                                        let s = t % 60;
                                                        console.log(scoreList[i].userName + " - " + m + "m, " + s + "s");
                                                        if(i < 6){
                                                            leaderboardTxt += ((i+1) + ". " + scoreList[i].userName + " - " + m + "m, " + s + "s \n");
                                                        }
                                                    }  
                                                } else {  
                                                        let t = BIG - scoreList.value; 
                                                        let m = Math.round(t / 60); 
                                                        let s = t % 60;
                                                        console.log(scoreList.userName + " - " + m + "m, " + s + "s");;
                                                } 

                                            window.game.add.text(290, 150, leaderboardTxt, {font: '17px Courier', fill: '#fff'}); 
                                        },    
                                        error: function(error) {    
                                        }    
                                    });       
                },
                error: function(object){
                    console.log("Error!");
                    errorTxt = window.game.add.text(290, 120, 'Connection error... pls try again.', {font: '17px Courier', fill: '#ff0000'});
                    errorTxt.fontWeight = 'bold';

                    sendScoreButton.reset(410, 130);

                    if(sendingScroeTxt != null){
                         sendingScroeTxt.kill();
                    }
                 
                    // make a message to send scroe again
                    // "sending failed... pls try again"
                } });
        }, 200);
    }


    restartGame(){
        game.global.gameLevel = 0;
        game.state.start('menu');
    }

}
