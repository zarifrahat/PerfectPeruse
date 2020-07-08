class Api::BookToShelvesController < ApplicationController

    def create
        @book_to_shelf = BookToShelf.new(book_to_shelves_params)
        if @book_to_shelf.save 
        
        else
            render json: ["Couldn't add book to bookshelf"], status: 422 
        end

        render :show
    end

    def destroy
        @book_to_shelf = Bookshelf.find_by(bookshelf_id: params[:bookshelf_id], book_id: params[:book_id])
        if @book_to_shelf.destroy

        else
            render json: ["Couldn't remove book"], status: 422 
        end

    end

    private 
    def book_to_shelves_params
        params.require(:bookToShelf).permit(:bookshelf_id, :book_id)
    end
end
