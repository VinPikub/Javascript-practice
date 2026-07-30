    function switchOn(className)
        {
            let value = document.querySelector(`.${className}`)
            value.classList.toggle('on');
        }