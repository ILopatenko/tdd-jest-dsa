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
   getOne = (list = this.sets.engAlphabet.upper) => list[this.getRandomBetween(0, list.length - 1)];
}

module.exports = MainHelper;
