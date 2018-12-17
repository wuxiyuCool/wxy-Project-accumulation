webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(55)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(75),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(59)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(79),
  /* scopeId */
  "data-v-2bf784c0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(56)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(76),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(57)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(50),
  /* template */
  __webpack_require__(77),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(58)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(78),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatDate;
function formatDate(date, fmt) {
  //匹配年字符串，若可以匹配，则执行替换
  if (/(y+)/.test(fmt)) {
    //将yyyy替换为真实年份，substr是为了年份可以以不同长度显示
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '')).substr(4 - RegExp.$1.length);
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  //遍历匹配月、日、时、分、秒，并替换
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}
//数字为单数时，在前面补零
function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}


/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_seller_seller__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_seller_seller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_seller_seller__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_goods_goods__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_goods_goods___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_goods_goods__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ratings_ratings__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ratings_ratings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_ratings_ratings__);






__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    redirect: '/goods'
  }, {
    path: '/goods',
    component: __WEBPACK_IMPORTED_MODULE_3__components_goods_goods___default.a
  }, {
    path: '/seller',
    component: __WEBPACK_IMPORTED_MODULE_2__components_seller_seller___default.a
  }, {
    path: '/ratings',
    component: __WEBPACK_IMPORTED_MODULE_4__components_ratings_ratings___default.a
  }]
}));

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(86);



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: {
    foods: [],
    ballEle: {}
  },
  mutations: {
    changeFoods: function changeFoods(state, payload) {
      state.foods = payload.foodList;
    },
    initBallEle: function initBallEle(state, payload) {
      state.ballEle = payload.el;
    }
  }
}));

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(62)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(82),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header_header__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_header_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_shopcart_shopcart__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_shopcart_shopcart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_shopcart_shopcart__);





var ERR_OK = 0;
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'v-header': __WEBPACK_IMPORTED_MODULE_0__components_header_header___default.a,
    shopcart: __WEBPACK_IMPORTED_MODULE_1__components_shopcart_shopcart___default.a
  },
  data: function data() {
    return {
      seller: {}
    };
  },
  created: function created() {
    var _this = this;

    this.$http.get('/api/seller').then(function (response) {
      if (response.data.errno === ERR_OK) _this.seller = response.data.data;
    }, function (response) {
      console.log('error,no data');
    });
  },

  computed: {
    selectedFoods: function selectedFoods() {
      return this.$store.state.foods;
    }
  },
  methods: {
    change: function change(food) {
      this.foods = food;
    }
  }
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    food: {
      type: Object
    }
  },
  data: function data() {
    return {};
  },

  methods: {
    addCart: function addCart(event) {
      if (!this.food.count) {
        this.$set(this.food, 'count', 1);
      } else {
        this.food.count++;
      }
      this.$store.commit({
        type: 'initBallEle',
        el: event.target
      });
      this.$root.$emit('add_cart');
    },
    decreaseCart: function decreaseCart(event) {
      if (this.food.count) {
        this.food.count--;
      }
    }
  }
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_iscroll__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_iscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_iscroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_js_formatDate__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cartcontrol_cartcontrol__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cartcontrol_cartcontrol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__cartcontrol_cartcontrol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__split_split__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__split_split___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__split_split__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ratingselect_ratingselect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ratingselect_ratingselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ratingselect_ratingselect__);








var ALL = 2;
var POSITIVE = 0;
var NEGATIVE = 1;

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      foodShow: false,
      selectType: ALL,
      onlyContent: false,
      desc: {
        all: '全部',
        positive: '推荐',
        negative: '吐槽'
      }
    };
  },

  props: {
    food: {
      type: Object
    }
  },
  methods: {
    show: function show() {
      this.foodShow = true;
      this.selectType = ALL;
      this.onlyContent = false;
      this.$nextTick(function () {
        if (!this.scroll) {
          this.scroll = new __WEBPACK_IMPORTED_MODULE_0_iscroll___default.a(this.$refs.food, {
            click: true
          });
        }
        this.scroll.refresh();
      });
    },
    back: function back() {
      this.foodShow = false;
    },
    addFirst: function addFirst() {
      if (!this.food.count) {
        this.$set(this.food, 'count', 1);
      } else {
        this.food.count++;
      }
      this.$store.commit({
        type: 'initBallEle',
        el: event.target
      });
      this.$root.$emit('add_cart');
    },
    needShow: function needShow(type, text) {
      if (this.foodShow === false) {
        return;
      }
      if (this.onlyContent && !text) {
        return false;
      }
      if (this.selectType === ALL) {
        return true;
      } else {
        return this.selectType === type;
      }
    },
    typeChange: function typeChange(type) {
      var _this = this;

      this.selectType = type;
      this.$nextTick(function () {
        _this.scroll.refresh();
      });
    },
    onlyContentChange: function onlyContentChange() {
      var _this2 = this;

      this.onlyContent = !this.onlyContent;
      this.$nextTick(function () {
        _this2.scroll.refresh();
      });
    }
  },
  filters: {
    format: function format(time) {
      var date = new Date(time);
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_js_formatDate__["a" /* formatDate */])(date, 'yyyy-MM-dd hh:mm');
    }
  },
  components: {
    cartcontrol: __WEBPACK_IMPORTED_MODULE_2__cartcontrol_cartcontrol___default.a,
    split: __WEBPACK_IMPORTED_MODULE_3__split_split___default.a,
    ratingselect: __WEBPACK_IMPORTED_MODULE_4__ratingselect_ratingselect___default.a
  }
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_iscroll_build_iscroll_probe__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_iscroll_build_iscroll_probe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_iscroll_build_iscroll_probe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_better_scroll__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopcart_shopcart__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopcart_shopcart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__shopcart_shopcart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cartcontrol_cartcontrol__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cartcontrol_cartcontrol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__cartcontrol_cartcontrol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__food_food__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__food_food___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__food_food__);







