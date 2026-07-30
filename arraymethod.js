        let names = ['rahim', 'shadat', 'yusuf', 'belal'];
        console.log(names);

        names.shift();
        console.log(names);

        names.unshift('fahim');
        console.log(names);

        let same = ['rokeya', 'bosri', 'mim', 'monica'];
        console.log(same);

        //same.splice(2, 0, 'shifat', 'rifat');
        //console.log(same);

        same.splice(2, 1, 'noman');
        console.log(same);

        let kids = ['safwan', 'ian', 'shaheb', 'huzaifa'];
        let boys = kids.slice(0, 3);
        console.log(boys);

        let men = ['Nadim', 'Rumon', 'Khaled', 'Fahim', 'Ovi'];
        men.sort();
        console.log(men);
        men.reverse();
        console.log(men);

        let numbers = [0, 11, 2, 33, 45, 5, 6, 77];
        numbers.sort(function(a, b)
        {
            return a-b;
        });
        console.log(numbers);
        numbers.sort(function(a, b){
            return b-a;
        });
        console.log(numbers);