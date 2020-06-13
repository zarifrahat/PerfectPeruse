class Book < ApplicationRecord
    validates :title, :author, :genre, :summary, :rating, presence:true

    has_one_attached :photo


    has_many :booktoshelves,
    class_name: :BookToShelf,
    foreign_key: :book_id,
    primary_key: :id
end