var ERR_OK = 0;

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    seller: {
      type: Object
    }
  },
  data: function data() {
    return {
      goods: [],
      foodListHeights: [],
      currentY: 0,
      selectedFood: {}
    };
  },
  created: function created() {
    var _this = this;
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    this.$http.get('/api/goods').then(function (response) {
      if (response.data.errno === ERR_OK) {
        _this.goods = response.data.data;
      }
      _this.$nextTick(function () {
        _this.initScroll();
        _this.calcHeight();
      });
    }, function (response) {
      console.log('error,no data');
    });
  },

  watch: {
    selectFoods: function selectFoods() {}
  },
  computed: {
    currentIndex: function currentIndex() {
      for (var i = 0; i < this.foodListHeights.length - 1; i++) {
        var heightBottom = this.foodListHeights[i];
        var heightTop = this.foodListHeights[i + 1];

        var diff = Math.abs(this.currentY - heightTop);
        if (diff < 5) {
          this.currentY = heightTop;
        }

        if (this.currentY < heightTop && this.currentY >= heightBottom) {
          return i;
        }
      }
    },
    selectFoods: function selectFoods() {
      var foods = [];
      this.goods.forEach(function (good) {
        good.foods.forEach(function (food) {
          if (food.count) {
            foods.push(food);
          }
        });
      });
      this.$store.commit({
        type: 'changeFoods',
        foodList: foods
      });
    }
  },
  methods: {
    initScroll: function initScroll() {
      this.menuScroll = new __WEBPACK_IMPORTED_MODULE_0__node_modules_iscroll_build_iscroll_probe___default.a(this.$refs.menu, {
        click: true
      });
      this.foodsScroll = new __WEBPACK_IMPORTED_MODULE_0__node_modules_iscroll_build_iscroll_probe___default.a(this.$refs.foods, {
        probeType: 3,
        click: true
      });
      var _this = this;
      this.foodsScroll.on('scroll', function () {
        _this.currentY = Math.abs(Math.round(this.y));
      });
    },
    calcHeight: function calcHeight() {
      var foodList = this.$refs.foods.getElementsByClassName('food-list-hook');
      var height = 0;
      this.foodListHeights.push(height);
      for (var i = 0; i < foodList.length; i++) {
        height += foodList[i].clientHeight;
        this.foodListHeights.push(height);
      }
    },
    scrollTo: function scrollTo(index) {
      var target = this.foodListHeights[index];
      this.foodsScroll.scrollTo(0, -target, 300);
    },
    selectFood: function selectFood(food) {
      this.selectedFood = food;
      this.$refs.food.show();
    }
  },
  components: {
    shopcart: __WEBPACK_IMPORTED_MODULE_2__shopcart_shopcart___default.a,
    cartcontrol: __WEBPACK_IMPORTED_MODULE_3__cartcontrol_cartcontrol___default.a,
    food: __WEBPACK_IMPORTED_MODULE_4__food_food___default.a
  }
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__star_star__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__star_star___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__star_star__);




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    star: __WEBPACK_IMPORTED_MODULE_0__star_star___default.a
  },
  props: {
    headerSeller: {
      type: Object
    }
  },
  data: function data() {
    return {
      detailShow: false
    };
  },

  methods: {
    showDetail: function showDetail() {
      this.detailShow = true;
    },
    closeDetail: function closeDetail() {
      this.detailShow = false;
    }
  },
  created: function created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  }
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_iscroll__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_iscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_iscroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__star_star__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__star_star___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__star_star__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopcart_shopcart__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopcart_shopcart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__shopcart_shopcart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__split_split__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__split_split___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__split_split__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ratingselect_ratingselect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ratingselect_ratingselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ratingselect_ratingselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_js_formatDate__ = __webpack_require__(17);









var ERR_OK = 0;
var ALL = 2;

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    seller: {
      type: Object
    }
  },
  data: function data() {
    return {
      ratings: [],
      selectType: ALL,
      onlyContent: false
    };
  },
  created: function created() {
    var _this = this;

    this.$http.get('api/ratings').then(function (response) {
      if (response.data.errno === ERR_OK) _this.ratings = response.data.data;
      _this.$nextTick(function () {
        _this.scroll = new __WEBPACK_IMPORTED_MODULE_0_iscroll___default.a(_this.$refs.ratings, {
          click: true
        });
      });
    });
  },

  methods: {
    needShow: function needShow(type, text) {
      if (this.foodShow === false) {
        return;
      }
      if (this.onlyContent && !text) {
        return false;
      }
      if (this.selectType === ALL) {
        return true;
      } else {
        return this.selectType === type;
      }
    },
    typeChange: function typeChange(type) {
      var _this2 = this;

      this.selectType = type;
      this.$nextTick(function () {
        _this2.scroll.refresh();
      });
    },
    onlyContentChange: function onlyContentChange() {
      var _this3 = this;

      this.onlyContent = !this.onlyContent;
      this.$nextTick(function () {
        _this3.scroll.refresh();
      });
    }
  },
  filters: {
    format: function format(time) {
      var date = new Date(time);
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__common_js_formatDate__["a" /* formatDate */])(date, 'yyyy-MM-dd hh:mm');
    }
  },
  components: {
    star: __WEBPACK_IMPORTED_MODULE_1__star_star___default.a,
    split: __WEBPACK_IMPORTED_MODULE_3__split_split___default.a,
    ratingselect: __WEBPACK_IMPORTED_MODULE_4__ratingselect_ratingselect___default.a,
    shopcart: __WEBPACK_IMPORTED_MODULE_2__shopcart_shopcart___default.a
  }
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


