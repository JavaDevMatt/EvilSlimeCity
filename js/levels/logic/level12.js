import {GameState} from '../../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let lvl = require( "./../structures/level12.js" );
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

export class Level12 extends LevelPrototype {
	constructor() {
		super();
		let protoLevel = _.cloneDeep( this.prototypeLevel );
		this.levelObj = _.merge( protoLevel, lvl );
	}

	addStartingText(){
        leaderboardTxt = "";
        finalScore = game.global.time;
        let minutes = Math.round(finalScore / 60);
        let seconds = finalScore % 60;

        if(!game.global.isCheckScroeMode){
             if(game.global.isHardMode){
             window.game.add.text(80, 30, 'Your time (hard mode): ' + minutes + ' minutes, ' + seconds + ' seconds', {font: '20px Courier', fill: '#fff'});
            } else {
                 window.game.add.text(80, 30, 'Your time (easy mode): ' + minutes + ' minutes, ' + seconds + ' seconds', {font: '20px Courier', fill: '#fff'});
            }
        } else {
            if(game.global.isHardMode){
             window.game.add.text(80, 30, 'Check score (hard mode)', {font: '20px Courier', fill: '#fff'});
            } else {
                 window.game.add.text(80, 30, 'Check score (easy mode): ', {font: '20px Courier', fill: '#fff'});
            }
        }
       
    }

    addOptionalEndingScreen(){
        if(!game.global.isCheckScroeMode){
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
        }

        let restartButton = game.add.button(100, 80, 'restart-button', this.restartGame, this, 0, 0, 1);
        if(game.global.isCheckScroeMode){
            sendScoreButton = game.add.button(410, 130, 'loadscore-button', this.sendScore, this, 0, 0, 1);
        } else {
            sendScoreButton = game.add.button(410, 130, 'sendscore-button', this.sendScore, this, 0, 0, 1);
        }

        App42.initialize(API_KEY, SECRET_KEY);
    }

    sendScore(){
        if(errorTxt != null){
            errorTxt.kill(); 
        }
        if(sendScoreButton != null){
            sendScoreButton.kill();
        }

        let requestTxt = "";
        if(window.game.global.isCheckScroeMode){
            requestTxt = "Reading score...";
        } else {
            requestTxt = "Sending score...";
        }
        sendingScroeTxt = window.game.add.text(320, 160, requestTxt, {font: '22px Courier', fill: '#fff'});
                   

        App42.initialize(API_KEY, SECRET_KEY);

        
          setTimeout(function(){
              let gameName = "";
              if(game.global.isHardMode){
                gameName = "Evil Slime City Hard";
              } else {
                gameName = "Evil Slime City";
              }

              let userName = "";

              let gameScore = BIG - finalScore;  
              let result;

              if(game.global.isCheckScroeMode){
                    userName = "Score check";
                    gameScore = 100;
                    finalScore = 100;
              } else {
                    userName = txtInput.value;
                    if(userName == ""){
                        userName = "Slimy Guest";
                    }  
              }

              var scoreBoardService = new App42ScoreBoard();    

              scoreBoardService.saveUserScore(gameName,userName,gameScore,{ 
                success: function(object){
                    console.log("Success!");
                    if(sendingScroeTxt != null){
                        sendingScroeTxt.kill();
                    }
                    

                    this.loadTopScores();
                },

                loadTopScores: function(object){
                                    let userPlace = 0;
                                     scoreBoardService.getTopNRankers(gameName, 1000, {    
                                        success: function(object)   
                                        {    
                                            let game = JSON.parse(object);    
                                            result = game.app42.response.games.game;  
                                            console.log("gameName is : " + result.name)  
                                            let scoreList = result.scores.score;  
                                            if (scoreList instanceof Array) {  
                                                    for (let i = 0; i < scoreList.length; i++) {

                                                        if(userName == scoreList[i].userName){
                                                            userPlace = i + 1;
                                                        }

                                                        let t = BIG - scoreList[i].value; 
                                                        let m = Math.floor(t / 60); 
                                                        let s = t % 60;
                                                        console.log(scoreList[i].userName + " - " + m + "m, " + s + "s");
                                                        if(i < 6){
                                                            leaderboardTxt += ((i+1) + ". " + scoreList[i].userName + " - " + m + "m, " + s + "s \n");
                                                        }
                                                    }  
                                                } else {  
                                                        let t = BIG - scoreList.value; 
                                                        let m = Math.floor(t / 60);  
                                                        let s = t % 60;
                                                        console.log(scoreList.userName + " - " + m + "m, " + s + "s");;
                                                } 

                                            window.game.add.text(290, 150, leaderboardTxt, {font: '17px Courier', fill: '#fff'}); 

                                            if(!window.game.global.isCheckScroeMode){
                                                    youAreOnPlaceTxt = window.game.add.text(340, 120, 'Your place: ' + userPlace, {font: '17px Courier', fill: '#fff'});
                                                    youAreOnPlaceTxt.fontWeight = 'bold';
                                            }

                                            let modeText = "";
                                            if(window.game.global.isHardMode){
                                                modeText = "(Hard Mode)";
                                            } else {
                                                modeText = "(Easy Mode)";
                                            }

                                            let top6Txt = window.game.add.text(140, 180, '  THE\nTOP 6 -> \n', {font: '25px Courier', fill: '#fff'});
                                            top6Txt.fontWeight = 'bold';
                                            let top6ModeTxt = window.game.add.text(140, 240,  modeText, {font: '18px Courier', fill: '#fff'});

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
                 
                } });
        }, 200);
    }


    restartGame(){
        game.global.gameLevel = 0;
        game.state.start('menu');
    }

    getHardModeJumpLimit(){
        return 999999;
    }

    isScoreLvl(){
        return true;
    }

}
