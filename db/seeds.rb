# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# data


Food.destroy_all
Wine.destroy_all

Food.create([
  {name: "Beef", wine_type: "Bold Red"},
  {name:  "Lamb", wine_type: "Bold Red"},
  {name:  "Green Bean", wine_type: "Light White"},
  {name:  "Fruit & Berries", wine_type: "Sweet White"},
  {name:  "Quinoa", wine_type: "Sweet White"},
  {name:  "Chocolate & Coffee", wine_type: "Dessert"},
  ]);

Wine.create([
  {wine_type: "Bold Red", country: "France"},
  {wine_type: "Light White", country: "Austria"},
  {wine_type: "Sweet White", country: "Germany"},
  {wine_type: "Dessert", country: "US"},
]);
