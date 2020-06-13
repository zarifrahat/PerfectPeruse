class RenameBooktoshelvesUserToBookshelf < ActiveRecord::Migration[5.2]
  def change
    rename_column :book_to_shelves, :user_id, :bookshelf_id
  end
end
