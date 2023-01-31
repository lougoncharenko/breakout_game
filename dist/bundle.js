/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/Ball.js":
/*!*****************************!*\
  !*** ./src/classes/Ball.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite.js */ \"./src/classes/Sprite.js\");\n/* eslint-disable import/extensions */\n\n\nclass Ball extends _Sprite_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(x = 0, y = 0, radius = 10, color = '#0095DD') {\n    super(x, y, 0, 0, color);\n    this.radius = radius;\n    this.dx = 2;\n    this.dy = -2;\n  }\n\n  move(x, y) {\n    this.x = x;\n    this.y = y;\n    this.x += this.dx;\n    this.y += this.dy;\n    return [this.x, this.y];\n  }\n\n  draw(ctx) { // Overrides the existing render method!\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n    ctx.closePath();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ball);\n\n\n//# sourceURL=webpack://breakout_game/./src/classes/Ball.js?");

/***/ }),

/***/ "./src/classes/Brick.js":
/*!******************************!*\
  !*** ./src/classes/Brick.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite.js */ \"./src/classes/Sprite.js\");\n/* eslint-disable import/extensions */\n\n\nclass Brick extends _Sprite_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(x, y, width = 75, height = 20, color = '#0095DD') {\n    super(x, y, width, height, color); // pass arguments to Sprite!\n    this.status = 1; // adds a new property\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Brick);\n\n\n//# sourceURL=webpack://breakout_game/./src/classes/Brick.js?");

/***/ }),

/***/ "./src/classes/Brickfield.js":
/*!***********************************!*\
  !*** ./src/classes/Brickfield.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Brick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brick.js */ \"./src/classes/Brick.js\");\n/* eslint-disable import/extensions */\n/* eslint-disable no-plusplus */\n\n\nclass Brickfield {\n  constructor(\n    brickRowCount = 3,\n    brickColumnCount = 5,\n    brickPadding = 10,\n    brickOffsetTop = 30,\n    brickOffsetLeft = 30,\n  ) {\n    this.brickRowCount = brickRowCount;\n    this.brickColumnCount = brickColumnCount;\n    this.brickPadding = brickPadding;\n    this.brickOffsetTop = brickOffsetTop;\n    this.brickOffsetLeft = brickOffsetLeft;\n    this.brickWidth = 75;\n    this.brickHeight = 20;\n    this.bricks = this.initializeBricks();\n  }\n\n  initializeBricks() {\n    const bricks = [];\n    for (let c = 0; c < this.brickColumnCount; c++) {\n      bricks[c] = [];\n      for (let r = 0; r < this.brickRowCount; r++) {\n        bricks[c][r] = new _Brick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        if (bricks[c][r].status === 1) {\n          const brickX = (c * (this.brickWidth + this.brickPadding)) + this.brickOffsetLeft;\n          const brickY = (r * (this.brickHeight + this.brickPadding)) + this.brickOffsetTop;\n          bricks[c][r] = new _Brick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](brickX, brickY);\n        }\n      }\n    }\n    return bricks;\n  }\n\n  drawBrickField(ctx) {\n    for (let c = 0; c < this.brickColumnCount; c++) {\n      for (let r = 0; r < this.brickRowCount; r++) {\n        if (this.bricks[c][r].status === 1) {\n          ctx.beginPath();\n          ctx.rect(\n            this.bricks[c][r].x,\n            this.bricks[c][r].y,\n            this.bricks[c][r].width,\n            this.bricks[c][r].height,\n          );\n          ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';\n          ctx.fill();\n          ctx.closePath();\n        }\n      }\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Brickfield);\n\n\n//# sourceURL=webpack://breakout_game/./src/classes/Brickfield.js?");

/***/ }),

/***/ "./src/classes/Paddle.js":
/*!*******************************!*\
  !*** ./src/classes/Paddle.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite.js */ \"./src/classes/Sprite.js\");\n/* eslint-disable import/extensions */\n\n\nclass Paddle extends _Sprite_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(paddleX, x = 0, y = 0, paddleHeight = 10, paddleWidth = 75, color = '#0095DD') {\n    super(x, y, 0, 0, color);\n    this.paddleHeight = paddleHeight;\n    this.paddleWidth = paddleWidth;\n    this.rightPressed = null;\n    this.leftPressed = null;\n    this.paddleX = paddleX;\n  }\n\n  keyDownHandler(e) {\n    // console.log(e)\n    if (e.key === 'Right' || e.key === 'ArrowRight') {\n      this.rightPressed = true;\n    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {\n      this.leftPressed = true;\n    }\n  }\n\n  keyUpHandler(e) {\n    if (e.key === 'Right' || e.key === 'ArrowRight') {\n      this.rightPressed = false;\n    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {\n      this.leftPressed = false;\n    }\n  }\n\n  mouseMoveHandler(e, CanvasOffSetLeft, CanvasWidth) {\n    const relativeX = e.clientX - CanvasOffSetLeft;\n    if (relativeX > 0 && relativeX < CanvasWidth) {\n      this.paddleX = relativeX - this.paddleWidth / 2;\n    }\n  }\n\n  move(canvasWidth) {\n    if (this.rightPressed) {\n      this.paddleX = Math.min(this.paddleX + 7, canvasWidth - this.paddleWidth);\n    } else if (this.leftPressed) {\n      this.paddleX = Math.max(this.paddleX - 7, 0);\n    }\n    return this.paddleX;\n  }\n\n  draw(ctx, canvasHeight, paddleX) {\n    ctx.beginPath();\n    ctx.rect(paddleX, canvasHeight - this.paddleHeight, this.paddleWidth, this.paddleHeight);\n    ctx.fillStyle = '#0095DD';\n    ctx.fill();\n    ctx.closePath();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paddle);\n\n\n//# sourceURL=webpack://breakout_game/./src/classes/Paddle.js?");

