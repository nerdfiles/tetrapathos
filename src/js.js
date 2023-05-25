/**
 * @description .
 */
function increaseFontSize() {
  var currentSize = parseInt($('body').css('font-size'));
  $('body').css('font-size', currentSize + 1 + "px");
}

function decreaseFontSize () {
  var currentSize = parseInt($('body').css('font-size'));
  $('body').css('font-size', currentSize - 1 + "px");
}

/**
 * init.
 */
function init (ClassList) {
  return {
    changeName: () => {
      return new Promise((resolve, reject) => {
        resolve({
          list: ClassList
        })
      })
    }
  }
}

/**
 * classChanger.
 */
function classChanger () {
  const classList = document.querySelectorAll('.c__default__')
  init(classList)
    .changeName()
    .then(() => {})
    .catch(() => {})
}

/// EOF
