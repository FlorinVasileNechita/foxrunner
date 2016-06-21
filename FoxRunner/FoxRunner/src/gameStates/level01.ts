module FoxRunner.Client {

    export class Level01 extends Phaser.State {

        background: Phaser.Sprite;
        moneybag: Phaser.Sprite;
        music: Phaser.Sound;
        player: Player;

        create() {
            this.physics.startSystem(Phaser.Physics.ARCADE);

            this.background = this.add.sprite(0, 0, 'level01-sprites', 'background');
            this.moneybag = this.add.sprite(20, 30, 'moneyBag');
            this.moneybag.animations.add('flap', [0, 1, 2, 3], 5, true);
            this.moneybag.animations.play('flap');
            this.player = new Player(this.game, this.world.centerX, this.world.centerX);
            this.player.anchor.setTo(0, 5);

            this.game.debug.text("Use Right and Left arrow keys to move the bat", 0, this.world.height, "red");
        }

    }

}