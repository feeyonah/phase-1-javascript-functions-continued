function saturdayFun(activity = "rollerskate") {
    return `This Saturday, I want to go ${activity}!`;
  }
  
  function mondayWork(duty = "go to the office") {
    return `This Monday, I will ${duty}.`;
  }
  
  function wrapAdjective(symbol) {
    return function (adjective) {
      return `You are ${symbol}${adjective}${symbol}!`;
    };
  }
   