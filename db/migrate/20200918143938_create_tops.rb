class CreateTops < ActiveRecord::Migration[6.0]
  def change
    create_table :tops do |t|
      t.string :name
      t.string :email
      t.string :text
      t.timestamps
    end
  end
end
