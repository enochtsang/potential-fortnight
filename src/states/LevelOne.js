/* globals ButtonGroup, WorldMap */
var LevelOne = function () {
  this.baseBtns = null;
  this.map = null;
  this.returnBtn = {name: 'Return to Map',
                    x: game.world.width + 10,
                    y: 10,
                    anchor: [0, 0],
                    callback: this.toggleView};
};

LevelOne.prototype = {

  preload: function() {
    game.stage.backgroundColor = '#444444';
  },

  // TODO : This needs to be re-written to not destroy the buttons evertime
  updateButtons: function(sector) {
    for (var i = 0; i < this.baseBtns.length; i++) {
      if (this.baseBtns.getChildAt(i) != this.map) {
        this.baseBtns.getChildAt(i).destroy();
      }
    }
    this.baseBtns = new ButtonGroup(this, 0, 0, sector.buttons);
    this.baseBtns.makeButton(this, this.returnBtn);
    this.baseBtns.add(this.map);
  },

  toggleView: function() {
    var groupPos = this.baseBtns.x === 0 ? -game.world.width : 0;

    game.add.tween(this.baseBtns).to({x: groupPos}, 700, Phaser.Easing.Quadratic.In, true);
  },

  create: function() {
    this.map = new WorldMap(game.world.centerX, game.world.centerY, this);

    this.baseBtns = new ButtonGroup(this, 0, 0, [this.returnBtn]);
    this.baseBtns.add(this.map);
  },

  update: function() {

  },

  render: function() {

  }
};
