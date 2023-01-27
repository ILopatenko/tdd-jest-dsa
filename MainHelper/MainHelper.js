class MainHelper {
   //data sets
   sets = {
      engAlphabet: {
         lower: 'abcdefghijklmnopqrstuvwxyz',
         upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      },
   };
   //settings
   testQuantity = 100;
   //methoods
   getRandomBetween = (min = 0, max = 9) => Math.floor(min + Math.random() * (max - min + 1));
   getOne = list => list[this.getRandomBetween(0, list.length - 1)];
   //submethoods that based on getOne()
   getEngLetterU = () => this.getOne(this.sets.engAlphabet.upper);
   getEngLetterL = () => this.getOne(this.sets.engAlphabet.lower);
}

module.exports = MainHelper;
