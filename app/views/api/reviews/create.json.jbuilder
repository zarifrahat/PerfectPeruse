json.set! @review.user_id do
    json.extract! @review, :id, :user_id,  :book_id, :rating, :body, :created_at, :updated_at
end