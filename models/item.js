module.exports = function(sequelize, DataTypes){
	var Item = sequelize.define("Item", {
name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    imgURL: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
    {
      // associating items with topics?
      classMethods: {
        associate: function(models) {
          // A Topic (foreignKey) is required or an Item can't be made
          Item.belongsTo(models.Topic, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }
  );
  return Item;
};