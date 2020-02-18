class ReservationsController < ApplicationController
  before_action :set_hotel
  before_action :set_hotel_reservation, only: [:show, :update, :destroy]

  def index
    json_response(@hotel.reservations)
  end

  def show
    json_response(@reservation)
  end

  def create
    @hotel.reservations.create!(reservation_params)
    json_response(status: "SUCCESS", message: 'reservation created successfully.')

  end

  def update
    @reservation.update(reservation_params)
    json_response(status: 'SUCCESS', message: 'reservation updated successfully.')
  end

  def destroy
    @reservation.destroy
    json_response(status: 'SUCCESS', message: 'reservation deleted successfully.')
  end

  private

  def reservation_params
    params.permit(:reservation_desc, :room_type, :guest_no, :start_date, :end_date)
    
  end

  def set_hotel
    @hotel = Hotel.find(params[:hotel_id])
  end

  def set_hotel_reservation
    @reservation = @hotel.reservations.find_by!(id: params[:id]) if @hotel
  end
end
