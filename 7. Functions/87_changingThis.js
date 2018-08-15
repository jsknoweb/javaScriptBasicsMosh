
// 'this' REFERENCES TO THE OBJECT THAT IS EXECUTING THE  CURRENT FUNCTION.

// method -> obj
// function -> global (window, global)

// Now imagine the forEach function does not have the second
// parameter THAT WILL BE REFERENCED WITH THE 'this' KEYWORD INSIDE
// THE CALL BACK FUNCTION.
console.log('-------FIRST APPROACH, DO NOT USE IT----------');
const video = {
    title: 'anotherTitle',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this;
        this.tags.forEach(function(tag) {
            console.log(self.title, tag);
        });
        console.log(this);
    }
};

video.showTags();

console.log('-------SECOND APPROACH----------');
function playVideo(a, b) {
    console.log(this);
    console.log(a, b);
}

playVideo('invoke', 'function');
// THE FIRST ARGUMENT YOU PASS INSIDE 'call' OR 'apply' WILL BE
// REFERENCED AS 'this' INSIDE THE FUNCTION.
playVideo.call({name: 'Jose'}, 'invoke', 'call');
playVideo.apply({name: 'Alvaro'}, ['invoke', 'apply']);
const fn = playVideo.bind({ name: 'Raquel'}, 'invoke', 'bind');
fn();
playVideo.bind({ name: 'Monica'}, 'invoke', 'bind2')();

// BIND method does not call the playVideo function, it returns a 
// new function and sets this to point to the object passed as
// first argument permanently

// SO GOING BACK TO THE FIRST FUNCTION...
console.log('-------APPLYING SOLUTION----------');
const videoSolution = {
    title: 'anotherTitle',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }.bind(this));
    }
};

videoSolution.showTags();

console.log('-------THIRD APPROACH, STARTING FROM  ES6---------');
// ARROW FUNCTIONS INHERIT 'this' FROM THE CONTAINING FUNCTION.
const videoArrowNotSolution = {
    title: 'anotherTitle',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};

videoArrowNotSolution.showTags();