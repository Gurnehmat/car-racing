class Player {

  constructor(){
    this.index=null;
    this.distance=0;
    this.name=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",()=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
    });
  }
  static GetPlayerinfo(){
    var getPlayerinfo = database.ref('players')
    getPlayerinfo.on("value",()=>{
      allPlayers = data.val;
    })
  }
}
