function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6gAeXibQBb4":
        Script1();
        break;
      case "5owLQ9kJza1":
        Script2();
        break;
      case "5ajT7mfgiUI":
        Script3();
        break;
  }
}

function Script1()
{
  var activeEl = document.activeElement;
if (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA') {
    activeEl.blur();
}
}

function Script2()
{
  var activeEl = document.activeElement;
if (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA') {
    activeEl.blur();
}
}

function Script3()
{
  var activeEl = document.activeElement;
if (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA') {
    activeEl.blur();
}
}