var POSITIVE = 0;
var NEGATIVE = 1;
var ALL = 2;

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    ratings: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    selectType: {
      type: Number,
      default: ALL
    },
    onlyContent: {
      type: Boolean,
      default: false
    },
    desc: {
      type: Object,
      default: function _default() {
        return {
          all: '全部',
          positive: '满意',
          negative: '不满意'
        };
      }
    }
  },
  methods: {
    select: function select(type) {
      this.$emit('typeChange', type);
    },
    toggleSwitch: function toggleSwitch() {
      this.$emit('onlyContentChange');
    }
  },
  computed: {
    positives: function positives() {
      return this.ratings.filter(function (rating) {
        return rating.rateType === POSITIVE;
      });
    },
    negatives: function negatives() {
      return this.ratings.filter(function (rating) {
        return rating.rateType === NEGATIVE;
      });
    }
  }
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_iscroll__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_iscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_iscroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__star_star__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__star_star___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__star_star__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__split_split__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__split_split___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__split_split__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopcart_shopcart__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopcart_shopcart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__shopcart_shopcart__);






/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    seller: {
      type: Object
    }
  },
  data: function data() {
    return {
      favorite: function () {
        if (!window.localStorage.favorite) {
          return false;
        } else {
          var favorite = JSON.parse(localStorage.favorite);
          return favorite || false;
        }
      }()
    };
  },

  computed: {
    favoriteText: function favoriteText() {
      return this.favorite ? '已收藏' : '收藏';
    }
  },
  created: function created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  },

  watch: {
    seller: function seller() {
      var _this = this;

      this.$nextTick(function () {
        _this._initScroll();
        _this._initPicscroll();
      });
    }
  },
  mounted: function mounted() {
    this._initScroll();
    this._initPicscroll();
  },

  methods: {
    _initScroll: function _initScroll() {
      if (!this.scroll) {
        this.scroll = new __WEBPACK_IMPORTED_MODULE_0_iscroll___default.a(this.$refs.seller, {
          click: true
        });
      } else {
        this.scroll.refresh();
      }
    },
    _initPicscroll: function _initPicscroll() {
      var _this2 = this;

      if (this.seller.pics) {
        var picWidth = 120;
        var margin = 6;
        var width = (picWidth + margin) * this.seller.pics.length - margin;
        this.$refs.piclist.style.width = width + 'px';
        this.$nextTick(function () {
          if (!_this2.picScroll) {
            _this2.picScroll = new __WEBPACK_IMPORTED_MODULE_0_iscroll___default.a(_this2.$refs.picwrapper, {
              scrollX: true,
              eventPassthrough: 'vertical'
            });
          } else {
            _this2.picScroll.refresh();
          }
        });
      }
    },
    toggleFavorite: function toggleFavorite() {
      this.favorite = !this.favorite;
      var storage = window.localStorage;
      storage.favorite = this.favorite;
    }
  },
  components: {
    star: __WEBPACK_IMPORTED_MODULE_1__star_star___default.a,
    split: __WEBPACK_IMPORTED_MODULE_2__split_split___default.a,
    shopcart: __WEBPACK_IMPORTED_MODULE_3__shopcart_shopcart___default.a
  }
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartcontrol_cartcontrol__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartcontrol_cartcontrol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__cartcontrol_cartcontrol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_iscroll__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_iscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_iscroll__);





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      balls: [{
        show: false
      }, {
        show: false
      }, {
        show: false
      }, {
        show: false
      }, {
        show: false
      }],
      dropBalls: [],
      show: false
    };
  },
  created: function created() {
    this.$root.$on('add_cart', this.drop);
  },

  props: {
    selectFoods: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  computed: {
    totalPrice: function totalPrice() {
      var price = 0;
      this.selectFoods.forEach(function (food) {
        price += food.count * food.price;
      });
      return price;
    },
    totalCount: function totalCount() {
      var count = 0;
      this.selectFoods.forEach(function (food) {
        count += food.count;
      });
      return count;
    },
    payDescription: function payDescription() {
      if (this.totalPrice === 0) {
        return '￥' + this.minPrice + '元起送';
      } else if (this.totalPrice < this.minPrice) {
        var diffence = this.minPrice - this.totalPrice;
        return '\u8FD8\u5DEE' + diffence + '\u5143\u8D77\u9001';
      } else {
        return '\u53BB\u7ED3\u7B97';
      }
    },
    payClass: function payClass() {
      if (this.totalPrice >= this.minPrice) return true;
      return false;
    },
    listShow: function listShow() {
      if (!this.totalCount) {
        this.show = true;
        return false;
      }
      var show = !this.show;
      if (show) {
        this.$nextTick(function () {
          if (!this.scroll) {
            this.scroll = new __WEBPACK_IMPORTED_MODULE_1_iscroll___default.a(this.$refs['list-content'], {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        });
      }
      return show;
    }
  },
  methods: {
    drop: function drop() {
      for (var i = 0; i < this.balls.length; i++) {
        var ball = this.balls[i];
        if (!ball.show) {
          ball.show = true;
          ball.el = this.$store.state.ballEle;
          this.dropBalls.push(ball);
          return;
        }
      }
    },
    beforeEnter: function beforeEnter(el) {
      for (var i = 0; i < this.balls.length; i++) {
        var ball = this.balls[i];
        if (ball.show) {
          console.log(ball);
          var rect = ball.el.getBoundingClientRect();
          var x = rect.left - 22;
          var y = -(window.innerHeight - rect.top - 48);
          el.style.display = "";
          el.style.webkitTransform = 'translate3d(0,' + y + 'px,0)';
          el.style.transform = 'translate3d(0,' + y + 'px,0)';
          var inner = el.getElementsByClassName('inner-hook')[0];
          inner.style.webkitTransform = 'translate3d(' + x + 'px,0,0)';
          inner.style.transform = 'translate3d(' + x + 'px,0,0)';
        }
      }
    },
    enter: function enter(el) {
      var rf = el.offsetHeight;

      this.$nextTick(function () {
        el.style.webkitTransform = 'translate3d(0,0,0)';
        el.style.transform = 'translate3d(0,0,0)';
        var inner = el.getElementsByClassName('inner-hook')[0];
        inner.style.webkitTransform = 'translate3d(0,0,0)';
        inner.style.transform = 'translate3d(0,0,0)';
      });
    },
    afterEnter: function afterEnter(el) {
      var ball = this.dropBalls.shift();
      if (ball) {
        ball.show = false;
        el.style.display = 'none';
      }
    },
    toggleList: function toggleList() {
      if (!this.totalCount) {
        return;
      }
      this.show = !this.show;
    },
    emptyCart: function emptyCart() {
      this.selectFoods.forEach(function (food) {
        food.count = 0;
      });
    },
    pay: function pay() {
      if (this.totalPrice < this.minPrice) {
        return;
      }
      alert('支付功能还在开发中。。。');
    }
  },
  components: {
    cartcontrol: __WEBPACK_IMPORTED_MODULE_0__cartcontrol_cartcontrol___default.a
  }
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  data: function data() {
    return {};
  },

  computed: {
    starType: function starType() {
      return 'star_' + this.size;
    },
    itemClasses: function itemClasses() {
      var itemClasses = [];
      var score = Math.floor(this.score * 2) / 2;
      for (var i = 1; i <= score; i++) {
        itemClasses.push('on');
      }
      if (score % 1 != 0) {
        itemClasses.push('half');
      }
      while (itemClasses.length < 5) {
        itemClasses.push('off');
      }
      return itemClasses;
    }
  }
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_stylus_index_styl__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_stylus_index_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__common_stylus_index_styl__);








__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].prototype.$http = __WEBPACK_IMPORTED_MODULE_4_axios___default.a;

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */],
  data: {
    eventHub: new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]()
  },
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 52 */,
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 62 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(60)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(80),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(61)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(81),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(54)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(74),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(63)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(83),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(53)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(47),
  /* template */
  __webpack_require__(73),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "seller",
    staticClass: "seller"
  }, [_c('div', {
    staticClass: "seller-content"
  }, [_c('div', {
    staticClass: "overview"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.seller.name))]), _vm._v(" "), _c('div', {
    staticClass: "desc border-1px"
  }, [_c('star', {
    attrs: {
      "size": 36,
      "score": _vm.seller.score
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("(" + _vm._s(_vm.seller.ratingCount) + ")")]), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("月售" + _vm._s(_vm.seller.sellCount) + "单")])], 1), _vm._v(" "), _c('ul', {
    staticClass: "remark"
  }, [_c('li', {
    staticClass: "block"
  }, [_c('h2', {}, [_vm._v("起送价")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('span', {
    staticClass: "stress"
  }, [_vm._v(_vm._s(_vm.seller.minPrice))]), _vm._v("元")])]), _vm._v(" "), _c('li', {
    staticClass: "block"
  }, [_c('h2', {}, [_vm._v("商家配送")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('span', {
    staticClass: "stress"
  }, [_vm._v(_vm._s(_vm.seller.deliveryPrice))]), _vm._v("元")])]), _vm._v(" "), _c('li', {
    staticClass: "block"
  }, [_c('h2', {}, [_vm._v("平均配送时间")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('span', {
    staticClass: "stress"
  }, [_vm._v(_vm._s(_vm.seller.deliveryTime))]), _vm._v("元")])])]), _vm._v(" "), _c('div', {
    staticClass: "favorite",
    on: {
      "click": _vm.toggleFavorite
    }
  }, [_c('span', {
    staticClass: "icon-favorite",
    class: {
      active: _vm.favorite
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.favoriteText))])])]), _vm._v(" "), _c('split'), _vm._v(" "), _c('div', {
    staticClass: "bulletin"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("商家公告")]), _vm._v(" "), _c('div', {
    staticClass: "content-wrapper"
  }, [_c('p', {
    staticClass: "content"
  }, [_vm._v(_vm._s(_vm.seller.bulletin))])]), _vm._v(" "), (_vm.seller.supports) ? _c('ul', {
    staticClass: "supports"
  }, _vm._l((_vm.seller.supports), function(item, index) {
    return _c('li', {
      staticClass: "supports-item border-1px"
    }, [_c('span', {
      staticClass: "icon",
      class: _vm.classMap[_vm.seller.supports[index].type]
    }), _vm._v(" "), _c('span', {
      staticClass: "text"
    }, [_vm._v(_vm._s(_vm.seller.supports[index].description))])])
  })) : _vm._e()]), _vm._v(" "), _c('split'), _vm._v(" "), _c('div', {
    staticClass: "pics"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("商家实景")]), _vm._v(" "), _c('div', {
    ref: "picwrapper",
    staticClass: "pic-wrapper"
  }, [_c('ul', {
    ref: "piclist",
    staticClass: "pic-list"
  }, _vm._l((_vm.seller.pics), function(pic) {
    return _c('li', {
      staticClass: "pic-item"
    }, [_c('img', {
      attrs: {
        "src": pic,
        "width": "120",
        "height": "90",
        "alt": "商家实景"
      }
    })])
  }))])]), _vm._v(" "), _c('split'), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("商家信息")]), _vm._v(" "), _c('ul', _vm._l((_vm.seller.infos), function(info) {
    return _c('li', {
      staticClass: "info-item"
    }, [_vm._v(_vm._s(info))])
  }))])], 1)])
},staticRenderFns: []}

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "v-header"
  }, [_c('div', {
    staticClass: "content-wrapper"
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('img', {
    attrs: {
      "width": "64",
      "height": "64",
      "src": _vm.headerSeller.avatar
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('span', {
    staticClass: "brand"
  }), _vm._v(" "), _c('span', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.headerSeller.name))])]), _vm._v(" "), _c('div', {
    staticClass: "description"
  }, [_vm._v("\n        " + _vm._s(_vm.headerSeller.description) + "/" + _vm._s(_vm.headerSeller.deliveryTime) + "分钟送达\n      ")]), _vm._v(" "), (_vm.headerSeller.supports) ? _c('div', {
    staticClass: "support"
  }, [_c('span', {
    staticClass: "icon",
    class: _vm.classMap[_vm.headerSeller.supports[0].type]
  }), _c('span', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.headerSeller.supports[0].description))])]) : _vm._e()]), _vm._v(" "), (_vm.headerSeller.supports) ? _c('div', {
    staticClass: "support-count",
    on: {
      "click": _vm.showDetail
    }
  }, [_c('span', {
    staticClass: "count"
  }, [_vm._v(_vm._s(_vm.headerSeller.supports.length) + "个")]), _vm._v(" "), _c('i', {
    staticClass: "icon-keyboard_arrow_right"
  })]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "bulletin-wrapper",
    on: {
      "click": _vm.showDetail
    }
  }, [_c('span', {
    staticClass: "bulletin-title"
  }), _c('span', {
    staticClass: "bulletin-text"
  }, [_vm._v(_vm._s(_vm.headerSeller.bulletin))]), _vm._v(" "), _c('i', {
    staticClass: "icon-keyboard_arrow_right"
  })]), _vm._v(" "), _c('div', {
    staticClass: "background"
  }, [_c('img', {
    attrs: {
      "src": _vm.headerSeller.avatar,
      "width": "100%",
      "height": "100%"
    }
  })]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.detailShow),
      expression: "detailShow"
    }],
    staticClass: "detail"
  }, [_c('div', {
    staticClass: "detail-wrapper clearfix"
  }, [_c('div', {
    staticClass: "detail-content"
  }, [_c('h1', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.headerSeller.name))]), _vm._v(" "), _c('div', {
    staticClass: "star-wrapper"
  }, [_c('star', {
    attrs: {
      "size": 48,
      "score": _vm.headerSeller.score
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v("优惠信息")]), _vm._v(" "), _c('div', {
    staticClass: "line"
  })]), _vm._v(" "), (_vm.headerSeller.supports) ? _c('ul', {
    staticClass: "supports"
  }, _vm._l((_vm.headerSeller.supports), function(item, index) {
    return _c('li', {
      staticClass: "supports-item"
    }, [_c('span', {
      staticClass: "icon",
      class: _vm.classMap[_vm.headerSeller.supports[index].type]
    }), _vm._v(" "), _c('span', {
      staticClass: "text"
    }, [_vm._v(_vm._s(_vm.headerSeller.supports[index].description))])])
  })) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v("商家公告")]), _vm._v(" "), _c('div', {
    staticClass: "line"
  })]), _vm._v(" "), (_vm.headerSeller.bulletin) ? _c('div', {
    staticClass: "bulletin"
  }, [_c('p', {
    staticClass: "content"
  }, [_vm._v(_vm._s(_vm.headerSeller.bulletin))])]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "detail-close",
    on: {
      "click": _vm.closeDetail
    }
  }, [_c('i', {
    staticClass: "icon-close"
  })])])])], 1)
},staticRenderFns: []}

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "shopcart"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "content-left",
    on: {
      "click": _vm.toggleList
    }
  }, [_c('div', {
    staticClass: "logo-wrapper"
  }, [_c('div', {
    staticClass: "logo",
    class: {
      active: _vm.totalCount > 0
    }
  }, [_c('i', {
    staticClass: "icon-shopping_cart",
    class: {
      active: _vm.totalCount > 0
    }
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.totalCount > 0),
      expression: "totalCount>0"
    }],
    staticClass: "num"
  }, [_vm._v(_vm._s(_vm.totalCount))])]), _vm._v(" "), _c('div', {
    staticClass: "price",
    class: {
      active: _vm.totalPrice > 0
    }
  }, [_vm._v("￥" + _vm._s(_vm.totalPrice) + "元")]), _vm._v(" "), _c('div', {
    staticClass: "description"
  }, [_vm._v("另需配送费￥" + _vm._s(_vm.deliveryPrice) + "元")])]), _vm._v(" "), _c('div', {
    staticClass: "content-right"
  }, [_c('div', {
    staticClass: "pay",
    class: {
      active: _vm.payClass
    },
    on: {
      "click": _vm.pay
    }
  }, [_vm._v(_vm._s(_vm.payDescription))])])]), _vm._v(" "), _c('div', {
    staticClass: "ball-container"
  }, _vm._l((_vm.balls), function(ball) {
    return _c('div', [_c('transition', {
      attrs: {
        "name": "drop"
      },
      on: {
        "before-enter": _vm.beforeEnter,
        "enter": _vm.enter,
        "after-enter": _vm.afterEnter
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (ball.show),
        expression: "ball.show"
      }],
      staticClass: "ball"
    }, [_c('div', {
      staticClass: "inner inner-hook"
    })])])], 1)
  })), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fold"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.listShow),
      expression: "listShow"
    }],
    staticClass: "shopcart-list"
  }, [_c('div', {
    staticClass: "list-header"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("购物车")]), _vm._v(" "), _c('span', {
    staticClass: "empty",
    on: {
      "click": _vm.emptyCart
    }
  }, [_vm._v("清空")])]), _vm._v(" "), _c('div', {
    ref: "list-content",
    staticClass: "list-content"
  }, [_c('ul', _vm._l((_vm.selectFoods), function(food) {
    return _c('li', {
      staticClass: "food"
    }, [_c('span', {
      staticClass: "name"
    }, [_vm._v(_vm._s(food.name))]), _vm._v(" "), _c('div', {
      staticClass: "price"
    }, [_c('span', [_vm._v("￥" + _vm._s(food.price * food.count))])]), _vm._v(" "), _c('div', {
      staticClass: "cartcontrol-wrapper"
    }, [_c('cartcontrol', {
      attrs: {
        "food": food
      }
    })], 1)])
  }))])])])], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.listShow),
      expression: "listShow"
    }],
    staticClass: "list-mask",
    on: {
      "click": _vm.toggleList
    }
  })])], 1)
},staticRenderFns: []}

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "split"
  })
},staticRenderFns: []}

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "star",
    class: _vm.starType
  }, _vm._l((_vm.itemClasses), function(itemClass) {
    return _c('span', {
      staticClass: "star-item",
      class: itemClass
    })
  }))
},staticRenderFns: []}

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ratingselect"
  }, [_c('div', {
    staticClass: "rating-type border-1px"
  }, [_c('span', {
    staticClass: "block positive",
    class: {
      active: _vm.selectType === 2
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.select(2)
      }
    }
  }, [_vm._v(_vm._s(_vm.desc.all) + "\n      "), _c('span', {
    staticClass: "count"
  }, [_vm._v(_vm._s(_vm.ratings.length))])]), _vm._v(" "), _c('span', {
    staticClass: "block positive",
    class: {
      active: _vm.selectType === 0
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.select(0)
      }
    }
  }, [_vm._v(_vm._s(_vm.desc.positive) + "\n      "), _c('span', {
    staticClass: "count"
  }, [_vm._v(_vm._s(_vm.positives.length))])]), _vm._v(" "), _c('span', {
    staticClass: "block negative",
    class: {
      active: _vm.selectType === 1
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.select(1)
      }
    }
  }, [_vm._v(_vm._s(_vm.desc.negative) + "\n      "), _c('span', {
    staticClass: "count"
  }, [_vm._v(_vm._s(_vm.negatives.length))])])]), _vm._v(" "), _c('div', {
    staticClass: "switch",
    class: {
      on: _vm.onlyContent
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.toggleSwitch($event)
      }
    }
  }, [_c('span', {
    staticClass: "icon-check_circle"
  }), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("只看有内容的评价")])])])
},staticRenderFns: []}

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cartcontrol"
  }, [_c('transition', {
    attrs: {
      "name": "move"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.food.count > 0),
      expression: "food.count>0"
    }],
    staticClass: "decrease",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.decreaseCart($event)
      }
    }
  }, [_c('span', {
    staticClass: "inner icon-remove_circle_outline"
  })])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.food.count > 0),
      expression: "food.count>0"
    }],
    staticClass: "count"
  }, [_vm._v(_vm._s(_vm.food.count))]), _vm._v(" "), _c('div', {
    staticClass: "add icon-add_circle",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.addCart($event)
      }
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "move"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.foodShow),
      expression: "foodShow"
    }],
    ref: "food",
    staticClass: "food"
  }, [_c('div', {
    staticClass: "food-content"
  }, [_c('div', {
    staticClass: "image-wrapper"
  }, [_c('img', {
    staticClass: "img",
    attrs: {
      "src": _vm.food.image
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "back",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.back($event)
      }
    }
  }, [_c('i', {
    staticClass: "icon-arrow_lift"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.food.name))]), _vm._v(" "), _c('div', {
    staticClass: "detail"
  }, [_c('span', {
    staticClass: "sell-count"
  }, [_vm._v("月售" + _vm._s(_vm.food.sellCount) + "份")]), _vm._v(" "), _c('span', {
    staticClass: "rating"
  }, [_vm._v("好评率" + _vm._s(_vm.food.rating))])]), _vm._v(" "), _c('div', {
    staticClass: "price"
  }, [_vm._v("\n          ￥\n          "), _c('span', {
    staticClass: "now"
  }, [_vm._v(_vm._s(_vm.food.price))]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.food.oldPrice),
      expression: "food.oldPrice"
    }],
    staticClass: "old"
  }, [_vm._v("￥" + _vm._s(_vm.food.oldPrice))])]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "buyFade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.food.count || _vm.food.count === 0),
      expression: "!food.count || food.count===0"
    }],
    staticClass: "buy",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.addFirst($event)
      }
    }
  }, [_vm._v("加入购物车")])]), _vm._v(" "), _c('div', {
    staticClass: "cartcontrol-wrapper"
  }, [_c('cartcontrol', {
    attrs: {
      "food": _vm.food
    }
  })], 1)], 1), _vm._v(" "), _c('split', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.food.info),
      expression: "food.info"
    }]
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.food.info),
      expression: "food.info"
    }],
    staticClass: "info"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("商品信息")]), _vm._v(" "), _c('p', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.food.info))])]), _vm._v(" "), _c('split'), _vm._v(" "), _c('div', {
    staticClass: "rating"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("商品评价")]), _vm._v(" "), _c('ratingselect', {
    attrs: {
      "select-type": _vm.selectType,
      "only-content": _vm.onlyContent,
      "desc": _vm.desc,
      "ratings": _vm.food.ratings
    },
    on: {
      "onlyContentChange": _vm.onlyContentChange,
      "typeChange": _vm.typeChange
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "rating-wrapper"
  }, [_c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.food.ratings && _vm.food.ratings.length),
      expression: "food.ratings && food.ratings.length"
    }]
  }, _vm._l((_vm.food.ratings), function(rating) {
    return _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.needShow(rating.rateType, rating.text)),
        expression: "needShow(rating.rateType,rating.text)"
      }],
      staticClass: "rating-item"
    }, [_c('div', {
      staticClass: "user"
    }, [_c('span', {
      staticClass: "name"
    }, [_vm._v(_vm._s(rating.username))]), _vm._v(" "), _c('img', {
      staticClass: "avatar",
      attrs: {
        "width": "12",
        "height": "12",
        "src": rating.avatar
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "time"
    }, [_vm._v(_vm._s(_vm._f("format")(rating.rateTime)))]), _vm._v(" "), _c('p', {
      staticClass: "text"
    }, [_c('span', {
      class: {
        'icon-thumb_up': rating.rateType === 0, 'icon-thumb_down': rating.rateType === 1
      }
    }), _vm._v(_vm._s(rating.text) + "\n              ")])])
  })), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.food.ratings || _vm.food.ratings.length === 0),
      expression: "!food.ratings || food.ratings.length===0"
    }],
    staticClass: "no-rating"
  }, [_vm._v("暂无评价")])])], 1)], 1)])])
},staticRenderFns: []}

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "goods"
  }, [_c('div', {
    ref: "menu",
    staticClass: "menu-wrapper"
  }, [_c('ul', _vm._l((_vm.goods), function(item, index) {
    return _c('li', {
      staticClass: "menu-item",
      class: {
        active: _vm.currentIndex === index
      },
      on: {
        "click": function($event) {
          _vm.scrollTo(index)
        }
      }
    }, [_c('span', {
      staticClass: "text border-1px"
    }, [(item.type > 0) ? _c('span', {
      staticClass: "icon",
      class: _vm.classMap[item.type]
    }) : _vm._e(), _vm._v(_vm._s(item.name) + "\n          ")])])
  }))]), _vm._v(" "), _c('div', {
    ref: "foods",
    staticClass: "foods-wrapper"
  }, [_c('ul', _vm._l((_vm.goods), function(item) {
    return _c('li', {
      staticClass: "food-list food-list-hook"
    }, [_c('h1', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('ul', _vm._l((item.foods), function(food) {
      return _c('li', {
        staticClass: "food-item border-1px",
        on: {
          "click": function($event) {
            _vm.selectFood(food)
          }
        }
      }, [_c('div', {
        staticClass: "icon"
      }, [_c('img', {
        attrs: {
          "width": "57",
          "height": "57",
          "src": food.icon
        }
      })]), _vm._v(" "), _c('div', {
        staticClass: "content"
      }, [_c('h2', {
        staticClass: "name"
      }, [_vm._v(_vm._s(food.name))]), _vm._v(" "), _c('p', {
        staticClass: "description"
      }, [_vm._v(_vm._s(food.description))]), _vm._v(" "), _c('div', {
        staticClass: "extra"
      }, [_c('span', {
        staticClass: "count"
      }, [_vm._v("月售" + _vm._s(food.sellCount) + "份")]), _vm._v(" "), _c('span', {}, [_vm._v("好评率" + _vm._s(food.rating) + "%")])]), _vm._v(" "), _c('div', {
        staticClass: "price"
      }, [_vm._v("\n                  ￥\n                  "), _c('span', {
        staticClass: "now"
      }, [_vm._v(_vm._s(food.price))]), _vm._v(" "), (food.oldPrice) ? _c('span', {
        staticClass: "old"
      }, [_vm._v("￥" + _vm._s(food.oldPrice))]) : _vm._e()]), _vm._v(" "), _c('div', {
        staticClass: "cartcontrol-wrapper"
      }, [_c('cartcontrol', {
        attrs: {
          "food": food
        }
      })], 1)])])
    }))])
  }))])]), _vm._v(" "), _c('food', {
    ref: "food",
    attrs: {
      "food": _vm.selectedFood
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app"
  }, [_c('v-header', {
    attrs: {
      "header-seller": _vm.seller
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "tab border-1px"
  }, [_c('div', {
    staticClass: "tab-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/goods"
    }
  }, [_vm._v("商品")])], 1), _vm._v(" "), _c('div', {
    staticClass: "tab-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/ratings"
    }
  }, [_vm._v("评论")])], 1), _vm._v(" "), _c('div', {
    staticClass: "tab-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/seller"
    }
  }, [_vm._v("商家")])], 1)]), _vm._v(" "), _c('keep-alive', [_c('router-view', {
    attrs: {
      "seller": _vm.seller
    }
  })], 1), _vm._v(" "), _c('shopcart', {
    attrs: {
      "select-foods": _vm.selectedFoods,
      "delivery-price": _vm.seller.deliveryPrice,
      "min-price": _vm.seller.minPrice
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "ratings",
    staticClass: "ratings"
  }, [_c('div', {
    staticClass: "ratings-content"
  }, [_c('div', {
    staticClass: "overview"
  }, [_c('div', {
    staticClass: "overview-left"
  }, [_c('h1', {
    staticClass: "score"
  }, [_vm._v(_vm._s(_vm.seller.score))]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("综合评分")]), _vm._v(" "), _c('div', {
    staticClass: "rank"
  }, [_vm._v("高于周边商家" + _vm._s(_vm.seller.rankRate) + "%")])]), _vm._v(" "), _c('div', {
    staticClass: "overview-right"
  }, [_c('div', {
    staticClass: "score-wrapper"
  }, [_c('span', {
    staticClass: "title"
  }, [_vm._v("服务态度")]), _vm._v(" "), _c('star', {
    attrs: {
      "size": 36,
      "score": _vm.seller.serviceScore
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "score"
  }, [_vm._v(_vm._s(_vm.seller.serviceScore))])], 1), _vm._v(" "), _c('div', {
    staticClass: "score-wrapper"
  }, [_c('span', {
    staticClass: "title"
  }, [_vm._v("商品评分")]), _vm._v(" "), _c('star', {
    attrs: {
      "size": 36,
      "score": _vm.seller.foodScore
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "score"
  }, [_vm._v(_vm._s(_vm.seller.foodScore))])], 1), _vm._v(" "), _c('div', {
    staticClass: "delivery-wrapper"
  }, [_c('span', {
    staticClass: "title"
  }, [_vm._v("送达时间")]), _vm._v(" "), _c('span', {
    staticClass: "delivery"
  }, [_vm._v(_vm._s(_vm.seller.deliveryTime) + "分钟")])])])]), _vm._v(" "), _c('split'), _vm._v(" "), _c('ratingselect', {
    attrs: {
      "onlyContent": _vm.onlyContent,
      "selectType": _vm.selectType,
      "ratings": _vm.ratings
    },
    on: {
      "onlyContentChange": _vm.onlyContentChange,
      "typeChange": _vm.typeChange
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "rating-wrapper"
  }, [_c('ul', _vm._l((_vm.ratings), function(rating) {
    return _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.needShow(rating.rateType, rating.text)),
        expression: "needShow(rating.rateType,rating.text)"
      }],
      staticClass: "rating-item"
    }, [_c('div', {
      staticClass: "avatar"
    }, [_c('img', {
      attrs: {
        "width": "28",
        "height": "28",
        "src": rating.avatar
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(rating.username))]), _vm._v(" "), _c('div', {
      staticClass: "star-wrapper"
    }, [_c('star', {
      attrs: {
        "size": 24,
        "score": rating.score
      }
    }), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (rating.deliveryTime),
        expression: "rating.deliveryTime"
      }],
      staticClass: "delivery"
    }, [_vm._v(_vm._s(rating.deliveryTime) + "分钟送达")])], 1), _vm._v(" "), _c('p', {
      staticClass: "text"
    }, [_vm._v(_vm._s(rating.text))]), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (rating.recommend && rating.recommend.length),
        expression: "rating.recommend && rating.recommend.length"
      }],
      staticClass: "recommend"
    }, [_c('span', {
      staticClass: "icon-thumb_up"
    }), _vm._v(" "), _vm._l((rating.recommend), function(item, index) {
      return _c('span', {
        staticClass: "item"
      }, [_vm._v(_vm._s(rating.recommend[index]))])
    })], 2), _vm._v(" "), _c('div', {
      staticClass: "time"
    }, [_vm._v(_vm._s(_vm._f("format")(rating.rateTime)))])])])
  }))])], 1)])
},staticRenderFns: []}

/***/ })
],[51]);
//# sourceMappingURL=app.47be67ec6acfd5223609.js.map