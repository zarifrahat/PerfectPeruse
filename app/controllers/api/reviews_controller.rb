class Api::ReviewsController < ApplicationController
    def index
        @all_reviews = Review.where(book_id: params[:book_id])
        render :index
    end

    def create
        @new_review = Review.new(review_params)
        if @new_review.save
            
        else
            render json: ["Couldn't create your review!"], status: 422 
        end

    end

    def update
        @updated_review = Review.find(id: params[:id])
        if @updated_review.update(review_params)
            
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
        params.require(:bookToShelf).permit(:user_id, :book_id, :rating, :body)
    end
end
