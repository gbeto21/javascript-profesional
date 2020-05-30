function MediaPlayer(config) {
    this.media = config.el
}

MediaPlayer.prototype.play = function () {
    this.media.paused ? this.media.play() : this.media.pause()
}

export default MediaPlayer