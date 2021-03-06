class HotelsController < ApplicationController
  before_action :set_hotel, only: [:show, :update, :destroy]
  # before_action :authorize_request, except: :index
  skip_before_action :authorize_request, only: [:index]

  def index
    # if you want all the hotels to show up for ALL users, change line 6 vs 7
    @hotels = Hotel.all
    # @hotels = current_user.hotels
    json_response(@hotels)
  end

  def create
    @hotel = current_user.hotels.create!(hotel_params)
    json_response(@hotel, :created)
  end

  def show
    json_response(@hotel)
  end

  def update
    @hotel.update(hotel_params)
    json_response(status: 'SUCCESS', message: 'updated the hotel')
  end

  def destroy
    @hotel.destroy
    json_response(status: 'SUCCESS', message: 'deleted the hotel')

  end

  private

  def hotel_params
    # whitelist params
    params.permit(:hotel_name, :city, :state, :zip_code, :img_url )
  end

  def set_hotel
    @hotel = Hotel.find(params[:id])
  end
end
