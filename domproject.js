        function subsCribe()
        {
            let value = document.querySelector('.subscribe');
            if (value.innerHTML === 'Subscribe')
                value.innerHTML = 'subscribed';
            else 
                value.innerHTML = 'Subscribe';
            value.classList.toggle('unsub');
        }
        function calculate()
        {
            let enter_value = eval(document.querySelector('.text-box').value);
            if (enter_value <= 40)
                enter_value = (enter_value*100 + 10*100)/100;
            document.getElementById('para').innerHTML = '$'+enter_value;
        }