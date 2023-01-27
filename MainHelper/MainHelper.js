class MainHelper {
   //data sets

   //settings
   testQuantity = 100;
   //methoods
   getRandomBetween = (min = 0, max = 9) => Math.floor(min + Math.random() * (max - min + 1));
}

module.exports = MainHelper;