/***/ }),

/***/ "./src/classes/Sprite.js":
/*!*******************************!*\
  !*** ./src/classes/Sprite.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Sprite {\n  constructor(x = 0, y = 0, width = 100, height = 100, color = '#f00') {\n    this.x = x;\n    this.y = y;\n    this.width = width;\n    this.height = height;\n    this.color = color;\n  }\n\n  render(ctx) {\n    ctx.beginPath();\n    ctx.rect(this.x, this.y, this.width, this.height);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n    ctx.closePath();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sprite);\n\n\n//# sourceURL=webpack://breakout_game/./src/classes/Sprite.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Brickfield_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Brickfield.js */ \"./src/classes/Brickfield.js\");\n/* harmony import */ var _classes_Ball_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Ball.js */ \"./src/classes/Ball.js\");\n/* harmony import */ var _classes_Paddle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Paddle.js */ \"./src/classes/Paddle.js\");\n/* eslint-disable import/extensions */\n/* eslint-disable no-plusplus */\n\n\n\n\n// DOM variables\nconst canvas = document.getElementById('myCanvas');\nconst ctx = canvas.getContext('2d');\nconst scoreBoard = document.getElementById('scoreboard');\nconst startButton = document.getElementById('startbutton');\nconst pauseButton = document.getElementById('pausebutton');\n// Variables\nlet score = 0;\nlet x = canvas.width / 2;\nlet y = canvas.height - 30;\nconst ballRadius = 10;\nlet paddleX = (canvas.width - 75) / 2;\n// Instantiations\nconst brickfield = new _classes_Brickfield_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst ball = new _classes_Ball_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst paddle = new _classes_Paddle_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](paddleX);\n\n// functions\nfunction keyDownHandler(e) {\n  paddle.keyDownHandler(e);\n}\nfunction keyUpHandler(e) {\n  paddle.keyUpHandler(e);\n}\nfunction mouseMoveHandler(e) {\n  paddle.mouseMoveHandler(e, canvas.offsetLeft, canvas.width);\n}\nfunction drawBricks() {\n  brickfield.drawBrickField(ctx);\n}\nfunction drawPaddle() {\n  paddle.draw(ctx, canvas.height, paddleX);\n}\nfunction drawBall() {\n  ball.draw(ctx, x, y);\n}\nfunction moveBall() {\n  const cordinates = ball.move(x, y);\n  x = cordinates[0];\n  y = cordinates[1];\n  if (x + ball.dx > canvas.width - ballRadius || x + ball.dx < ballRadius) {\n    ball.dx = -ball.dx;\n  }\n  if (y + ball.dy < ballRadius) {\n    ball.dy = -ball.dy;\n  } else if (y + ball.dy > canvas.height - ballRadius) {\n    if (x > paddleX && x < paddleX + 75) {\n      ball.dy = -ball.dy;\n    } else {\n      scoreBoard.innerHTML = `Game Over! Score: ${score}`;\n      document.location.reload();\n    }\n  }\n}\nfunction movePaddle() {\n  paddleX = paddle.move(canvas.width);\n  return paddleX;\n}\nfunction collisionDetection() {\n  for (let c = 0; c < brickfield.brickColumnCount; c += 1) {\n    for (let r = 0; r < brickfield.brickRowCount; r += 1) {\n      const brick = brickfield.bricks[c][r];\n      if (brick.status === 1) {\n        if (\n          ball.x > brick.x\n          && ball.x < brick.x + brick.width\n          && ball.y > brick.y\n          && ball.y < brick.y + brick.height\n        ) {\n          ball.dy = -ball.dy;\n          brick.status = 0;\n          score += 1;\n          if (score === brickfield.brickColumnCount * brickfield.brickRowCount) {\n            scoreBoard.innerText = `Congratulations! You win! Score: ${score}`;\n            document.location.reload();\n          }\n        }\n      }\n    }\n  }\n}\nfunction calculateScore() {\n  scoreBoard.innerText = `Score: ${score}`;\n}\nfunction playGame() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  drawBricks();\n  drawBall();\n  drawPaddle();\n  calculateScore();\n  collisionDetection();\n  moveBall();\n  movePaddle();\n}\nlet isPaused = false;\nconst interval = setInterval(() => {\n  if (!isPaused) {\n    playGame();\n  }\n}, 10);\nfunction startGame() {\n  isPaused = false;\n}\n\nfunction pauseGame() {\n  isPaused = true;\n}\n// event listeners\ndocument.addEventListener('keydown', keyDownHandler, false);\ndocument.addEventListener('keyup', keyUpHandler, false);\ndocument.addEventListener('mousemove', mouseMoveHandler, false);\nstartButton.addEventListener('click', startGame);\npauseButton.addEventListener('click', pauseGame);\n\n\n//# sourceURL=webpack://breakout_game/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;