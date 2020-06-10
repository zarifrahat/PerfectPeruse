class Book < ApplicationRecord
    validates :title, :author, :genre, :summary, :rating, presence:true

    has_one_attached :photo
end
