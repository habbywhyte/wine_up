class CreateWines < ActiveRecord::Migration
  def change
    create_table :wines do |t|
      t.string :wine_type
      t.string :country

      t.timestamps null: false
    end
  end
end
