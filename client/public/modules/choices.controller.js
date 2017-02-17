const ChoicesCtrl = (function() {
  const choiceArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        $choiceList = $('ul.choices');

  const buildChoiceList = () => {
    let newElement;
    for(let i = 0; i < choiceArr.length; i++) {
      newElement = $('<li class="choice-list"></li>').text(choiceArr[i]);
      $choiceList.append(newElement)
    }
  };

  const getChoice = (letter) => { GuessesCtrl.getChoiceFromChoicesCtrl(letter) };

  return {
    buildChoiceList,
    getChoice
  };

})();