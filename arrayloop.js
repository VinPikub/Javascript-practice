        let name = ['rahim', 'karim', 'shafiq', 'jabbar'];
        for(let x = 0; x<name.length; x++)
        {
            document.write(name[x]);
            document.write('\r');
        }

        let same = new Array();
        alert('Enter array elements: ');
        for(let x = 0; x<=5; x++)
        {
            same[x] = prompt();
        }
        document.write("Array elements: ");
        for(let x = 0; x<same.length; x++)
        {
            document.write(same[x], '\n');
        }