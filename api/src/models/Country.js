const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
var abc=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];

function abecedarioInc(){
  var prim = 0;
  var mid = 0;
  var ult = 0;
  return function (primary, middle, ultimate){
    for (let i = 0; i < abc.length; i++) {
      if(primary[prim] === 'z'){prim = 0}
      if(middle[mid] === 'z'){mid = 0; ult = 0}
      if(ultimate[ult] === 'z'){ult = 0};
      if(primary[prim] === 'a' && middle[mid] === 'a' && ultimate[ult] !== 'z'){
        const abc = primary[prim] + middle[mid] + ultimate[ult];
        ult++
        return abc
      }
      if(ultimate[ult] === 'z'){
        mid++
      }
      if(mid !== 0 && mid !== mid.length){
        const abc = primary[prim] + middle[mid] + ultimate[ult];
        ult++
        return abc
      }
    }
  }
}
var abcedario = abecedarioInc()
var IdAbc = abcedario(abc, abc, abc)
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.NUMBER,
    },
    population: {
      type: DataTypes.NUMBER,
    }
  });

  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
    },
    difficulty: {
      type: DataTypes.NUMBER
    },
    duration: {
      type: DataTypes.NUMBER
    },
    season: {
      type: DataTypes.STRING
    }
  })

};
