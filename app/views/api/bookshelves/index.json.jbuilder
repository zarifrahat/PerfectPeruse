@bookshelves.each do |bookshelf|
  json.set! bookshelf.bookshelf_name do
    json.extract! bookshelf, :id, :bookshelf_name, :user_id, :books
  end
end