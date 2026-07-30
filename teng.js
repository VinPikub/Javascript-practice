      function turnOnOff(className)
      {
        let butt = document.querySelector(className);

        if (!butt.classList.contains('is-toggled'))
        {
          turnOffPrevious();

          butt.classList.add('is-toggled');
        }
        else
          butt.classList.remove('is-toggled');
      }
      function turnOffPrevious()
      {
        let previousButton = document.querySelector('.is-toggled');
        if(previousButton)
          previousButton.classList.remove('is-toggled');
      }