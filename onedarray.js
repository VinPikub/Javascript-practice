        function highestScore(oneD)
        {
            let highest = oneD[0];
            for(let i = 1; i<oneD.length; i++)
            {
                if(oneD[i] > highest)
                    highest = oneD[i];
            }
            return highest;
        }
        let numbers = [2, 1, 7, 9, 3, 5, 13];
        document.write(`Highest score is: ${highestScore(numbers)}`);