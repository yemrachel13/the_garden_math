(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,889,500);


(lib.Bitmap18 = function() {
	this.initialize(img.Bitmap18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1200);


(lib.Bitmap19 = function() {
	this.initialize(img.Bitmap19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,578,532);


(lib.Bitmap27 = function() {
	this.initialize(img.Bitmap27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,626,484);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,660,641);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,715,641);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,639);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,690,534);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,698,532);


(lib.house = function() {
	this.initialize(img.house);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,512);


(lib.next = function() {
	this.initialize(img.next);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,512);


(lib.ribbon = function() {
	this.initialize(img.ribbon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,512);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ty_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("audiomasstywav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.Bitmap19();
	this.instance.setTransform(0,0,0.6584,0.6426);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,380.6,341.9);


(lib.thankyou_btnBack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.next();
	this.instance.setTransform(111,119.2,0.2168,0.2328,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111,119.2);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(0,0,0.8043,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,715,500), null);


(lib.plus_btnNext = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.next();
	this.instance.setTransform(0,0,0.1719,0.176);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,90.1);


(lib.plus_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("audiomasspluswav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(0,0,0.3116,0.3247);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205.7,208.1);


(lib.playbtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZBjIAAgKIANgEQAEgCADgEQACgCADgIQABgGAAgOIAAg1IgBgaQgBgLgDgHQgCgHgDgFIgHgHQgFgDgGgCQgGgCgJAAQgJABgIADQgJADgKAIQgLAHgFAIQgEAIAAAJIAABLQAAASACAHQACAGAGAEQAFADANADIAAAKIhgAAIAAgKIAOgEQAEgCACgEQADgCACgIQABgGAAgOIAAhYIAAgVQgBgIgDgFQgDgFgFgCIgRgEIAAgKIA4gCIAQAAIgEAgIAEABQASgPAMgGQALgGAKgEQALgEAMAAQAOAAALADQAKACAIAGQAHAFAFAHQAGAIACALQADAMAAAQIAABMIABAUQABAHADADQABADAGADQAEADALACIAAAKg");
	this.shape.setTransform(129.65,40.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhUBjIAAgKIANgEQAEgCADgEQADgCABgIQABgGAAgOIAAhYIAAgVQgBgIgDgFQgCgFgGgCIgRgEIAAgKIA5gCIAPAAIgDAjIADABQAOgOALgIQALgHAOgFQANgEAQAAIAaABIAAAvIgbAAQgHgLgGgFQgGgFgMAAQgJAAgIAFQgJAEgHAHQgIAJgEAHQgDAHAAAKIAABGQABATACAHQADAHAGADQAGADAMACIAAAKg");
	this.shape_1.setTransform(105.8,40.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhLBfQgPgHgHgKQgIgLAAgPQAAgdAkgQQAjgQBFgCIAAgOQAAgVgEgMQgFgMgKgGQgLgGgQAAQgUAAgLAJQgMAIgGARIggAAIAAgbQAYgKAPgEQAQgFAQgDQAPgDAPAAQAZAAAOAHQAPAGAHANQAIANAAAbIAABGIAAAVIABAMQACAFACADQACADAFADIAQAEIAAAKIhEAAIACgdIgEgBQgVASgRAIQgUAIgVAAQgSAAgOgGgAglAPQgZALAAAVQAAAMAGAHQAFAGAIADQAJADAMAAQAQAAANgHQANgHAIgKQAHgLAAgKIAAgdQgwABgYAKg");
	this.shape_2.setTransform(82.95,41.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhJBLQgZgZAAgxQAAgdANgXQANgYAYgMQAYgNAfAAQAZAAARAHQARAGALAMQAKALAGARQAGARAAAcIiZAAIAAADQAAAYAHAQQAGAQAPAKQAPAJAXAAQAUAAAQgGQAPgHAQgOIAPAOQgPANgNAIQgOAIgPAEQgQAFgSAAQgyAAgagagAgihDQgQARgCAfIBpAAQgBgWgFgOQgGgOgKgHQgKgIgQAAQgYAAgPARg");
	this.shape_3.setTransform(58.5,41.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhvCLIAAgKQAPgDAFgEQAFgEACgIQABgHAAgPIAAivIgBgUQgBgHgDgDQgDgEgEgCQgFgDgLgCIAAgKIBnAAIAAAKIgQAEQgEADgDADQgDADgCAHIgBAVIAADPIA/AAIASgBIAMgDQAFgCAEgEQAEgDADgHQAEgGADgJQAEgKAEgSIAZAAIgFBSg");
	this.shape_4.setTransform(33.375,36.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF6633").ss(6,1,1).p("ArHlvIWPAAQBkAAAABkIAAIXQAABkhkAAI2PAAQhkAAAAhkIAAoXQAAhkBkAAg");
	this.shape_5.setTransform(81.2,36.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9933").s().p("ArHFwQhkAAAAhkIAAoXQAAhkBkAAIWPAAQBkAAAABkIAAIXQAABkhkAAg");
	this.shape_6.setTransform(81.2,36.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,168.4,79.6);


(lib.multiple_btnNext = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.next();
	this.instance.setTransform(0,0,0.1719,0.176);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,90.1);


(lib.multiple_btnBack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.next();
	this.instance.setTransform(88,90.1,0.1718,0.1759,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,90.1);


(lib.mul_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("audiomassmuwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(0,0,0.402,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,301.6,287.5);


(lib.minus_btnNext = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.next();
	this.instance.setTransform(0,0,0.1719,0.176);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,90.1);


(lib.minus_btnBack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.next();
	this.instance.setTransform(88,90.1,0.1719,0.176,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,90.1);


(lib.minus__btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("audiomassmiwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(0,0,0.3874,0.3513);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,277,225.2);


(lib.Home_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.house();
	this.instance.setTransform(0,0,0.0992,0.0875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50.8,44.8);


(lib.equal_btnNext = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.next();
	this.instance.setTransform(0,0,0.1719,0.176);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,90.1);


(lib.equal_btnBack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.next();
	this.instance.setTransform(88,90.1,0.1718,0.1759,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,90.1);


(lib.equal_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("audiomassewav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.Bitmap9();
	this.instance.setTransform(0,0,0.3042,0.3227);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212.3,171.7);


(lib.divide_btnNext = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.next();
	this.instance.setTransform(0,0,0.1719,0.176);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,90.1);


(lib.divide_btnBack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.next();
	this.instance.setTransform(88,90.1,0.1718,0.1759,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,90.1);


(lib.di_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("audiomassdwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.Bitmap8();
	this.instance.setTransform(0,0,0.2867,0.3218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,197.8,171.9);


// stage content:
(lib.Learn_Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Homescreen:0,Plus:29,Minus:59,Multilply:89,Divide:119,Equal:149,ThankYou:179};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,28,29,58,59,88,89,118,119,148,149,178,179,209];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.playBtn.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Plus');
		});
	}
	this.frame_28 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_29 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.plus_Btnnext.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Minus');
		});
	}
	this.frame_58 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_59 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.minus_Btnnext.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Multiply');
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.minus_Btnback.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Plus');
		});
	}
	this.frame_88 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_89 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.multiple_Btnnext.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Divide');
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.multiple_Btnback.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Minus');
		});
	}
	this.frame_118 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_119 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.divide_Btnnext.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Equal');
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.divide_Btnback.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Multiply');
		});
	}
	this.frame_148 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_149 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.equal_Btnback.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Divide');
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.equal_Btnnext.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('ThankYou');
		});
	}
	this.frame_178 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_179 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.thankyou_Btnback.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Equal');
		});
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.home_btn.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('./index.html', '_blank');
		});
	}
	this.frame_209 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(1).call(this.frame_29).wait(29).call(this.frame_58).wait(1).call(this.frame_59).wait(29).call(this.frame_88).wait(1).call(this.frame_89).wait(29).call(this.frame_118).wait(1).call(this.frame_119).wait(29).call(this.frame_148).wait(1).call(this.frame_149).wait(29).call(this.frame_178).wait(1).call(this.frame_179).wait(30).call(this.frame_209).wait(1));

	// action
	this.home_btn = new lib.Home_btn();
	this.home_btn.name = "home_btn";
	this.home_btn.setTransform(600.4,31.4,1,1,0,0,0,25.4,22.4);
	new cjs.ButtonHelper(this.home_btn, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAgQgKgLAAgTQAAgTAMgNQANgNAQAAQAOAAAHAIQAIAHAAAPIgHAGIgIgBIgnABQAAATAHAJQAGALALgBQAFABAHgDQAGgCAJgGIAEAFIgSANIgHADIgLACQgOAAgLgMgAgKgfQgFAFgDAMIAFAAQANAAATgCQAAgIgDgFQgFgHgJABQgGAAgGAEg");
	this.shape.setTransform(559.925,42.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA2AqIgXABIAAgGIACAAIAKgDIABgIIABgaQAAgPgBgEQgCgFgDgDQgEgCgGAAQgHAAgGAEQgGAFgCAGQgBAFAAASQAAAWABADQACABALACIAAAGIgVgBIgUABIAAgGIACAAQAJgCABgCQACgDAAgNIAAgZQAAgMgEgFQgEgEgHAAQgHgBgFAEQgGAEgDAGQgCAFAAALIAAAOQAAARABACQACACAJACIADAAIAAAGIgTgBIgXABIAAgGQAKgCACgBQABgCAAgLIAAgbQAAgQgBgCQgBgCgEgBIgIABIAAgEQAQgFALgHIADADQgCAHAAAHIANgLIAGgDQAEgDAGAAQAJAAAGAGQAFAEACAHQAJgLAFgCQAGgEAJAAQAGAAAGAEQAFACACADQADAEABAEIAAAOIAAAWIABAVIACADIALACIAAAGIgTgBg");
	this.shape_1.setTransform(548.175,42.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAhQgKgLAAgUQAAgVAMgMQAMgMATAAQASAAALALQALALAAAUQAAAUgMAMQgNANgSAAQgSAAgMgLgAgRgcQgIAHABAQQAAANACAHQACALAHAFQAGAGAIAAQAKAAAHgIQAHgIAAgSQAAgTgHgKQgJgKgKABQgKgBgGAIg");
	this.shape_2.setTransform(535.6,42.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAmA9IgbABIAAgGIAQgDIADgCIACgHIAAgpIgjAAIgcAAIABAqQAAAFABABQAAABAEACIAOACIAAAGIgegBIgaABIAAgGIANgCQABgBABAAQABAAAAAAQABAAAAgBQABAAAAAAQABgCABgFIAAgtIgBguIgBgFIgEgCIgOgCIAAgGIAdABIAcgBIAAAGIgQACIgDACIgBAFIgBApIAdAAIAiAAIAAgpQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgCgBgFgBIgNgCIAAgGIAeABIAcgBIAAAGIgRADIgCACQgBACAAAHIAAAsIAAArQAAAEACACQACABAQADIAAAGIgfgBg");
	this.shape_3.setTransform(523.5,40.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003300").s().p("AibB/Qg1gBgkgkQglgmAAg0QAAgzAlglQAkglA1AAIE3AAQA1AAAkAlQAlAlAAAzQAAA0glAmQgkAkg1ABg");
	this.shape_4.setTransform(539.15,41.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.home_btn}]},179).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.home_btn}]},30).wait(1));

	// content
	this.playBtn = new lib.playbtn();
	this.playBtn.name = "playBtn";
	this.playBtn.setTransform(320.15,308.6,1,1,0,0,0,81.2,36.8);
	new cjs.ButtonHelper(this.playBtn, 0, 1, 1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABRB1IhDADIAAgOQAdgIADgDQAEgDABgGQACgZAAgxQAAg1gCgLQgDgQgLgJQgLgIgQAAQgPAAgPAJQgQAJgHAQQgIAQAAAfQAABXAEAHQADAHAZAHIAKACIAAAOQghgDgWAAQgWAAgqADIAAgOQAdgHADgDQADgCABgIQADgXAAgoQAAhSgCgHQgDgKgMAAIgQABIgKACIAAgPQAsgKAkgVIAGAFQgDAUgBAWIAfgeQAIgHAKgEQAOgGAPAAQAjAAASAYQAMAPAAAmIgBA6QAAA7ACALQABAHAEADQADADAUAFIALACIAAAOQgdgDgXAAg");
	this.shape_5.setTransform(499.975,118.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQB1QgVAAgwADIAAgOQAigIAEgEQAEgFAAgUIABg1QAAhNgCgGQgCgKgMAAIgUADIgHABIAAgOQAugMAggUIAGAFQgEAYAAAcQAcgkAMgIQAMgIAQAAQAKAAANAFQgFAZgEAaIgMAAQgCgMgFgFQgGgFgGAAQgKAAgLAJQgQANgIASQgGARAAAfQAAA5ADATQABAHAFAFQAFAEAdAGIAAAOQgegDgYAAg");
	this.shape_6.setTransform(476.225,118.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAhByQgIgJgDgSQgdAWgOAHQgOAFgQAAQgbAAgRgQQgRgQAAgaQABgQAFgMQAGgNALgKQAJgGAUgKQAwgWAigPQgCgigJgMQgLgLgUABQgUAAgPAMQgOAMgKAbIgQgDQAEgZADgZQAvgVAmgBQAQABANAFQAOAEAHAJQAIAIAEAMQAEALAAAaIgCBkQAAAVAFAGQAEAGAHAAQAJAAATgNIAHAKIglAhQgHADgKAAQgQABgJgIgAg2AVQgNANAAATQgBASAKALQALALANAAQAOAAAQgJQAQgKAEgLQAGgMAAgeIAAgoQg/AbgNANg");
	this.shape_7.setTransform(455.4,118.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhGBcQgcggAAg3QAAg5AigkQAigjAwAAQAlAAAVAVQAVAVABArQgLAGgIAIIgWAAQhAAAgvACQgBA2ATAcQATAcAeAAQAQAAARgGQARgGAbgRIAJAOIgxAkQgKAHgLADQgPAFgPAAQgpAAgcgggAgchYQgQAOgIAfIAOABQAoAAA0gFQgCgYgIgNQgPgSgWAAQgUAAgPAOg");
	this.shape_8.setTransform(431.15,118.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAACxQgXAAglACIAAgNQAigKACgDQAEgDAAgMQABgOAAh4IAAh2QAAgOgFgEQgDgEgIAAQgGAAgTADIAAgNQAsgOAigSIAHAEQgHAuAAB9QAAB9ABANQABANAGAFQADAEAgAJIAAANQgogCgVAAg");
	this.shape_9.setTransform(412.7,112.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhVBdQgfggAAg5QABg6AggiQAigjA2AAQA0AAAeAfQAdAfAAA4QAAA7ghAjQgiAjg1AAQg0AAgdgfgAgyhRQgTAVAAAsQAAAnAFATQAJAfARAQQASAPAVAAQAfAAATgXQAUgXgBgyQAAg4gVgbQgWgcgdAAQgeABgSAVg");
	this.shape_10.setTransform(379.6,118.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVCMQgMgIgDgPQgCgJAAgqQAAguADhSIgkABIAAgNQAUgJAQgQQAPgQAPggIANAAIgFA+IBDgBIACAEIgMAVIg5gBIgDB+QAAAdAGANQAHAMAQAAQANAAAVgLIAHAOQgaARgOAFQgOAFgLAAQgPAAgLgIg");
	this.shape_11.setTransform(358.75,115.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhGBcQgcggAAg3QAAg5AigkQAigjAwAAQAlAAAVAVQAVAVABArQgLAGgIAIIgWAAQhAAAgvACQgBA2ATAcQASAcAfAAQAQAAARgGQARgGAbgRIAJAOIgxAkQgKAHgLADQgPAFgPAAQgoAAgdgggAgchYQgQAOgIAfIAOABQAnAAA1gFQgCgYgIgNQgPgSgWAAQgUAAgPAOg");
	this.shape_12.setTransform(327,118.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ACYB1IhCADIAAgOIAHgCQAWgGAEgEQACgDABgRQADgiAAgqQAAgqgEgNQgDgMgKgIQgLgHgPAAQgVAAgQANQgRAMgFAUQgDAKAAA3QAAA/AEAGQADAGAgAFIAAAOQgfgDgaAAQgaAAghADIAAgOIAHgBQAXgHADgEQAFgIAAgmIAChHQAAgjgMgNQgLgOgVAAQgRAAgQALQgQAKgIARQgFANAAAgIAAAqQAAAvADAGQAEAFAaAGIAHACIAAAOQgcgDgYAAQgWAAgqADIAAgOQAdgGADgEQAFgFAAgfIABhNQAAgvgEgGQgDgHgKAAQgHAAgSADIAAgOQAugMAggTIAGAGQgDATgBAXIAjghQAGgGAKgEQANgFAPAAQAbAAARAPQANALAGAWQAbgfAMgHQATgKAWAAQATAAAOAIQAQAIAGAKQAHAKACAMQABALAAAaIAABCQAAAyACAIQABAFAFADQADACAcAGIAAAOQgegDgVAAg");
	this.shape_13.setTransform(294.5,118.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhVBdQgegggBg5QABg6AggiQAigjA2AAQA0AAAdAfQAeAfAAA4QABA7giAjQgiAjg1AAQg0AAgdgfgAgyhRQgTAVAAAsQAAAnAFATQAIAfASAQQARAPAXAAQAdAAAUgXQATgXAAgyQAAg4gVgbQgXgcgcAAQgeABgSAVg");
	this.shape_14.setTransform(259.55,118.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag/BjQgjghAAg4QAAg5AlgmQAlgmA0AAQAlAAAiATIgFAWIgJArIgRgBQgBgegOgPQgPgPgZAAQgRAAgQAKQgRAJgJAXQgKAWAAAdQAAAsAWAaQAWAaAcAAQAfAAArgZIAJAPQgmAcgaALQgMAGgSAAQgpAAgbgZg");
	this.shape_15.setTransform(235.125,118.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAACxQgXAAglACIAAgNQAigKACgDQADgDABgMQABgOAAh4IAAh2QAAgOgFgEQgDgEgIAAQgGAAgTADIAAgNQAsgOAigSIAHAEQgHAuAAB9QAAB9ABANQABANAGAFQADAEAgAJIAAANQgogCgVAAg");
	this.shape_16.setTransform(216.85,112.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhGBcQgcggAAg3QAAg5AigkQAigjAwAAQAlAAAVAVQAVAVABArQgLAGgIAIIgWAAQhAAAgvACQgBA2ATAcQATAcAeAAQAQAAARgGQARgGAbgRIAJAOIgxAkQgKAHgLADQgPAFgPAAQgoAAgdgggAgchYQgQAOgIAfIAOABQAoAAA0gFQgCgYgIgNQgPgSgWAAQgUAAgPAOg");
	this.shape_17.setTransform(198.85,118.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABAB4Ig6iaIg/CaIgQAAIgqhxQghhTgEgHQgEgHgFgFQgIgFgSgFIAAgOQAhADAUAAQAVAAAkgDIAAAOQgWAEgEADQgDACAAAGIABAFQACAKAQAsIAgBVIAyh1QgKgagGgFQgFgGgVgFIAAgOIA3ADQARAAAlgDIAAAOQgTADgHAFQgEACAAAFIABAJIARAyIAfBPQAuh/AAgKQAAgGgEgDQgDgDgOgEIAAgOQAcADANAAIApgDIAAAOQgQAEgGAFQgGAEgEAHQgEAIgXA+IgyCHg");
	this.shape_18.setTransform(169.275,119.075);

	this.instance = new lib.ribbon();
	this.instance.setTransform(26,0,1.1957,0.508);

	this.text = new cjs.Text("", "50px 'CooperBlack'", "#FFFFFF");
	this.text.lineHeight = 59;
	this.text.parent = this;
	this.text.setTransform(318.9,176);

	this.plusbtn = new lib.plus_btn();
	this.plusbtn.name = "plusbtn";
	this.plusbtn.setTransform(409.8,240,1,1,0,0,0,102.8,104);
	new cjs.ButtonHelper(this.plusbtn, 0, 1, 2, false, new lib.plus_btn(), 3);

	this.plus_Btnnext = new lib.plus_btnNext();
	this.plus_Btnnext.name = "plus_Btnnext";
	this.plus_Btnnext.setTransform(579.2,249.95,1,1,0,0,0,44,45.1);
	new cjs.ButtonHelper(this.plus_Btnnext, 0, 1, 1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEC31F").s().p("AjhCJICQghQASBOBJAAQA7AAAAgoQAAgVgOgLQgNgMgjgJQiDghgmg1Qglg0AAhHQAAhcA2g9QA2g9BkAAQCaAAAxCfIiAAyQgUhBg9AAQgxAAAAApQAAASALAKQAMAKAgAJQBaAZAmATQAmASAZAtQAaAvAAA+QAABjg+A9Qg+A9hlAAQi3AAgrjGg");
	this.shape_19.setTransform(279.625,257.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEC31F").s().p("AiUEXQg6g0AAh0IAAm4ICeAAIAAGhQAAAuAPAWQAPAVAhAAQAbAAASgPQASgQAEgTQADgUAAg5IAAl7IB6AAIAAGuQAAB6g4A2Qg5A1haAAQheAAg6gzg");
	this.shape_20.setTransform(233.325,258.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEC31F").s().p("AivFFIAAqJICaAAIAAHqIDFAAIAACfg");
	this.shape_21.setTransform(190.475,257.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEC31F").s().p("AjVFFIAAqJIDWAAQBQAAAqAXQAqAYAYAxQAZAyAAA9QAABcgyA5QgzA5hTAAIhXAAIAADsgAg6gyIAzAAQBDAAAAhBQAAg9g+AAIg4AAg");
	this.shape_22.setTransform(145.7,257.525);

	this.minusbtn = new lib.minus__btn();
	this.minusbtn.name = "minusbtn";
	this.minusbtn.setTransform(435.5,239.5,1,1,0,0,0,138.5,112.5);
	new cjs.ButtonHelper(this.minusbtn, 0, 1, 2, false, new lib.minus__btn(), 3);

	this.minus_Btnnext = new lib.minus_btnNext();
	this.minus_Btnnext.name = "minus_Btnnext";
	this.minus_Btnnext.setTransform(593.5,256.45,1,1,0,0,0,44,45.1);
	new cjs.ButtonHelper(this.minus_Btnnext, 0, 1, 1);

	this.minus_Btnback = new lib.minus_btnBack();
	this.minus_Btnback.name = "minus_Btnback";
	this.minus_Btnback.setTransform(46.5,256.45,1,1,0,0,0,44,45.1);
	new cjs.ButtonHelper(this.minus_Btnback, 0, 1, 1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FE336B").s().p("Ai+B0IB6gcQAOBEA/AAQAyAAgBgjQAAgRgLgKQgMgLgdgHQhugcghgtQgfgtAAg8QgBhPAvg0QAtgzBVAAQCCAAAqCIIhsAqQgSg4gzAAQgqAAAAAjQAAAQAKAIQAJAJAbAHQBNAWAgAQQAgAPAVAnQAWAnAAA1QAABUg1A0QgzA1hWgBQiaABgliqg");
	this.shape_23.setTransform(306.55,243.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FE336B").s().p("Ah9DtQgxgrAAhjIAAl3ICFAAIAAFjQAAAnANATQANASAbAAQAYAAAPgNQAPgNADgRQADgRAAgwIAAlDIBnAAIAAFuQAABogvAuQgwAthMAAQhQAAgxgsg");
	this.shape_24.setTransform(267.4,243.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FE336B").s().p("ABLEVIhzj1QgXgugWhDQAKA2AAAkIAAEMIhqAAIAAopIB7AAIBiDLQAeA9APAsQgKhFAAhLIAAikIBrAAIAAIpg");
	this.shape_25.setTransform(224.75,243.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FE336B").s().p("AhAEVIAAopICBAAIAAIpg");
	this.shape_26.setTransform(192.575,243.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FE336B").s().p("ABuEVIAAmLIhOGLIhSAAIhTmLIAAGLIhhAAIAAopICrAAIA8ElIA7klICrAAIAAIpg");
	this.shape_27.setTransform(155.5,243.35);

	this.mulbtn = new lib.mul_btn();
	this.mulbtn.name = "mulbtn";
	this.mulbtn.setTransform(443.8,239.8,1,1,0,0,0,150.8,143.8);
	new cjs.ButtonHelper(this.mulbtn, 0, 1, 2, false, new lib.mul_btn(), 3);

	this.multiple_Btnnext = new lib.multiple_btnNext();
	this.multiple_Btnnext.name = "multiple_Btnnext";
	this.multiple_Btnnext.setTransform(593.5,247.25,1,1,0,0,0,44,45.1);
	new cjs.ButtonHelper(this.multiple_Btnnext, 0, 1, 1);

	this.multiple_Btnback = new lib.multiple_btnBack();
	this.multiple_Btnback.name = "multiple_Btnback";
	this.multiple_Btnback.setTransform(46.5,247.25,1,1,0,0,0,44,45.1);
	new cjs.ButtonHelper(this.multiple_Btnback, 0, 1, 1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AFFF12").s().p("Ag3EgIAAj0IiJlLICJAAIBHC+IBEi+IBtAAIh/FLIAAD0g");
	this.shape_28.setTransform(353.325,230.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AFFF12").s().p("AiOEgIAAo/IB+AAIAAGxICfAAIAACOg");
	this.shape_29.setTransform(325,230.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#AFFF12").s().p("AitEgIAAo/ICuAAQBBAAAiAVQAiAVAUArQAUAsAAA2QAABTgpAxQgpAyhEABIhFAAIAADRgAgvgsIAqAAQA2AAAAg5QAAg2gyAAIguAAg");
	this.shape_30.setTransform(288.65,230.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#AFFF12").s().p("Ag+EgIAAo/IB9AAIAAI/g");
	this.shape_31.setTransform(257.925,230.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#AFFF12").s().p("Ag7EgIAAm1IhUAAIAAiKIEfAAIAACKIhVAAIAAG1g");
	this.shape_32.setTransform(233.75,230.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#AFFF12").s().p("AiOEgIAAo/IB+AAIAAGxICfAAIAACOg");
	this.shape_33.setTransform(207.1,230.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#AFFF12").s().p("Ah3D3QgwguABhmIAAmHIB/AAIAAFyQAAApAMATQAMATAaAAQAXAAAPgNQAOgPADgRQADgRAAgyIAAlRIBjAAIAAF9QAABsguAwQguAvhJAAQhMAAgugtg");
	this.shape_34.setTransform(169.35,231.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AFFF12").s().p("ABqEgIAAmbIhMGbIhOAAIhPmbIAAGbIheAAIAAo/ICkAAIA6ExIA5kxICkAAIAAI/g");
	this.shape_35.setTransform(123.675,230.8);

	this.dibtn = new lib.di_btn();
	this.dibtn.name = "dibtn";
	this.dibtn.setTransform(442.9,239.9,1,1,0,0,0,98.9,85.9);
	new cjs.ButtonHelper(this.dibtn, 0, 1, 2, false, new lib.di_btn(), 3);

	this.divide_Btnnext = new lib.divide_btnNext();
	this.divide_Btnnext.name = "divide_Btnnext";
	this.divide_Btnnext.setTransform(596,255.1,1,1,0,0,0,44,45.1);
	new cjs.ButtonHelper(this.divide_Btnnext, 0, 1, 1);

	this.divide_Btnback = new lib.divide_btnBack();
	this.divide_Btnback.name = "divide_Btnback";
	this.divide_Btnback.setTransform(44,248.1,1,1,0,0,0,44,45.1);
	new cjs.ButtonHelper(this.divide_Btnback, 0, 1, 1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EE297B").s().p("AioEgIAAo/IFRAAIAACFIjKAAIAABTICjAAIAACAIijAAIAABdIDKAAIAACKg");
	this.shape_36.setTransform(330,237.05);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EE297B").s().p("AjGEgIAAo/ICtAAQBwAAA4BWQA4BWAABxQAACBg8BQQg8BRhfAAgAg9CcIAkAAQAhAAAYgrQAXgrAAhIQAAg/gVguQgVgtgmAAIgkAAg");
	this.shape_37.setTransform(287.425,237.05);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EE297B").s().p("AhEEgIAAo/ICJAAIAAI/g");
	this.shape_38.setTransform(252.825,237.05);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EE297B").s().p("AhCEgIiRo/ICQAAIBGE5IANA3IBTlwIBxAAIiKI/g");
	this.shape_39.setTransform(220.6,237.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EE297B").s().p("AhEEgIAAo/ICJAAIAAI/g");
	this.shape_40.setTransform(188.375,237.05);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EE297B").s().p("AjGEgIAAo/ICtAAQBwAAA4BWQA4BWAABxQAACBg8BQQg8BRhfAAgAg9CcIAkAAQAhAAAYgrQAXgrAAhIQAAg/gVguQgVgtgmAAIgkAAg");
	this.shape_41.setTransform(155.775,237.05);

	this.equalbtn = new lib.equal_btn();
	this.equalbtn.name = "equalbtn";
	this.equalbtn.setTransform(428.2,216.8,1,1,0,0,0,106.2,85.8);
	new cjs.ButtonHelper(this.equalbtn, 0, 1, 2, false, new lib.equal_btn(), 3);

	this.equal_Btnnext = new lib.equal_btnNext();
	this.equal_Btnnext.name = "equal_Btnnext";
	this.equal_Btnnext.setTransform(596,251.1,1,1,0,0,0,44,45.1);
	new cjs.ButtonHelper(this.equal_Btnnext, 0, 1, 1);

	this.equal_Btnback = new lib.equal_btnBack();
	this.equal_Btnback.name = "equal_Btnback";
	this.equal_Btnback.setTransform(44,244.1,1,1,0,0,0,44,45.1);
	new cjs.ButtonHelper(this.equal_Btnback, 0, 1, 1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#73BD1E").s().p("AihExIAAphICOAAIAAHLIC0AAIAACWg");
	this.shape_42.setTransform(334.05,240.475);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#73BD1E").s().p("ABKExIgbh4Ih6AAIgcB4IhyAAICOphICVAAICQJhgAgzA0IBKAAIglixg");
	this.shape_43.setTransform(291.9,240.475);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#73BD1E").s().p("AiHEGQg1gxAAhtIAAmdICQAAIAAGHQgBAsAOAUQAOAVAegBQAZAAARgOQARgPADgSQADgSAAg2IAAlkIBvAAIAAGTQAABzgzAzQg0AyhTAAQhVAAg1gwg");
	this.shape_44.setTransform(248.35,240.95);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#73BD1E").s().p("ABcFZQgegVgOhDQgYAGgXAAQhiAAg9hXQg8hXAAiKQAAiKA7hZQA6hZBnAAQBgAAA9BUQA8BUAACMQAACqhTBZQAHAbAkAAQAQAAAWgGIAACKQglAFgVAAQgmAAgdgVgAhCgtQAACpBCAAQAkAAAPgpQAQgpAAhtQAAighBAAQhEAAAAC2g");
	this.shape_45.setTransform(202.025,245.625);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#73BD1E").s().p("AisExIAAphIFZAAIAACNIjOAAIAABYICnAAIAACHIinAAIAABjIDOAAIAACSg");
	this.shape_46.setTransform(159.175,240.475);

	this.instance_1 = new lib.ty_btn();
	this.instance_1.setTransform(348.2,236,1,1,0,0,0,190.2,171);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.ty_btn(), 3);

	this.thankyou_Btnback = new lib.thankyou_btnBack();
	this.thankyou_Btnback.name = "thankyou_Btnback";
	this.thankyou_Btnback.setTransform(55.5,265.6,1,1,0,0,0,55.5,59.6);
	new cjs.ButtonHelper(this.thankyou_Btnback, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.playBtn}]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.plus_Btnnext},{t:this.plusbtn}]},29).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.minus_Btnback},{t:this.minus_Btnnext},{t:this.minusbtn}]},30).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.multiple_Btnback},{t:this.multiple_Btnnext},{t:this.mulbtn}]},30).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.divide_Btnback},{t:this.divide_Btnnext},{t:this.dibtn}]},30).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.equal_Btnback},{t:this.equal_Btnnext},{t:this.equalbtn}]},30).to({state:[{t:this.thankyou_Btnback},{t:this.instance_1}]},30).wait(31));

	// background
	this.instance_2 = new lib.Bitmap27();
	this.instance_2.setTransform(0,0,1.0256,1);

	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(330.5,235,1.1053,1.0738,0,0,0,357.4,250);
	this.instance_3.alpha = 0.7695;

	this.instance_4 = new lib.Bitmap18();
	this.instance_4.setTransform(0,-44,0.5398,0.4665);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},29).to({state:[{t:this.instance_4}]},150).wait(31));

	// stageBackground
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgzjgnDMBnHAAAMAAABOHMhnHAAAg");
	this.shape_47.setTransform(320,240);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFCC99").s().p("EgzjAnEMAAAhOHMBnHAAAMAAABOHg");
	this.shape_48.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47}]}).wait(210));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(255.5,196,470.29999999999995,319.79999999999995);
// library properties:
lib.properties = {
	id: '241BA6076ABAE341ABE244101E8C609B',
	width: 640,
	height: 480,
	fps: 30,
	color: "#FFCC99",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap1.jpg?1759468063398", id:"Bitmap1"},
		{src:"images/Bitmap18.png?1759468063398", id:"Bitmap18"},
		{src:"images/Bitmap19.png?1759468063398", id:"Bitmap19"},
		{src:"images/Bitmap27.png?1759468063398", id:"Bitmap27"},
		{src:"images/Bitmap3.png?1759468063398", id:"Bitmap3"},
		{src:"images/Bitmap5.png?1759468063398", id:"Bitmap5"},
		{src:"images/Bitmap6.png?1759468063398", id:"Bitmap6"},
		{src:"images/Bitmap8.png?1759468063398", id:"Bitmap8"},
		{src:"images/Bitmap9.png?1759468063398", id:"Bitmap9"},
		{src:"images/house.png?1759468063398", id:"house"},
		{src:"images/next.png?1759468063398", id:"next"},
		{src:"images/ribbon.png?1759468063398", id:"ribbon"},
		{src:"sounds/audiomassdwav.mp3?1759468063398", id:"audiomassdwav"},
		{src:"sounds/audiomassewav.mp3?1759468063398", id:"audiomassewav"},
		{src:"sounds/audiomassmiwav.mp3?1759468063398", id:"audiomassmiwav"},
		{src:"sounds/audiomassmuwav.mp3?1759468063398", id:"audiomassmuwav"},
		{src:"sounds/audiomasspluswav.mp3?1759468063398", id:"audiomasspluswav"},
		{src:"sounds/audiomasstywav.mp3?1759468063398", id:"audiomasstywav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['241BA6076ABAE341ABE244101E8C609B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;