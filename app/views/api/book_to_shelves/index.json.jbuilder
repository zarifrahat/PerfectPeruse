@users_bookshelves.each do |bookshelf|
  json.set! bookshelf.id do
    json.extract! bookshelf, :id
  end
end