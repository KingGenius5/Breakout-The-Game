/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ball.js":
/*!*********************!*\
  !*** ./src/ball.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\nclass Ball {\n    constructor(\n      x = 0,\n      y = 0,\n      dx = 2,\n      dy = -1,\n      radius = ballRadius,\n      color = _constants__WEBPACK_IMPORTED_MODULE_0__[\"objectColor\"],\n    ) {\n      this.x = x;\n      this.y = y;\n      this.dx = dx;\n      this.dy = dy;\n      this.radius = radius;\n      this.color = color;\n    }\n    move() {\n      this.x += this.dx;\n      this.y += this.dy;\n    }\n    render(ctx) {\n      ctx.beginPath();\n      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n      ctx.fillStyle = this.color;\n      ctx.fill();\n      ctx.closePath();\n    }\n  }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ball);\n\n//# sourceURL=webpack:///./src/ball.js?");

/***/ }),

/***/ "./src/brick.js":
/*!**********************!*\
  !*** ./src/brick.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\nconst brickWidth = 75;\nconst brickHeight = 30;\n\nclass Brick {\n    constructor(\n      x,\n      y,\n      color = _constants__WEBPACK_IMPORTED_MODULE_0__[\"objectColor\"],\n      width = brickWidth,\n      height = brickHeight,\n    ) {\n      this.x = x;\n      this.y = y;\n      this.status = 1;\n      this.color = color;\n      this.width = width;\n      this.height = height;\n    }\n    render(ctx) {\n      ctx.beginPath();\n      ctx.rect(this.x, this.y, this.width, this.height);\n      ctx.fillStyle = this.color;\n      ctx.fill();\n      ctx.closePath();\n    }\n  }\n  \n/* harmony default export */ __webpack_exports__[\"default\"] = (Brick);\n\n//# sourceURL=webpack:///./src/brick.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: objectColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"objectColor\", function() { return objectColor; });\nconst objectColor = '#0095DD';\n\n\n\n\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ball */ \"./src/ball.js\");\n/* harmony import */ var _brick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brick */ \"./src/brick.js\");\n/* ***************************************************************\n\nChallenge 1 - Make Constants\n* Make these into constants defined at the top.\n\nChallenge 2 - Identify duplicate code\n** This block of code is repeated better to make a function for this.\n\nChallenge 3 - Use Subroutines\n*** This block of code would be better as a function.\n\nChallenge 4 - Encapsulating code\n**** Use objects to encapsulate code\n\n***************************************************************** */\n\n// **************************************************************\n// DOM references\n// **************************************************************\n/* eslint-disable lines-between-class-members */\n/* eslint-disable max-classes-per-file */\n\n\n\n\nconst canvas = document.getElementById('myCanvas');\nconst ctx = canvas.getContext('2d');\n\nconst ballRadius = 10;\nconst paddleHeight = 10;\nconst paddleWidth = 75;\nconst brickRowCount = 3;\nconst brickColumnCount = 5;\nconst brickWidth = 75;\nconst brickHeight = 20;\nconst brickPadding = 10;\nconst brickOffsetTop = 30;\nconst brickOffsetLeft = 30;\nconst canvasWidth = canvas.width;\nconst canvasHeight = canvas.height;\nconst paddleXStart = (canvasWidth - paddleWidth) / 2;\nconst PI2 = Math.PI * 2;\nconst gameOverMessage = 'Game Over';\nconst gameWonMessage = 'YOU WIN, CONGRATULATIONS!';\nconst fontDefault = '16px Arial';\n\n// **************************************************************\n// Classes\n// **************************************************************\n\nclass Bricks {\n  constructor(rows = brickRowCount, columns = brickColumnCount) {\n    this.rows = rows;\n    this.columns = columns;\n    this.bricks = [];\n    this.init();\n  }\n  init() {\n    for (let c = 0; c < this.columns; c += 1) {\n      this.bricks[c] = [];\n      for (let r = 0; r < this.rows; r += 1) {\n        const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;\n        const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;\n        this.bricks[c][r] = new _brick__WEBPACK_IMPORTED_MODULE_1__[\"default\"](brickX, brickY);\n      }\n    }\n  }\n  getBrick(c, r) {\n      return this.bricks[c][r];\n  }\n  render(ctx) {\n    for (let c = 0; c < this.columns; c += 1) {\n      for (let r = 0; r < this.rows; r += 1) {\n        if (this.bricks[c][r].status === 1) {\n          this.bricks[c][r].render(ctx);\n        }\n      }\n    }\n  }\n}\n\nconst bricks = new Bricks();\n\nclass Paddle {\n  constructor(x = 0, color = objectColor, width = paddleWidth, height = paddleHeight) {\n    this.x = x;\n    this.height = height;\n    this.y = canvasHeight - this.height;\n    this.color = color;\n    this.width = width;\n  }\n  move() {\n    // Check for arrow keys\n    if (rightPressed && paddle.x < canvasWidth - this.width) {\n        paddle.x += 7;\n    } else if (leftPressed && paddle.x > 0) {\n        paddle.x -= 7;\n    }\n  }\n  render(ctx) {\n    ctx.beginPath();\n    ctx.rect(this.x, this.y, this.width, this.height);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n    ctx.closePath();\n  }\n}\n\nclass Background {\n  constructor(color) {\n    this.color = color;\n  }\n  render(ctx) {}\n}\n\nclass Score {\n  constructor(x, y, color = objectColor, score = 0, font = fontDefault) {\n    this.x = x;\n    this.y = y;\n    this.color = color;\n    this.score = score;\n    this.font = font;\n  }\n  render(ctx) {\n    ctx.font = this.font;\n    ctx.fillStyle = this.color;\n    ctx.fillText(`Score: ${this.score}`, 8, 20);\n  }\n  update(score) {}\n  reset() {}\n}\n\nclass Lives {\n  constructor(x, y, font = fontDefault, color = objectColor, lives = 3) {\n    this.x = x;\n    this.y = y;\n    this.font = font;\n    this.color = color;\n    this.lives = lives;\n  }\n  render(ctx) {\n    ctx.font = this.font;\n    ctx.fillStyle = this.color;\n    ctx.fillText(`Lives: ${this.lives}`, canvasWidth - 65, 20);\n  }\n  loseLife() {}\n  reset() {}\n}\n//   draw(canvasContext) {\n//     canvasContext.beginPath();\n//     canvasContext.arc(this.x, this.y, this.radius, 0, PI2);\n//     canvasContext.fillStyle = objectColor;\n//     canvasContext.fill();\n//     canvasContext.closePath();\n//   },\n// };\n\n// --------------------------------------------------------------\n// Variables\n// --------------------------------------------------------------\n\n// Initilize intances\nconst ball = new _ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst paddle = new Paddle(paddleXStart);\nlet score = new Score();\nlet lives = new Lives();\n\nresetBallAndPaddle();\n\nlet rightPressed = false;\nlet leftPressed = false;\n\n// **************************************************************\n// Functions\n// **************************************************************\n\nfunction collisionDetection() {\n  for (let c = 0; c < bricks.columns; c += 1) {\n    for (let r = 0; r < bricks.rows; r += 1) {\n      const brick = bricks.getBrick(c, r);\n      if (brick.status === 1) {\n        if (\n          ball.x > brick.x &&\n          ball.x < brick.x + brick.width &&\n          ball.y > brick.y &&\n          ball.y < brick.y + brick.height\n        ) {\n          ball.dy = -ball.dy;\n          brick.status = 0;\n          score.score += 1;\n          if (score === brickRowCount * brickColumnCount) {\n            // eslint-disable-next-line no-alert\n            alert(gameWonMessage);\n            document.location.reload();\n          }\n        }\n      }\n    }\n  }\n}\n\nfunction resetBallAndPaddle() {\n  ball.x = canvasWidth / 2;\n  ball.y = canvasHeight - 30;\n  ball.dx = 2;\n  ball.dy = -2;\n  paddle.x = paddleXStart;\n}\n\nfunction movePaddle() {\n  // Check for arrow keys\n  if (rightPressed && paddle.x < canvasWidth - paddle.width) {\n    paddle.x += 7;\n  } else if (leftPressed && paddle.x > 0) {\n    paddle.x -= 7;\n  }\n}\n\nfunction collisionsWithCanvasAndPaddle() {\n  // Bounce the ball off the left and right of the canvas\n  if (\n    ball.x + ball.dx > canvasWidth - ball.radius ||\n    ball.x + ball.dx < ball.radius\n  ) {\n    ball.dx = -ball.dx;\n  }\n\n  // Bounce the ball off the top, paddle, or hit the bottom of the canvas\n  if (ball.y + ball.dy < ball.radius) {\n    // hit the top\n    ball.dy = -ball.dy;\n  } else if (ball.y + ball.dy > canvasHeight - ball.radius) {\n    // hit the bottom\n    if (ball.x > paddle.x && ball.x < paddle.x + paddleWidth) {\n      // Hit the paddle\n      ball.dy = -ball.dy;\n    } else {\n      // Lose a life\n      lives.lives -= 1;\n      if (!lives.lives) {\n        // Game Over\n        // eslint-disable-next-line no-alert\n        alert(gameOverMessage);\n        ball.x = 200;\n        ball.y = 200;\n        document.location.reload();\n      } else {\n        // Start the over you hit the bottom\n        resetBallAndPaddle();\n      }\n    }\n  }\n}\n\n// --------------------------------------------------------------\n// Game Loop\n// --------------------------------------------------------------\n\nfunction draw() {\n  // Clear the canvas\n  ctx.clearRect(0, 0, canvasWidth, canvasHeight);\n  // Call helper functions\n  bricks.render(ctx);\n  ball.render(ctx);\n  paddle.render(ctx);\n  score.render(ctx);\n  lives.render(ctx);\n  collisionDetection();\n  ball.move();\n  movePaddle();\n  collisionsWithCanvasAndPaddle();\n\n  // Draw the screen again\n  requestAnimationFrame(draw);\n}\n\n// --------------------------------------------------------------\n// Event Listeners\n// --------------------------------------------------------------\n\nfunction keyDownHandler(e) {\n  if (e.keyCode === 39) {\n    rightPressed = true;\n  } else if (e.keyCode === 37) {\n    leftPressed = true;\n  }\n}\n\nfunction keyUpHandler(e) {\n  if (e.keyCode === 39) {\n    rightPressed = false;\n  } else if (e.keyCode === 37) {\n    leftPressed = false;\n  }\n}\n\nfunction mouseMoveHandler(e) {\n  const relativeX = e.clientX - canvas.offsetLeft;\n  if (relativeX > 0 && relativeX < canvasWidth) {\n    paddle.x = relativeX - paddleWidth / 2;\n  }\n}\n\n// **************************************************************\n// Register Events\n// **************************************************************\n\ndocument.addEventListener('keydown', keyDownHandler, false);\ndocument.addEventListener('keyup', keyUpHandler, false);\ndocument.addEventListener('mousemove', mouseMoveHandler, false);\n\n// **************************************************************\n// Starts program entry point\n// **************************************************************\n\ndraw();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });