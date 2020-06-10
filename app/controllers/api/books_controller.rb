class Api::BooksController < ApplicationController

    def show
        @book = Book.find_by(id: params[:id])
        render :show
    end

    def index
        @books = Book.all
        render :index
    end
end
