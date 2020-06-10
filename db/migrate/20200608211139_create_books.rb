class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.string :genre, null: false
      t.text :summary, null: false
      t.float :rating, null: false
      t.timestamps
    end
  end
end
