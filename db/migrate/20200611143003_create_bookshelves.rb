class CreateBookshelves < ActiveRecord::Migration[5.2]
  def change
    create_table :bookshelves do |t|
      t.string :bookshelf_name, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
