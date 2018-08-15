
// 'this' REFERENCES TO THE OBJECT THAT IS EXECUTING THE  CURRENT FUNCTION.

// method -> obj
// function -> global (window, global)

////////////////////////////////
console.log('---FIRST: METHOD IN OBJECT---');
const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.stop = function() {
    console.log(this);
}

// AS 'play' AND 'stop' ARE METHODS IN THE VIDEO  OBJECT,
// 'this' REFERENCES TO THE VIDEO OBJECT.
video.play();
video.stop();

////////////////////////////////
console.log('---SECOND: REGULAR FUNCTION---');
function playVideo() {
    console.log(this);
}

playVideo();

////////////////////////////////
console.log('---THIRD: CONSTRUCTOR FUNCTION---');
function Video(title) {
    this.title = title;
    console.log(this);
}

// The 'new' operator creates a new empty object and later 
// executes our custom constructor code. 'this' references to
// the newly created video object.
const v = new Video('b');


////////////////////////////////
console.log('---FOURTH: CALL BACK FUNCTION INSIDE METHOD FROM  OBJECT---');
const video2 = {
    title: 'another',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
            console.log(this);
        });
        console.log(this);
    }
};

video2.showTags();

// The problem here is that we are inside a call back function,
// and that function is just a regular function; it is not a method
// in the video object.
// The only method we have here is showTags, that's the reason the
// console.log(this) from line 56 behaves as expected.

// How can we solve this?
// DEFINING THE SECOND PARAMETER IN THE FOREACH FUNCTION. THE
// SECOND PARAMETER WILL BE ASSIGNED TO THE 'this' VARIABLE
// INSIDE THE CALL BACK FUNCTION.
console.log('---FITH: SOLUTIONS TO CALL BACK FUNTIONS---');
const video3 = {
    title: 'another',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this, tag);
        }, { firsName: 'Jose' });
        console.log(this);
    }
};

video3.showTags();

console.log('-------------------------');
const video4 = {
    title: 'anotherTitle',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
        console.log(this);
    }
};

video4.showTags();
