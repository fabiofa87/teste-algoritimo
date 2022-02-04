const list = [
    "Anakin Skywalker",
    "Obiwan Kenobi",
    "Dart Vader",
    "Mandalorian"
  ];

  const exemplo: string = "Anakin Skywalker";
  const exemploPush: Array<number> = []

  const repeatedCharsResult = (array: Array<any>) => {
        let count: any = []
        for(let i = 0; i < array.length; i ++) {
            const letters = array[i].toLowerCase().split('');
            
            const chars: any = {}
            for(const char of letters) {
                chars[char] = (chars[char] ?? 0) + 1;
            }
            const max = Object.values(chars).reduce((acc: any, val: any) => {
                return acc > val ? acc : val;
            }, 0)
            count.push(max);
        }
        return count;
    }

  console.log(repeatedCharsResult(list))

