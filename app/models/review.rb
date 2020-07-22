class Review < ApplicationRecord
    validates :user_id, :book_id, :rating, :body, presence: true

    belongs_to :user,
    class_name: :User,
    foreign_key: :user_id

    belongs_to :book,
    class_name: :Book,
    foreign_key: :book_id

end
