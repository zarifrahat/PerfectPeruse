json.set! @review[0].user_id do
    json.extract! @review[0], :id, :user_id,  :book_id, :rating, :body, :created_at, :updated_at
end