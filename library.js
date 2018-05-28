(function(context) {
  var $app = document.createElement("div");
  var $counter = document.createElement("p");
  var $incrementButton = document.createElement("button");
  var $decrementButton = document.createElement("button");

  context.getCounterNode = function() {
    return $counter;
  }

  context.generateChangeHandler = function(amount) {
    var that = this;

    return function() {
      that.adjustValue(amount);
      this.innerText = that.value;
    };
  }

  context.attachHandlers = function(incrementHandler, decrementHandler) {
    $incrementButton.addEventListener("click", incrementHandler);
    $decrementButton.addEventListener("click", decrementHandler);
  }

  $incrementButton.innerText = "INCREMENT";
  $decrementButton.innerText = "DECREMENT";
  $counter.innerText = 0;

  $app.appendChild($counter);
  $app.appendChild($incrementButton);
  $app.appendChild($decrementButton);

  document.addEventListener("DOMContentLoaded", function() {
    document.body.appendChild($app);
  });
})(this);
