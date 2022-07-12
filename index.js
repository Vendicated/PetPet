/**
 * @name PetPet
 * @version 1.0.0
 * @main index.js
 * @description Pet your friends! ~ A pet gif maker
 * @license Apache-2.0
 * @source https://github.com/Vendicated/PetPet/tree/main
 * @updateUrl https://bruh/moment
 * @author Vendicated
 */
(()=>{let hasModule;try {module; hasModule = true;}catch(e) {hasModule = false;}var plugin;

(() => {
	var __webpack_modules__ = {
		718: (module, __webpack_exports__, __webpack_require__) => {
			"use strict";
			__webpack_require__.d(__webpack_exports__, {
				Z: () => __WEBPACK_DEFAULT_EXPORT__
			});
			var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283);
			var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
			var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(763);
			var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
			var ___CSS_LOADER_EXPORT___ = _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default());
			___CSS_LOADER_EXPORT___.push([ module.id, ".PetPet-Category-category {\n    margin-bottom: 20px;\n}\n\n.PetPet-Category-category-header {\n    display: flex;\n    flex-direction: row;\n    cursor: pointer;\n    margin-bottom: 20px;\n}\n\n.PetPet-Category-category-header-details{\n    flex: 1;\n    display: flex;\n    align-items: center;\n}\n\n.PetPet-Category-category-header-title {\n    font-size: 1.5em;\n    font-weight: bold;\n}\n\n.PetPet-Category-category-header-icon-wrapper{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 48px;\n    height: 48px;\n}\n\n.PetPet-Category-category-header-icon{\n    width: 24px;\n    height: 24px;\n    color: var(--interactive-active);\n}\n\n.PetPet-Category-category-header-icon.PetPet-Category-opened{\n    transform: rotate(-90deg);\n}\n\n.PetPet-Category-category-content {\n    margin-left: 14px;\n    padding-left: 20px;\n}", "", {
				version: 3,
				sources: [ "webpack://./node_modules/.pnpm/ittai@1.0.7/node_modules/ittai/components/Category.css" ],
				names: [],
				mappings: "AAAA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,OAAO;IACP,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gCAAgC;AACpC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB",
				sourcesContent: [ ".category {\n    margin-bottom: 20px;\n}\n\n.category-header {\n    display: flex;\n    flex-direction: row;\n    cursor: pointer;\n    margin-bottom: 20px;\n}\n\n.category-header-details{\n    flex: 1;\n    display: flex;\n    align-items: center;\n}\n\n.category-header-title {\n    font-size: 1.5em;\n    font-weight: bold;\n}\n\n.category-header-icon-wrapper{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 48px;\n    height: 48px;\n}\n\n.category-header-icon{\n    width: 24px;\n    height: 24px;\n    color: var(--interactive-active);\n}\n\n.category-header-icon.opened{\n    transform: rotate(-90deg);\n}\n\n.category-content {\n    margin-left: 14px;\n    padding-left: 20px;\n}" ],
				sourceRoot: ""
			} ]);
			___CSS_LOADER_EXPORT___.locals = {
				category: "PetPet-Category-category",
				"category-header": "PetPet-Category-category-header",
				"category-header-details": "PetPet-Category-category-header-details",
				"category-header-title": "PetPet-Category-category-header-title",
				"category-header-icon-wrapper": "PetPet-Category-category-header-icon-wrapper",
				"category-header-icon": "PetPet-Category-category-header-icon",
				opened: "PetPet-Category-opened",
				"category-content": "PetPet-Category-category-content"
			};
			const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
		},
		111: (module, __webpack_exports__, __webpack_require__) => {
			"use strict";
			__webpack_require__.d(__webpack_exports__, {
				Z: () => __WEBPACK_DEFAULT_EXPORT__
			});
			var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283);
			var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
			var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(763);
			var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
			var ___CSS_LOADER_EXPORT___ = _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default());
			___CSS_LOADER_EXPORT___.push([ module.id, ".PetPet-ToastWrapper-toast {\n    background: var(--background-secondary-alt);\n    border-radius: 8px;\n    padding: 12px;\n    color: var(--header-primary);\n    font-weight: 600;\n}", "", {
				version: 3,
				sources: [ "webpack://./node_modules/.pnpm/ittai@1.0.7/node_modules/ittai/toast/ToastWrapper.css" ],
				names: [],
				mappings: "AAAA;IACI,2CAA2C;IAC3C,kBAAkB;IAClB,aAAa;IACb,4BAA4B;IAC5B,gBAAgB;AACpB",
				sourcesContent: [ ".toast {\n    background: var(--background-secondary-alt);\n    border-radius: 8px;\n    padding: 12px;\n    color: var(--header-primary);\n    font-weight: 600;\n}" ],
				sourceRoot: ""
			} ]);
			___CSS_LOADER_EXPORT___.locals = {
				toast: "PetPet-ToastWrapper-toast"
			};
			const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
		},
		475: (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";
			var isOldIE = function() {
				var memo;
				return function() {
					"undefined" == typeof memo && (memo = Boolean(window && document && document.all && !window.atob));
					return memo;
				};
			}();
			var getTarget = function() {
				var memo = {};
				return function(target) {
					if ("undefined" == typeof memo[target]) {
						var styleTarget = document.querySelector(target);
						if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) try {
							styleTarget = styleTarget.contentDocument.head;
						} catch (e) {
							styleTarget = null;
						}
						memo[target] = styleTarget;
					}
					return memo[target];
				};
			}();
			var stylesInDom = [];
			function getIndexByIdentifier(identifier) {
				for (var result = -1, i = 0; i < stylesInDom.length; i++) if (stylesInDom[i].identifier === identifier) {
					result = i;
					break;
				}
				return result;
			}
			function modulesToDom(list, options) {
				for (var idCountMap = {}, identifiers = [], i = 0; i < list.length; i++) {
					var item = list[i], id = options.base ? item[0] + options.base : item[0], count = idCountMap[id] || 0, identifier = "".concat(id, " ").concat(count), index = (idCountMap[id] = count + 1, 
					getIndexByIdentifier(identifier)), obj = {
						css: item[1],
						media: item[2],
						sourceMap: item[3]
					};
					if (-1 !== index) {
						stylesInDom[index].references++;
						stylesInDom[index].updater(obj);
					} else stylesInDom.push({
						identifier: identifier,
						updater: addStyle(obj, options),
						references: 1
					});
					identifiers.push(identifier);
				}
				return identifiers;
			}
			function insertStyleElement(options) {
				var style = document.createElement("style"), attributes = options.attributes || {};
				if ("undefined" == typeof attributes.nonce) {
					var nonce = true ? __webpack_require__.nc : 0;
					nonce && (attributes.nonce = nonce);
				}
				Object.keys(attributes).forEach(function(key) {
					style.setAttribute(key, attributes[key]);
				});
				if ("function" == typeof options.insert) options.insert(style); else {
					var target = getTarget(options.insert || "head");
					if (!target) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
					target.appendChild(style);
				}
				return style;
			}
			function removeStyleElement(style) {
				if (null === style.parentNode) return false;
				style.parentNode.removeChild(style);
			}
			var replaceText = function() {
				var textStore = [];
				return function(index, replacement) {
					textStore[index] = replacement;
					return textStore.filter(Boolean).join("\n");
				};
			}();
			function applyToSingletonTag(style, index, remove, obj) {
				var css = remove ? "" : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css;
				if (style.styleSheet) style.styleSheet.cssText = replaceText(index, css); else {
					var cssNode = document.createTextNode(css), childNodes = style.childNodes;
					childNodes[index] && style.removeChild(childNodes[index]);
					childNodes.length ? style.insertBefore(cssNode, childNodes[index]) : style.appendChild(cssNode);
				}
			}
			function applyToTag(style, options, obj) {
				var css = obj.css, media = obj.media, sourceMap = obj.sourceMap;
				media ? style.setAttribute("media", media) : style.removeAttribute("media");
				sourceMap && "undefined" != typeof btoa && (css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */"));
				if (style.styleSheet) style.styleSheet.cssText = css; else {
					while (style.firstChild) style.removeChild(style.firstChild);
					style.appendChild(document.createTextNode(css));
				}
			}
			var singleton = null;
			var singletonCounter = 0;
			function addStyle(obj, options) {
				if (options.singleton) var styleIndex = singletonCounter++, style = singleton || (singleton = insertStyleElement(options)), update = applyToSingletonTag.bind(null, style, styleIndex, false), remove = applyToSingletonTag.bind(null, style, styleIndex, true); else {
					style = insertStyleElement(options);
					update = applyToTag.bind(null, style, options);
					remove = function() {
						removeStyleElement(style);
					};
				}
				update(obj);
				return function(newObj) {
					if (newObj) {
						if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
						update(obj = newObj);
					} else remove();
				};
			}
			module.exports = function(list, options) {
				options = options || {};
				options.singleton || "boolean" == typeof options.singleton || (options.singleton = isOldIE());
				list = list || [];
				var lastIdentifiers = modulesToDom(list, options);
				return function(newList) {
					newList = newList || [];
					if ("[object Array]" !== Object.prototype.toString.call(newList)) return;
					for (var i = 0; i < lastIdentifiers.length; i++) {
						var identifier = lastIdentifiers[i], index = getIndexByIdentifier(identifier);
						stylesInDom[index].references--;
					}
					for (var newLastIdentifiers = modulesToDom(newList, options), _i = 0; _i < lastIdentifiers.length; _i++) {
						var _identifier = lastIdentifiers[_i], _index = getIndexByIdentifier(_identifier);
						if (0 === stylesInDom[_index].references) {
							stylesInDom[_index].updater();
							stylesInDom.splice(_index, 1);
						}
					}
					lastIdentifiers = newLastIdentifiers;
				};
			};
		},
		763: module => {
			"use strict";
			module.exports = function(cssWithMappingToString) {
				var list = [];
				list.toString = function() {
					return this.map(function(item) {
						var content = cssWithMappingToString(item);
						if (item[2]) return "@media ".concat(item[2], " {").concat(content, "}");
						return content;
					}).join("");
				};
				list.i = function(modules, mediaQuery, dedupe) {
					"string" == typeof modules && (modules = [ [ null, modules, "" ] ]);
					var alreadyImportedModules = {};
					if (dedupe) for (var i = 0; i < this.length; i++) {
						var id = this[i][0];
						null != id && (alreadyImportedModules[id] = true);
					}
					for (var _i = 0; _i < modules.length; _i++) {
						var item = [].concat(modules[_i]);
						if (dedupe && alreadyImportedModules[item[0]]) continue;
						mediaQuery && (item[2] ? item[2] = "".concat(mediaQuery, " and ").concat(item[2]) : item[2] = mediaQuery);
						list.push(item);
					}
				};
				return list;
			};
		},
		283: module => {
			"use strict";
			function _slicedToArray(arr, i) {
				return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
			}
			function _nonIterableRest() {
				throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
			}
			function _unsupportedIterableToArray(o, minLen) {
				if (!o) return;
				if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
				var n = Object.prototype.toString.call(o).slice(8, -1);
				"Object" === n && o.constructor && (n = o.constructor.name);
				if ("Map" === n || "Set" === n) return Array.from(o);
				if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
			}
			function _arrayLikeToArray(arr, len) {
				(null == len || len > arr.length) && (len = arr.length);
				for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
				return arr2;
			}
			function _iterableToArrayLimit(arr, i) {
				var _i = arr && ("undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]);
				if (null == _i) return;
				var _s, _e, _arr = [], _n = true, _d = false;
				try {
					for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
						_arr.push(_s.value);
						if (i && _arr.length === i) break;
					}
				} catch (err) {
					_d = true;
					_e = err;
				} finally {
					try {
						_n || null == _i["return"] || _i["return"]();
					} finally {
						if (_d) throw _e;
					}
				}
				return _arr;
			}
			function _arrayWithHoles(arr) {
				if (Array.isArray(arr)) return arr;
			}
			module.exports = function(item) {
				var base64, data, sourceMapping, sourceURLs, _item = _slicedToArray(item, 4), content = _item[1], cssMapping = _item[3];
				if (!cssMapping) return content;
				if ("function" == typeof btoa) return base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))), 
				data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64), 
				sourceMapping = "/*# ".concat(data, " */"), sourceURLs = cssMapping.sources.map(function(source) {
					return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
				}), [ content ].concat(sourceURLs).concat([ sourceMapping ]).join("\n");
				return [ content ].join("\n");
			};
		},
		110: (module, __unused_webpack_exports, __webpack_require__) => {
			var stream = __webpack_require__(781);
			var NeuQuant = __webpack_require__(937);
			var LZWEncoder = __webpack_require__(308);
			function ByteArray() {
				this.data = [];
			}
			ByteArray.prototype.getData = function() {
				return Buffer.from(this.data);
			};
			ByteArray.prototype.writeByte = function(val) {
				this.data.push(val);
			};
			ByteArray.prototype.writeUTFBytes = function(string) {
				for (var l = string.length, i = 0; i < l; i++) this.writeByte(string.charCodeAt(i));
			};
			ByteArray.prototype.writeBytes = function(array, offset, length) {
				for (var l = length || array.length, i = offset || 0; i < l; i++) this.writeByte(array[i]);
			};
			function GIFEncoder(width, height) {
				this.width = ~~width;
				this.height = ~~height;
				this.transparent = null;
				this.transIndex = 0;
				this.repeat = -1;
				this.delay = 0;
				this.image = null;
				this.pixels = null;
				this.indexedPixels = null;
				this.colorDepth = null;
				this.colorTab = null;
				this.usedEntry = new Array();
				this.palSize = 7;
				this.dispose = -1;
				this.firstFrame = true;
				this.sample = 10;
				this.started = false;
				this.readStreams = [];
				this.out = new ByteArray();
			}
			GIFEncoder.prototype.createReadStream = function(rs) {
				if (!rs) {
					rs = new stream.Readable();
					rs._read = function() {};
				}
				this.readStreams.push(rs);
				return rs;
			};
			GIFEncoder.prototype.createWriteStream = function(options) {
				var self = this, ws = (options && Object.keys(options).forEach(function(option) {
					var fn = "set" + option[0].toUpperCase() + option.substr(1);
					~[ "setDelay", "setFrameRate", "setDispose", "setRepeat", "setTransparent", "setQuality" ].indexOf(fn) && self[fn].call(self, options[option]);
				}), new stream.Duplex({
					objectMode: true
				}));
				ws._read = function() {};
				this.createReadStream(ws);
				var self = this, end = (ws._write = function(data, enc, next) {
					self.started || self.start();
					self.addFrame(data);
					next();
				}, ws.end);
				ws.end = function() {
					end.apply(ws, [].slice.call(arguments));
					self.finish();
				};
				return ws;
			};
			GIFEncoder.prototype.emit = function() {
				var self = this;
				if (0 === this.readStreams.length) return;
				if (this.out.data.length) {
					this.readStreams.forEach(function(rs) {
						rs.push(Buffer.from(self.out.data));
					});
					this.out.data = [];
				}
			};
			GIFEncoder.prototype.end = function() {
				if (null === this.readStreams.length) return;
				this.emit();
				this.readStreams.forEach(function(rs) {
					rs.push(null);
				});
				this.readStreams = [];
			};
			GIFEncoder.prototype.setDelay = function(milliseconds) {
				this.delay = Math.round(milliseconds / 10);
			};
			GIFEncoder.prototype.setFrameRate = function(fps) {
				this.delay = Math.round(100 / fps);
			};
			GIFEncoder.prototype.setDispose = function(disposalCode) {
				0 <= disposalCode && (this.dispose = disposalCode);
			};
			GIFEncoder.prototype.setRepeat = function(repeat) {
				this.repeat = repeat;
			};
			GIFEncoder.prototype.setTransparent = function(color) {
				this.transparent = color;
			};
			GIFEncoder.prototype.addFrame = function(imageData) {
				imageData && imageData.getImageData ? this.image = imageData.getImageData(0, 0, this.width, this.height).data : this.image = imageData;
				this.getImagePixels();
				this.analyzePixels();
				if (this.firstFrame) {
					this.writeLSD();
					this.writePalette();
					0 <= this.repeat && this.writeNetscapeExt();
				}
				this.writeGraphicCtrlExt();
				this.writeImageDesc();
				this.firstFrame || this.writePalette();
				this.writePixels();
				this.firstFrame = false;
				this.emit();
			};
			GIFEncoder.prototype.finish = function() {
				this.out.writeByte(59);
				this.end();
			};
			GIFEncoder.prototype.setQuality = function(quality) {
				quality < 1 && (quality = 1);
				this.sample = quality;
			};
			GIFEncoder.prototype.start = function() {
				this.out.writeUTFBytes("GIF89a");
				this.started = true;
				this.emit();
			};
			GIFEncoder.prototype.analyzePixels = function() {
				var len = this.pixels.length, nPix = len / 3, imgq = (this.indexedPixels = new Uint8Array(nPix), 
				new NeuQuant(this.pixels, this.sample));
				imgq.buildColormap();
				this.colorTab = imgq.getColormap();
				for (var k = 0, j = 0; j < nPix; j++) {
					var index = imgq.lookupRGB(255 & this.pixels[k++], 255 & this.pixels[k++], 255 & this.pixels[k++]);
					this.usedEntry[index] = true;
					this.indexedPixels[j] = index;
				}
				this.pixels = null;
				this.colorDepth = 8;
				this.palSize = 7;
				if (null !== this.transparent) {
					this.transIndex = this.findClosest(this.transparent);
					for (var pixelIndex = 0; pixelIndex < nPix; pixelIndex++) 0 == this.image[4 * pixelIndex + 3] && (this.indexedPixels[pixelIndex] = this.transIndex);
				}
			};
			GIFEncoder.prototype.findClosest = function(c) {
				if (null === this.colorTab) return -1;
				for (var r = (16711680 & c) >> 16, g = (65280 & c) >> 8, b = 255 & c, minpos = 0, dmin = 256 * 256 * 256, len = this.colorTab.length, i = 0; i < len; ) {
					var index = i / 3, dr = r - (255 & this.colorTab[i++]), dg = g - (255 & this.colorTab[i++]), db = b - (255 & this.colorTab[i++]), d = dr * dr + dg * dg + db * db;
					if (this.usedEntry[index] && d < dmin) {
						dmin = d;
						minpos = index;
					}
				}
				return minpos;
			};
			GIFEncoder.prototype.getImagePixels = function() {
				for (var w = this.width, h = this.height, data = (this.pixels = new Uint8Array(w * h * 3), 
				this.image), count = 0, i = 0; i < h; i++) for (var j = 0; j < w; j++) {
					var b = i * w * 4 + 4 * j;
					this.pixels[count++] = data[b];
					this.pixels[count++] = data[b + 1];
					this.pixels[count++] = data[b + 2];
				}
			};
			GIFEncoder.prototype.writeGraphicCtrlExt = function() {
				this.out.writeByte(33);
				this.out.writeByte(249);
				this.out.writeByte(4);
				var transp, disp;
				if (null === this.transparent) {
					transp = 0;
					disp = 0;
				} else {
					transp = 1;
					disp = 2;
				}
				0 <= this.dispose && (disp = 7 & this.dispose);
				disp <<= 2;
				this.out.writeByte(0 | disp | 0 | transp);
				this.writeShort(this.delay);
				this.out.writeByte(this.transIndex);
				this.out.writeByte(0);
			};
			GIFEncoder.prototype.writeImageDesc = function() {
				this.out.writeByte(44);
				this.writeShort(0);
				this.writeShort(0);
				this.writeShort(this.width);
				this.writeShort(this.height);
				this.firstFrame ? this.out.writeByte(0) : this.out.writeByte(128 | 0 | 0 | 0 | this.palSize);
			};
			GIFEncoder.prototype.writeLSD = function() {
				this.writeShort(this.width);
				this.writeShort(this.height);
				this.out.writeByte(128 | 112 | 0 | this.palSize);
				this.out.writeByte(0);
				this.out.writeByte(0);
			};
			GIFEncoder.prototype.writeNetscapeExt = function() {
				this.out.writeByte(33);
				this.out.writeByte(255);
				this.out.writeByte(11);
				this.out.writeUTFBytes("NETSCAPE2.0");
				this.out.writeByte(3);
				this.out.writeByte(1);
				this.writeShort(this.repeat);
				this.out.writeByte(0);
			};
			GIFEncoder.prototype.writePalette = function() {
				this.out.writeBytes(this.colorTab);
				for (var n = 3 * 256 - this.colorTab.length, i = 0; i < n; i++) this.out.writeByte(0);
			};
			GIFEncoder.prototype.writeShort = function(pValue) {
				this.out.writeByte(255 & pValue);
				this.out.writeByte(pValue >> 8 & 255);
			};
			GIFEncoder.prototype.writePixels = function() {
				var enc = new LZWEncoder(this.width, this.height, this.indexedPixels, this.colorDepth);
				enc.encode(this.out);
			};
			module.exports = GIFEncoder;
		},
		308: module => {
			var EOF = -1;
			var BITS = 12;
			var HSIZE = 5003;
			var masks = [ 0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535 ];
			function LZWEncoder(width, height, pixels, colorDepth) {
				var cur_accum, a_count, maxcode, g_init_bits, ClearCode, EOFCode, initCodeSize = Math.max(2, colorDepth), accum = new Uint8Array(256), htab = new Int32Array(HSIZE), codetab = new Int32Array(HSIZE), cur_bits = 0, free_ent = 0, clear_flg = false;
				function char_out(c, outs) {
					accum[a_count++] = c;
					254 <= a_count && flush_char(outs);
				}
				function cl_block(outs) {
					cl_hash(HSIZE);
					free_ent = ClearCode + 2;
					clear_flg = true;
					output(ClearCode, outs);
				}
				function cl_hash(hsize) {
					for (var i = 0; i < hsize; ++i) htab[i] = -1;
				}
				function compress(init_bits, outs) {
					var fcode, c, i, ent, disp, hsize_reg, hshift;
					g_init_bits = init_bits;
					clear_flg = false;
					n_bits = g_init_bits;
					maxcode = MAXCODE(n_bits);
					ClearCode = 1 << init_bits - 1;
					EOFCode = ClearCode + 1;
					free_ent = ClearCode + 2;
					a_count = 0;
					ent = nextPixel();
					hshift = 0;
					for (fcode = HSIZE; fcode < 65536; fcode *= 2) ++hshift;
					hshift = 8 - hshift;
					hsize_reg = HSIZE;
					cl_hash(hsize_reg);
					output(ClearCode, outs);
					outer_loop: while ((c = nextPixel()) != EOF) {
						fcode = (c << BITS) + ent;
						i = c << hshift ^ ent;
						if (htab[i] === fcode) {
							ent = codetab[i];
							continue;
						}
						if (0 <= htab[i]) {
							disp = hsize_reg - i;
							0 === i && (disp = 1);
							do {
								(i -= disp) < 0 && (i += hsize_reg);
								if (htab[i] === fcode) {
									ent = codetab[i];
									continue outer_loop;
								}
							} while (0 <= htab[i]);
						}
						output(ent, outs);
						ent = c;
						if (free_ent < 1 << BITS) {
							codetab[i] = free_ent++;
							htab[i] = fcode;
						} else cl_block(outs);
					}
					output(ent, outs);
					output(EOFCode, outs);
				}
				function encode(outs) {
					outs.writeByte(initCodeSize);
					remaining = width * height;
					curPixel = 0;
					compress(initCodeSize + 1, outs);
					outs.writeByte(0);
				}
				function flush_char(outs) {
					if (0 < a_count) {
						outs.writeByte(a_count);
						outs.writeBytes(accum, 0, a_count);
						a_count = 0;
					}
				}
				function MAXCODE(n_bits) {
					return (1 << n_bits) - 1;
				}
				function nextPixel() {
					if (0 === remaining) return EOF;
					--remaining;
					var pix = pixels[curPixel++];
					return 255 & pix;
				}
				function output(code, outs) {
					cur_accum &= masks[cur_bits];
					0 < cur_bits ? cur_accum |= code << cur_bits : cur_accum = code;
					cur_bits += n_bits;
					while (8 <= cur_bits) {
						char_out(255 & cur_accum, outs);
						cur_accum >>= 8;
						cur_bits -= 8;
					}
					if (maxcode < free_ent || clear_flg) if (clear_flg) {
						maxcode = MAXCODE(n_bits = g_init_bits);
						clear_flg = false;
					} else {
						++n_bits;
						maxcode = n_bits == BITS ? 1 << BITS : MAXCODE(n_bits);
					}
					if (code == EOFCode) {
						while (0 < cur_bits) {
							char_out(255 & cur_accum, outs);
							cur_accum >>= 8;
							cur_bits -= 8;
						}
						flush_char(outs);
					}
				}
				this.encode = encode;
			}
			module.exports = LZWEncoder;
		},
		937: module => {
			var ncycles = 100;
			var netsize = 256;
			var maxnetpos = netsize - 1;
			var netbiasshift = 4;
			var intbiasshift = 16;
			var intbias = 1 << intbiasshift;
			var gammashift = 10;
			var betashift = 10;
			var beta = intbias >> betashift;
			var betagamma = intbias << gammashift - betashift;
			var initrad = netsize >> 3;
			var radiusbiasshift = 6;
			var radiusbias = 1 << radiusbiasshift;
			var initradius = initrad * radiusbias;
			var radiusdec = 30;
			var alphabiasshift = 10;
			var initalpha = 1 << alphabiasshift;
			var radbiasshift = 8;
			var radbias = 1 << radbiasshift;
			var alpharadbshift = alphabiasshift + radbiasshift;
			var alpharadbias = 1 << alpharadbshift;
			var prime1 = 499;
			var prime2 = 491;
			var prime3 = 487;
			var prime4 = 503;
			var minpicturebytes = 3 * prime4;
			function NeuQuant(pixels, samplefac) {
				var network, netindex, bias, freq, radpower;
				function init() {
					network = [];
					netindex = new Int32Array(256);
					bias = new Int32Array(netsize);
					freq = new Int32Array(netsize);
					radpower = new Int32Array(netsize >> 3);
					for (var v, i = 0; i < netsize; i++) {
						v = (i << netbiasshift + 8) / netsize;
						network[i] = new Float64Array([ v, v, v, 0 ]);
						freq[i] = intbias / netsize;
						bias[i] = 0;
					}
				}
				function unbiasnet() {
					for (var i = 0; i < netsize; i++) {
						network[i][0] >>= netbiasshift;
						network[i][1] >>= netbiasshift;
						network[i][2] >>= netbiasshift;
						network[i][3] = i;
					}
				}
				function altersingle(alpha, i, b, g, r) {
					network[i][0] -= alpha * (network[i][0] - b) / initalpha;
					network[i][1] -= alpha * (network[i][1] - g) / initalpha;
					network[i][2] -= alpha * (network[i][2] - r) / initalpha;
				}
				function alterneigh(radius, i, b, g, r) {
					var p, a, lo = Math.abs(i - radius), hi = Math.min(i + radius, netsize), j = i + 1, k = i - 1, m = 1;
					while (j < hi || lo < k) {
						a = radpower[m++];
						if (j < hi) {
							p = network[j++];
							p[0] -= a * (p[0] - b) / alpharadbias;
							p[1] -= a * (p[1] - g) / alpharadbias;
							p[2] -= a * (p[2] - r) / alpharadbias;
						}
						if (lo < k) {
							p = network[k--];
							p[0] -= a * (p[0] - b) / alpharadbias;
							p[1] -= a * (p[1] - g) / alpharadbias;
							p[2] -= a * (p[2] - r) / alpharadbias;
						}
					}
				}
				function contest(b, g, r) {
					for (var n, dist, biasdist, betafreq, bestd = ~(1 << 31), bestbiasd = bestd, bestpos = -1, bestbiaspos = bestpos, i = 0; i < netsize; i++) {
						n = network[i];
						dist = Math.abs(n[0] - b) + Math.abs(n[1] - g) + Math.abs(n[2] - r);
						if (dist < bestd) {
							bestd = dist;
							bestpos = i;
						}
						biasdist = dist - (bias[i] >> intbiasshift - netbiasshift);
						if (biasdist < bestbiasd) {
							bestbiasd = biasdist;
							bestbiaspos = i;
						}
						betafreq = freq[i] >> betashift;
						freq[i] -= betafreq;
						bias[i] += betafreq << gammashift;
					}
					freq[bestpos] += beta;
					bias[bestpos] -= betagamma;
					return bestbiaspos;
				}
				function inxbuild() {
					for (var j, p, q, smallpos, smallval, previouscol = 0, startpos = 0, i = 0; i < netsize; i++) {
						p = network[i];
						smallpos = i;
						smallval = p[1];
						for (j = i + 1; j < netsize; j++) {
							q = network[j];
							if (q[1] < smallval) {
								smallpos = j;
								smallval = q[1];
							}
						}
						q = network[smallpos];
						if (i != smallpos) {
							j = q[0];
							q[0] = p[0];
							p[0] = j;
							j = q[1];
							q[1] = p[1];
							p[1] = j;
							j = q[2];
							q[2] = p[2];
							p[2] = j;
							j = q[3];
							q[3] = p[3];
							p[3] = j;
						}
						if (smallval != previouscol) {
							netindex[previouscol] = startpos + i >> 1;
							for (j = previouscol + 1; j < smallval; j++) netindex[j] = i;
							previouscol = smallval;
							startpos = i;
						}
					}
					netindex[previouscol] = startpos + maxnetpos >> 1;
					for (j = previouscol + 1; j < 256; j++) netindex[j] = maxnetpos;
				}
				function inxsearch(b, g, r) {
					var a, p, dist, bestd = 1e3, best = -1, i = netindex[g], j = i - 1;
					while (i < netsize || 0 <= j) {
						if (i < netsize) {
							p = network[i];
							dist = p[1] - g;
							if (bestd <= dist) i = netsize; else {
								i++;
								dist < 0 && (dist = -dist);
								a = p[0] - b;
								a < 0 && (a = -a);
								dist += a;
								if (dist < bestd) {
									a = p[2] - r;
									a < 0 && (a = -a);
									dist += a;
									if (dist < bestd) {
										bestd = dist;
										best = p[3];
									}
								}
							}
						}
						if (0 <= j) {
							p = network[j];
							dist = g - p[1];
							if (bestd <= dist) j = -1; else {
								j--;
								dist < 0 && (dist = -dist);
								a = p[0] - b;
								a < 0 && (a = -a);
								dist += a;
								if (dist < bestd) {
									a = p[2] - r;
									a < 0 && (a = -a);
									dist += a;
									if (dist < bestd) {
										bestd = dist;
										best = p[3];
									}
								}
							}
						}
					}
					return best;
				}
				function learn() {
					var step, b, g, r, j, lengthcount = pixels.length, alphadec1 = 30 + (samplefac - 1) / 3, samplepixels = lengthcount / (3 * samplefac), delta = ~~(samplepixels / ncycles), alpha = initalpha, radius = initradius, rad = radius >> radiusbiasshift;
					rad <= 1 && (rad = 0);
					for (i = 0; i < rad; i++) radpower[i] = alpha * ((rad * rad - i * i) * radbias / (rad * rad));
					if (lengthcount < minpicturebytes) {
						samplefac = 1;
						step = 3;
					} else step = lengthcount % prime1 != 0 ? 3 * prime1 : lengthcount % prime2 != 0 ? 3 * prime2 : lengthcount % prime3 != 0 ? 3 * prime3 : 3 * prime4;
					var pix = 0, i = 0;
					while (i < samplepixels) {
						b = (255 & pixels[pix]) << netbiasshift;
						g = (255 & pixels[pix + 1]) << netbiasshift;
						r = (255 & pixels[pix + 2]) << netbiasshift;
						j = contest(b, g, r);
						altersingle(alpha, j, b, g, r);
						0 !== rad && alterneigh(rad, j, b, g, r);
						pix += step;
						lengthcount <= pix && (pix -= lengthcount);
						i++;
						0 === delta && (delta = 1);
						if (i % delta == 0) {
							alpha -= alpha / alphadec1;
							radius -= radius / radiusdec;
							rad = radius >> radiusbiasshift;
							rad <= 1 && (rad = 0);
							for (j = 0; j < rad; j++) radpower[j] = alpha * ((rad * rad - j * j) * radbias / (rad * rad));
						}
					}
				}
				function buildColormap() {
					init();
					learn();
					unbiasnet();
					inxbuild();
				}
				this.buildColormap = buildColormap;
				function getColormap() {
					for (var map = [], index = [], i = 0; i < netsize; i++) index[network[i][3]] = i;
					for (var k = 0, l = 0; l < netsize; l++) {
						var j = index[l];
						map[k++] = network[j][0];
						map[k++] = network[j][1];
						map[k++] = network[j][2];
					}
					return map;
				}
				this.getColormap = getColormap;
				this.lookupRGB = inxsearch;
			}
			module.exports = NeuQuant;
		},
		985: (module, __unused_webpack_exports, __webpack_require__) => {
			module.exports = __webpack_require__(110);
		},
		973: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			"use strict";
			__webpack_require__.r(__webpack_exports__);
			__webpack_require__.d(__webpack_exports__, {
				default: () => PetPet
			});
			var webpack_namespaceObject = {};
			__webpack_require__.r(webpack_namespaceObject);
			__webpack_require__.d(webpack_namespaceObject, {
				AvatarManager: () => AvatarManager,
				ColorUtils: () => ColorUtils,
				Constants: () => Constants,
				ContextMenu: () => ContextMenu,
				Dispatcher: () => Dispatcher,
				Flux: () => Flux,
				FluxDispatcher: () => FluxDispatcher,
				Lodash: () => Lodash,
				ModalActions: () => ModalActions,
				ModalStack: () => ModalStack,
				Platform: () => Platform,
				React: () => React,
				ReactDOM: () => ReactDOM,
				ReactSpring: () => ReactSpring,
				_: () => _,
				_defineModules: () => _defineModules,
				find: () => find,
				findAll: () => findAll,
				findAllByDisplayName: () => findAllByDisplayName,
				findAllByProps: () => findAllByProps,
				findAllByPrototype: () => findAllByPrototype,
				findByDisplayName: () => findByDisplayName,
				findByProps: () => findByProps,
				findByPrototype: () => findByPrototype
			});
			var logger_namespaceObject = {};
			__webpack_require__.r(logger_namespaceObject);
			__webpack_require__.d(logger_namespaceObject, {
				consoleCopy: () => consoleCopy,
				count: () => count,
				countReset: () => countReset,
				createArguments: () => createArguments,
				debug: () => debug,
				error: () => error,
				group: () => group,
				groupEnd: () => groupEnd,
				log: () => log,
				warn: () => warn
			});
			var patcher_namespaceObject = {};
			__webpack_require__.r(patcher_namespaceObject);
			__webpack_require__.d(patcher_namespaceObject, {
				after: () => after,
				before: () => before,
				instead: () => instead,
				patch: () => patch,
				patches: () => patches,
				unpatchAll: () => unpatchAll
			});
			var commands_namespaceObject = {};
			__webpack_require__.r(commands_namespaceObject);
			__webpack_require__.d(commands_namespaceObject, {
				COMMAND_ARGUMENT_TYPES: () => COMMAND_ARGUMENT_TYPES,
				CommandTypes: () => CommandTypes,
				botMessage: () => botMessage,
				patchIcons: () => patchIcons,
				registerCommand: () => registerCommand,
				registerSection: () => registerSection,
				registeredCommands: () => registeredCommands,
				registeredSections: () => registeredSections,
				unpatchIcons: () => unpatchIcons,
				unregisterAllCommands: () => unregisterAllCommands,
				unregisterAllSections: () => unregisterAllSections,
				unregisterCommand: () => unregisterCommand,
				unregisterSection: () => unregisterSection
			});
			var settings_namespaceObject = {};
			__webpack_require__.r(settings_namespaceObject);
			__webpack_require__.d(settings_namespaceObject, {
				get: () => get,
				getAll: () => getAll,
				remove: () => remove,
				reset: () => settings_reset,
				set: () => settings_set,
				setAll: () => setAll,
				setInstance: () => setInstance,
				settingsInstance: () => settingsInstance
			});
			var components_namespaceObject = {};
			__webpack_require__.r(components_namespaceObject);
			__webpack_require__.d(components_namespaceObject, {
				Anchor: () => Anchor,
				Avatar: () => Avatar,
				Button: () => Button,
				Card: () => Card,
				Category: () => Category_Category,
				ColorPicker: () => ColorPicker,
				ContextMenu: () => components_ContextMenu,
				DiscordIcon: () => DiscordIcon,
				DiscordProviders: () => DiscordProviders,
				Flex: () => Flex,
				FluxWrapper: () => FluxWrapper,
				Forms: () => Forms,
				Heading: () => Heading,
				KeyboardShortcut: () => KeyboardShortcut,
				Markdown: () => Markdown,
				Modal: () => Modal,
				OriginalRadioGroup: () => OriginalRadioGroup,
				OriginalSwitch: () => OriginalSwitch,
				OriginalSwitchItem: () => OriginalSwitchItem,
				Popout: () => Popout,
				Progress: () => Progress,
				RadioGroup: () => RadioGroup,
				SearchBar: () => SearchBar,
				SettingsNotice: () => SettingsNotice,
				SlideIn: () => SlideIn,
				Slider: () => Slider,
				Spinner: () => Spinner,
				Switch: () => Switch,
				SwitchItem: () => SwitchItem,
				Text: () => Text,
				TextInput: () => TextInput,
				Tooltip: () => Tooltip,
				TooltipContainer: () => TooltipContainer,
				TransitionGroup: () => TransitionGroup,
				makeUpdateWrapper: () => makeUpdateWrapper
			});
			var changelog_namespaceObject = {};
			__webpack_require__.r(changelog_namespaceObject);
			__webpack_require__.d(changelog_namespaceObject, {
				hasSeenChangelog: () => hasSeenChangelog,
				openChangelogModal: () => openChangelogModal,
				renderChangelogContent: () => renderChangelogContent,
				setSeenChangelog: () => setSeenChangelog
			});
			var entities_namespaceObject = {};
			__webpack_require__.r(entities_namespaceObject);
			__webpack_require__.d(entities_namespaceObject, {
				Plugin: () => Plugin_Plugin
			});
			var stores_namespaceObject = {};
			__webpack_require__.r(stores_namespaceObject);
			__webpack_require__.d(stores_namespaceObject, {
				Activities: () => Activities,
				Auth: () => Auth,
				Channels: () => Channels,
				CurrentChannels: () => CurrentChannels,
				CurrentGuilds: () => CurrentGuilds,
				Games: () => Games,
				Guilds: () => Guilds,
				Info: () => Info,
				Members: () => Members,
				Messages: () => Messages,
				Status: () => Status,
				TypingUsers: () => TypingUsers,
				UserProfile: () => UserProfile,
				UserSettings: () => UserSettings,
				Users: () => Users
			});
			var toast_namespaceObject = {};
			__webpack_require__.r(toast_namespaceObject);
			__webpack_require__.d(toast_namespaceObject, {
				POSITIONS: () => POSITIONS,
				ToastWrapper: () => ittai_toast_ToastWrapper,
				pop: () => pop,
				show: () => show
			});
			var messages_namespaceObject = {};
			__webpack_require__.r(messages_namespaceObject);
			__webpack_require__.d(messages_namespaceObject, {
				fetchMessage: () => fetchMessage,
				getMessage: () => getMessage,
				getMessages: () => getMessages,
				messageCache: () => messageCache,
				rerenderAllMessages: () => rerenderAllMessages,
				rerenderMessage: () => rerenderMessage,
				updateMessage: () => updateMessage
			});
			var utilities_namespaceObject = {};
			__webpack_require__.r(utilities_namespaceObject);
			__webpack_require__.d(utilities_namespaceObject, {
				average: () => average,
				benchmark: () => benchmark,
				findInReactTree: () => findInReactTree,
				findInTree: () => findInTree,
				getClientMod: () => getClientMod,
				getOwnerInstance: () => getOwnerInstance,
				getReactInstance: () => getReactInstance,
				joinClasses: () => joinClasses,
				median: () => median,
				messageBox: () => messageBox,
				messages: () => messages_namespaceObject,
				multiBenchmark: () => multiBenchmark,
				nanoseconds: () => nanoseconds,
				randomNumber: () => randomNumber,
				randomString: () => randomString,
				searchClassNameModules: () => searchClassNameModules,
				testComponent: () => testComponent,
				wait: () => wait_randomString
			});
			var ittai_namespaceObject = {};
			__webpack_require__.r(ittai_namespaceObject);
			__webpack_require__.d(ittai_namespaceObject, {
				changelog: () => changelog_namespaceObject,
				commands: () => commands_namespaceObject,
				components: () => components_namespaceObject,
				entities: () => entities_namespaceObject,
				logger: () => logger_namespaceObject,
				patcher: () => patcher_namespaceObject,
				settings: () => settings_namespaceObject,
				stores: () => stores_namespaceObject,
				toast: () => toast_namespaceObject,
				utilities: () => utilities_namespaceObject,
				webpack: () => webpack_namespaceObject
			});
			let clientMod;
			function getClientMod() {
				if (clientMod) return clientMod;
				if (globalThis.BdApi && !globalThis.powercord?.pluginManager.get("bdCompat")) return clientMod = "betterdiscord";
				if (globalThis.goosemod) return clientMod = "goosemod";
				if (globalThis.powercord) return clientMod = "powercordv2";
				throw Error("Unknown client mod.");
			}
			let React;
			let ReactDOM;
			let ReactSpring;
			const Lodash = globalThis._;
			const _ = globalThis._;
			let AvatarManager;
			let ModalActions;
			let ModalStack;
			let Dispatcher;
			let Flux;
			let FluxDispatcher;
			let ColorUtils;
			let Constants;
			let ContextMenu;
			let Platform;
			function _defineModules() {
				React = findByProps("useState");
				ReactDOM = findByProps("render", "unmountComponentAtNode");
				ReactSpring = findByProps("useSpring", "useTransition");
				AvatarManager = findByProps("getUserAvatarURL", "hasAnimatedGuildIcon");
				ModalActions = findByProps("openModal", "updateModal");
				ModalStack = findByProps("push", "update", "pop", "popWithKey");
				Dispatcher = findByProps("dirtyDispatch");
				Flux = findByProps("Store", "connectStores");
				FluxDispatcher = findByProps("_currentDispatchActionType", "_processingWaitQueue");
				ColorUtils = findByProps("isValidHex");
				Constants = findByProps("API_HOST");
				ContextMenu = findByProps("openContextMenu");
				Platform = find(m => m.PlatformTypes?.WINDOWS);
			}
			let clientWebpack;
			switch (getClientMod()) {
			case "goosemod":
				clientWebpack = globalThis.goosemod.webpackModules;
				break;

			case "powercordv2":
				clientWebpack = __webpack_require__(312);
				break;

			case "betterdiscord":
				clientWebpack = globalThis.BdApi;
				break;
			}
			function find(filter) {
				switch (getClientMod()) {
				case "goosemod":
					return clientWebpack.find(filter);

				case "powercordv2":
					let isDefault = false;
					const mod = clientWebpack.getModule(x => x?.default && filter(x.default) && (isDefault = true), false) || clientWebpack.getModule(filter, false);
					return isDefault ? mod.default : mod;

				case "betterdiscord":
					return clientWebpack.findModule(filter);
				}
			}
			function findAll(filter) {
				switch (getClientMod()) {
				case "goosemod":
					return clientWebpack.findAll(filter);

				case "powercordv2":
					return clientWebpack.getAllModules(x => x?.default && filter(x.default), false) || clientWebpack.getModule(filter, false);

				case "betterdiscord":
					return clientWebpack.findAllModules(filter);
				}
			}
			function findByProps(...props) {
				return find(m => props.every(p => void 0 !== m?.[p]));
			}
			function findAllByProps(...props) {
				return findAll(m => props.every(p => void 0 !== m?.[p]));
			}
			function findByPrototype(...props) {
				return find(m => props.every(p => void 0 !== m?.prototype?.[p]));
			}
			function findAllByPrototype(...props) {
				return findAll(m => props.every(p => void 0 !== m?.prototype?.[p]));
			}
			function findByDisplayName(name) {
				return find(m => m?.displayName === name);
			}
			function findAllByDisplayName(name) {
				return find(m => m?.displayName === name);
			}
			_defineModules();
			function createArguments(...args) {
				return [ "%cIttai", "color: #000; background-color: #42ffa7; font-family: default; padding-left: 3px; padding-right: 3px; border-radius: 2px; font-weight: bold;", ...args ];
			}
			function log(...args) {
				consoleCopy.log(...createArguments(...args));
			}
			function debug(...args) {
				consoleCopy.debug(...createArguments(...args));
			}
			function warn(...args) {
				consoleCopy.warn(...createArguments(...args));
			}
			function group(...args) {
				consoleCopy.group(...createArguments(...args));
			}
			function groupEnd(...args) {
				consoleCopy.groupEnd(...createArguments(...args));
			}
			function count(...args) {
				consoleCopy.count(...args);
			}
			function countReset(...args) {
				consoleCopy.countReset(...args);
			}
			const consoleCopy = {
				...console
			};
			function error(...args) {
				consoleCopy.error(...createArguments(...args));
			}
			function randomNumber(min, max) {
				return Math.random() * max - min;
			}
			function randomString(length, dontMatch = "", charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") {
				if ("number" != typeof length && length <= 0) return;
				if ("string" != typeof dontMatch && !Array.isArray(dontMatch)) return;
				if ("string" != typeof charset && !Array.isArray(charset)) return;
				let string = "";
				do {
					while (string.length < length) string += charset[Math.round(randomNumber(0, charset.length - 1))];
					string = string.slice(0, length);
				} while (dontMatch && (string === dontMatch || dontMatch.some(m => m === string)));
				return string;
			}
			function before(name, object, functionName, patchFunction) {
				return patch(name, object, functionName, "before", patchFunction);
			}
			function instead(name, object, functionName, patchFunction) {
				return patch(name, object, functionName, "instead", patchFunction);
			}
			function unpatchAll(unpatches) {
				Array.isArray(unpatches) || (unpatches = patches);
				for (const object of Object.values(unpatches)) for (const funct of Object.values(object)) for (const patch of funct.patches) patch.unpatch();
			}
			let patches = [];
			function patch(name, object, functionName, type, patchFunction) {
				const id = object.__ittai__ ?? randomString(25, Object.keys(patches));
				object.__ittai__ = object.__ittai__ ?? id;
				patches[id] || (patches[id] = {});
				const patchData = {
					name: name,
					type: type,
					patchFunction: patchFunction,
					unpatch: function() {
						try {
							const patchIndex = patches[id][functionName].patches.indexOf(this);
							if (-1 === patchIndex) throw "Couldn't find the patch. This probably happened because the object was tampered with. Don't do that.";
							patches[id][functionName].patches.splice(patchIndex, 1);
							if (0 === patches[id][functionName].patches.length) {
								object[functionName] = patches[id][functionName].original;
								delete patches[id][functionName];
							}
							Object.keys(patches[id]).length || delete patches[id];
						} catch (e) {
							error(`Failed to unpatch ${name}.`, e);
						}
					}
				};
				if (!patches[id][functionName]) {
					patches[id][functionName] = {
						original: object[functionName],
						patches: []
					};
					const props = {
						...object[functionName]
					};
					object[functionName] = function(...args) {
						const functionData = patches[id][functionName], befores = functionData.patches.filter(p => "before" === p.type), insteads = functionData.patches.filter(p => "instead" === p.type), afters = functionData.patches.filter(p => "after" === p.type);
						for (const before of befores) try {
							const callback = before.patchFunction(args, this);
							callback && (args = callback);
						} catch (e) {
							error(`Error running before patch ${name}.`, e);
						}
						let res = {}, ranOnce = false;
						if (0 === insteads.length) res = functionData.original.call(this, ...args), 
						ranOnce = true; else for (const instead of insteads) try {
							res = globalThis._.merge(res, instead.patchFunction(args, this) ?? {}), ranOnce = true;
						} catch (e) {
							error(`Error running instead patch ${name}.`, e);
						}
						ranOnce || (res = functionData.original.call(this, ...args));
						for (const after of afters) try {
							const callback = after.patchFunction(args, res, this);
							callback && (res = callback);
						} catch (e) {
							error(`Error running after patch ${name}.`, e);
						}
						return res;
					};
					Object.assign(object[functionName], props);
					object[functionName].toString = () => patches[id][functionName].original.toString();
				}
				patches[id][functionName].patches.push(patchData);
				return patchData;
			}
			function after(name, object, functionName, patchFunction) {
				return patch(name, object, functionName, "after", patchFunction);
			}
			function findInTree(tree, filter, {
				walkable = [],
				exclude = [],
				whileLoop = false,
				maxDepth = 100,
				depth = 0
			} = {}) {
				if (depth === maxDepth) return null;
				if (null == tree) return null;
				if ("object" != typeof tree) return null;
				if ("string" == typeof filter) return tree[filter];
				if (whileLoop) {
					const stack = [ tree ];
					while (stack.length) {
						const node = stack["reverse" === whileLoop ? "pop" : "shift"]();
						try {
							if (filter(node)) return node;
						} catch {}
						if (stack.length >= maxStack) continue;
						Array.isArray(node) ? stack.push(...node) : "object" == typeof node && null !== node && (0 < walkable.length ? stack.push(...Object.entries(node).filter(([ key ]) => -1 !== walkable.indexOf(key) && -1 === exclude.indexOf(key)).map(([ , value ]) => value)) : stack.push(...Object.values(node).filter(key => -1 === exclude.indexOf(key) && node)));
						depth++;
					}
					return null;
				}
				{
					let returnValue;
					try {
						if (filter(tree)) return tree;
					} catch {}
					if (Array.isArray(tree)) for (const value of tree) {
						returnValue = findInTree(value, filter, {
							walkable: walkable,
							exclude: exclude,
							whileLoop: whileLoop,
							maxDepth: maxDepth,
							depth: depth + 1
						});
						if (returnValue) return returnValue;
					}
					let keys = 0 < walkable.length ? walkable : Object.keys(tree);
					for (const key of keys) {
						if (!tree.hasOwnProperty(key) || exclude.includes(key)) continue;
						returnValue = findInTree(tree[key], filter, {
							walkable: walkable,
							exclude: exclude,
							whileLoop: whileLoop,
							maxDepth: maxDepth,
							depth: depth + 1
						});
						if (returnValue) return returnValue;
					}
					return null;
				}
			}
			function findInReactTree(tree, filter, {
				whileLoop = false,
				maxDepth = 100,
				depth = 0
			} = {}) {
				return findInTree(tree, filter, {
					walkable: [ "props", "children", "child", "sibling" ],
					exclude: [ "__reactFiber$", "__reactFiber", "__reactInternalInstance$", "__reactInternalInstance" ],
					whileLoop: whileLoop,
					maxDepth: maxDepth,
					depth: depth
				});
			}
			const MessageCreators = findByProps("createBotMessage");
			const MessageActions = findByProps("receiveMessage");
			const AvatarDefaults = findByProps("BOT_AVATARS");
			const DefaultMessage = {
				state: "SENT",
				author: addBotAuthor({
					avatar: {
						avatarId: "ittai",
						imageUrl: "https://cdn.discordapp.com/avatars/264062457448759296/1f9b1743cf625ca2d51ee517b5efd8a7.webp"
					},
					author: {
						username: "Ittai"
					}
				}),
				content: 'Hello! By the way, you forgot to add a `"content"` attribute to the message!'
			};
			function addBotAuthor({
				avatar,
				author
			}) {
				const avatarId = avatar?.avatarId ?? randomString(10);
				AvatarDefaults?.BOT_AVATARS && !AvatarDefaults.BOT_AVATARS[avatarId] && (AvatarDefaults.BOT_AVATARS[avatarId] = avatar.imageUrl);
				return {
					avatar: avatarId,
					id: author?.authorId ?? randomString(10),
					bot: true,
					discriminator: author?.discriminator ?? "0000",
					username: author?.username ?? "BotUser"
				};
			}
			function sendMessage(channelId, message) {
				MessageActions.receiveMessage(channelId, Object.assign({}, MessageCreators.createBotMessage(channelId, message?.content), DefaultMessage, message));
			}
			const BotMessage = {
				sendMessage: sendMessage,
				addBotAuthor: addBotAuthor
			};
			const botMessage = BotMessage;
			const CommandTypes = Object.assign({}, findByProps("ApplicationCommandType"), findByProps("ApplicationCommandPermissionType"));
			const CommandsModule = findByProps("BUILT_IN_COMMANDS");
			const ApplicationCommandDiscoveryApplicationIcon = findByDisplayName("ApplicationCommandDiscoveryApplicationIcon");
			let iconPatch;
			function patchIcons() {
				iconPatch || (iconPatch = after("IttaiIconCommandPatch", ApplicationCommandDiscoveryApplicationIcon, "default", (args, res, _this) => {
					const props = findInReactTree(res, n => n.src);
					const section = findInTree(args, n => n.icon);
					if (!props || !section || 0 < props.src.indexOf(section.icon)) return res;
					res.props.onClick = () => {};
					props.src = section.icon;
					return res;
				}));
			}
			function unpatchIcons() {
				iconPatch.unpatch();
				iconPatch = null;
			}
			const COMMAND_ARGUMENT_TYPES = {
				SUB_COMMAND: 1,
				SUB_COMMAND_GROUP: 2,
				STRING: 3,
				INTEGER: 4,
				BOOLEAN: 5,
				USER: 6,
				CHANNEL: 7,
				ROLE: 8
			};
			let registeredCommands = [];
			let registeredSections = [];
			function registerCommand(command) {
				patchIcons();
				const currentIDs = CommandsModule.BUILT_IN_COMMANDS.map(({
					id
				}) => id);
				(!command.id ?? false) && (command.id = randomString(10, currentIDs));
				-1 < currentIDs.indexOf(command.id) && (command.id += randomString(10, currentIDs));
				command.applicationId ??= "-1";
				command.execute ??= () => {};
				command.displayName ??= command.name;
				command.displayDescription ??= command.description;
				command.options.map(opts => {
					opts.displayName ??= opts.name;
					opts.displayDescription ??= opts.description;
					return opts;
				});
				CommandsModule.BUILT_IN_COMMANDS.push(command);
				registeredCommands.push(command.id);
				return command.id;
			}
			function unregisterCommand(id) {
				CommandsModule.BUILT_IN_COMMANDS.splice(CommandsModule.BUILT_IN_COMMANDS.findIndex(command => command.id === id), 1);
			}
			function unregisterAllCommands() {
				for (const command of registeredCommands) unregisterCommand(command);
			}
			function registerSection(section) {
				patchIcons();
				const currentIDs = CommandsModule.BUILT_IN_SECTIONS.map(({
					id
				}) => id);
				(!section.id ?? false) && (section.id = randomString(10, currentIDs));
				-1 < currentIDs.indexOf(section.id) && (section.id += randomString(10, currentIDs));
				section.isBuiltIn = false;
				CommandsModule.BUILT_IN_SECTIONS.push(section);
				registeredSections.push(section.id);
				return section.id;
			}
			function unregisterSection(id) {
				CommandsModule.BUILT_IN_COMMANDS.splice(CommandsModule.BUILT_IN_COMMANDS.findIndex(command => command.id === id), 1);
			}
			function unregisterAllSections() {
				for (const command of registeredSections) unregisterCommand(command);
			}
			const ittaiconfig_namespaceObject = JSON.parse('{"I":{"u2":"PetPet","i8":"1.0.0"}}');
			function _defineProperty(obj, key, value) {
				key in obj ? Object.defineProperty(obj, key, {
					value: value,
					enumerable: true,
					configurable: true,
					writable: true
				}) : obj[key] = value;
				return obj;
			}
			class BDPlugin {
				log() {
					logger.log(...arguments);
				}
				debug() {
					logger.debug(...arguments);
				}
				warn() {
					logger.warn(...arguments);
				}
				error() {
					logger.error(...arguments);
				}
				constructor() {
					_defineProperty(this, "__ittaiInternals", {
						getAllSettings: () => {
							return globalThis.BdApi.loadData(ittaiconfig_namespaceObject.I.u2, "settings") ?? {};
						},
						getSetting: (key, defaultValue) => {
							return (globalThis.BdApi.loadData(ittaiconfig_namespaceObject.I.u2, "settings") ?? {})[key] ?? defaultValue;
						},
						setSettings: newSettings => {
							if ("object" != typeof newSettings) return;
							globalThis.BdApi.saveData(ittaiconfig_namespaceObject.I.u2, "settings", Object.assign(this.__ittaiInternals.getAllSettings(), newSettings));
						},
						setSetting: (key, value) => {
							globalThis.BdApi.saveData(ittaiconfig_namespaceObject.I.u2, "settings", Object.assign(this.__ittaiInternals.getAllSettings(), {
								[key]: value
							}));
						},
						removeSetting: key => {
							let outputSetting = this.__ittaiInternals.getAllSettings();
							delete outputSetting?.[key];
							globalThis.BdApi.saveData(ittaiconfig_namespaceObject.I.u2, "settings", outputSetting);
						},
						resetSettings: () => {
							globalThis.BdApi.saveData(ittaiconfig_namespaceObject.I.u2, "settings", {});
						},
						setSettingsPanel: component => {
							this.getSettingsPanel = () => {
								try {
									"function" == typeof component && (component = React.createElement(component));
									return component;
								} catch (e) {
									this.error("Failed to load settings panel.", e);
								}
								return null;
							};
						},
						removeSettingsPanel: () => {
							delete this.getSettingsPanel;
						}
					});
				}
			}
			function GMPlugin_defineProperty(obj, key, value) {
				key in obj ? Object.defineProperty(obj, key, {
					value: value,
					enumerable: true,
					configurable: true,
					writable: true
				}) : obj[key] = value;
				return obj;
			}
			class GMPlugin {
				constructor() {
					GMPlugin_defineProperty(this, "__ittaiInternals", {
						getAllSettings: () => {
							return this.__ittaiGMSettings;
						},
						getSetting: (key, defaultValue) => {
							return void 0 !== this.__ittaiGMSettings[key] ? this.__ittaiGMSettings[key] : defaultValue;
						},
						setSettings: newSettings => {
							if ("object" != typeof newSettings) return;
							Object.assign(this.__ittaiGMSettings, newSettings);
						},
						setSetting: (key, value) => {
							this.__ittaiGMSettings[key] = value;
						},
						removeSetting: (key, value) => {
							delete this.__ittaiGMSettings[key];
						},
						resetSettings: () => {
							this.__ittaiGMSettings = {};
						},
						setSettingsPanel: component => {
							"function" == typeof component && (component = React.createElement(component));
							globalThis.goosemod.settings.createItem(this.friendlyName, [ "", {
								type: "text",
								text: "",
								subtext: component
							} ]);
						},
						removeSettingsPanel: () => {
							globalThis.goosemod.settings.removeItem(this.friendlyName);
						}
					});
					GMPlugin_defineProperty(this, "goosemodHandlers", {
						onImport: () => {
							return this.start();
						},
						onRemove: () => {
							return this.stop();
						},
						getSettings: () => [ this.__ittaiGMSettings ],
						loadSettings: ([ _settings ]) => {
							this.__ittaiGMSettings = _settings;
						}
					});
					this.__ittaiGMSettings = {};
				}
			}
			function PCv2Plugin_defineProperty(obj, key, value) {
				key in obj ? Object.defineProperty(obj, key, {
					value: value,
					enumerable: true,
					configurable: true,
					writable: true
				}) : obj[key] = value;
				return obj;
			}
			let Plugin;
			Plugin = "powercordv2" === getClientMod() ? class extends __webpack_require__(634).entities.Plugin {
				startPlugin() {
					return this.start();
				}
				pluginWillUnload() {
					return this.stop();
				}
				constructor(...args) {
					super(...args);
					PCv2Plugin_defineProperty(this, "__ittaiInternals", {
						getAllSettings: () => {
							let obj = {};
							const keys = this.settings.getKeys();
							keys.forEach(k => {
								obj[k] = this.settings.get(k);
							});
							return obj;
						},
						getSetting: (key, defaultValue) => {
							return this.settings.get(key, defaultValue);
						},
						setSettings: newSettings => {
							if ("object" != typeof newSettings) return;
							Object.keys(newSettings).forEach(k => this.settings.set(k, newSettings[k]));
						},
						setSetting: (key, value) => {
							this.settings.set(key, value);
						},
						removeSetting: key => {
							this.settings.delete(key);
						},
						resetSettings: () => {
							const keys = this.settings.getKeys();
							keys.forEach(k => {
								this.settings.delete(k);
							});
						},
						setSettingsPanel: component => {
							powercord.api.settings.registerSettings(this.entityID, {
								category: this.entityID,
								label: this.friendlyName,
								render: component
							});
						},
						removeSettingsPanel: () => {
							powercord.api.settings.unregisterSettings(this.entityID);
						}
					});
				}
			} : class {};
			const PCv2Plugin = Plugin;
			let hasDevServer = false;
			async function loadDevServer() {
				if ("betterdiscord" === getClientMod()) return;
				hasDevServer;
			}
			function loadDevPlugin(p) {
				if ("betterdiscord" === getClientMod()) return;
				if (hasDevServer) {
					console.log("Loading using existing dev server client");
					__ITTAI_DEVSERVER_INSTANCE__.loadPlugin(p);
				}
			}
			const get = (key, defaultValue) => {
				return settingsInstance.getSetting(key, defaultValue);
			};
			const getAll = () => {
				return settingsInstance.getAllSettings();
			};
			const settings_set = (key, value) => {
				return settingsInstance.setSetting(key, value);
			};
			const setAll = settings => {
				return settingsInstance.setSettings(settings);
			};
			const remove = key => {
				return settingsInstance.removeSetting(key, void 0);
			};
			const settings_reset = () => {
				return settingsInstance.resetSettings();
			};
			let settingsInstance;
			const setInstance = i => {
				settingsInstance = i;
			};
			function _extends() {
				_extends = Object.assign || function(target) {
					for (var i = 1; i < arguments.length; i++) {
						var key, source = arguments[i];
						for (key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
					}
					return target;
				};
				return _extends.apply(this, arguments);
			}
			const classes = {
				default: findByProps("icon", "selected").icon,
				contextmenu: findByProps("icon", "submenu").icon,
				minipopover: findByProps("icon", "isHeader").icon
			};
			function DiscordIcon(props) {
				const choosenClass = React.useMemo(() => {
					switch (props.type) {
					case "minipopover":
						return classes.minipopover;

					case "contextmenu":
						return classes.contextmenu;

					case "none":
						return "";

					default:
						return classes.default;
					}
				}), IconSVG = findByDisplayName(props.name) ?? (() => {
					return "";
				});
				return React.createElement(IconSVG, _extends({}, props, {
					className: [ choosenClass, props.className ].filter(c => "string" == typeof c).join(" "),
					style: Object.assign({}, {
						width: "inherit",
						height: "inherit"
					}, props.style)
				}));
			}
			const LayerProvider = findByProps("AppLayerProvider").AppLayerProvider().props.layerContext.Provider;
			const AccessibilityProvider = findByProps("AccessibilityPreferencesContext").AccessibilityPreferencesContext.Provider;
			const layerClass = findByProps("LayerClassName").LayerClassName;
			function DiscordProviders(props) {
				return React.createElement(AccessibilityProvider, {
					value: {
						reducedMotion: {
							enabled: false,
							rawValue: "no-preference"
						}
					}
				}, React.createElement(LayerProvider, {
					value: [ document.querySelector("#app-mount > ." + layerClass) ]
				}, props.children));
			}
			function FluxWrapper_extends() {
				FluxWrapper_extends = Object.assign || function(target) {
					for (var i = 1; i < arguments.length; i++) {
						var key, source = arguments[i];
						for (key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
					}
					return target;
				};
				return FluxWrapper_extends.apply(this, arguments);
			}
			function FluxWrapper(props) {
				props.children.displayName || (props.children.displayName = "FluxProxy");
				const ConnectedComponent = Flux.connectStores(props.stores ? Object.values(props.stores) : [], props.createProps ?? (() => {
					return {
						[Math.random()]: Math.random()
					};
				}))(props.children);
				return React.createElement(ConnectedComponent, FluxWrapper_extends({}, props.stores));
			}
			var injectStylesIntoStyleTag = __webpack_require__(475);
			var injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag);
			var Category = __webpack_require__(718);
			var options = {
				attributes: {
					ittai: true,
					plugin: "PetPet"
				}
			};
			options.insert = "head";
			options.singleton = false;
			injectStylesIntoStyleTag_default()(Category.Z, options);
			const components_Category = Category.Z.locals || {};
			function Category_Category({
				title,
				description,
				children,
				openedByDefault = false
			}) {
				const [ opened, setOpened ] = React.useState(openedByDefault);
				return React.createElement("div", {
					className: components_Category.category
				}, React.createElement("div", {
					className: components_Category["category-header"],
					onClick: () => setOpened(!opened)
				}, React.createElement("div", {
					className: components_Category["category-header-icon-wrapper"]
				}, React.createElement(DiscordIcon, {
					name: "DropdownArrow",
					className: `${components_Category["category-header-icon"]} ${opened ? components_Category.opened : ""}`
				})), React.createElement("div", {
					className: components_Category["category-header-details"]
				}, React.createElement("div", {
					className: "title-2dsDLn"
				}, title), description && React.createElement(Text, null, description))), opened && React.createElement("div", {
					className: components_Category["category-content"]
				}, children), React.createElement(Forms.FormDivider, {
					className: "dividerDefault-3C2-ws"
				}));
			}
			function components_extends() {
				components_extends = Object.assign || function(target) {
					for (var i = 1; i < arguments.length; i++) {
						var key, source = arguments[i];
						for (key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
					}
					return target;
				};
				return components_extends.apply(this, arguments);
			}
			const makeUpdateWrapper = (Component, checkPropName = "value", type = "switch") => {
				const typeSwitch = v => {
					switch (type) {
					case "switch":
						return v;

					case "radio":
						return v.value;

					default:
						return v;
					}
				};
				return props => {
					const [ value1, setValue ] = React.useState(props[checkPropName]);
					return React.createElement(Component, components_extends({}, {
						...props,
						[checkPropName]: value1,
						onChange: (...args) => {
							const value = args[0];
							"function" == typeof props.onChange && props.onChange(value);
							setValue(typeSwitch(value));
						}
					}));
				};
			};
			const Button = findByProps("Colors", "Looks", "DropdownSizes");
			const Spinner = findByDisplayName("Spinner");
			const Text = findByDisplayName("LegacyText");
			const TextInput = findByDisplayName("TextInput");
			const Tooltip = findByDisplayName("Tooltip");
			const TooltipContainer = findByProps("TooltipContainer")?.TooltipContainer;
			const SlideIn = findByDisplayName("SlideIn");
			const SettingsNotice = findByDisplayName("SettingsNotice");
			const TransitionGroup = findByDisplayName("TransitionGroup");
			const Flex = findByDisplayName("Flex");
			const Card = findByDisplayName("Card");
			const Popout = findByDisplayName("Popout");
			const Progress = findByDisplayName("Progress");
			const Modal = findByProps("ModalRoot");
			const Forms = findByProps("FormItem");
			const ColorPicker = findByDisplayName("ColorPicker");
			const Anchor = findByDisplayName("Anchor");
			const Heading = findByProps("Heading").Heading;
			const KeyboardShortcut = findByProps("PRETTY_KEYS").default;
			const SearchBar = findByProps("SearchIcon").default;
			const OriginalRadioGroup = findByDisplayName("RadioGroup");
			const RadioGroup = makeUpdateWrapper(OriginalRadioGroup, "value", "radio");
			const OriginalSwitch = findByDisplayName("Switch");
			const Switch = makeUpdateWrapper(OriginalSwitch, "checked");
			const OriginalSwitchItem = findByDisplayName("SwitchItem");
			const SwitchItem = makeUpdateWrapper(OriginalSwitchItem, "value");
			const Markdown = find(m => "Markdown" == m?.default?.displayName && m?.default?.rules)?.default;
			const components_ContextMenu = findByProps("MenuItem").default;
			Object.entries(findByProps("MenuItem")).forEach(([ key, contents ]) => {
				components_ContextMenu[key] || (components_ContextMenu[key] = contents);
			});
			const Avatar = findByProps("AnimatedAvatar").default;
			Object.entries(findByProps("AnimatedAvatar")).forEach(([ key, contents ]) => {
				Avatar[key] || (Avatar[key] = contents);
			});
			const Slider = findByProps("MarkerPositions").default;
			Slider.MarkerPositions = findByProps("MarkerPositions").MarkerPositions;
			const Changelog = findByProps("lead", "socialLink");
			const ChangelogModal = findByProps("maxModalWidth", "content");
			const joinClasses = (...classes) => classes.filter(s => "string" == typeof s).join(" ");
			function changelog_extends() {
				changelog_extends = Object.assign || function(target) {
					for (var i = 1; i < arguments.length; i++) {
						var key, source = arguments[i];
						for (key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
					}
					return target;
				};
				return changelog_extends.apply(this, arguments);
			}
			const renderChangelogContent = content => {
				return React.createElement(React.Fragment, null, Object.entries(content).map(([ title, {
					type,
					items
				} ]) => React.createElement("div", {
					className: ChangelogModal.content
				}, React.createElement("h1", {
					className: joinClasses(Changelog[type], Changelog.marginTop)
				}, title), React.createElement("ul", null, items.map(item => React.createElement("li", null, React.createElement(Markdown, null, item)))))));
			};
			const openChangelogModal = (changelog = ittaiconfig_namespaceObject.changelog) => {
				ModalActions.openModal(props => React.createElement(Modal.ModalRoot, changelog_extends({}, props, {
					size: Modal.ModalSize.SMALL,
					className: ChangelogModal.modal
				}), React.createElement(Modal.ModalHeader, {
					separator: false
				}, React.createElement(Flex, null, React.createElement(Flex.Child, {
					grow: 1,
					shrink: 1
				}, React.createElement(Heading, {
					variant: "heading-lg/medium"
				}, ittaiconfig_namespaceObject.I.u2, " - ", ittaiconfig_namespaceObject.I.i8), changelog.date && React.createElement(Text, {
					className: Changelog.date,
					size: Text.Sizes.SIZE_12
				}, changelog.date)), React.createElement(Modal.ModalCloseButton, {
					onClick: props.onClose
				}))), React.createElement(Modal.ModalContent, null, changelog.image && React.createElement("img", {
					className: Changelog.video,
					src: changelog.image,
					width: "451"
				}), renderChangelogContent(changelog.contents))));
			};
			const hasSeenChangelog = () => get(`__ittai_changelog_${ittaiconfig_namespaceObject.I.i8}`);
			const setSeenChangelog = set => settings_set(`__ittai_changelog_${ittaiconfig_namespaceObject.I.i8}`, set);
			const Messages = findByProps("getMessage", "getMessages");
			const Channels = findByProps("getChannel", "getDMFromUserId");
			const CurrentChannels = findByProps("getChannelId", "getLastSelectedChannelId");
			const Guilds = findByProps("getGuild");
			const CurrentGuilds = findByProps("getGuildId", "getLastSelectedGuildId");
			const Info = findByProps("getSessionId");
			const Status = findByProps("getStatus", "getActivities", "getState");
			const Users = findByProps("getUser", "getCurrentUser");
			const UserSettings = findByProps("guildFolders", "theme");
			const UserProfile = findByProps("getUserProfile");
			const Members = findByProps("getMember");
			const Activities = findByProps("getStatus", "getActivities", "getState");
			const Games = findByProps("getGame", "games");
			const Auth = findByProps("getId", "isGuest");
			const TypingUsers = findByProps("isTyping");
			var ToastWrapper = __webpack_require__(111);
			var ToastWrapper_options = {
				attributes: {
					ittai: true,
					plugin: "PetPet"
				}
			};
			ToastWrapper_options.insert = "head";
			ToastWrapper_options.singleton = false;
			injectStylesIntoStyleTag_default()(ToastWrapper.Z, ToastWrapper_options);
			const toast_ToastWrapper = ToastWrapper.Z.locals || {};
			function GenericToast({
				children
			}) {
				return React.createElement("div", {
					className: toast_ToastWrapper.toast
				}, children);
			}
			const {
				showToast,
				popToast
			} = findByProps("showToast");
			const show = (text, options) => {
				const toastID = options?.id ?? randomString(10);
				showToast({
					id: toastID,
					options: Object.assign({}, options, {
						position: POSITIONS.BOTTOM,
						component: "function" != typeof text ? React.createElement(GenericToast, null, text) : text()
					})
				});
				return toastID;
			};
			const pop = id => popToast(id);
			const ittai_toast_ToastWrapper = GenericToast;
			const POSITIONS = {
				TOP: 0,
				BOTTOM: 1
			};
			function nanoseconds() {
				const hrTime = process.hrtime();
				return 1e9 * hrTime[0] + hrTime[1];
			}
			function wait_randomString(time) {
				return new Promise(resolve => setTimeout(() => resolve(), time));
			}
			function getReactInstance(node) {
				"string" == typeof node && (node = document.querySelector(`${node}, .${node}, #${node}, [class*="${node}"]`));
				if (!node) return null;
				if (node.__reactFiber$) return node.__reactFiber$;
				if (node.__reactInternalInstance$) return node.__reactInternalInstance$;
				return node[Object.keys(node).find(e => e.startsWith("__reactFiber$"))] || node[Object.keys(node).find(e => e.startsWith("__reactInternalInstance"))];
			}
			function getOwnerInstance(node) {
				for (let curr = getReactInstance(node); curr; curr = curr.return) {
					const owner = curr.stateNode;
					if (owner) return owner;
				}
				return null;
			}
			function testComponent(Component) {
				ModalStack.openModal(() => Component);
			}
			function average(array) {
				if (0 === array.length) return 0;
				let total = 0;
				for (let i = 0; i < array.length; i++) total += array[i];
				return total / array.length;
			}
			function median(array) {
				if (0 === array.length) return 0;
				array.sort(function(a, b) {
					return a - b;
				});
				let half = Math.floor(array.length / 2);
				if (array.length % 2) return array[half];
				return (array[half - 1] + array[half]) / 2;
			}
			function benchmark(codeblock, times) {
				return new Promise(resolve1 => {
					const pre = codeblock.pre ?? (() => {});
					delete codeblock.pre;
					const post = codeblock.post ?? (() => {});
					delete codeblock.post;
					const name = Object.keys(codeblock)[0];
					codeblock = codeblock[Object.keys(codeblock)[0]];
					let promises = [];
					for (let i = 0; i < times; i++) promises.push(new Promise(resolve => {
						let returns, start, end;
						try {
							pre();
							start = nanoseconds();
							returns = codeblock();
							end = nanoseconds();
							post();
						} catch (e) {
							resolve({
								returns: returns,
								time: 0,
								error: e
							});
						}
						resolve({
							returns: returns,
							time: end - start,
							error: false
						});
					}));
					Promise.all(promises).then(allReturns => {
						const finalTimes = allReturns.map(r => r.time);
						resolve1({
							name: name,
							average: average(finalTimes),
							median: median(finalTimes),
							error: allReturns[0].error,
							returns: allReturns[0].returns
						});
					});
				});
			}
			function multiBenchmark(codeblocks, times) {
				return new Promise(resolve => {
					const start = nanoseconds();
					Promise.all(codeblocks.map(codeblock => benchmark(codeblock, times))).then(results => {
						const end = nanoseconds();
						const groupName = `Benchmarked ${codeblocks.length.toLocaleString()} functions ${times.toLocaleString()} times over ${(end - start).toLocaleString()}ns.`;
						group(groupName);
						const mappedResults = Object.values(results).map(result => {
							return {
								Name: result.name,
								"Median Time": `${result.median.toLocaleString()}ns`,
								"Average Time": `${result.average.toLocaleString()}ns`,
								Returns: result.returns,
								Error: result.error,
								"(Median Time)": result.median,
								"(Average Time)": result.average
							};
						});
						const successfulResults = mappedResults.filter(result => false === result.Error);
						const erroredResults = mappedResults.filter(result => !!result.Error);
						console.table(successfulResults.sort((result1, result2) => {
							if (result1["(Median Time)"] > result2["(Median Time)"]) return 1;
							if (result1["(Median Time)"] < result2["(Median Time)"]) return -1;
							return 0;
						}), [ "Name", "Median Time", "Average Time", "Returns" ]);
						0 < erroredResults.length && console.table(erroredResults, [ "Name", "Error" ]);
						groupEnd(groupName);
						resolve(results);
					});
				});
			}
			function searchClassNameModules(className) {
				return find(m => Object.values(m).some(v => "string" == typeof v && ~v.split(" ").indexOf(className)));
			}
			function messageBox_extends() {
				messageBox_extends = Object.assign || function(target) {
					for (var i = 1; i < arguments.length; i++) {
						var key, source = arguments[i];
						for (key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
					}
					return target;
				};
				return messageBox_extends.apply(this, arguments);
			}
			const messageBox = (title, description, buttons) => {
				return new Promise(resolve => {
					ModalActions.openModal(props => React.createElement(Modal.ModalRoot, messageBox_extends({}, props), React.createElement(Modal.ModalHeader, {
						separator: false
					}, React.createElement(Heading, {
						variant: "heading-lg/medium"
					}, title)), React.createElement(Modal.ModalContent, null, React.createElement(Text, null, description)), React.createElement(Modal.ModalFooter, null, buttons.map(button => React.createElement(Button, {
						onClick: () => {
							button.action();
							props.onClose();
							resolve(button);
						},
						color: button.color ?? Button.Colors.BRAND,
						look: button.look ?? Button.Looks.FILLED
					}, button.text)))));
				});
			};
			const discordGetMessages = findByProps("getMessages", "getMessage")["getMessages"];
			function getMessages(channelID) {
				const messages = _.merge(_.keyBy(discordGetMessages(channelID)._array, "id"), messageCache[channelID] ?? {});
				return messageCache[channelID] = messages;
			}
			const discordGetMessage = findByProps("getMessages", "getMessage")["getMessage"];
			const getMessageByReference = findByProps("getMessageByReference")["getMessageByReference"];
			function getMessage(channelID, messageID) {
				return _.set(messageCache, [ channelID, messageID ], discordGetMessage(channelID, messageID) ?? getMessageByReference({
					message_id: messageID,
					channel_id: channelID
				}).message ?? messageCache[channelID]?.[messageID])[channelID][messageID];
			}
			const Endpoints = findByProps("Endpoints")["Endpoints"];
			const User = findByPrototype("tag");
			const Timestamp = findByPrototype("toDate", "month");
			const Message = findByPrototype("isEdited");
			const DiscordAPI = findByProps("getAPIBaseURL");
			function fetchMessage(channelID, messageID) {
				return new Promise((resolve, reject) => {
					const message = getMessage(channelID, messageID);
					if (message) return resolve(message);
					DiscordAPI.get({
						url: Endpoints.MESSAGES(channelID),
						query: {
							limit: 100,
							around: messageID
						}
					}).then(res => {
						if (200 != res.status) return reject();
						for (let m of res.body) {
							m.author = new User(m.author);
							m.timestamp = new Timestamp(m.timestamp);
							m = new Message(m);
							_.set(messageCache, [ m.channel_id, m.id ], m);
						}
						const foundMessage = messageCache[channelID]?.[messageID];
						foundMessage && resolve(foundMessage);
						reject();
					}).catch(res => {
						if (403 != res.status) return reject();
					});
				});
			}
			const updateMessage_FluxDispatcher = findByProps("dispatch", "dirtyDispatch");
			function updateMessage(message, props = {}) {
				updateMessage_FluxDispatcher.dirtyDispatch({
					...props,
					type: "MESSAGE_UPDATE",
					message: message
				});
			}
			const rerenderMessage_discordGetMessage = findByProps("getMessages", "getMessage")["getMessage"];
			function rerenderMessage(idOrMessage, props = {}) {
				let message = "string" == typeof idOrMessage ? rerenderMessage_discordGetMessage(idOrMessage) : idOrMessage;
				if (!message) return;
				message = {
					id: message.id,
					channel_id: message.channel_id,
					content: message.content
				};
				updateMessage(message, props);
			}
			const rerenderAllMessages_discordGetMessages = findByProps("getMessages", "getMessage")["getMessages"];
			const getChannelId = findByProps("getChannelId")["getChannelId"];
			function rerenderAllMessages(props = {}) {
				const messages = rerenderAllMessages_discordGetMessages(getChannelId())._array;
				for (const message of messages) rerenderMessage(message, props);
			}
			let messageCache = {};
			loadDevServer();
			function Plugin_defineProperty(obj, key, value) {
				key in obj ? Object.defineProperty(obj, key, {
					value: value,
					enumerable: true,
					configurable: true,
					writable: true
				}) : obj[key] = value;
				return obj;
			}
			class Plugin_Plugin {
				start() {}
				stop() {}
				setSettingsPanel(component) {
					this.__ittaiInternalPlugin.setSettingsPanel(component);
				}
				removeSettingsPanel() {
					this.__ittaiInternalPlugin.removeSettingsPanel();
				}
				log(...args) {
					log(...args);
				}
				debug(...args) {
					debug(...args);
				}
				warn(...args) {
					warn(...args);
				}
				error(...args) {
					error(...args);
				}
				static __ittaiWrap(pluginClass, startDevMode) {
					startDevMode && console.log("loading in dev mode");
					const cls = class extends (() => {
						switch (getClientMod()) {
						case "powercordv2":
							return PCv2Plugin;

						case "betterdiscord":
							return BDPlugin;

						case "goosemod":
							return GMPlugin;

						default:
							return class {};
						}
					})() {
						start() {
							try {
								this.cachedCss.forEach((e, k) => {
									const elem = Object.assign(document.createElement("style"), {
										innerText: e
									});
									elem.setAttribute("ittai", "true");
									elem.setAttribute("plugin", ittaiconfig_namespaceObject.I.u2.replace(/ /g, ""));
									document.head.appendChild(elem);
									delete this.cachedCss[k];
								});
								if (Boolean(ittaiconfig_namespaceObject.changelog) && !hasSeenChangelog()) {
									setSeenChangelog(true);
									openChangelogModal();
								}
								return this.instance.start();
							} catch (err) {
								console.error(err);
								throw err;
							}
						}
						stop() {
							try {
								const res = this.instance.stop();
								unpatchAll();
								this.hasSettingsPanel && this.removeSettingsPanel();
								document.querySelectorAll(`style[ittai][plugin="${ittaiconfig_namespaceObject.I.u2.replace(/ /g, "")}"]`)?.forEach(e => {
									this.cachedCss.push(e.innerText);
									e.remove();
								});
								return res;
							} catch (err) {
								console.error(err);
								throw err;
							}
						}
						setSettingsPanel(component) {
							this.hasSettingsPanel = true;
							this.__ittaiInternals.setSettingsPanel(component);
						}
						removeSettingsPanel() {
							if (this.hasSettingsPanel) {
								this.hasSettingsPanel = false;
								this.__ittaiInternals.removeSettingsPanel();
							}
						}
						constructor(...args) {
							super(...args);
							Plugin_defineProperty(this, "hasSettingsPanel", false);
							Plugin_defineProperty(this, "cachedCss", []);
							setInstance(this.__ittaiInternals);
							this.instance = new pluginClass();
							this.friendlyName = this.instance.friendlyName;
							this.instance.__ittaiInternalPlugin = this;
							globalThis["ittai" + this.friendlyName.toLowerCase().replace(/ /g, "")] = ittai_namespaceObject;
							document.querySelectorAll(`style[ittai][plugin="${ittaiconfig_namespaceObject.I.u2.replace(/ /g, "")}"]`)?.forEach(e => {
								this.cachedCss.push(e.innerText);
								e.remove();
							});
						}
					};
					if ("goosemod" === getClientMod()) {
						const instance = new cls(), handlers = {
							goosemodHandlers: instance.goosemodHandlers
						};
						startDevMode && loadDevPlugin(handlers);
						return handlers;
					}
					startDevMode && loadDevPlugin(cls);
					return cls;
				}
				constructor() {
					Plugin_defineProperty(this, "friendlyName", ittaiconfig_namespaceObject.I.u2);
				}
			}
			var gifencoder = __webpack_require__(985);
			var gifencoder_default = __webpack_require__.n(gifencoder);
			function reportError(context, content) {
				botMessage.sendMessage(context.channel.id, {
					content: content
				});
			}
			const defaults = {
				resolution: 128,
				delay: 20
			};
			let index_frames;
			let cmdId = -1;
			class PetPet extends Plugin_Plugin {
				start() {
					console.log("hi");
					cmdId = registerCommand({
						inputType: 0,
						type: 1,
						name: "petpet",
						description: "Make a pet gif",
						options: [ {
							name: "user",
							description: "the user to pet",
							type: CommandTypes.ApplicationCommandOptionType.USER
						}, {
							name: "user-id",
							description: "the id of the user to pet",
							type: CommandTypes.ApplicationCommandOptionType.STRING
						}, {
							name: "image-url",
							description: "the url of the image to create the gif for",
							type: CommandTypes.ApplicationCommandOptionType.STRING
						}, {
							name: "emote",
							description: "the emote to create the gif for",
							type: CommandTypes.ApplicationCommandOptionType.STRING
						} ],
						execute: async (opts, context) => {
							if (1 !== opts.length) return reportError(context, "Please specify exactly 1 option.");
							const {
								name,
								value
							} = opts[0];
							let url;
							switch (name) {
							case "emote":
								const match = /<?(a)?:?(\w{2,32}):(\d{17,19})>?/.exec(value);
								if (!match) return reportError(context, "That was not a valid emote!");
								url = `https://cdn.discordapp.com/emojis/${match[3]}.${match[1] ? "gif" : "png"}`;
								break;

							case "user":
							case "user-id":
								const user = await findByProps("getUser").getUser(value).catch(() => void 0);
								if (!user) return reportError(context, "Failed to fetch that user D:");
								url = user.getAvatarURL();
								if (!url) return reportError(context, "That user has no avatar!");
								break;

							case "image-url":
								url = value;
								break;

							default:
								return reportError(context, "whaaa how??");
							}
							const av = await this.loadImage(url).catch(() => void 0);
							if (!av) return reportError(context, "Failed to fetch that image D:");
							try {
								var buf = await this.petpet(av, {});
							} catch (err) {
								const why = String(err.stack ?? err.message ?? err);
								this.error("Failed to create petpet gif", why);
								return reportError(context, why);
							}
							const file = new File([ buf ], "petpet.gif", {
								type: "image/gif"
							});
							findByProps("promptToUpload").promptToUpload([ file ], context.channel, 0);
						}
					});
				}
				stop() {
					unregisterCommand(cmdId);
				}
				loadImage(src) {
					return new Promise(async (resolve, reject) => {
						const img = new Image();
						img.onload = () => {
							resolve(img);
						};
						img.onerror = reject;
						img.crossOrigin = "Anonymous";
						img.src = src;
					});
				}
				async petpet(avatar, customOptions) {
					index_frames || (index_frames = await Promise.all(Array(10).fill(null).map((_, i) => {
						return this.loadImage(`https://raw.githubusercontent.com/Vendicated/PetPet/main/frames/pet${i}.gif`);
					})));
					const FRAMES = index_frames.length, options = {
						...defaults,
						...customOptions
					}, encoder = new (gifencoder_default())(options.resolution, options.resolution);
					encoder.start();
					encoder.setRepeat(0);
					encoder.setDelay(options.delay);
					encoder.setTransparent();
					const canvas = document.createElement("canvas"), ctx = (canvas.width = canvas.height = options.resolution, 
					canvas.getContext("2d"));
					for (let i1 = 0; i1 < FRAMES; i1++) {
						ctx.clearRect(0, 0, canvas.width, canvas.height);
						const j = i1 < FRAMES / 2 ? i1 : FRAMES - i1, width = .8 + .02 * j, height = .8 - .05 * j, offsetX = .5 * (1 - width) + .1, offsetY = 1 - height - .08;
						ctx.drawImage(avatar, options.resolution * offsetX, options.resolution * offsetY, options.resolution * width, options.resolution * height);
						ctx.drawImage(index_frames[i1], 0, 0, options.resolution, options.resolution);
						encoder.addFrame(ctx);
					}
					encoder.finish();
					return encoder.out.getData();
				}
			}
		},
		634: module => {
			"use strict";
			module.exports = require("powercord");
		},
		312: module => {
			"use strict";
			module.exports = require("powercord/webpack");
		},
		781: module => {
			"use strict";
			module.exports = require("stream");
		}
	};
	var __webpack_module_cache__ = {};
	function __webpack_require__(moduleId) {
		var cachedModule = __webpack_module_cache__[moduleId];
		if (void 0 !== cachedModule) return cachedModule.exports;
		var module = __webpack_module_cache__[moduleId] = {
			id: moduleId,
			exports: {}
		};
		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
		return module.exports;
	}
	(() => {
		__webpack_require__.n = module => {
			var getter = module && module.__esModule ? () => module["default"] : () => module;
			__webpack_require__.d(getter, {
				a: getter
			});
			return getter;
		};
	})();
	(() => {
		__webpack_require__.d = (exports, definition) => {
			for (var key in definition) __webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key) && Object.defineProperty(exports, key, {
				enumerable: true,
				get: definition[key]
			});
		};
	})();
	(() => {
		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
	})();
	(() => {
		__webpack_require__.r = exports => {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
				value: "Module"
			});
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
		};
	})();
	var __webpack_exports__ = __webpack_require__(973);
	plugin = __webpack_exports__;
})();
//# sourceMappingURL=index.js.map
plugin = plugin.default;let ittaiLoadDevMode = false;try{isIttaiLoadingDevMode;ittaiLoadDevMode=true;}catch(e){}let wrappedPlugin = plugin.__ittaiWrap(plugin, ittaiLoadDevMode);if (hasModule) module.exports = wrappedPlugin;return wrappedPlugin;})();