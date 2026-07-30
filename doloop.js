        let sum = 0;
        let value = 1;
        do 
        {
            if(value % 3 === 0 && value % 5 === 0)
                sum+= value;
            value++;
        }while(value<=100);

        document.write('sum: ', sum);