json.set! @show_reviews[0].user_id do
    json.extract! @show_reviews[0], :id, :user_id,  :book_id, :rating, :body, :created_at, :updated_at
end