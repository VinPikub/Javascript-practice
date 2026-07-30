        let sum = 0;
        let value = 1;
        while(value <= 100)
        {
            if(value % 3 === 0 && value % 5 === 0)
                sum += value;
            value++;
        }
        document.write("sum: ", sum);