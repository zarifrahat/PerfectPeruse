class BookToShelf < ApplicationRecord
        
  belongs_to :bookshelf,
    class_name: :Bookshelf,
    foreign_key: :bookshelf_id,
    primary_key: :id

  belongs_to :book,
    class_name: :Book,
    foreign_key: :book_id,
    primary_key: :id

end
