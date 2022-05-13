class App {
  constructor() {
    // 캔버스 생성 후 랜더링
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);

    // context 생성
    this.ctx = this.canvas.getContext('2d');
    // 레티나 디스플레이에서도 제대로 보이기 위해
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    window.addEventListener('resize', this.resize.bind(this), false);
  	this.resize();
  }

  resize() {
    ...
  }
}

window.onload = () => {
  new App();
};// JavaScript Document