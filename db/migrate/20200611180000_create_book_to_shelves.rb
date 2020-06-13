class CreateBookToShelves < ActiveRecord::Migration[5.2]
  def change
    create_table :book_to_shelves do |t|
      t.integer :user_id, null: false
      t.integer :book_id, null: false

      t.timestamps
    end
  end
end
