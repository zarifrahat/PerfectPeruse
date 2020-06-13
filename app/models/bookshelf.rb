class Bookshelf < ApplicationRecord
    validates :bookshelf_name, presence: true

    belongs_to :user,
    class_name: :User,
    foreign_key: :user_id

    has_many :booktoshelves,
    class_name: :BookToShelf,
    foreign_key: :bookshelf_id,
    primary_key: :id
    
    has_many :books,
    through: :booktoshelves,
    source: :book
end
