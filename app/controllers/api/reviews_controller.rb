class Api::ReviewsController < ApplicationController
    def index
        @all_reviews = Review.where(book_id: params[:book_id]).preload(:user)
        render :index
    end

    def show
        
        @review = Review.where(book_id: params[:book_id], user_id: params[:id])
         #puts @show_reviews.inspect
        render :show
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: ["Couldn't create your review!"], status: 422 
        end

    end

    def update
        @review = Review.where(book_id: params[:book_id], user_id: params[:id])
        if @review.update(review_params)
            render :create
        else
            render json: ["Couldn't update your review!"], status: 422 
        end
    end

    def destroy
        @review = Review.find(id: params[:id])
        if @review.destroy
        else
            render json: ["Couldn't remove review"], status: 422 
        end
    end

    private 
    def review_params
        params.require(:review).permit(:user_id, :book_id, :rating, :body)
    end
end
