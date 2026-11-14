let tv = {};

tv.currentChannel = 1;

tv.nextChannel = function() {
    this.currentChannel++;
};

tv.previousChannel = function() {
    this.currentChannel--;
};

tv.setChannel = function(number) {
    this.currentChannel = number;
};

tv.nextChannel();
console.log(tv.currentChannel); // 2

tv.previousChannel();
console.log(tv.currentChannel); // 1

tv.setChannel(5);
console.log(tv.currentChannel); // 5
