/**
 * 画面内を画像が跳ね返る
 */

var ballCount = 0;
var clickCount = 0;
var ballsArray = new Array(10);
var displayWidth;
var displayHeight;
var imgWidth = 80;
var imgHeight = 80;
var radius = 45;

window_load();

window.onresize = window_load;

function window_load() {
	this.displayWidth = document.documentElement.clientWidth;
	this.displayHeight = document.documentElement.clientHeight;
}

function Ball(x, y, speedRate) {
	this.id = ballCount;
	this.pX = x - imgWidth / 2;
	this.pY = y - imgHeight / 2;

	var speedX = Math.random() - 0.5;
	var speedY = Math.random() - 0.5;
	var base = Math.sqrt(Math.pow(speedX, 2) + Math.pow(speedY, 2)) * 0.8;

	this.dX = speedX * speedRate / base;
	this.dY = speedY * speedRate / base;

	// 衝突チェック用
	this.upY = y;
	this.downY = y + 112;
	this.leftX = x;
	this.rightX = x + imgWidth;

	this.nextpX = this.pX + this.dX;
	this.nextpY = this.pY + this.dY;
	this.nextUp = this.upY + this.dY;
	this.nextDown = this.downY - this.dY;
	this.nextLeft = this.leftX + this.dX;
	this.nextRight = this.rightX - this.dX;
	
	console.log(this);

	if (this.pX < 0) {
		this.pX = 0;
	}

	if (this.pX > displayWidth - imgWidth / 2) {
		this.pX = displayWidth - imgWidth / 2;
	}

	if (this.pY < 0) {
		this.pY = 0;
	}

	if (this.pY > displayHeight - imgHeight / 2) {
		this.pY = displayHeight - imgHeight / 2;
	}
}

Ball.prototype = {
		
	display : function() {
		var newBall = document.createElement("img");
		newBall.src = "./img/image002.png";
		newBall.style = "position:absolute;top:" + this.pY + "px;left:"
				+ this.pX + "px;";
		newBall.width = imgWidth;
		newBall.height = imgHeight;
		newBall.id = this.id;
		document.body.appendChild(newBall);
	},

	move : function() {
		var oldBall = document.getElementById(this.id);

		if (oldBall !== null) {

			// 外枠衝突判定

			if (this.pY < 0 && this.nextUp < 0 && this.dY <= 0) {
				this.dY = (-1) * this.dY;
				// this.showInfo();
			}

			if (this.pY > displayHeight - imgHeight
					&& this.nextDown > displayHeight - 112 && this.dY >= 0) {
				this.dY = (-1) * this.dY;
				// this.showInfo();
			}

			if (this.pX < 0 && this.nextLeft < 0 && this.dX <= 0) {
				this.dX = (-1) * this.dX;
				// this.showInfo();
			}

			if (this.pX > displayWidth - imgWidth
					&& this.nextRight > displayWidth - 88 && this.dX >= 0) {
				this.dX = (-1) * this.dX;
				// this.showInfo();
			}

			// ボール衝突判定
			var that = this;
			ballsArray.forEach(function(element) {
				that.collision(element);
			});

			this.update();

			oldBall.style.top = this.pY + "px";
			oldBall.style.left = this.pX + "px";
		}
	},
	
	update : function() {
		this.upY = this.pY - imgHeight / 2;
		this.downY = this.pY + imgHeight / 2;
		this.leftX = this.pX - imgWidth / 2;
		this.rightX = this.pX + imgWidth / 2;

		this.nextpX = this.pX + this.dX;
		this.nextpY = this.pY + this.dY;
		this.nextUp = this.upY + this.dY;
		this.nextDown = this.downY - this.dY;
		this.nextLeft = this.leftX + this.dX;
		this.nextRight = this.rightX - this.dX;

		this.pX = this.pX + this.dX;
		this.pY = this.pY + this.dY;
	},
	
	showInfo : function() {
		console.log("id:" + this.id);
		console.log("pX:" + this.pX + " pY:" + this.pY);
		console.log("dX:" + this.dX + " dY:" + this.dY);
		console.log("upY:" + this.upY + " downY:" + this.downY);
		console.log("leftX:" + this.leftX + " rightX:" + this.rightX);
		console.log("nextUp:" + this.nextUp + " nextDown:" + this.nextDown);
		console.log("nextLeft:" + this.nextLeft + " nextRight:" + this.nextRight);
	},
	
	collision : function(otherBall) {
		var diffX = otherBall.nextpX - this.nextpX;
		var diffY = otherBall.nextpY - this.nextpY;
		var dist = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));

		if (dist < radius) {
			var radian = Math.atan2(diffY, diffX);
			var sin = Math.sin(radian);
			var cos = Math.cos(radian);

			var resultDX = this.dX * cos + this.dY * sin;
			var resultDY = this.dY * cos - this.dX * sin;

			this.dX = resultDX;
			this.dY = resultDY;
		}
	}

};

function SuperBall(x, y) {
	Ball.apply(this, arguments);
	console.log(x + " " + y);
}
SuperBall.prototype = new Ball;

function generateBall() {

	for (var i = 0; i < 3; i++) {
		ballsArray[ballCount] = new Ball(100, 100 + 100 * i, 1);
		ballsArray[ballCount].display();
		ballCount++;
	}

	for (var i = 0; i < 3; i++) {
		ballsArray[ballCount] = new SuperBall(200, 100 + 100 * i, 2);
		ballsArray[ballCount].display();
		ballCount++;
	}

}

// window.onclick = generateBall;
window.onload = generateBall;

setInterval(function() {
	ballsArray.forEach(function(element) {
		element.move();
	});
}, 5);
