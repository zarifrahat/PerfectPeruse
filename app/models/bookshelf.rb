class Bookshelf < ApplicationRecord
    validates :bookshelf_name, presence: true

    belongs_to :user,
    class_name: :User,
    foreign_key: :user_id
end
